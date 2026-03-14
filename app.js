// ===== ISTQB CTFL Study App =====

let state = {
  currentPage: 'home',
  currentChapter: 1,
  quiz: {
    questions: [],
    current: 0,
    score: 0,
    answers: [],
    answered: false,
    mode: 'practice', // practice | exam
    chapterFilter: 0,
    selectedMulti: [],
  },
  flashcard: {
    cards: [],
    current: 0,
    flipped: false,
  },
  progress: JSON.parse(localStorage.getItem('istqb_progress') || '{}'),
  daily: JSON.parse(localStorage.getItem('istqb_daily') || '{}'),
};

// ===== NAVIGATION =====
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.getElementById('nav-' + page)?.classList.add('active');
  state.currentPage = page;
  window.scrollTo(0, 0);

  if (page === 'syllabus') renderSyllabus();
  if (page === 'quiz') renderQuizSetup();
  if (page === 'flashcards') renderFlashcards();
  if (page === 'reference') renderReference();
  if (page === 'progress') renderProgressPage();
}

// ===== HOME PAGE =====
function renderHome() {
  const chapterGrid = document.getElementById('home-chapters');
  chapterGrid.innerHTML = SYLLABUS.chapters.map(ch => `
    <div class="chapter-card" onclick="navigate('syllabus'); setTimeout(() => selectChapter(${ch.id}), 100)"
         style="border-left-color: ${ch.color}">
      <div class="chapter-header">
        <span class="chapter-num" style="color:${ch.color}">Chapter ${ch.id}</span>
        <span class="chapter-badge" style="background:${ch.color}22; color:${ch.color}">
          ${ch.examQuestions} Q's
        </span>
      </div>
      <h3>${ch.title}</h3>
      <div class="chapter-meta">
        <span>⏱ ${ch.duration}</span>
        <span>📋 ${ch.learningObjectives.length} LOs</span>
        <span>📂 ${ch.sections.length} sections</span>
      </div>
    </div>
  `).join('');
}

// ===== SYLLABUS PAGE =====
function renderSyllabus() {
  renderChapterTabs();
  renderChapterContent(state.currentChapter);
}

function renderChapterTabs() {
  const tabs = document.getElementById('chapter-tabs');
  tabs.innerHTML = SYLLABUS.chapters.map(ch => `
    <button class="chapter-tab ${ch.id === state.currentChapter ? 'active' : ''}"
            onclick="selectChapter(${ch.id})"
            style="${ch.id === state.currentChapter ? `background:${ch.color}; border-color:${ch.color}` : ''}">
      Ch ${ch.id}
    </button>
  `).join('');
}

function selectChapter(id) {
  state.currentChapter = id;
  renderChapterTabs();
  renderChapterContent(id);
}

function renderChapterContent(id) {
  const ch = SYLLABUS.chapters.find(c => c.id === id);
  const container = document.getElementById('chapter-content');

  container.innerHTML = `
    <div class="card" style="border-top: 4px solid ${ch.color}; margin-bottom: 24px">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px">
        <div>
          <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:${ch.color}; margin-bottom:4px">
            Chapter ${ch.id} · ${ch.duration} · ${ch.examQuestions} exam questions
          </div>
          <h2 style="font-size:24px; font-weight:800">${ch.title}</h2>
        </div>
        <button class="btn btn-primary btn-sm" onclick="startQuizChapter(${ch.id})">
          Practice Ch ${ch.id} Questions →
        </button>
      </div>
    </div>

    <div style="margin-bottom:24px">
      ${ch.sections.map((sec, i) => `
        <div class="section-content" style="margin-bottom:12px">
          <div class="section-header" onclick="toggleSection(this)" data-open="${i === 0}">
            <span>${sec.id} — ${sec.title}</span>
            <span style="transition:transform 0.2s; transform: ${i === 0 ? 'rotate(180deg)' : 'rotate(0deg)'}">▼</span>
          </div>
          <div class="section-body ${i === 0 ? 'open' : ''}">
            ${sec.content}
            <div class="key-terms">
              <div class="key-terms-title">Key Terms</div>
              ${sec.keyTerms.map(t => `<span class="term-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="card">
      <h3 style="font-size:18px; font-weight:700; margin-bottom:16px">Learning Objectives</h3>
      <table class="lo-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Level</th>
            <th>Learning Objective</th>
          </tr>
        </thead>
        <tbody>
          ${ch.learningObjectives.map(lo => `
            <tr>
              <td><code style="font-size:12px; background:#f1f5f9; padding:2px 6px; border-radius:4px">${lo.code}</code></td>
              <td><span class="k-badge ${lo.level.toLowerCase()}">${lo.level}</span></td>
              <td>${lo.text}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  // open first section
  const firstHeader = container.querySelector('.section-header');
  if (firstHeader) firstHeader.setAttribute('data-open', 'true');
}

function toggleSection(header) {
  const body = header.nextElementSibling;
  const arrow = header.querySelector('span:last-child');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  header.classList.toggle('open', !isOpen);
  arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

// ===== QUIZ PAGE =====
function renderQuizSetup() {
  document.getElementById('quiz-area').innerHTML = `
    <div class="card" style="text-align:center; padding:40px">
      <div style="font-size:48px; margin-bottom:16px">📝</div>
      <h2 style="font-size:24px; font-weight:800; margin-bottom:8px">Practice Quiz</h2>
      <p style="color:var(--text-muted); margin-bottom:32px">Configure your quiz session below</p>

      <div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-bottom:32px">
        <div style="text-align:left">
          <label style="font-size:13px; font-weight:600; display:block; margin-bottom:6px">Chapter Filter</label>
          <select id="quiz-chapter" style="padding:10px 14px; border:2px solid var(--border); border-radius:8px; font-size:14px; min-width:200px">
            <option value="0">All Chapters</option>
            ${SYLLABUS.chapters.map(ch => `<option value="${ch.id}">Chapter ${ch.id}: ${ch.title.substring(0,28)}...</option>`).join('')}
          </select>
        </div>
        <div style="text-align:left">
          <label style="font-size:13px; font-weight:600; display:block; margin-bottom:6px">Mode</label>
          <select id="quiz-mode" style="padding:10px 14px; border:2px solid var(--border); border-radius:8px; font-size:14px; min-width:160px">
            <option value="practice">Practice (with hints)</option>
            <option value="exam">Exam Simulation</option>
          </select>
        </div>
        <div style="text-align:left">
          <label style="font-size:13px; font-weight:600; display:block; margin-bottom:6px">Questions</label>
          <select id="quiz-count" style="padding:10px 14px; border:2px solid var(--border); border-radius:8px; font-size:14px; min-width:140px">
            <option value="10">10 questions</option>
            <option value="20">20 questions</option>
            <option value="40">40 questions (Full)</option>
            <option value="all">All available</option>
          </select>
        </div>
      </div>

      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap">
        <button class="btn btn-primary" onclick="startQuiz()" style="font-size:16px; padding:14px 32px">
          Start Quiz →
        </button>
        <button class="btn btn-outline" onclick="startExamSimulation()" style="font-size:16px; padding:14px 32px">
          Full Exam Simulation (40Q / 60min)
        </button>
      </div>
    </div>
  `;
}

function startQuizChapter(chapterId) {
  navigate('quiz');
  setTimeout(() => {
    document.getElementById('quiz-chapter').value = chapterId;
    document.getElementById('quiz-count').value = 'all';
    startQuiz();
  }, 150);
}

function startExamSimulation() {
  const questions = shuffleArray([...QUESTIONS]).slice(0, 40);
  initQuiz(questions, 'exam');
}

function startQuiz() {
  const chapterId = parseInt(document.getElementById('quiz-chapter').value);
  const mode = document.getElementById('quiz-mode').value;
  const countVal = document.getElementById('quiz-count').value;

  let pool = chapterId ? QUESTIONS.filter(q => q.chapter === chapterId) : [...QUESTIONS];
  pool = shuffleArray(pool);

  if (countVal !== 'all') {
    const n = parseInt(countVal);
    pool = pool.slice(0, Math.min(n, pool.length));
  }

  if (pool.length === 0) {
    showToast('No questions available for selected filter.');
    return;
  }

  initQuiz(pool, mode);
}

function initQuiz(questions, mode) {
  state.quiz = {
    questions,
    current: 0,
    score: 0,
    answers: [],
    answered: false,
    mode,
    selectedMulti: [],
    startTime: Date.now(),
    timer: null,
  };

  if (mode === 'exam') {
    startExamTimer();
  }

  renderQuestion();
}

function startExamTimer() {
  const totalSeconds = 60 * 60; // 60 minutes
  let remaining = totalSeconds;
  state.quiz.timer = setInterval(() => {
    remaining--;
    const timerEl = document.getElementById('exam-timer');
    if (timerEl) {
      const mins = Math.floor(remaining / 60);
      const secs = remaining % 60;
      timerEl.textContent = `⏱ ${mins}:${secs.toString().padStart(2, '0')}`;
      if (remaining <= 300) timerEl.style.color = 'var(--danger)';
    }
    if (remaining <= 0) {
      clearInterval(state.quiz.timer);
      endQuiz();
    }
  }, 1000);
}

function renderQuestion() {
  const { questions, current, score, mode, selectedMulti } = state.quiz;
  if (current >= questions.length) { endQuiz(); return; }

  const q = questions[current];
  const isMulti = q.multiAnswer;
  const ch = SYLLABUS.chapters.find(c => c.id === q.chapter);
  const progress = ((current) / questions.length) * 100;
  const incorrect = current - score - (state.quiz.answers.filter(a => a === false).length - (current - state.quiz.answers.length));

  document.getElementById('quiz-area').innerHTML = `
    ${mode === 'exam' ? `<div style="text-align:right; font-weight:700; margin-bottom:12px; font-size:16px" id="exam-timer">⏱ 60:00</div>` : ''}

    <div class="quiz-card">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${progress}%"></div>
      </div>

      <div class="quiz-meta">
        <span style="font-weight:600">Question ${current + 1} / ${questions.length}</span>
        <div class="quiz-meta-badges">
          <span class="badge badge-chapter" style="background:${ch.color}22; color:${ch.color}">Ch ${q.chapter}</span>
          <span class="badge badge-lo">${q.lo}</span>
          <span class="badge k-badge ${q.level.toLowerCase()}">${q.level}</span>
        </div>
      </div>

      ${isMulti ? `<div class="multi-hint">ℹ️ This question has multiple correct answers — select ALL that apply</div>` : ''}

      <div class="question-text">${q.question}</div>

      <div class="options-list" id="options-list">
        ${q.options.map((opt, i) => `
          <button class="option-btn ${isMulti && selectedMulti.includes(i) ? 'selected-multi' : ''}"
                  id="opt-${i}"
                  onclick="${isMulti ? `toggleMultiOption(${i})` : `selectOption(${i})`}"
                  ${state.quiz.answered ? 'disabled' : ''}>
            <span class="option-letter">${String.fromCharCode(65+i)}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>

      ${isMulti && !state.quiz.answered ? `
        <button class="btn btn-primary btn-sm" onclick="submitMulti()" style="margin-bottom:16px">
          Submit Answer
        </button>
      ` : ''}

      <div id="explanation" class="explanation-box"></div>

      <div class="quiz-nav">
        <div class="score-tracker">
          <span class="score-item score-correct">✓ ${score}</span>
          <span class="score-item score-incorrect">✗ ${state.quiz.answers.filter(a => a === false).length}</span>
        </div>
        <div style="display:flex; gap:8px">
          ${state.quiz.answered ? `
            <button class="btn btn-primary" onclick="nextQuestion()">
              ${current + 1 >= questions.length ? 'See Results' : 'Next →'}
            </button>
          ` : ''}
          ${mode === 'practice' && !state.quiz.answered ? `
            <button class="btn btn-outline btn-sm" onclick="showHint()">💡 Show Answer</button>
          ` : ''}
          <button class="btn btn-outline btn-sm" onclick="if(confirm('End quiz?')) endQuiz()">End</button>
        </div>
      </div>
    </div>
  `;
}

function selectOption(optIndex) {
  if (state.quiz.answered) return;
  const q = state.quiz.questions[state.quiz.current];
  const correct = q.answer;
  const isCorrect = optIndex === correct;

  state.quiz.answered = true;
  state.quiz.answers.push(isCorrect);
  if (isCorrect) state.quiz.score++;

  // Update progress
  saveProgress(q.chapter, isCorrect, q.id);

  // Highlight
  q.options.forEach((_, i) => {
    const btn = document.getElementById(`opt-${i}`);
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === optIndex && !isCorrect) btn.classList.add('incorrect');
  });

  // Show explanation
  showExplanation(isCorrect, q.explanation);

  // Re-render nav
  const navBtn = document.createElement('div');
  navBtn.innerHTML = `<button class="btn btn-primary" onclick="nextQuestion()" style="margin-top:12px">
    ${state.quiz.current + 1 >= state.quiz.questions.length ? 'See Results' : 'Next →'}
  </button>`;
  document.querySelector('.quiz-nav div:last-child').innerHTML = `
    <button class="btn btn-primary" onclick="nextQuestion()">
      ${state.quiz.current + 1 >= state.quiz.questions.length ? 'See Results' : 'Next →'}
    </button>
    <button class="btn btn-outline btn-sm" onclick="if(confirm('End quiz?')) endQuiz()">End</button>
  `;
}

function toggleMultiOption(i) {
  if (state.quiz.answered) return;
  const idx = state.quiz.selectedMulti.indexOf(i);
  if (idx === -1) state.quiz.selectedMulti.push(i);
  else state.quiz.selectedMulti.splice(idx, 1);
  document.getElementById(`opt-${i}`).classList.toggle('selected-multi');
  document.getElementById(`opt-${i}`).querySelector('.option-letter').style.background =
    state.quiz.selectedMulti.includes(i) ? 'var(--primary)' : '';
  document.getElementById(`opt-${i}`).querySelector('.option-letter').style.color =
    state.quiz.selectedMulti.includes(i) ? 'white' : '';
}

function submitMulti() {
  if (state.quiz.answered) return;
  const q = state.quiz.questions[state.quiz.current];
  const correct = q.answer.sort().join(',');
  const selected = [...state.quiz.selectedMulti].sort().join(',');
  const isCorrect = correct === selected;

  state.quiz.answered = true;
  state.quiz.answers.push(isCorrect);
  if (isCorrect) state.quiz.score++;

  saveProgress(q.chapter, isCorrect, q.id);

  q.options.forEach((_, i) => {
    const btn = document.getElementById(`opt-${i}`);
    btn.disabled = true;
    if (q.answer.includes(i)) btn.classList.add('correct');
    else if (state.quiz.selectedMulti.includes(i)) btn.classList.add('incorrect');
  });

  showExplanation(isCorrect, q.explanation);

  document.querySelector('.quiz-nav div:last-child').innerHTML = `
    <button class="btn btn-primary" onclick="nextQuestion()">
      ${state.quiz.current + 1 >= state.quiz.questions.length ? 'See Results' : 'Next →'}
    </button>
    <button class="btn btn-outline btn-sm" onclick="if(confirm('End quiz?')) endQuiz()">End</button>
  `;
}

function showExplanation(isCorrect, text) {
  const box = document.getElementById('explanation');
  box.className = `explanation-box ${isCorrect ? '' : 'incorrect-bg'}`;
  box.style.display = 'block';
  box.innerHTML = `
    <div class="exp-label">${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</div>
    <div>${text}</div>
  `;
}

function showHint() {
  const q = state.quiz.questions[state.quiz.current];
  const answerLetter = Array.isArray(q.answer)
    ? q.answer.map(i => String.fromCharCode(65+i)).join(' and ')
    : String.fromCharCode(65 + q.answer);
  showExplanation(false, `Correct answer: <strong>${answerLetter}</strong><br>${q.explanation}`);
  state.quiz.answered = true;
  state.quiz.answers.push(false);
  saveProgress(q.chapter, false, q.id);

  q.options.forEach((_, i) => {
    const btn = document.getElementById(`opt-${i}`);
    btn.disabled = true;
    if (Array.isArray(q.answer) ? q.answer.includes(i) : i === q.answer) btn.classList.add('correct');
  });

  document.querySelector('.quiz-nav div:last-child').innerHTML = `
    <button class="btn btn-primary" onclick="nextQuestion()">
      ${state.quiz.current + 1 >= state.quiz.questions.length ? 'See Results' : 'Next →'}
    </button>
    <button class="btn btn-outline btn-sm" onclick="if(confirm('End quiz?')) endQuiz()">End</button>
  `;
}

function nextQuestion() {
  state.quiz.current++;
  state.quiz.answered = false;
  state.quiz.selectedMulti = [];
  if (state.quiz.current >= state.quiz.questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
}

function endQuiz() {
  if (state.quiz.timer) clearInterval(state.quiz.timer);
  const { score, questions, answers, mode, startTime } = state.quiz;
  const total = answers.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = pct >= 65;
  const timeTaken = Math.round((Date.now() - startTime) / 1000 / 60);
  if (timeTaken > 0) saveDailyTime(timeTaken);

  document.getElementById('quiz-area').innerHTML = `
    <div class="quiz-card results-card">
      <div class="results-score ${passed ? 'results-pass' : 'results-fail'}">${pct}%</div>
      <div class="results-message">${passed ? '🎉 You Passed!' : '📚 Keep Studying'}</div>
      <div class="results-detail">
        ${score} correct out of ${total} questions answered · ${timeTaken} minute${timeTaken !== 1 ? 's' : ''}
        ${mode === 'exam' ? '<br>Passing score: 65% (26/40)' : ''}
      </div>

      <div class="results-breakdown">
        <div class="result-stat">
          <div class="num" style="color:var(--success)">${score}</div>
          <div class="lbl">Correct</div>
        </div>
        <div class="result-stat">
          <div class="num" style="color:var(--danger)">${total - score}</div>
          <div class="lbl">Incorrect</div>
        </div>
        <div class="result-stat">
          <div class="num">${questions.length - total}</div>
          <div class="lbl">Skipped</div>
        </div>
        <div class="result-stat">
          <div class="num" style="color:${passed ? 'var(--success)' : 'var(--danger)'}">${pct}%</div>
          <div class="lbl">Score</div>
        </div>
      </div>

      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-top:24px">
        <button class="btn btn-primary" onclick="renderQuizSetup()">Try Again</button>
        <button class="btn btn-outline" onclick="navigate('syllabus')">Review Syllabus</button>
        <button class="btn btn-outline" onclick="navigate('progress')">View Progress</button>
      </div>
    </div>
  `;
}

// ===== FLASHCARDS =====
function renderFlashcards() {
  const principles = [
    { front: "Principle 1", back: "Testing shows the PRESENCE of defects, not their absence\n\nTesting can show defects exist, but cannot prove there are none." },
    { front: "Principle 2", back: "EXHAUSTIVE testing is impossible\n\nTesting everything is infeasible. Use risk analysis and priorities to focus effort." },
    { front: "Principle 3", back: "EARLY testing saves time and money (Shift-Left)\n\nFinding defects early in SDLC is cheaper than finding them later." },
    { front: "Principle 4", back: "DEFECTS CLUSTER together (Pareto Principle)\n\nSmall number of modules contain most defects. Focus testing effort there." },
    { front: "Principle 5", back: "Tests WEAR OUT (Pesticide Paradox)\n\nRunning same tests repeatedly stops finding new defects. Update tests regularly." },
    { front: "Principle 6", back: "Testing is CONTEXT-DEPENDENT\n\nTesting a medical device differs from testing a mobile app. Context determines approach." },
    { front: "Principle 7", back: "ABSENCE-OF-ERRORS fallacy\n\nEven a defect-free system can fail if it doesn't meet actual user needs." },
    { front: "Error vs Defect vs Failure", back: "ERROR → human mistake (e.g., misunderstood requirement)\nDEFECT → flaw in code/document caused by error\nFAILURE → observable wrong behavior when defect is executed" },
    { front: "Testing vs QA", back: "TESTING = product-oriented (finding defects in the product)\nQA = process-oriented (improving the development process)\nBoth contribute to quality, but are different activities." },
    { front: "Review Types (order of formality)", back: "1. Informal Review (least formal)\n2. Walkthrough (author-led)\n3. Technical Review (moderator-led, peer review)\n4. Inspection (most formal, moderator ≠ author, metrics)" },
    { front: "BVA: 2-value vs 3-value", back: "2-value BVA: test MIN and MAX of each partition\n\n3-value BVA: test MIN-1, MIN, MAX, MAX+1 of each partition\n\nFor range 1-100:\n2-value: {1, 100}\n3-value: {0, 1, 2, 99, 100, 101}" },
    { front: "Three-Point Estimation Formula", back: "E = (O + 4M + P) / 6\n\nO = Optimistic estimate\nM = Most likely estimate\nP = Pessimistic estimate\n\nExample: O=2, M=10, P=12\nE = (2 + 40 + 12) / 6 = 9" },
    { front: "Testing Quadrants", back: "Q1: Tech-facing, team support → Unit/Component tests (AUTOMATE)\nQ2: Business-facing, team support → Functional tests (AUTOMATE+MANUAL)\nQ3: Business-facing, critique → Exploratory, Usability (MANUAL)\nQ4: Tech-facing, critique → Performance, Security (TOOLS)" },
    { front: "Entry vs Exit Criteria", back: "ENTRY CRITERIA (before testing starts):\n• Environment ready\n• Test data available\n• Build meets quality threshold\n\nEXIT CRITERIA (when to stop):\n• Coverage targets met\n• Defect density threshold reached\n• All planned tests executed" },
    { front: "TDD vs ATDD vs BDD", back: "TDD: Unit tests before code → developer-focused\nATDD: Acceptance tests from user stories before dev → team-focused\nBDD: Tests in Given/When/Then language → business-readable, bridges communication" },
    { front: "Product Risk vs Project Risk", back: "PRODUCT RISK: threatens software quality\n(e.g., incorrect calculations, security vulnerabilities)\n\nPROJECT RISK: threatens test project schedule/budget\n(e.g., key tester leaving, environment unavailable)" },
    { front: "Defect Report: Critical Fields", back: "• Unique ID & Title\n• Date & Reporter\n• Test Object + VERSION\n• Test ENVIRONMENT (OS, browser, build)\n• Steps to Reproduce\n• Expected Result\n• Actual Result\n• Severity & Priority\n• Status & References" },
    { front: "Statement vs Branch Coverage", back: "STATEMENT: execute every statement ≥ once\nBRANCH: exercise every branch (true/false) ≥ once\n\nKey: Branch coverage SUBSUMES statement coverage\n100% branch coverage → 100% statement coverage\n(not vice versa)" },
    { front: "EP Coverage Formula", back: "EP = Equivalence Partitioning\n\n100% EP coverage = each partition tested at least once\n(1 test per partition)\n\nAlways have VALID partitions AND INVALID partitions\nTest one value from each partition" },
    { front: "Confirmation vs Regression Testing", back: "CONFIRMATION: re-test the FIXED defect to confirm fix works\n\nREGRESSION: re-test UNCHANGED areas to ensure fix didn't break something else\n\nBoth happen after a change is made to the system" },
  ];

  state.flashcard.cards = principles;
  state.flashcard.current = 0;
  state.flashcard.flipped = false;

  renderFlashcard();
}

function renderFlashcard() {
  const { cards, current } = state.flashcard;
  const card = cards[current];

  document.getElementById('flashcard-area').innerHTML = `
    <div style="margin-bottom:16px; text-align:center; color:var(--text-muted); font-size:14px">
      ${current + 1} / ${cards.length} — Click card to flip
    </div>

    <div class="flashcard-container">
      <div class="flashcard" id="flashcard" onclick="flipCard()">
        <div class="flashcard-face flashcard-front">
          <div>
            <h3>${card.front}</h3>
            <p style="margin-top:12px; opacity:0.7">Click to see the answer</p>
          </div>
        </div>
        <div class="flashcard-face flashcard-back">
          <div class="flashcard-back-content" style="white-space:pre-wrap">${card.back}</div>
          <div class="flip-hint">Click to flip back</div>
        </div>
      </div>
    </div>

    <div class="flashcard-nav">
      <button class="btn btn-outline" onclick="prevCard()" ${current === 0 ? 'disabled' : ''}>← Prev</button>
      <div style="display:flex; gap:6px">
        ${cards.map((_, i) => `
          <div style="width:8px; height:8px; border-radius:50%; background:${i === current ? 'var(--primary)' : 'var(--border)'}; cursor:pointer; transition:background 0.2s"
               onclick="goToCard(${i})"></div>
        `).join('')}
      </div>
      <button class="btn btn-outline" onclick="nextCard()" ${current === cards.length - 1 ? 'disabled' : ''}>Next →</button>
    </div>

    <div style="text-align:center; margin-top:16px">
      <button class="btn btn-outline btn-sm" onclick="shuffleCards()">🔀 Shuffle</button>
    </div>
  `;
}

function flipCard() {
  state.flashcard.flipped = !state.flashcard.flipped;
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  if (state.flashcard.current < state.flashcard.cards.length - 1) {
    state.flashcard.current++;
    state.flashcard.flipped = false;
    renderFlashcard();
  }
}

function prevCard() {
  if (state.flashcard.current > 0) {
    state.flashcard.current--;
    state.flashcard.flipped = false;
    renderFlashcard();
  }
}

function goToCard(i) {
  state.flashcard.current = i;
  state.flashcard.flipped = false;
  renderFlashcard();
}

function shuffleCards() {
  state.flashcard.cards = shuffleArray(state.flashcard.cards);
  state.flashcard.current = 0;
  state.flashcard.flipped = false;
  renderFlashcard();
  showToast('Cards shuffled!');
}

// ===== REFERENCE PAGE =====
function renderReference() {
  document.getElementById('reference-content').innerHTML = `
    <div class="card" style="margin-bottom:20px">
      <h3 style="font-size:20px; font-weight:800; margin-bottom:20px">The 7 Testing Principles</h3>
      ${[
        { num: 1, name: "Testing shows presence of defects, not their absence", desc: "Testing can show that defects exist, but cannot prove the system is defect-free. Even extensive testing is not a proof of correctness." },
        { num: 2, name: "Exhaustive testing is impossible", desc: "Testing every possible input, path, and combination is not feasible. Risk analysis and priorities are used to focus testing effort." },
        { num: 3, name: "Early testing saves time and money (Shift-Left)", desc: "Testing activities should start as early as possible in the SDLC. Finding defects in requirements costs far less than finding them in production." },
        { num: 4, name: "Defects cluster together (Pareto Principle)", desc: "A small number of modules or features tend to contain the majority of defects. This is used for risk-based test prioritization." },
        { num: 5, name: "Tests wear out (Pesticide Paradox)", desc: "Repeating the same tests over and over stops finding new defects. Tests must be regularly reviewed and updated to remain effective." },
        { num: 6, name: "Testing is context-dependent", desc: "Testing a safety-critical medical device requires a different approach than testing a social media app. Context (domain, risk, regulations) drives testing." },
        { num: 7, name: "Absence-of-errors fallacy", desc: "Finding and fixing defects doesn't guarantee the software meets user needs. A system can be built 'right' but still be the 'wrong thing' to build." }
      ].map(p => `
        <div class="principle-card">
          <div class="principle-num">Principle ${p.num}</div>
          <div class="principle-name">${p.name}</div>
          <div class="principle-desc">${p.desc}</div>
        </div>
      `).join('')}
    </div>

    <div class="card" style="margin-bottom:20px">
      <h3 style="font-size:20px; font-weight:800; margin-bottom:16px">Three-Point Estimation</h3>
      <div class="formula-box">
        <span class="formula-label">Formula (PERT / Three-Point)</span>
        E = (O + 4M + P) ÷ 6
      </div>
      <p style="margin-bottom:12px; color:var(--text-muted)">Where: <strong>O</strong> = Optimistic, <strong>M</strong> = Most Likely, <strong>P</strong> = Pessimistic</p>
      <div style="background:#f8fafc; padding:16px; border-radius:8px; font-size:14px">
        <strong>Example:</strong> O=2h, M=11h, P=14h → E = (2 + 44 + 14) / 6 = <strong>10 hours</strong>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <h3 style="font-size:20px; font-weight:800; margin-bottom:16px">Review Types Comparison</h3>
      <div style="overflow-x:auto">
        <table class="review-table">
          <thead>
            <tr>
              <th>Review Type</th>
              <th>Formality</th>
              <th>Led By</th>
              <th>Scribe</th>
              <th>Individual Prep</th>
              <th>Review Report</th>
              <th>Metrics</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Informal</strong></td><td>Lowest</td><td>Anyone</td><td>Optional</td><td>No</td><td>No</td><td>No</td></tr>
            <tr><td><strong>Walkthrough</strong></td><td>Low</td><td>Author</td><td>Yes</td><td>Optional</td><td>Yes</td><td>No</td></tr>
            <tr><td><strong>Technical Review</strong></td><td>Medium</td><td>Moderator</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Optional</td></tr>
            <tr><td><strong>Inspection</strong></td><td>Highest</td><td>Moderator (≠Author)</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <h3 style="font-size:20px; font-weight:800; margin-bottom:16px">Testing Quadrants (Brian Marick)</h3>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:2px; border:2px solid var(--border); border-radius:12px; overflow:hidden; max-width:640px; margin:0 auto">
        ${[
          { label: "Q2", title: "Business-facing", sub: "Support the Team", tests: "Functional tests, User stories, Prototypes, Simulations", color: "#0891b2", auto: "Automate + Manual" },
          { label: "Q3", title: "Business-facing", sub: "Critique the Product", tests: "Exploratory, Usability, User Acceptance Testing", color: "#059669", auto: "Manual" },
          { label: "Q1", title: "Technology-facing", sub: "Support the Team", tests: "Unit tests, Component tests", color: "#4f46e5", auto: "Automate" },
          { label: "Q4", title: "Technology-facing", sub: "Critique the Product", tests: "Performance, Security, Load, Stress, Compatibility", color: "#dc2626", auto: "Tools" },
        ].map(q => `
          <div style="background:${q.color}11; padding:20px; border:1px solid ${q.color}33">
            <div style="font-size:12px; font-weight:800; color:${q.color}; margin-bottom:4px">${q.label} — ${q.title}</div>
            <div style="font-size:13px; font-weight:600; margin-bottom:8px">${q.sub}</div>
            <div style="font-size:12px; color:var(--text-muted); margin-bottom:6px">${q.tests}</div>
            <span style="background:${q.color}; color:white; font-size:11px; padding:2px 8px; border-radius:4px; font-weight:600">${q.auto}</span>
          </div>
        `).join('')}
      </div>
      <p style="text-align:center; color:var(--text-muted); font-size:12px; margin-top:8px">Top row = Business-facing | Bottom row = Technology-facing | Left = Support team | Right = Critique product</p>
    </div>

    <div class="card" style="margin-bottom:20px">
      <h3 style="font-size:20px; font-weight:800; margin-bottom:16px">Test Levels Quick Reference</h3>
      <div style="display:grid; gap:12px">
        ${[
          { level: "Component (Unit)", scope: "Individual components in isolation", who: "Developers", focus: "Logic, algorithms", technique: "White-box" },
          { level: "Component Integration", scope: "Interactions between components", who: "Dev/Test team", focus: "Interfaces, data flow", technique: "Grey-box" },
          { level: "System", scope: "Complete system end-to-end", who: "Independent testers", focus: "Requirements, workflows", technique: "Black-box" },
          { level: "System Integration", scope: "Interactions between systems/APIs", who: "Test team", focus: "External services, APIs", technique: "Black-box" },
          { level: "Acceptance (UAT)", scope: "Business needs validation", who: "Users/Customers", focus: "Business value", technique: "Black-box" },
        ].map(l => `
          <div style="background:#f8fafc; padding:14px 18px; border-radius:8px; border:1px solid var(--border); display:flex; gap:16px; flex-wrap:wrap; align-items:center">
            <div style="min-width:200px">
              <div style="font-weight:700; font-size:14px">${l.level}</div>
              <div style="font-size:12px; color:var(--text-muted)">${l.scope}</div>
            </div>
            <div style="font-size:13px; display:flex; gap:16px; flex-wrap:wrap">
              <span>👤 <strong>${l.who}</strong></span>
              <span>🎯 ${l.focus}</span>
              <span>🔍 ${l.technique}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="card">
      <h3 style="font-size:20px; font-weight:800; margin-bottom:16px">Exam Quick Facts</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px,1fr)); gap:16px">
        ${[
          { icon: "❓", label: "Total Questions", value: "40" },
          { icon: "✅", label: "Passing Score", value: "65% (26/40)" },
          { icon: "⏱", label: "Time Limit", value: "60 min (75 for non-native)" },
          { icon: "📖", label: "Question Format", value: "Multiple choice, closed book" },
          { icon: "📋", label: "Syllabus Version", value: "v4.0 (since May 2024)" },
          { icon: "🏆", label: "Hardest Chapter", value: "Ch4: 11 questions (27.5%)" },
        ].map(f => `
          <div style="background:#f8fafc; padding:16px; border-radius:10px; border:1px solid var(--border); text-align:center">
            <div style="font-size:28px; margin-bottom:8px">${f.icon}</div>
            <div style="font-size:12px; color:var(--text-muted); text-transform:uppercase; font-weight:600">${f.label}</div>
            <div style="font-size:18px; font-weight:800; margin-top:4px">${f.value}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===== PROGRESS PAGE =====
function getStreak() {
  const dates = Object.keys(state.daily).sort();
  if (dates.length === 0) return 0;
  const today = new Date().toISOString().slice(0, 10);
  let streak = 0;
  let check = new Date(today);
  while (true) {
    const d = check.toISOString().slice(0, 10);
    if (state.daily[d] && state.daily[d].attempted > 0) {
      streak++;
      check.setDate(check.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

function renderProgressPage() {
  const p = state.progress;
  const container = document.getElementById('progress-content');

  const totalAttempted = Object.values(p).reduce((s, c) => s + (c.attempted || 0), 0);
  const totalCorrect = Object.values(p).reduce((s, c) => s + (c.correct || 0), 0);
  const overallPct = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  const today = new Date().toISOString().slice(0, 10);
  const todayData = state.daily[today] || { attempted: 0, correct: 0, minutes: 0 };
  const streak = getStreak();

  // Last 14 days for activity log
  const days = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ key, data: state.daily[key] || null, label: d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) });
  }
  const maxAttempted = Math.max(...days.map(d => d.data ? d.data.attempted : 0), 1);

  container.innerHTML = `
    <!-- Daily Overview Cards -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px,1fr)); gap:16px; margin-bottom:24px">
      <div class="card" style="text-align:center; padding:20px">
        <div style="font-size:40px; font-weight:900; color:${streak > 0 ? '#f59e0b' : 'var(--text-muted)'}">${streak}</div>
        <div style="font-size:13px; font-weight:600; color:var(--text-muted)">🔥 Day Streak</div>
      </div>
      <div class="card" style="text-align:center; padding:20px">
        <div style="font-size:40px; font-weight:900; color:var(--primary)">${todayData.attempted}</div>
        <div style="font-size:13px; font-weight:600; color:var(--text-muted)">Today's Questions</div>
      </div>
      <div class="card" style="text-align:center; padding:20px">
        <div style="font-size:40px; font-weight:900; color:var(--success)">${todayData.attempted ? Math.round((todayData.correct / todayData.attempted) * 100) : 0}%</div>
        <div style="font-size:13px; font-weight:600; color:var(--text-muted)">Today's Accuracy</div>
      </div>
      <div class="card" style="text-align:center; padding:20px">
        <div style="font-size:40px; font-weight:900; color:#7c3aed">${todayData.minutes || 0}</div>
        <div style="font-size:13px; font-weight:600; color:var(--text-muted)">Min Studied Today</div>
      </div>
    </div>

    <!-- 14-Day Activity Chart -->
    <div class="card" style="margin-bottom:24px">
      <h3 style="font-size:18px; font-weight:700; margin-bottom:16px">📅 Last 14 Days Activity</h3>
      <div style="display:flex; align-items:flex-end; gap:6px; height:80px; padding-bottom:4px">
        ${days.map(d => {
          const h = d.data ? Math.max(8, Math.round((d.data.attempted / maxAttempted) * 72)) : 0;
          const pct = d.data && d.data.attempted ? Math.round((d.data.correct / d.data.attempted) * 100) : 0;
          const color = !d.data ? 'var(--border)' : pct >= 65 ? 'var(--success)' : pct >= 40 ? '#f59e0b' : 'var(--danger)';
          const isToday = d.key === today;
          return `<div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px" title="${d.label}: ${d.data ? d.data.attempted + ' questions, ' + pct + '%' : 'No activity'}">
            <div style="width:100%; border-radius:4px 4px 0 0; background:${color}; height:${h}px; transition:height 0.3s; border: ${isToday ? '2px solid var(--primary)' : 'none'}"></div>
          </div>`;
        }).join('')}
      </div>
      <div style="display:flex; gap:6px; margin-top:6px">
        ${days.map(d => `
          <div style="flex:1; text-align:center; font-size:9px; color:${d.key === today ? 'var(--primary)' : 'var(--text-muted)'}; font-weight:${d.key === today ? '700' : '400'}">${d.label.split(' ')[0]}</div>
        `).join('')}
      </div>
      <div style="display:flex; gap:16px; margin-top:12px; font-size:12px; color:var(--text-muted)">
        <span><span style="display:inline-block;width:10px;height:10px;background:var(--success);border-radius:2px;margin-right:4px"></span>≥65%</span>
        <span><span style="display:inline-block;width:10px;height:10px;background:#f59e0b;border-radius:2px;margin-right:4px"></span>40-64%</span>
        <span><span style="display:inline-block;width:10px;height:10px;background:var(--danger);border-radius:2px;margin-right:4px"></span>&lt;40%</span>
        <span><span style="display:inline-block;width:10px;height:10px;background:var(--border);border-radius:2px;margin-right:4px"></span>No activity</span>
      </div>
    </div>

    <!-- Daily Log Table -->
    <div class="card" style="margin-bottom:24px">
      <h3 style="font-size:18px; font-weight:700; margin-bottom:16px">🗓 Daily Log</h3>
      ${Object.keys(state.daily).length === 0
        ? `<div style="text-align:center; color:var(--text-muted); padding:20px">No sessions yet — start a quiz to begin tracking!</div>`
        : `<div style="overflow-x:auto">
            <table class="lo-table">
              <thead><tr><th>Date</th><th>Questions</th><th>Correct</th><th>Accuracy</th><th>Time</th></tr></thead>
              <tbody>
                ${Object.keys(state.daily).sort().reverse().slice(0, 14).map(d => {
                  const row = state.daily[d];
                  const acc = row.attempted ? Math.round((row.correct / row.attempted) * 100) : 0;
                  const dateLabel = new Date(d).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
                  return `<tr>
                    <td style="font-weight:${d === today ? '700' : '400'}; color:${d === today ? 'var(--primary)' : 'inherit'}">${dateLabel}${d === today ? ' (Today)' : ''}</td>
                    <td>${row.attempted}</td>
                    <td>${row.correct}</td>
                    <td><span style="color:${acc >= 65 ? 'var(--success)' : acc >= 40 ? '#f59e0b' : 'var(--danger)'}; font-weight:700">${acc}%</span></td>
                    <td>${row.minutes > 0 ? row.minutes + ' min' : '—'}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>`
      }
    </div>

    <!-- Overall Score -->
    <div class="card" style="text-align:center; margin-bottom:24px">
      <div style="font-size:56px; font-weight:900; color:${overallPct >= 65 ? 'var(--success)' : 'var(--warning)'}">${overallPct}%</div>
      <div style="font-size:18px; font-weight:600; margin-bottom:4px">Overall Score</div>
      <div style="color:var(--text-muted)">${totalCorrect} correct out of ${totalAttempted} attempted</div>
      ${overallPct >= 65
        ? `<div style="color:var(--success); font-weight:600; margin-top:8px">🎉 You're at passing level!</div>`
        : `<div style="color:var(--warning); font-weight:600; margin-top:8px">Need ${65-overallPct}% more to reach passing score</div>`}
    </div>

    <div class="card">
      <h3 style="font-size:18px; font-weight:700; margin-bottom:20px">Progress by Chapter</h3>
      ${SYLLABUS.chapters.map(ch => {
        const cp = p[ch.id] || { attempted: 0, correct: 0 };
        const pct = cp.attempted ? Math.round((cp.correct / cp.attempted) * 100) : 0;
        return `
          <div style="margin-bottom:20px">
            <div class="chapter-progress">
              <span style="font-weight:600; font-size:14px">Ch ${ch.id}: ${ch.title}</span>
              <span style="font-weight:700; color:${pct >= 65 ? 'var(--success)' : 'var(--warning)'}; font-size:14px">
                ${cp.attempted ? `${pct}% (${cp.correct}/${cp.attempted})` : 'Not started'}
              </span>
            </div>
            <div class="progress-bar-wrapper">
              <div class="progress-bar-fill" style="width:${pct}%; background:${ch.color}"></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <div style="text-align:center; margin-top:20px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap">
      <button class="btn btn-danger btn-sm" onclick="if(confirm('Reset all progress?')) { localStorage.removeItem('istqb_progress'); state.progress={}; renderProgressPage(); showToast('Progress reset'); }">
        Reset Progress
      </button>
      <button class="btn btn-outline btn-sm" onclick="if(confirm('Reset daily log?')) { localStorage.removeItem('istqb_daily'); state.daily={}; renderProgressPage(); showToast('Daily log reset'); }">
        Reset Daily Log
      </button>
    </div>
  `;
}

// ===== SEARCH =====
function handleSearch(e) {
  const query = e.target.value.trim().toLowerCase();
  const results = document.getElementById('search-results');

  if (query.length < 2) {
    results.innerHTML = '';
    return;
  }

  const matches = [];

  // Search in questions
  QUESTIONS.forEach(q => {
    const text = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    if (text.includes(query)) {
      matches.push({
        type: 'question',
        title: q.question.substring(0, 80) + '...',
        desc: `Chapter ${q.chapter} · ${q.lo} · ${q.source}`,
        action: () => { navigate('quiz'); setTimeout(() => startQuizById(q.id), 100); }
      });
    }
  });

  // Search in syllabus
  SYLLABUS.chapters.forEach(ch => {
    ch.sections.forEach(sec => {
      if ((sec.title + ' ' + sec.content + ' ' + sec.keyTerms.join(' ')).toLowerCase().includes(query)) {
        matches.push({
          type: 'syllabus',
          title: `${sec.id} — ${sec.title}`,
          desc: `Chapter ${ch.id}: ${ch.title}`,
          action: () => { navigate('syllabus'); setTimeout(() => { selectChapter(ch.id); }, 100); }
        });
      }
    });
  });

  if (matches.length === 0) {
    results.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:20px">No results for "${query}"</div>`;
    return;
  }

  results.innerHTML = matches.slice(0, 10).map((m, i) => `
    <div class="search-result" onclick="searchActions[${i}]()">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px">
        <span class="badge ${m.type === 'question' ? 'badge-lo' : 'badge-chapter'}">${m.type}</span>
      </div>
      <h4>${highlightText(m.title, query)}</h4>
      <p>${m.desc}</p>
    </div>
  `).join('');

  window.searchActions = matches.slice(0, 10).map(m => m.action);
}

function highlightText(text, query) {
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

function startQuizById(id) {
  const q = QUESTIONS.find(q => q.id === id);
  if (q) initQuiz([q], 'practice');
}

// ===== UTILS =====
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function saveProgress(chapterId, correct, qId) {
  if (!state.progress[chapterId]) state.progress[chapterId] = { attempted: 0, correct: 0, seen: [] };
  state.progress[chapterId].attempted++;
  if (correct) state.progress[chapterId].correct++;
  if (!state.progress[chapterId].seen.includes(qId)) state.progress[chapterId].seen.push(qId);
  localStorage.setItem('istqb_progress', JSON.stringify(state.progress));

  // Daily tracking
  const today = new Date().toISOString().slice(0, 10);
  if (!state.daily[today]) state.daily[today] = { attempted: 0, correct: 0, minutes: 0 };
  state.daily[today].attempted++;
  if (correct) state.daily[today].correct++;
  localStorage.setItem('istqb_daily', JSON.stringify(state.daily));
}

function saveDailyTime(minutes) {
  const today = new Date().toISOString().slice(0, 10);
  if (!state.daily[today]) state.daily[today] = { attempted: 0, correct: 0, minutes: 0 };
  state.daily[today].minutes += minutes;
  localStorage.setItem('istqb_daily', JSON.stringify(state.daily));
}

function showToast(msg) {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderHome();

  // Scroll to top button
  const scrollBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 300);
  });

  // Show home by default
  navigate('home');
});
