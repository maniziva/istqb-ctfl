// ===== SUPABASE INTEGRATION =====
// Tables required (run in Supabase SQL editor):
//
// create table progress (
//   device_id text not null,
//   chapter_id integer not null,
//   attempted integer default 0,
//   correct integer default 0,
//   seen jsonb default '[]'::jsonb,
//   updated_at timestamptz default now(),
//   primary key (device_id, chapter_id)
// );
//
// create table daily_activity (
//   device_id text not null,
//   date date not null,
//   attempted integer default 0,
//   correct integer default 0,
//   minutes integer default 0,
//   primary key (device_id, date)
// );
//
// alter table progress enable row level security;
// alter table daily_activity enable row level security;
// create policy "public access" on progress for all using (true) with check (true);
// create policy "public access" on daily_activity for all using (true) with check (true);

let supabaseClient = null;
let deviceId = null;

async function initSupabase() {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Try anonymous auth; fall back to stored UUID if unavailable
    try {
      let { data: { session } } = await supabaseClient.auth.getSession();
      if (!session) {
        const { data } = await supabaseClient.auth.signInAnonymously();
        session = data?.session;
      }
      if (session?.user?.id) {
        deviceId = session.user.id;
      }
    } catch (authErr) {
      console.warn('Anonymous auth unavailable, using device UUID:', authErr);
    }

    if (!deviceId) {
      deviceId = localStorage.getItem('istqb_device_id') || crypto.randomUUID();
    }
    localStorage.setItem('istqb_device_id', deviceId);

    await loadFromSupabase();
  } catch (e) {
    console.warn('Supabase init failed, using localStorage:', e);
  }
}

async function loadFromSupabase() {
  if (!supabaseClient || !deviceId) return;

  try {
    const { data: progressRows } = await supabaseClient
      .from('progress')
      .select('*')
      .eq('device_id', deviceId);

    if (progressRows && progressRows.length > 0) {
      const remote = {};
      progressRows.forEach(row => {
        remote[row.chapter_id] = { attempted: row.attempted, correct: row.correct, seen: row.seen || [] };
      });
      state.progress = remote;
      localStorage.setItem('istqb_progress', JSON.stringify(state.progress));
    } else if (Object.keys(state.progress).length > 0) {
      await migrateProgressToSupabase();
    }

    const { data: dailyRows } = await supabaseClient
      .from('daily_activity')
      .select('*')
      .eq('device_id', deviceId);

    if (dailyRows && dailyRows.length > 0) {
      const remote = {};
      dailyRows.forEach(row => {
        remote[row.date] = { attempted: row.attempted, correct: row.correct, minutes: row.minutes };
      });
      state.daily = remote;
      localStorage.setItem('istqb_daily', JSON.stringify(state.daily));
    } else if (Object.keys(state.daily).length > 0) {
      await migrateDailyToSupabase();
    }
  } catch (e) {
    console.warn('Failed to load from Supabase:', e);
  }
}

async function migrateProgressToSupabase() {
  const rows = Object.entries(state.progress).map(([chapterId, data]) => ({
    device_id: deviceId,
    chapter_id: parseInt(chapterId),
    attempted: data.attempted,
    correct: data.correct,
    seen: data.seen,
  }));
  if (rows.length > 0) {
    await supabaseClient.from('progress').upsert(rows);
  }
}

async function migrateDailyToSupabase() {
  const rows = Object.entries(state.daily).map(([date, data]) => ({
    device_id: deviceId,
    date,
    attempted: data.attempted,
    correct: data.correct,
    minutes: data.minutes,
  }));
  if (rows.length > 0) {
    await supabaseClient.from('daily_activity').upsert(rows);
  }
}

async function syncProgressToSupabase(chapterId) {
  if (!supabaseClient || !deviceId) return;
  const data = state.progress[chapterId];
  if (!data) return;
  try {
    await supabaseClient.from('progress').upsert({
      device_id: deviceId,
      chapter_id: chapterId,
      attempted: data.attempted,
      correct: data.correct,
      seen: data.seen,
      updated_at: new Date().toISOString(),
    });
  } catch (e) {
    console.warn('Failed to sync progress:', e);
  }
}

async function syncDailyToSupabase(date) {
  if (!supabaseClient || !deviceId) return;
  const data = state.daily[date];
  if (!data) return;
  try {
    await supabaseClient.from('daily_activity').upsert({
      device_id: deviceId,
      date,
      attempted: data.attempted,
      correct: data.correct,
      minutes: data.minutes,
    });
  } catch (e) {
    console.warn('Failed to sync daily:', e);
  }
}

async function resetSupabaseProgress() {
  if (!supabaseClient || !deviceId) return;
  try {
    await supabaseClient.from('progress').delete().eq('device_id', deviceId);
  } catch (e) {
    console.warn('Failed to reset Supabase progress:', e);
  }
}

async function resetSupabaseDaily() {
  if (!supabaseClient || !deviceId) return;
  try {
    await supabaseClient.from('daily_activity').delete().eq('device_id', deviceId);
  } catch (e) {
    console.warn('Failed to reset Supabase daily:', e);
  }
}
