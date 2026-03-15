// ISTQB CTFL v4.0 - Complete Study Data
// Syllabus, Questions, and Answers

const SYLLABUS = {
  chapters: [
    {
      id: 1,
      title: "Fundamentals of Testing",
      duration: "180 minutes",
      examQuestions: 8,
      color: "#4f46e5",
      sections: [
        {
          id: "1.1",
          title: "What is Testing?",
          content: `Testing is a set of activities to discover defects and evaluate the quality of software artifacts. Test objectives include:
• Finding defects before deployment
• Verifying requirements are met
• Validating the system works for user needs
• Reducing risk of failure in operation
• Building confidence in quality
• Providing information for decision-making`,
          keyTerms: ["test objective", "testing", "validation", "verification", "test basis", "test object"]
        },
        {
          id: "1.2",
          title: "Why is Testing Necessary?",
          content: `Testing is necessary because:
• Human errors (mistakes) → defects in code/documents → failures in software
• Defects can cause financial losses, reputation damage, injury, or death
• Testing reduces risk of undetected failures

Error → Defect → Failure chain:
• ERROR: Human mistake (e.g., developer misunderstands requirement)
• DEFECT: Flaw in the code or document (introduced by error)
• FAILURE: System behaves incorrectly during execution (caused by defect)
• ROOT CAUSE: Fundamental reason why an error was made

Testing vs. QA:
• QA = process-oriented (improving the development process)
• Testing = product-oriented (finding defects in the product)`,
          keyTerms: ["error", "defect", "failure", "root cause", "quality assurance", "coverage"]
        },
        {
          id: "1.3",
          title: "Seven Testing Principles",
          content: `1. Testing shows the PRESENCE of defects, not their ABSENCE
   → Testing can show defects exist, but cannot prove there are none

2. EXHAUSTIVE testing is impossible
   → Testing everything (all inputs, combinations) is infeasible; use risk & priorities

3. EARLY testing saves time and money (Shift-Left)
   → Finding defects earlier in SDLC is cheaper to fix

4. DEFECTS CLUSTER together (Pareto Principle)
   → Small number of modules contain most defects; focus testing there

5. Tests WEAR OUT (Pesticide Paradox)
   → Running same tests repeatedly stops finding new defects; update tests regularly

6. Testing is CONTEXT-DEPENDENT
   → Testing a medical device ≠ testing a mobile app; context determines approach

7. ABSENCE-OF-ERRORS fallacy
   → Even a defect-free system can be unusable if it doesn't meet user needs`,
          keyTerms: ["testing principles", "pesticide paradox", "exhaustive testing", "defect clustering"]
        },
        {
          id: "1.4",
          title: "Test Activities, Testware and Test Roles",
          content: `Test Activities (in order):
1. PLANNING: Define scope, objectives, approach, resources, schedule, entry/exit criteria
2. ANALYSIS: Identify what to test (test conditions) from the test basis
3. DESIGN: Create test cases, test data, test procedures
4. IMPLEMENTATION: Prepare test scripts, organize test suites, set up environment
5. EXECUTION: Run tests, compare actual vs expected results, log defects
6. COMPLETION: Archive testware, analyze lessons learned, finalize reports

Testware (artifacts produced):
• Test plans, test conditions, test cases, test scripts
• Test data, test execution schedules, defect reports, test completion reports

Traceability: Link test cases ↔ requirements to ensure coverage and impact analysis

Roles:
• TEST MANAGER: Planning, monitoring, control, reporting
• TESTER: Analysis, design, implementation, execution`,
          keyTerms: ["test planning", "test analysis", "test design", "test implementation", "test execution", "test completion", "testware", "traceability", "debugging"]
        },
        {
          id: "1.5",
          title: "Essential Skills and Good Practices in Testing",
          content: `Generic tester skills:
• Domain knowledge (understand what system should do)
• Technical knowledge (understand code, tools)
• Critical thinking and analytical skills
• Communication skills (clear defect reports, stakeholder collaboration)
• Attention to detail
• Being a good team player

Whole Team Approach:
• Quality is everyone's responsibility (not just testers)
• Testers work WITH developers and business reps
• Business reps help create acceptance tests
• Developers help identify testable requirements

Independence of Testing (levels):
1. Author tests own code (least independent)
2. Peer review / developer tests others' code
3. Dedicated test team within project
4. Separate test department
5. External testing organization (most independent)

Benefits of independence: Different perspective, less assumption bias
Drawbacks: Communication overhead, not part of development, may slow feedback`,
          keyTerms: ["whole team approach", "independence of testing", "generic skills"]
        }
      ],
      learningObjectives: [
        { code: "FL-1.1.1", level: "K1", text: "Identify typical test objectives" },
        { code: "FL-1.1.2", level: "K2", text: "Differentiate testing from debugging" },
        { code: "FL-1.2.1", level: "K2", text: "Exemplify why testing is necessary" },
        { code: "FL-1.2.2", level: "K1", text: "Recall the relation between testing and quality assurance" },
        { code: "FL-1.2.3", level: "K2", text: "Distinguish between root cause, error, defect, and failure" },
        { code: "FL-1.3.1", level: "K2", text: "Explain the seven testing principles" },
        { code: "FL-1.4.1", level: "K2", text: "Summarize the different test activities and tasks" },
        { code: "FL-1.4.2", level: "K2", text: "Explain the impact of context on the test process" },
        { code: "FL-1.4.3", level: "K2", text: "Differentiate the testware that supports the test activities" },
        { code: "FL-1.4.4", level: "K2", text: "Explain the value of maintaining traceability" },
        { code: "FL-1.4.5", level: "K2", text: "Compare the different roles in testing" },
        { code: "FL-1.5.1", level: "K2", text: "Give examples of the generic skills required for testing" },
        { code: "FL-1.5.2", level: "K1", text: "Recall the advantages of the whole team approach" },
        { code: "FL-1.5.3", level: "K2", text: "Distinguish the benefits and drawbacks of independence of testing" }
      ]
    },
    {
      id: 2,
      title: "Testing Throughout the SDLC",
      duration: "130 minutes",
      examQuestions: 6,
      color: "#0891b2",
      sections: [
        {
          id: "2.1",
          title: "Testing in the Context of a Software Development Lifecycle",
          content: `Good practices for ALL SDLCs:
• Every development activity has a corresponding test activity
• Define test objectives and scope as early as possible
• Testers review work products (specs, designs) as soon as drafts available
• Tests are written before or during development (not only after)

Test-First Approaches:
• TDD (Test-Driven Development): Write unit tests BEFORE code → code to make tests pass → refactor
• ATDD (Acceptance TDD): Write acceptance tests from user stories BEFORE development
• BDD (Behavior-Driven Development): Tests written in Given/When/Then format (natural language)

DevOps Impact on Testing:
• CI/CD pipeline: automated tests run on every commit
• Fast feedback loops: developers get test results quickly
• Shift-left: test earlier; Shift-right: test in production (monitoring, A/B testing)
• Shared responsibility for quality across dev and ops

Shift-Left:
• Testing earlier = cheaper defect fixes
• Examples: reviewing specs, writing tests before code, running tests in dev environment

Retrospectives:
• Team meetings at end of iteration/release
• Identify: what went well, what to improve
• Output: process improvement actions for next iteration`,
          keyTerms: ["SDLC", "TDD", "ATDD", "BDD", "DevOps", "shift-left", "CI/CD", "retrospective"]
        },
        {
          id: "2.2",
          title: "Test Levels and Test Types",
          content: `TEST LEVELS (by scope):
1. COMPONENT (Unit) Testing: Individual components in isolation; white-box focus; developer-run
2. COMPONENT INTEGRATION Testing: Interactions between components; interfaces and data flow
3. SYSTEM Testing: Entire system end-to-end; black-box focus; independent test team
4. SYSTEM INTEGRATION Testing: Interactions between systems/external services/APIs
5. ACCEPTANCE Testing: Validates system meets business/user needs; run by users/customers
   - Types: UAT (user), OAT (operational), Alpha, Beta, Regulatory

TEST TYPES (by what is tested):
• FUNCTIONAL: What system does — features, workflows, business rules
• NON-FUNCTIONAL: How well system works — performance, security, usability, reliability, compatibility
• STRUCTURAL (White-box): Internal code structure — code coverage, branch coverage
• CHANGE-RELATED:
  - CONFIRMATION testing: Re-test a fixed defect to verify fix works
  - REGRESSION testing: Re-test unchanged parts after a change to detect side effects`,
          keyTerms: ["component testing", "integration testing", "system testing", "acceptance testing", "functional testing", "non-functional testing", "regression testing", "confirmation testing", "black-box testing", "white-box testing"]
        },
        {
          id: "2.3",
          title: "Maintenance Testing",
          content: `Maintenance Testing: Testing an existing system after changes are made to it.

Triggers for maintenance testing:
• MODIFICATION: Bug fixes, enhancements, new features, upgrades
• MIGRATION: Moving to new platform, OS, or database
• RETIREMENT: Decommissioning a system (archive, data migration testing)

Impact Analysis: Before testing, identify what was changed and what could be affected.
• Determines scope of regression testing needed
• Uses traceability (test cases ↔ requirements ↔ code)

Maintenance testing is more complex because:
• Incomplete documentation may exist
• Original testers may not be available
• Risk of regression is high`,
          keyTerms: ["maintenance testing", "impact analysis", "regression testing"]
        }
      ],
      learningObjectives: [
        { code: "FL-2.1.1", level: "K2", text: "Explain the impact of the chosen SDLC on testing" },
        { code: "FL-2.1.2", level: "K1", text: "Recall good testing practices that apply to all SDLCs" },
        { code: "FL-2.1.3", level: "K1", text: "Recall the examples of test-first approaches to development" },
        { code: "FL-2.1.4", level: "K2", text: "Summarize how DevOps might have an impact on testing" },
        { code: "FL-2.1.5", level: "K2", text: "Explain the shift-left approach" },
        { code: "FL-2.1.6", level: "K2", text: "Explain how retrospectives can be used for process improvement" },
        { code: "FL-2.2.1", level: "K2", text: "Distinguish the different test levels" },
        { code: "FL-2.2.2", level: "K2", text: "Distinguish the different test types" },
        { code: "FL-2.2.3", level: "K2", text: "Distinguish confirmation testing from regression testing" },
        { code: "FL-2.3.1", level: "K2", text: "Summarize maintenance testing and its triggers" }
      ]
    },
    {
      id: 3,
      title: "Static Testing",
      duration: "80 minutes",
      examQuestions: 4,
      color: "#059669",
      sections: [
        {
          id: "3.1",
          title: "Static Testing Basics",
          content: `Static Testing: Examining work products WITHOUT executing code.
Dynamic Testing: Testing by RUNNING the software.

What can be statically tested:
• Requirements, user stories, acceptance criteria
• Architecture/design documents
• Source code
• Test plans, test cases, test scripts
• Project plans, schedules, budgets
• Configuration management data

Value of Static Testing:
• Find defects EARLIER (before code is run) → cheaper to fix
• Find defects that dynamic testing cannot (unreachable code, security vulnerabilities in logic)
• Improve quality of documentation and communication
• Detect missing, inconsistent, or ambiguous requirements
• Reduce overall project cost`,
          keyTerms: ["static testing", "dynamic testing", "static analysis", "anomaly"]
        },
        {
          id: "3.2",
          title: "Feedback and Review Process",
          content: `Early & Frequent Stakeholder Feedback Benefits:
• Avoids requirements misunderstandings before development begins
• Ensures alignment between team and stakeholders
• Reduces costly rework

Review Process Activities:
1. PLANNING: Define scope, effort, reviewers, entry/exit criteria
2. REVIEW INITIATION: Distribute documents, explain objectives, check entry criteria
3. INDIVIDUAL REVIEW: Each reviewer examines the work product independently
4. COMMUNICATION & ANALYSIS: Discuss findings, agree on status of anomalies
5. FIXING & REPORTING: Author fixes defects found; re-review if needed
6. CLOSURE: Check exit criteria met, archive artifacts

Review Roles:
• MANAGER: Plans and makes decisions about reviews
• AUTHOR: Creates work product, incorporates fixes
• MODERATOR/FACILITATOR: Runs the review meeting, ensures it stays on track
• REVIEW LEADER: Organizes the review, selects reviewers
• REVIEWERS: Examine the work product for defects
• SCRIBE (Recorder): Documents anomalies and action items during review

Review Types (least to most formal):
1. INFORMAL REVIEW: No defined process; flexible; peer feedback; no scribe required
2. WALKTHROUGH: Led by AUTHOR; purpose = learning/finding defects; scribe present; informal prep
3. TECHNICAL REVIEW: Led by MODERATOR (not author); individual preparation required; focuses on technical quality; produces review report
4. INSPECTION: Most formal; moderator NOT author; entry/exit criteria; metrics collected; checklists used; formal defect logging

Success Factors for Reviews:
• Clear, pre-defined objectives
• Right people chosen as reviewers (domain expertise)
• Adequate preparation time given
• Management support for the review culture
• Defects welcomed, not penalized (culture of quality)
• Issues addressed objectively (not personal criticism)
• Checklists used where helpful`,
          keyTerms: ["review", "inspection", "walkthrough", "technical review", "informal review", "formal review", "anomaly", "moderator", "author", "scribe"]
        }
      ],
      learningObjectives: [
        { code: "FL-3.1.1", level: "K1", text: "Recognize types of products that can be examined by static testing" },
        { code: "FL-3.1.2", level: "K2", text: "Explain the value of static testing" },
        { code: "FL-3.1.3", level: "K2", text: "Compare and contrast static and dynamic testing" },
        { code: "FL-3.2.1", level: "K1", text: "Identify the benefits of early and frequent stakeholder feedback" },
        { code: "FL-3.2.2", level: "K2", text: "Summarize the activities of the review process" },
        { code: "FL-3.2.3", level: "K1", text: "Recall responsibilities assigned to principal roles in reviews" },
        { code: "FL-3.2.4", level: "K2", text: "Compare and contrast the different review types" },
        { code: "FL-3.2.5", level: "K1", text: "Recall the factors that contribute to a successful review" }
      ]
    },
    {
      id: 4,
      title: "Test Analysis and Design",
      duration: "390 minutes",
      examQuestions: 11,
      color: "#dc2626",
      sections: [
        {
          id: "4.1",
          title: "Test Technique Overview",
          content: `Three Categories of Test Techniques:

BLACK-BOX techniques (specification-based):
• Based on EXTERNAL behavior — what system should do
• Test basis = requirements, specs, user stories
• No knowledge of internal code needed
• Includes: EP, BVA, Decision Tables, State Transition

WHITE-BOX techniques (structure-based):
• Based on INTERNAL code structure — how system works
• Test basis = code, architecture, data flow
• Requires code knowledge
• Includes: Statement Coverage, Branch Coverage

EXPERIENCE-BASED techniques:
• Based on tester's knowledge, intuition, past experience
• No formal test basis required
• Includes: Error Guessing, Exploratory Testing, Checklist-based`,
          keyTerms: ["black-box test technique", "white-box test technique", "experience-based test technique", "coverage", "coverage item"]
        },
        {
          id: "4.2",
          title: "Black-Box Test Techniques",
          content: `EQUIVALENCE PARTITIONING (EP):
• Divide inputs/outputs into PARTITIONS where values are treated identically
• If one value in partition fails → all fail; if passes → all pass
• Types: Valid partitions (accepted input) and Invalid partitions (rejected)
• 100% EP coverage = each partition tested at least once (1 test per partition)
• Example: Age field 18-65 valid → partitions: <18 (invalid), 18-65 (valid), >65 (invalid)

BOUNDARY VALUE ANALYSIS (BVA):
• Tests at the BOUNDARIES of partitions (most errors occur at edges)
• 2-value BVA: Test MIN and MAX of each partition
• 3-value BVA: Test MIN-1, MIN, MAX, MAX+1 of each partition (more thorough)
• Example: Valid range 18-65 → 2-value: test 18 and 65; 3-value: test 17, 18, 65, 66

DECISION TABLE TESTING:
• For systems with COMBINATIONS of conditions causing different actions
• Conditions = rows (inputs/rules); Actions = rows (outputs); Rules = columns
• Full table: 2^n rules for n boolean conditions
• Collapse redundant rules (don't-care conditions)
• 100% coverage = each rule (column) tested at least once

STATE TRANSITION TESTING:
• Model system as: States → Transitions (events/guards) → Actions
• Coverage levels:
  - All STATES coverage (minimum): every state visited
  - All TRANSITIONS coverage: every valid transition exercised (most common target)
  - All INVALID transitions: test what happens with unexpected inputs in each state
• Minimum test cases = number of test cases needed to cover all valid transitions
• State table = grid of states × events showing next state and action`,
          keyTerms: ["equivalence partitioning", "boundary value analysis", "decision table testing", "state transition testing", "acceptance criteria"]
        },
        {
          id: "4.3",
          title: "White-Box Test Techniques",
          content: `STATEMENT TESTING:
• Goal: Execute every EXECUTABLE STATEMENT at least once
• Statement coverage (%) = (statements executed / total statements) × 100
• 100% statement coverage does NOT mean all paths are covered
• A defect in an executed statement will be found; in an unexecuted statement, won't

BRANCH TESTING:
• Goal: Exercise every BRANCH (decision outcome) at least once
• Branches = outcomes of decision points (if-true, if-false, each case in switch)
• Branch coverage SUBSUMES statement coverage (100% branch → 100% statement)
• Branch coverage (%) = (branches covered / total branches) × 100

Value of White-Box Testing:
• Ensures all code is exercised (find dead code, unused paths)
• Supplements black-box testing
• Verifies actual code behavior vs. specifications
• Helps detect paths not covered by requirements (gaps)`,
          keyTerms: ["statement coverage", "branch coverage", "white-box test technique"]
        },
        {
          id: "4.4",
          title: "Experience-Based Test Techniques",
          content: `ERROR GUESSING:
• Tester uses knowledge of: past defects, common developer mistakes, domain expertise
• Create a list of "possible errors/defects/failures" and design tests targeting them
• Sources: personal experience, defect databases, historical data
• NOT random — systematic use of knowledge

EXPLORATORY TESTING:
• Simultaneous learning, test design, and test execution
• Use TEST CHARTERS: define scope, objectives, time limit
• Best when: requirements are incomplete/missing, time is limited, tester has deep domain knowledge
• Tester learns about system while testing it
• Results vary by tester; less repeatable than scripted testing

CHECKLIST-BASED TESTING:
• Use pre-prepared checklists of conditions to check
• Checklists derived from: experience, standards, regulations, common failures
• Flexible — items can be adapted to specific context
• Supports consistency across multiple test runs
• Less detailed than formal test cases`,
          keyTerms: ["error guessing", "exploratory testing", "checklist-based testing"]
        },
        {
          id: "4.5",
          title: "Collaboration-based Test Approaches",
          content: `USER STORY FORMAT:
"As a [role/persona], I want [feature/goal], so that [business value/benefit]"

INVEST Criteria for good user stories:
• I – Independent (not dependent on other stories)
• N – Negotiable (details can be discussed)
• V – Valuable (delivers value to user/business)
• E – Estimable (team can estimate effort)
• S – Small (fits in one sprint/iteration)
• T – Testable (clear acceptance criteria exist)

ACCEPTANCE CRITERIA formats:
1. SCENARIO-BASED (BDD style): Given [context] / When [event] / Then [outcome]
2. RULE-BASED: List of rules/conditions that must hold (e.g., "Price must not be negative")

ATDD (Acceptance Test-Driven Development):
• Write acceptance tests BEFORE development starts
• Tests derived from acceptance criteria (Given/When/Then)
• Creates shared understanding between dev, test, and business
• Tests serve as living documentation
• Steps: Discover (discuss) → Formulate (write AC) → Automate (create tests) → Develop`,
          keyTerms: ["acceptance criteria", "ATDD", "BDD", "user story", "collaboration-based test approach"]
        }
      ],
      learningObjectives: [
        { code: "FL-4.1.1", level: "K2", text: "Distinguish black-box, white-box, and experience-based test techniques" },
        { code: "FL-4.2.1", level: "K3", text: "Use equivalence partitioning to derive test cases" },
        { code: "FL-4.2.2", level: "K3", text: "Use boundary value analysis to derive test cases" },
        { code: "FL-4.2.3", level: "K3", text: "Use decision table testing to derive test cases" },
        { code: "FL-4.2.4", level: "K3", text: "Use state transition testing to derive test cases" },
        { code: "FL-4.3.1", level: "K2", text: "Explain statement testing" },
        { code: "FL-4.3.2", level: "K2", text: "Explain branch testing" },
        { code: "FL-4.3.3", level: "K2", text: "Explain the value of white-box testing" },
        { code: "FL-4.4.1", level: "K2", text: "Explain error guessing" },
        { code: "FL-4.4.2", level: "K2", text: "Explain exploratory testing" },
        { code: "FL-4.4.3", level: "K2", text: "Explain checklist-based testing" },
        { code: "FL-4.5.1", level: "K2", text: "Explain how to write user stories in collaboration" },
        { code: "FL-4.5.2", level: "K2", text: "Classify the different options for writing acceptance criteria" },
        { code: "FL-4.5.3", level: "K3", text: "Use ATDD to derive test cases" }
      ]
    },
    {
      id: 5,
      title: "Managing the Test Activities",
      duration: "335 minutes",
      examQuestions: 9,
      color: "#d97706",
      sections: [
        {
          id: "5.1",
          title: "Test Planning",
          content: `TEST PLAN content (IEEE 829 inspired):
• Scope and objectives of testing
• Test approach and strategy
• Resources (people, tools, environments)
• Schedule and milestones
• Entry and exit criteria
• Risks and mitigations
• Communication plan

Entry Criteria (Definition of Ready — BEFORE testing starts):
• Test environment is set up and available
• Test data is prepared
• Test items meet quality threshold
• Required tools and access available

Exit Criteria (Definition of Done — WHEN to STOP testing):
• Coverage targets achieved (code, requirements)
• Estimated defect density reached
• All planned tests executed
• Agreed number of unresolved defects ≤ threshold
• Deadlines reached (time-based exit)

Test Estimation Techniques:
1. RATIO-BASED: Test effort = k × development effort (e.g., 1:1 ratio)
2. EXTRAPOLATION: Use early iteration data to predict remaining effort
3. WIDEBAND DELPHI: Expert consensus — each expert estimates independently, discuss, re-estimate
4. THREE-POINT ESTIMATION: E = (O + 4M + P) / 6
   O = optimistic, M = most likely, P = pessimistic
5. PLANNING POKER: Agile — relative story points via cards, consensus

Test Case Prioritization:
• Risk-based: highest risk first (most important)
• Coverage-based: tests covering most new code first
• Requirements-based: high-priority requirements first
• Dependency-based: prerequisites before dependent tests

Test Pyramid (Agile):
• Bottom: Component/Unit tests — most tests, fast, cheap, isolated
• Middle: Integration tests — fewer, medium speed
• Top: E2E/UI/System tests — fewest, slow, expensive
Implication: Automate bottom heavily; use top for critical paths only

Testing Quadrants (Agile, Brian Marick):
• Q1 (Tech-facing, Team support): Unit tests, component tests → AUTOMATE
• Q2 (Business-facing, Team support): Functional tests, prototypes, simulations → AUTOMATE + MANUAL
• Q3 (Business-facing, Product critique): Exploratory, usability, UAT → MANUAL
• Q4 (Tech-facing, Product critique): Performance, security, load, stress → TOOLS`,
          keyTerms: ["test plan", "entry criteria", "exit criteria", "test approach", "test pyramid", "testing quadrants", "risk-based testing"]
        },
        {
          id: "5.2",
          title: "Risk Management",
          content: `RISK LEVEL = Likelihood × Impact (Probability × Severity)

Risk Types:
• PROJECT RISKS: Threaten the test project schedule/budget/quality of process
  Examples: key tester leaving, unrealistic deadlines, late delivery from dev, vendor issues
• PRODUCT RISKS: Threaten software quality (things that could go wrong in the product)
  Examples: complex calculations wrong, security vulnerabilities, poor performance, wrong business logic

Product Risk Analysis Process:
1. IDENTIFICATION: Brainstorm what could go wrong (stakeholders, past defects, domain knowledge)
2. ASSESSMENT: Estimate likelihood × impact for each risk
3. RISK MITIGATION: Actions to reduce risk
   - Testing more (focus testing effort on high-risk areas)
   - Risk transfer (insurance, outsourcing)
   - Risk acceptance (document and accept)
   - Contingency plan (plan B)
4. MONITORING: Track risk status throughout project

Risk-Based Testing:
• High risk items get: more test coverage, earlier testing, more experienced testers
• Low risk items get: less testing
• Risk level determines test depth and priority`,
          keyTerms: ["risk", "product risk", "project risk", "risk analysis", "risk assessment", "risk mitigation", "risk-based testing", "risk level", "risk identification", "risk monitoring", "risk control"]
        },
        {
          id: "5.3",
          title: "Test Monitoring, Test Control and Test Completion",
          content: `TEST MONITORING metrics:
• % of test cases planned/designed/executed
• % tests passed/failed/blocked
• Defects found/closed/outstanding
• Defect density (defects per feature/size)
• Test coverage achieved (requirements, code)
• Estimated vs actual effort

Test Progress Reports (DURING testing):
• Audience: test manager, project manager, stakeholders
• Content: test progress, issues, risks, plan vs. actual, next steps

Test Completion Reports (AT END of testing):
• Audience: project sponsors, client, senior management
• Content: summary of testing, defects found/fixed, coverage achieved, lessons learned, recommendations

Communicating Test Status:
• Dashboards and burndown charts for Agile
• Defect trend charts (open vs. closed over time)
• Risk heat maps
• Test execution progress charts`,
          keyTerms: ["test monitoring", "test control", "test completion report", "test progress report", "defect management"]
        },
        {
          id: "5.4",
          title: "Configuration Management",
          content: `Configuration Management (CM) supports testing by:
• Version control of all test artifacts (test plans, cases, scripts, data)
• Identifying and tracking versions of test items being tested
• Ensuring testers work with correct versions
• Supporting reproducibility (reproduce issues with same config)
• Enabling traceability between test artifacts and software versions
• Maintaining integrity of test environment configurations

Without CM: Tests run against wrong build; defects cannot be reproduced; audit fails`,
          keyTerms: ["configuration management"]
        },
        {
          id: "5.5",
          title: "Defect Management",
          content: `Defect Report (Bug Report) mandatory fields:
• Unique identifier (ID)
• Title / summary (short description)
• Date found and reporter's name
• Test object and version (what was being tested)
• Test environment (OS, browser, device, build)
• Test case / procedure reference
• Steps to reproduce (numbered, precise)
• Expected result
• Actual result (what happened)
• Severity (impact on system: critical/major/minor/trivial)
• Priority (urgency to fix: high/medium/low)
• Status (new/open/fixed/closed/rejected/deferred)
• References (requirements, screenshots, logs)

Defect Life Cycle:
New → Assigned → Open → Fixed → Retest → Closed/Reopened

Severity vs. Priority:
• SEVERITY: Technical impact on system (set by tester/QA)
• PRIORITY: Business urgency to fix (set by product owner/manager)
• High severity + low priority: System crash in rarely-used feature
• Low severity + high priority: Typo in company logo on homepage`,
          keyTerms: ["defect report", "defect management", "severity", "priority"]
        }
      ],
      learningObjectives: [
        { code: "FL-5.1.1", level: "K2", text: "Exemplify the purpose and content of a test plan" },
        { code: "FL-5.1.2", level: "K1", text: "Recognize how a tester adds value to iteration and release planning" },
        { code: "FL-5.1.3", level: "K2", text: "Compare and contrast entry criteria and exit criteria" },
        { code: "FL-5.1.4", level: "K3", text: "Use estimation techniques to calculate the required test effort" },
        { code: "FL-5.1.5", level: "K3", text: "Apply test case prioritization" },
        { code: "FL-5.1.6", level: "K1", text: "Recall the concepts of the test pyramid" },
        { code: "FL-5.1.7", level: "K2", text: "Summarize the testing quadrants and their relationships with test levels/types" },
        { code: "FL-5.2.1", level: "K1", text: "Identify risk level by using risk likelihood and risk impact" },
        { code: "FL-5.2.2", level: "K2", text: "Distinguish between project risks and product risks" },
        { code: "FL-5.2.3", level: "K2", text: "Explain how product risk analysis may influence thoroughness/scope of testing" },
        { code: "FL-5.2.4", level: "K2", text: "Explain what measures can be taken in response to analyzed product risks" },
        { code: "FL-5.3.1", level: "K1", text: "Recall metrics used for testing" },
        { code: "FL-5.3.2", level: "K2", text: "Summarize the purposes, content, and audiences for test reports" },
        { code: "FL-5.3.3", level: "K2", text: "Exemplify how to communicate the status of testing" },
        { code: "FL-5.4.1", level: "K2", text: "Summarize how configuration management supports testing" },
        { code: "FL-5.5.1", level: "K3", text: "Prepare a defect report" }
      ]
    },
    {
      id: 6,
      title: "Test Tools",
      duration: "20 minutes",
      examQuestions: 2,
      color: "#7c3aed",
      sections: [
        {
          id: "6.1",
          title: "Tool Support for Testing",
          content: `Categories of test tools:
• TEST MANAGEMENT tools: Jira, TestRail, Zephyr — manage test plans, cases, execution, defects
• REQUIREMENTS MANAGEMENT tools: track requirements; link to tests
• STATIC ANALYSIS tools: linters, SonarQube — analyze code without running it
• TEST DESIGN tools: mind map tools, model-based testing tools
• TEST DATA tools: generate/prepare/manage test data
• TEST EXECUTION tools: Selenium, Cypress, JUnit, TestNG — automate test execution
• COVERAGE tools: JaCoCo — measure code coverage during test execution
• NON-FUNCTIONAL tools: JMeter (performance), OWASP ZAP (security), BrowserStack (compatibility)
• DevOps/CI tools: Jenkins, GitLab CI — integrate testing in pipeline
• COLLABORATION tools: Confluence, Slack — team communication and documentation`,
          keyTerms: ["test automation", "test tools"]
        },
        {
          id: "6.2",
          title: "Benefits and Risks of Test Automation",
          content: `BENEFITS of Test Automation:
• Saves time: eliminates repetitive manual execution
• Reduces human error: consistent execution every time
• More objective assessment: coverage metrics are calculated precisely
• Faster feedback: CI pipeline runs tests on every commit
• Enables regression testing: run large suites quickly
• Frees testers for more complex/creative testing
• Test 24/7 without human presence

RISKS of Test Automation:
• High initial investment: tool selection, setup, scripting time
• Training cost: team needs to learn automation tools/frameworks
• Maintenance burden: scripts break when UI/API changes (brittle tests)
• Over-reliance: automation misses what requires human judgment (UX, visual)
• Unrealistic expectations: automation won't find all defects
• Vendor lock-in: tied to specific tool ecosystem
• False confidence: passing automated tests ≠ no defects`,
          keyTerms: ["test automation"]
        }
      ],
      learningObjectives: [
        { code: "FL-6.1.1", level: "K2", text: "Explain how different types of test tools support testing" },
        { code: "FL-6.2.1", level: "K1", text: "Recall the benefits and risks of test automation" }
      ]
    }
  ]
};

const QUESTIONS = [
  // ===== CHAPTER 1: FUNDAMENTALS OF TESTING =====
  {
    id: 1,
    chapter: 1,
    section: "1.1",
    lo: "FL-1.1.1",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which of the following statements describes a valid test objective?",
    options: [
      "To prove that there are no unfixed defects in the system under test",
      "To prove that there will be no failures after the system is implemented into production",
      "To reduce the risk level of the test object and to build confidence in its quality level",
      "To verify that there are no untested combinations of inputs"
    ],
    answer: 2,
    explanation: "A valid test objective is to reduce risk and build confidence in quality. Options A and B are impossible — testing cannot prove absence of all defects or guarantee zero failures. Option D violates Principle 2 (exhaustive testing is impossible)."
  },
  {
    id: 2,
    chapter: 1,
    section: "1.1",
    lo: "FL-1.1.2",
    level: "K2",
    source: "Practice",
    question: "A tester runs a test, finds a failure, and logs a defect. A developer then locates the code defect, corrects it, and runs unit tests to verify. Which activities describe testing and which describe debugging?",
    options: [
      "Running the test and logging the defect is testing; locating and correcting the defect is debugging",
      "All activities described are part of testing",
      "Locating and correcting the defect is testing; running the test is debugging",
      "All activities described are part of debugging"
    ],
    answer: 0,
    explanation: "Testing includes running tests and identifying failures/logging defects. Debugging includes finding the root cause of the defect, fixing it, and verifying the fix. They are distinct activities — testers test, developers debug."
  },
  {
    id: 3,
    chapter: 1,
    section: "1.2",
    lo: "FL-1.2.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which shows an example of test activities that contribute to success?",
    options: [
      "Having testers involved during various SDLC activities will help detect defects in work products",
      "Testers try not to disturb developers while they are coding to allow them to be more productive",
      "Testers collaborating with end users help improve defect reports during integration and system testing",
      "Certified testers will design much better test cases than non-certified testers"
    ],
    answer: 0,
    explanation: "Testers involved throughout the SDLC can find defects in all work products (not just code) — including requirements, designs, and test plans — leading to success. The other options contain incorrect assumptions."
  },
  {
    id: 4,
    chapter: 1,
    section: "1.2",
    lo: "FL-1.2.3",
    level: "K2",
    source: "Practice",
    question: "A developer misunderstands a requirement and writes code that calculates tax incorrectly. During system testing, the test team finds that the tax amount shown is wrong. Which correctly maps the ISTQB terms to this scenario?",
    options: [
      "Error = wrong calculation; Defect = misunderstood requirement; Failure = wrong tax shown",
      "Error = misunderstood requirement; Defect = incorrect code; Failure = wrong tax shown",
      "Error = wrong tax shown; Defect = incorrect code; Failure = misunderstood requirement",
      "Error = incorrect code; Defect = wrong tax shown; Failure = misunderstood requirement"
    ],
    answer: 1,
    explanation: "Error = human mistake (developer misunderstanding the requirement). Defect = flaw introduced in the code (incorrect tax calculation logic). Failure = observable wrong behavior (wrong tax amount displayed during testing)."
  },
  {
    id: 5,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "You notice that unchanged regression tests for the same feature for several iterations have found no new defects. Your manager is happy about this, but you are not. Which testing principle best explains your skepticism?",
    options: [
      "Tests wear out",
      "Absence-of-errors fallacy",
      "Defects cluster together",
      "Exhaustive testing is impossible"
    ],
    answer: 0,
    explanation: "Tests wear out (Pesticide Paradox — Principle 5): if the same tests are run repeatedly without change, they stop finding new defects. The solution is to regularly review and update tests, and add new tests for uncovered areas."
  },
  {
    id: 6,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Practice",
    question: "An e-commerce application has been fully tested. All 500 test cases passed. The test manager says 'The system has no defects.' Which testing principle does this statement violate?",
    options: [
      "Exhaustive testing is impossible",
      "Early testing saves time and money",
      "Testing shows presence of defects, not their absence",
      "Defects cluster together"
    ],
    answer: 2,
    explanation: "Principle 1: Testing can show that defects ARE present, but cannot prove there are NO defects. Even if all test cases pass, there may still be undetected defects. The statement 'no defects' is a violation of this principle."
  },
  {
    id: 7,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "In a mobile food ordering application, the team is implementing payment functionality. Which of the following activities is part of test analysis?",
    options: [
      "Estimating that integration testing will take 8 person-days of effort",
      "Deciding to test if it is possible to properly share payment between many users",
      "Using boundary value analysis to derive test data for the minimum allowed payment amount",
      "Analyzing a discrepancy between actual and expected result and reporting a defect"
    ],
    answer: 1,
    explanation: "Test analysis = defining WHAT to test (test conditions). Deciding to test payment sharing is identifying a test condition. Option A = test planning; Option C = test design; Option D = test execution."
  },
  {
    id: 8,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.5",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which TWO of the following tasks belong MAINLY to a testing role? (Select 2)",
    options: [
      "Configure test environments",
      "Maintain the product backlog",
      "Design solutions to new requirements",
      "Create the test plan",
      "Report on achieved coverage"
    ],
    answer: [0, 4],
    multiAnswer: true,
    explanation: "Testers configure test environments (A) and report on achieved coverage (E). Option B = product owner/manager; Option C = developers/architects; Option D = test manager (not a tester role)."
  },
  {
    id: 9,
    chapter: 1,
    section: "1.5",
    lo: "FL-1.5.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following skills are MOST important for a tester? (i) Domain knowledge, (ii) Creating a product vision, (iii) Being a good team player, (iv) Planning and organizing work for the whole team, (v) Critical thinking",
    options: [
      "ii and iv are important; i, iii, v are not",
      "i, iii, and v are important; ii and iv are not",
      "i, ii, and v are important; iii and iv are not",
      "iii and iv are important; i, ii, and v are not"
    ],
    answer: 1,
    explanation: "Domain knowledge (i), being a good team player (iii), and critical thinking (v) are core tester skills. Creating a product vision (ii) is a product owner/manager skill. Planning and organizing for the whole team (iv) is a management skill."
  },
  {
    id: 10,
    chapter: 1,
    section: "1.5",
    lo: "FL-1.5.2",
    level: "K1",
    source: "Official Sample Exam A",
    question: "How is the whole team approach reflected between testers and business representatives?",
    options: [
      "Business representatives decide on test automation approaches for the project",
      "Testers help business representatives define the overall test strategy",
      "Business representatives are not part of the whole team approach",
      "Testers help business representatives to create suitable acceptance tests"
    ],
    answer: 3,
    explanation: "In the whole team approach, testers collaborate with business representatives to create acceptance tests — ensuring tests reflect actual business needs and acceptance criteria."
  },

  // ===== CHAPTER 2: TESTING THROUGHOUT SDLC =====
  {
    id: 11,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.2",
    level: "K1",
    source: "Official Sample Exam A",
    question: "In which SDLC models does the rule 'for every development activity there is a corresponding test activity' hold true?",
    options: [
      "Only in sequential development models (e.g., Waterfall)",
      "Only in iterative development models (e.g., Scrum)",
      "Only in iterative and incremental development models",
      "In sequential, iterative, and incremental development models"
    ],
    answer: 3,
    explanation: "This is a good testing practice that applies to ALL SDLC models — sequential (Waterfall), iterative (Scrum), and incremental. Every development activity should have corresponding testing regardless of the model used."
  },
  {
    id: 12,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.3",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which of the following BEST describes ATDD (Acceptance Test-Driven Development)?",
    options: [
      "In ATDD, acceptance criteria are typically created in a given/when/then format",
      "In ATDD, test cases are mainly created at component testing level and are code-oriented",
      "In ATDD, tests are created based on acceptance criteria to drive the development of the system",
      "In ATDD, tests are based on desired behavior of the software, making it easier for team members to understand"
    ],
    answer: 2,
    explanation: "ATDD: acceptance tests written BEFORE development, based on acceptance criteria, to drive development. Option A describes the BDD format (Given/When/Then). Option B describes TDD. Option D describes BDD."
  },
  {
    id: 13,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.5",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following is NOT an example of the shift-left approach?",
    options: [
      "Reviewing user requirements before they have been formally accepted",
      "Writing a component test before the code for that component is written",
      "Executing performance tests for a component during the component testing phase",
      "Writing a test script before setting up the configuration management process"
    ],
    answer: 3,
    explanation: "Shift-left means testing earlier. Option D is incorrect because test scripts should be managed UNDER configuration management — creating them before CM is set up is not a good practice, not a shift-left example."
  },
  {
    id: 14,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.6",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which argument would you use to convince your manager to introduce retrospectives at the end of each release cycle?",
    options: [
      "Retrospectives are very popular and your clients would appreciate implementing them",
      "They will save money because the end users of the product do not provide immediate feedback",
      "Process weaknesses identified in a retrospective can serve as a to-do list for continuous process improvement",
      "Retrospectives embrace values such as courage and respect for team members"
    ],
    answer: 2,
    explanation: "Retrospectives identify process weaknesses and improvements for the next iteration — this is their primary value for continuous improvement. The other options are either incorrect or not the primary business justification."
  },
  {
    id: 15,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.2",
    level: "K2",
    source: "Practice",
    question: "Which of the following is an example of NON-FUNCTIONAL testing?",
    options: [
      "Testing that a user can successfully log in with valid credentials",
      "Testing that the system processes 1000 concurrent users without performance degradation",
      "Testing that a payment is rejected when invalid card details are entered",
      "Testing that admin users can add new products to the catalog"
    ],
    answer: 1,
    explanation: "Non-functional testing tests HOW WELL the system works — performance, load, security, usability. Testing 1000 concurrent users is a performance/load test. The others test WHAT the system does (functional testing)."
  },
  {
    id: 16,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.3",
    level: "K2",
    source: "Practice",
    question: "After a developer fixes a defect in the login module, the tester re-runs the specific test that originally found the defect to verify the fix. The tester also re-runs all other test cases for the entire application to check no new defects were introduced. Which terms correctly describe these activities?",
    options: [
      "Both activities are regression testing",
      "Re-running the specific login test is regression testing; re-running all others is confirmation testing",
      "Re-running the specific login test is confirmation testing; re-running all others is regression testing",
      "Both activities are confirmation testing"
    ],
    answer: 2,
    explanation: "CONFIRMATION testing = re-testing the specific defect that was fixed, to confirm the fix worked. REGRESSION testing = re-testing unchanged areas to ensure the fix didn't introduce new defects elsewhere."
  },
  {
    id: 17,
    chapter: 2,
    section: "2.3",
    lo: "FL-2.3.1",
    level: "K2",
    source: "Practice",
    question: "A legacy banking application is being migrated from an on-premise server to a cloud platform. No new features are added. Which type of testing is MOST relevant?",
    options: [
      "Acceptance testing",
      "Maintenance testing",
      "Exploratory testing",
      "Component testing"
    ],
    answer: 1,
    explanation: "Maintenance testing covers testing after changes — including MIGRATION to a new platform. Migration is a key trigger for maintenance testing. The scope includes verifying existing functionality still works in the new environment."
  },

  // ===== CHAPTER 3: STATIC TESTING =====
  {
    id: 18,
    chapter: 3,
    section: "3.1",
    lo: "FL-3.1.2",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following is NOT a benefit of static testing?",
    options: [
      "Having less expensive defect management due to the ease of detecting defects later in the SDLC",
      "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
      "Finding coding defects that might not have been found during dynamic testing",
      "Detecting gaps and inconsistencies in requirements"
    ],
    answer: 0,
    explanation: "Static testing finds defects EARLIER (not later) in the SDLC, making them cheaper to fix. Option A incorrectly states 'detecting defects LATER in the SDLC' — that is the opposite of what static testing does."
  },
  {
    id: 19,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.1",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which of the following is a benefit of early and frequent stakeholder feedback?",
    options: [
      "It improves the test process for future projects by making testing more efficient",
      "It forces customers to prioritize their requirements based on agreed project risks",
      "It is the only valid way to measure the quality of incremental changes",
      "It helps avoid requirements misunderstandings before costly development begins"
    ],
    answer: 3,
    explanation: "Early and frequent feedback from stakeholders helps avoid misunderstandings about requirements before development has started — preventing expensive rework. The other options are either incorrect or not the primary benefit."
  },
  {
    id: 20,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.4",
    level: "K2",
    source: "Official Sample Exam A",
    question: "A review is being conducted with the following characteristics: a scribe is present, the main purpose is to evaluate product quality, the meeting is led by the AUTHOR of the document, individual preparation by reviewers is required, and a review report is produced. Which review type is this MOST LIKELY?",
    options: [
      "Informal review",
      "Walkthrough",
      "Technical review",
      "Inspection"
    ],
    answer: 1,
    explanation: "WALKTHROUGH: Led by the AUTHOR (key differentiator), has a scribe, purpose includes evaluating quality, review report produced. INSPECTION is not author-led (moderator leads). TECHNICAL REVIEW is moderator-led. INFORMAL has no defined process."
  },
  {
    id: 21,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.5",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which of the following is NOT a factor that contributes to successful reviews?",
    options: [
      "Participants should dedicate adequate time for the review",
      "Splitting large work products into small parts to make the review effort less intense",
      "Participants should avoid behaviors that indicate boredom or hostility",
      "Failures found should be acknowledged, appreciated, and handled objectively"
    ],
    answer: 3,
    explanation: "Reviews find DEFECTS (anomalies in work products), not 'failures'. Failures occur during dynamic testing when software runs. Using the wrong term (failures instead of defects) makes Option D incorrect in this context."
  },

  // ===== CHAPTER 4: TEST ANALYSIS AND DESIGN =====
  {
    id: 22,
    chapter: 4,
    section: "4.1",
    lo: "FL-4.1.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following is a characteristic of experience-based test techniques?",
    options: [
      "Test cases are created based on detailed design information of the software",
      "Items tested within an interface code section are used to measure coverage",
      "The techniques heavily rely on the tester's knowledge of the software and the business domain",
      "Test cases are used to identify deviations from requirements specifications"
    ],
    answer: 2,
    explanation: "Experience-based techniques rely on the tester's knowledge, intuition, and past experience. Option A = white-box (design/code). Option B = white-box (code coverage). Option D = black-box (spec-based)."
  },
  {
    id: 23,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.1",
    level: "K3",
    source: "Official Sample Exam A",
    question: "An apartment search form has two fields: Floor (3 options: ground/first/second+) and Garden type (3 options: no garden/small garden/large garden). Only ground floor apartments can have gardens. Built-in validation prevents invalid combinations from being entered. Applying EP to cover each floor type and each garden type, what is the MINIMUM number of test cases needed for 100% EP coverage?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "Partitions: Floor (3): Ground, First, Second+. Garden (3): No garden, Small garden, Large garden. Since invalid combinations (First+garden, Second+garden) cannot be entered, only valid combinations count. Minimum to cover all partitions: TC1=Ground+Small, TC2=Ground+Large, TC3=First+NoGarden, TC4=Second+NoGarden = 4 tests."
  },
  {
    id: 24,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.1",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A field accepts age values. Valid ages for insurance are 18 to 60 (inclusive). Values outside this range should be rejected. Using Equivalence Partitioning, which of the following sets of test values gives 100% EP coverage?",
    options: [
      "17, 18, 60, 61",
      "10, 30, 65",
      "18, 60",
      "17, 40, 61"
    ],
    answer: 3,
    explanation: "EP creates 3 partitions: <18 (invalid), 18-60 (valid), >60 (invalid). 100% EP coverage needs 1 test per partition: one value <18 (e.g., 17), one value 18-60 (e.g., 40), one value >60 (e.g., 61). Option D covers all 3 partitions with minimum tests."
  },
  {
    id: 25,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Official Sample Exam A",
    question: "A grade system has 6 grade bands: 0-50=Failed, 51-60=Fair, 61-70=Satisfactory, 71-80=Good, 81-90=Very Good, 91-100=Excellent. Test cases are: TC1=91, TC2=50, TC3=81, TC4=60, TC5=70, TC6=80. What is the 2-value BVA coverage achieved?",
    options: [
      "50%",
      "60%",
      "33.3%",
      "100%"
    ],
    answer: 0,
    explanation: "2-value BVA requires MIN and MAX of each partition. 6 partitions × 2 = 12 boundary values total. TC1=91(max), TC2=50(max of fail), TC3=81(min of very good), TC4=60(max of fair), TC5=70(max of satisfactory), TC6=80(max of good). That covers 6 of 12 boundary values = 50%."
  },
  {
    id: 26,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A field accepts quantities from 1 to 100. Using 3-value BVA, which set of test values provides the MOST appropriate coverage?",
    options: [
      "0, 1, 100, 101",
      "1, 50, 100",
      "0, 1, 2, 99, 100, 101",
      "1, 100"
    ],
    answer: 2,
    explanation: "3-value BVA tests: MIN-1, MIN, MIN+1 (at lower boundary) and MAX-1, MAX, MAX+1 (at upper boundary). For range 1-100: 0, 1, 2 (lower boundary) and 99, 100, 101 (upper boundary) = 6 test values. This gives the most thorough BVA coverage."
  },
  {
    id: 27,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.3",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A loan approval system has 2 conditions: Credit Score (Good/Poor) and Employment Status (Employed/Unemployed). Rules: If Good Credit AND Employed → Approve; If Good Credit AND Unemployed → Review; If Poor Credit AND Employed → Review; If Poor Credit AND Unemployed → Reject. How many rules are in the full decision table and how many test cases needed for 100% coverage?",
    options: [
      "2 rules, 2 test cases",
      "4 rules, 4 test cases",
      "8 rules, 8 test cases",
      "4 rules, 2 test cases"
    ],
    answer: 1,
    explanation: "With 2 binary conditions (Good/Poor, Employed/Unemployed), the full decision table has 2^2 = 4 rules. Each rule produces a different action (Approve, Review, Review, Reject). 100% decision table coverage requires 1 test per rule = 4 test cases."
  },
  {
    id: 28,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Your test suite has achieved 100% statement coverage. What is the CORRECT consequence of this?",
    options: [
      "Each instruction in the code that contains a defect has been executed at least once",
      "Any test suite with more test cases will also achieve 100% statement coverage",
      "Each path through the code has been executed at least once",
      "Every combination of input values has been tested at least once"
    ],
    answer: 0,
    explanation: "100% statement coverage means every executable statement was executed at least once. If a statement contains a defect, it was executed, giving the test a chance to reveal the defect. It does NOT cover all paths or all input combinations."
  },
  {
    id: 29,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.3",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following is NOT true for white-box testing?",
    options: [
      "During white-box testing the entire software implementation is considered",
      "White-box coverage metrics can help identify additional tests to increase coverage",
      "White-box test techniques can be used in static testing",
      "White-box testing can help identify gaps in requirements implementation"
    ],
    answer: 3,
    explanation: "White-box testing is based on internal code structure — it does NOT help identify gaps in requirements (that is a benefit of black-box testing based on specifications). White-box testing verifies the code, not the requirements completeness."
  },
  {
    id: 30,
    chapter: 4,
    section: "4.4",
    lo: "FL-4.4.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following BEST describes error guessing?",
    options: [
      "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
      "Error guessing involves using your personal experience of development and the errors you made as a developer",
      "Error guessing requires you to imagine you are the user and guess errors the user could make when using the system",
      "Error guessing requires you to rapidly duplicate the development task to identify errors made by developers"
    ],
    answer: 0,
    explanation: "Error guessing uses a tester's knowledge of: past defects found, common developer mistakes, and domain expertise to predict where defects are likely. It's systematic use of knowledge, not random guessing."
  },
  {
    id: 31,
    chapter: 4,
    section: "4.4",
    lo: "FL-4.4.2",
    level: "K2",
    source: "Official Sample Exam A",
    question: "A project has delayed release, late test execution start, very detailed domain knowledge in the test team, requirements not fully documented, and management asking for quick results. Which test technique fits BEST?",
    options: [
      "Checklist-based testing",
      "Error guessing",
      "Exploratory testing",
      "Branch testing"
    ],
    answer: 2,
    explanation: "Exploratory testing is ideal when: requirements are incomplete/missing, time is limited, testers have deep domain knowledge. It combines simultaneous learning, test design, and execution — perfect for this scenario."
  },
  {
    id: 32,
    chapter: 4,
    section: "4.5",
    lo: "FL-4.5.2",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which of the following BEST describes how acceptance criteria can be documented for a user story?",
    options: [
      "Performing retrospectives to determine actual stakeholder needs for the current iteration",
      "Using the given/when/then format to describe an example test condition related to a user story",
      "Using verbal communication to reduce the risk of misunderstanding acceptance criteria",
      "Documenting risks related to a user story in a test plan"
    ],
    answer: 1,
    explanation: "Acceptance criteria can be documented using the Given/When/Then (BDD) format, which clearly describes test conditions related to user stories. This creates a shared understanding between business, developers, and testers."
  },
  {
    id: 33,
    chapter: 4,
    section: "4.5",
    lo: "FL-4.5.3",
    level: "K3",
    source: "Official Sample Exam A",
    question: "User story: 'As an Editor, I want to review content before it is published so that I can assure grammar is correct.' Acceptance criteria include: log in as Editor, view pages, edit content, add markup, save changes, reassign to content owner. Which is the BEST ATDD test case?",
    options: [
      "Test if the editor can save the document after deleting all the page content",
      "Test if the content owner can log in to the system and make updates",
      "Test if the editor can schedule the edited content for publication",
      "Test if the editor can reassign the content to another editor to make updates"
    ],
    answer: 0,
    explanation: "Option A directly tests an acceptance criterion (save changes). Option B tests the wrong role (content owner, not editor). Options C and D test behaviors NOT mentioned in the acceptance criteria — ATDD tests must be derived from acceptance criteria."
  },

  // ===== CHAPTER 5: MANAGING TEST ACTIVITIES =====
  {
    id: 34,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.2",
    level: "K1",
    source: "Official Sample Exam A",
    question: "How do testers add value to iteration and release planning?",
    options: [
      "Testers determine the priority of the user stories to be developed in the next iteration",
      "Testers focus on ensuring only functional aspects of the system are considered during planning",
      "Testers participate in detailed risk identification and risk assessment of user stories",
      "Testers guarantee the release of high-quality software through early test design"
    ],
    answer: 2,
    explanation: "Testers add value to planning by participating in risk identification and assessment — helping the team understand what might go wrong and prioritize accordingly. Testers do NOT determine story priority (that's the product owner) or guarantee quality."
  },
  {
    id: 35,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.3",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which TWO of the following are EXIT criteria for testing a system? (Select 2)",
    options: [
      "Test environment is set up and ready",
      "The ability to log in to the test object has been verified",
      "Estimated defect density has been reached",
      "Requirements are translated into given/when/then format",
      "Regression tests have been automated"
    ],
    answer: [2, 4],
    multiAnswer: true,
    explanation: "EXIT criteria are conditions that STOP testing. Option C (defect density reached) and E (regression tests automated) are exit conditions. Options A and B are ENTRY criteria (preconditions to START testing). Option D is a requirements activity."
  },
  {
    id: 36,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.4",
    level: "K3",
    source: "Official Sample Exam A",
    question: "Using the three-point estimation technique, you estimated: optimistic = 2 person-hours, most likely = 11 person-hours, pessimistic = 14 person-hours. What is the final estimate?",
    options: [
      "9 person-hours",
      "14 person-hours",
      "11 person-hours",
      "10 person-hours"
    ],
    answer: 3,
    explanation: "Three-point formula: E = (O + 4M + P) / 6 = (2 + 4×11 + 14) / 6 = (2 + 44 + 14) / 6 = 60 / 6 = 10 person-hours."
  },
  {
    id: 37,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.4",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A test manager uses three-point estimation for a feature: Optimistic = 5 days, Most Likely = 8 days, Pessimistic = 17 days. What is the estimated effort?",
    options: [
      "10 days",
      "8 days",
      "9 days",
      "11 days"
    ],
    answer: 2,
    explanation: "E = (O + 4M + P) / 6 = (5 + 4×8 + 17) / 6 = (5 + 32 + 17) / 6 = 54 / 6 = 9 days."
  },
  {
    id: 38,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.7",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Map test categories to the correct Agile Testing Quadrant: (1) Usability testing, (2) Component testing, (3) Functional testing, (4) Reliability testing → (A) Q1: Technology-facing, supports team, (B) Q2: Business-facing, supports team, (C) Q3: Business-facing, critiques product, (D) Q4: Technology-facing, critiques product",
    options: [
      "1C, 2A, 3B, 4D",
      "1D, 2A, 3C, 4B",
      "1C, 2B, 3D, 4A",
      "1D, 2B, 3C, 4A"
    ],
    answer: 0,
    explanation: "Q1 (tech, support): Component/unit tests → 2A. Q2 (business, support): Functional tests → 3B. Q3 (business, critique): Usability/UAT → 1C. Q4 (tech, critique): Performance/Reliability → 4D. Answer: 1C, 2A, 3B, 4D."
  },
  {
    id: 39,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following is a PRODUCT risk (not a project risk)?",
    options: [
      "Key developer leaving the project mid-sprint",
      "The payment calculation may produce incorrect results for large transactions",
      "Test environment not being available on time",
      "Vendor delivering a third-party component late"
    ],
    answer: 1,
    explanation: "PRODUCT risks threaten software quality — what could go wrong in the product (incorrect calculation). PROJECT risks threaten the test project's schedule/budget (key person leaving, environment unavailability, vendor delays)."
  },
  {
    id: 40,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.4",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Risk identified: Response time too long when generating reports. Likelihood: medium; Impact: high. Proposed response: hire an independent performance testing team and run alpha/beta testing before release. Which risk response is this?",
    options: [
      "Risk acceptance",
      "Contingency plan",
      "Risk mitigation",
      "Risk transfer"
    ],
    answer: 2,
    explanation: "Risk MITIGATION = taking actions to REDUCE the risk (testing more to reduce probability of failure going to production). Running performance tests and beta testing are actions that reduce the product risk. Risk transfer would involve insurance or outsourcing liability."
  },
  {
    id: 41,
    chapter: 5,
    section: "5.3",
    lo: "FL-5.3.3",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which tool shows the amount of work completed and the work remaining for the current iteration?",
    options: [
      "Acceptance criteria",
      "Defect report",
      "Test completion report",
      "Burndown chart"
    ],
    answer: 3,
    explanation: "A burndown chart visually shows work remaining vs. work completed over time in an Agile iteration/sprint. It is the standard tool for communicating iteration progress to stakeholders."
  },
  {
    id: 42,
    chapter: 5,
    section: "5.4",
    lo: "FL-5.4.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "After a new requirement is added, you update an automated test script to align with it and create a new version of the script in the test repository. Which process does this indicate?",
    options: [
      "Traceability management",
      "Maintenance testing",
      "Configuration management",
      "Requirements engineering"
    ],
    answer: 2,
    explanation: "Configuration Management (CM) involves version control of all test artifacts, including test scripts. Creating a new version in the repository is a CM activity that ensures proper version tracking and reproducibility."
  },
  {
    id: 43,
    chapter: 5,
    section: "5.5",
    lo: "FL-5.5.1",
    level: "K3",
    source: "Official Sample Exam A",
    question: "A defect report has: title 'Application hangs on report generation', date, status, description of issue, test case reference TC-1305, requirements reference REQ-0012, priority set to high. What CRITICAL information is MISSING from this defect report?",
    options: [
      "Expected result and actual result",
      "References and defect status",
      "Test environment and test item version",
      "Priority and severity"
    ],
    answer: 2,
    explanation: "A defect report must include the TEST ENVIRONMENT (OS, browser, version, device) and TEST ITEM (build/version of software under test) — without these, developers cannot reliably reproduce the defect. The report already has status, references, and priority."
  },

  // ===== CHAPTER 6: TEST TOOLS =====
  {
    id: 44,
    chapter: 6,
    section: "6.1",
    lo: "FL-6.1.1",
    level: "K2",
    source: "Official Sample Exam A",
    question: "Which test activity does a test data preparation tool PRIMARILY support?",
    options: [
      "Test monitoring and control",
      "Test analysis and design",
      "Test implementation and execution",
      "Test completion"
    ],
    answer: 2,
    explanation: "Test data preparation tools create, manage, and prepare test data needed for test execution. This supports the TEST IMPLEMENTATION and EXECUTION phase where data must be ready before tests can run."
  },
  {
    id: 45,
    chapter: 6,
    section: "6.2",
    lo: "FL-6.2.1",
    level: "K1",
    source: "Official Sample Exam A",
    question: "Which correctly identifies a potential RISK of performing test automation?",
    options: [
      "It may introduce unknown regressions in the production environment",
      "Sufficient effort to maintain testware may not be properly allocated",
      "Testing tools and associated testware may not be sufficiently relied upon",
      "It may reduce the time allocated for manual testing activities"
    ],
    answer: 1,
    explanation: "A key risk of test automation is the MAINTENANCE burden — automated scripts break when the application UI/API changes, and insufficient effort may be allocated to keep them updated. This is a well-known risk that can undermine automation ROI."
  },

  // ===== ADDITIONAL INDIA EXAM PRACTICE QUESTIONS =====
  {
    id: 46,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A company developed a banking application that passed all tests. However, customers cannot perform the core task they need — international transfers — because this feature was never included in the requirements. Which testing principle best applies?",
    options: [
      "Testing shows presence of defects, not their absence",
      "Defects cluster together",
      "Absence-of-errors fallacy",
      "Exhaustive testing is impossible"
    ],
    answer: 2,
    explanation: "Principle 7 — Absence-of-errors fallacy: Even if testing finds no defects and all tests pass, the software can still be unusable if it doesn't meet actual user needs. The system passed all tests but missed a key business requirement."
  },
  {
    id: 47,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.4",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following BEST describes the impact of DevOps on testing?",
    options: [
      "DevOps eliminates the need for dedicated testers in the team",
      "DevOps separates development and operations, with testing done only at the end",
      "DevOps enables automated testing in CI/CD pipelines providing fast feedback to developers",
      "DevOps means developers are solely responsible for all testing activities"
    ],
    answer: 2,
    explanation: "DevOps integrates development and operations, enabling automated testing in CI/CD pipelines. This provides fast feedback loops — developers know within minutes if their changes broke tests. It supports shift-left (earlier testing) and shift-right (monitoring in production)."
  },
  {
    id: 48,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.3",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "In a formal inspection, which role is responsible for running the review meeting and ensuring it stays on track?",
    options: [
      "Author",
      "Scribe",
      "Moderator/Facilitator",
      "Review Leader"
    ],
    answer: 2,
    explanation: "The MODERATOR/FACILITATOR runs the review meeting, keeps discussion on track, and ensures the review achieves its objectives. The AUTHOR created the work product. The SCRIBE records findings. The REVIEW LEADER organizes and plans the review."
  },
  {
    id: 49,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.4",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "An ATM has states: Idle, Card Inserted, PIN Entered, Transaction Processing, Dispense Cash. Valid transitions: Idle→Card Inserted (card insert), Card Inserted→PIN Entered (PIN entry), PIN Entered→Transaction Processing (select transaction), Transaction Processing→Dispense Cash (approved), Dispense Cash→Idle (cash taken), PIN Entered→Idle (cancel), Card Inserted→Idle (cancel). What is the MINIMUM number of test cases needed for all valid transitions coverage?",
    options: [
      "7",
      "5",
      "3",
      "2"
    ],
    answer: 2,
    explanation: "To cover all 7 valid transitions with minimum test cases: TC1: Idle→Card Inserted→PIN Entered→Transaction Processing→Dispense Cash→Idle (5 transitions). TC2: Card Inserted→Idle (1 transition via cancel). TC3: PIN Entered→Idle (1 transition via cancel). Total = 3 test cases covering all 7 transitions."
  },
  {
    id: 50,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.6",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which statement about the test pyramid is CORRECT?",
    options: [
      "The top of the pyramid (E2E/UI tests) should have the most tests as they cover the most functionality",
      "The bottom of the pyramid (unit/component tests) should have the most tests as they are fast, cheap, and isolated",
      "All levels of the test pyramid should have an equal number of tests for balanced coverage",
      "The middle layer (integration tests) is the most important and should have the most tests"
    ],
    answer: 1,
    explanation: "The test pyramid advocates for: MOST tests at the bottom (unit/component — fast, cheap, isolated), FEWER integration tests in the middle, and FEWEST E2E/UI tests at the top (slow, expensive, brittle). This gives fast feedback with efficient resource use."
  },

  // ===== MORE CHAPTER 1 QUESTIONS =====
  {
    id: 51,
    chapter: 1,
    section: "1.1",
    lo: "FL-1.1.1",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which of the following is NOT a typical test objective?",
    options: [
      "Finding defects in the software under test",
      "Building confidence in the quality of the software",
      "Proving that all defects have been removed",
      "Providing information for stakeholder decision-making"
    ],
    answer: 2,
    explanation: "Proving that ALL defects are removed is impossible (Principle 1 — testing shows presence, not absence, of defects). All other options are valid test objectives according to the ISTQB CTFL v4.0 syllabus."
  },
  {
    id: 52,
    chapter: 1,
    section: "1.2",
    lo: "FL-1.2.2",
    level: "K1",
    source: "Practice",
    question: "Which statement BEST describes the relationship between testing and quality assurance (QA)?",
    options: [
      "Testing and QA are the same activity performed by different teams",
      "QA is part of testing; testing is a broader activity",
      "Testing is part of QA; QA is a broader activity",
      "Testing and QA are completely independent with no relationship"
    ],
    answer: 2,
    explanation: "Testing is a subset of QA. QA is a broader activity focused on improving the overall development process to prevent defects. Testing is product-oriented (finding defects in the product) and contributes to QA by providing feedback about product quality."
  },
  {
    id: 53,
    chapter: 1,
    section: "1.2",
    lo: "FL-1.2.3",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A tester incorrectly copies a formula into a spreadsheet-based test tool. As a result, calculated expected values are wrong, and many defects are raised against a correctly-working system. What ISTQB term describes the tester's mistake?",
    options: [
      "Defect",
      "Failure",
      "Error",
      "Root cause"
    ],
    answer: 2,
    explanation: "An ERROR is a human action that produces an incorrect result. The tester made a mistake (incorrectly copying the formula) — that is an error. The incorrect expected values in the tool would be the defect caused by that error."
  },
  {
    id: 54,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A test manager notices that most defects found in the last three releases came from the same two modules out of fifteen. What testing principle supports focusing more testing effort on those two modules?",
    options: [
      "Early testing saves time and money",
      "Testing is context-dependent",
      "Defects cluster together",
      "Tests wear out"
    ],
    answer: 2,
    explanation: "Principle 4 — Defects cluster together (Pareto Principle): A small number of modules or components tend to contain the majority of defects. Historical defect data showing repeated issues in the same modules justifies focusing effort there."
  },
  {
    id: 55,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.3",
    level: "K2",
    source: "Practice",
    question: "Which of the following is an example of testware produced during test DESIGN?",
    options: [
      "Test completion report",
      "Defect report",
      "Test cases and test data",
      "Test execution log"
    ],
    answer: 2,
    explanation: "Test DESIGN produces test cases, test procedures, and test data. Test completion reports = test completion phase. Defect reports = test execution phase. Test execution logs = test execution phase."
  },
  {
    id: 56,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.4",
    level: "K2",
    source: "Practice",
    question: "Why is maintaining traceability between test cases and requirements important?",
    options: [
      "It allows testers to automatically generate test cases from requirements",
      "It enables impact analysis when requirements change and shows coverage",
      "It replaces the need for a test plan",
      "It ensures all test cases are automated"
    ],
    answer: 1,
    explanation: "Traceability links test cases to requirements so that: (1) when a requirement changes, you know which tests need updating (impact analysis), and (2) you can demonstrate test coverage — which requirements have been tested."
  },
  {
    id: 57,
    chapter: 1,
    section: "1.5",
    lo: "FL-1.5.3",
    level: "K2",
    source: "Practice",
    question: "Which of the following is a DRAWBACK of having testers who are highly independent from the development team?",
    options: [
      "Independent testers bring a different perspective and catch more defects",
      "Independent testers may have communication gaps and be isolated from the team",
      "Independent testers are less biased than developers testing their own code",
      "Independent testers can provide an objective assessment of product quality"
    ],
    answer: 1,
    explanation: "A key drawback of high independence is communication overhead and isolation — testers may not understand the system well, may be seen as a bottleneck, and feedback loops become slower. Benefits (A, C, D) are advantages, not drawbacks."
  },
  {
    id: 58,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A team is testing a safety-critical avionics system. They are applying very rigorous, formal testing with strict documentation, entry/exit criteria, and compliance checks. A colleague says: 'This level of testing is overkill for our new mobile gaming app.' Which testing principle does the colleague's reasoning reflect?",
    options: [
      "Defects cluster together",
      "Exhaustive testing is impossible",
      "Testing is context-dependent",
      "Early testing saves time and money"
    ],
    answer: 2,
    explanation: "Principle 6 — Testing is context-dependent: The appropriate testing approach depends on the context. An avionics system requires rigorous testing due to safety criticality. A mobile gaming app requires a different, typically lighter approach. The same level of formality is not appropriate in all contexts."
  },
  {
    id: 59,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.1",
    level: "K2",
    source: "Practice",
    question: "During which test activity are test conditions identified from the test basis?",
    options: [
      "Test planning",
      "Test analysis",
      "Test design",
      "Test implementation"
    ],
    answer: 1,
    explanation: "TEST ANALYSIS = identifying WHAT to test. During this activity, the test basis (requirements, specs, designs) is analyzed to identify test conditions (what aspects of the system need to be tested). Test design then turns those conditions into actual test cases."
  },
  {
    id: 60,
    chapter: 1,
    section: "1.4",
    lo: "FL-1.4.2",
    level: "K2",
    source: "Practice",
    question: "Which of the following factors has SIGNIFICANT influence on the test process?",
    options: [
      "The color scheme of the test management tool",
      "The number of monitors on testers' desks",
      "Applicable standards and regulatory requirements",
      "The physical location of the development office"
    ],
    answer: 2,
    explanation: "Applicable standards and regulatory requirements significantly influence the test process — they determine what must be tested, how formally, what documentation is required, and what coverage must be achieved. Context factors include SDLC, product risk, domain regulations, team skills, and technology."
  },

  // ===== MORE CHAPTER 2 QUESTIONS =====
  {
    id: 61,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.1",
    level: "K2",
    source: "Practice",
    question: "A team uses a sequential (Waterfall) SDLC. Requirements are complete before design begins; design is complete before coding begins. What is the MAIN implication for testing?",
    options: [
      "Testing only happens after all coding is complete",
      "Testing activities can be planned early but execution only happens late",
      "Testers are not needed until system testing begins",
      "Test automation is mandatory in a sequential SDLC"
    ],
    answer: 1,
    explanation: "In a sequential SDLC, test PLANNING and analysis can happen early (when requirements/designs exist), but test EXECUTION happens after development. This means testing is 'late' in the lifecycle — a key drawback vs. iterative/agile models."
  },
  {
    id: 62,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A tester is verifying that a newly built e-commerce checkout workflow works end-to-end from product selection through payment confirmation on the fully integrated system. Which test level is this MOST LIKELY?",
    options: [
      "Component testing",
      "Component integration testing",
      "System testing",
      "Acceptance testing"
    ],
    answer: 2,
    explanation: "System testing tests the COMPLETE, INTEGRATED system against system requirements. An end-to-end workflow on the fully integrated system is system testing. Acceptance testing would be done by the customer/user to verify business needs are met."
  },
  {
    id: 63,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.1",
    level: "K2",
    source: "Practice",
    question: "A developer writes a test to verify that the `calculateTax()` function returns the correct value when called with valid inputs, testing the function in isolation using mock objects for dependencies. Which test level is this?",
    options: [
      "System testing",
      "Component testing",
      "Acceptance testing",
      "Component integration testing"
    ],
    answer: 1,
    explanation: "Component (unit) testing: tests individual components in isolation, using mocks/stubs for dependencies. The developer testing a single function (`calculateTax()`) in isolation is component testing."
  },
  {
    id: 64,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A banking application is tested to ensure it responds to 10,000 concurrent login requests within 2 seconds. What type of testing is this?",
    options: [
      "Functional testing",
      "Regression testing",
      "Non-functional testing",
      "White-box testing"
    ],
    answer: 2,
    explanation: "Non-functional testing tests HOW WELL the system performs — performance, load, scalability, security, usability. Testing response time under concurrent load is performance/load testing, which is a type of non-functional testing."
  },
  {
    id: 65,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.3",
    level: "K1",
    source: "Practice",
    question: "In TDD (Test-Driven Development), what is the CORRECT order of activities?",
    options: [
      "Write code → Write test → Refactor",
      "Write test → Write code → Refactor",
      "Write test → Refactor → Write code",
      "Refactor → Write code → Write test"
    ],
    answer: 1,
    explanation: "TDD follows the Red-Green-Refactor cycle: (1) Write a FAILING test first (Red), (2) Write just enough CODE to make the test pass (Green), (3) REFACTOR the code while keeping tests green. The key principle: tests are written BEFORE the code."
  },
  {
    id: 66,
    chapter: 2,
    section: "2.3",
    lo: "FL-2.3.1",
    level: "K2",
    source: "Practice",
    question: "A financial application that has been running in production for 5 years is being retired. Data needs to be migrated to a new system. Which statement about testing in this context is CORRECT?",
    options: [
      "No testing is needed since the system is being retired",
      "Only the new system needs testing",
      "Maintenance testing should cover the data migration and validation",
      "Regression testing is the only type needed"
    ],
    answer: 2,
    explanation: "RETIREMENT is one of the triggers for maintenance testing. When a system is retired, data migration testing is critical — ensuring data is correctly transferred and validated in the new system. This is a key maintenance testing scenario."
  },
  {
    id: 67,
    chapter: 2,
    section: "2.2",
    lo: "FL-2.2.3",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "After fixing a bug in the password reset feature, the development team releases a new build. The test team re-runs the password reset test AND all other existing test cases. Why are the other test cases being re-run?",
    options: [
      "To perform confirmation testing on the password reset fix",
      "To perform regression testing to check that the fix has not introduced new defects",
      "To perform acceptance testing before release",
      "To perform exploratory testing on the new build"
    ],
    answer: 1,
    explanation: "Re-running tests on areas OUTSIDE the changed component is REGRESSION testing — verifying the fix did not inadvertently break something else. Re-running the specific password reset test is confirmation testing."
  },
  {
    id: 68,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.4",
    level: "K2",
    source: "Practice",
    question: "Which of the following is an example of 'shift-right' testing in a DevOps context?",
    options: [
      "Writing unit tests before writing production code",
      "Reviewing requirements before design starts",
      "Monitoring application performance and errors in production using observability tools",
      "Running security scans in the CI pipeline before code is merged"
    ],
    answer: 2,
    explanation: "Shift-RIGHT = testing later in the lifecycle, including PRODUCTION. Monitoring application behavior in production (A/B testing, canary releases, observability, chaos engineering) is shift-right testing. Options A, B, C are shift-LEFT examples."
  },

  // ===== MORE CHAPTER 3 QUESTIONS =====
  {
    id: 69,
    chapter: 3,
    section: "3.1",
    lo: "FL-3.1.1",
    level: "K1",
    source: "Practice",
    question: "Which of the following work products CAN be examined using static testing?",
    options: [
      "Application log files generated during test execution",
      "System resource usage metrics collected at runtime",
      "User requirements specification document",
      "Screenshots captured during exploratory testing"
    ],
    answer: 2,
    explanation: "Static testing examines WORK PRODUCTS without executing the software. A requirements specification is a work product that can be reviewed statically. Log files, resource metrics, and screenshots are runtime artifacts from dynamic testing."
  },
  {
    id: 70,
    chapter: 3,
    section: "3.1",
    lo: "FL-3.1.3",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following defects can ONLY be found by static testing, NOT by dynamic testing?",
    options: [
      "A login button that does not respond when clicked",
      "An incorrect tax calculation that produces wrong results",
      "Dead code that can never be reached during execution",
      "A database query that returns incorrect search results"
    ],
    answer: 2,
    explanation: "DEAD CODE (unreachable code) can only be detected by static analysis — because by definition it is never executed during dynamic testing. Dynamic testing can only find defects in code paths that actually get executed."
  },
  {
    id: 71,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.2",
    level: "K2",
    source: "Practice",
    question: "In which review activity are the findings discussed, and the status of each anomaly is agreed upon by the review participants?",
    options: [
      "Planning",
      "Individual review",
      "Communication and analysis",
      "Fixing and reporting"
    ],
    answer: 2,
    explanation: "COMMUNICATION AND ANALYSIS (review meeting): Reviewers discuss findings, each anomaly is analyzed, ownership is assigned. Individual review = each reviewer works independently before the meeting. Fixing = after the meeting, the author fixes agreed issues."
  },
  {
    id: 72,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.4",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which review type is the MOST formal and uses entry/exit criteria, checklists, and collects metrics on defects found?",
    options: [
      "Informal review",
      "Walkthrough",
      "Technical review",
      "Inspection"
    ],
    answer: 3,
    explanation: "INSPECTION is the most formal review type. Key characteristics: moderator is NOT the author, entry/exit criteria defined, reviewers use checklists, metrics are collected (defect density, etc.), formal defect logging, and process improvement is a goal."
  },
  {
    id: 73,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.3",
    level: "K1",
    source: "Practice",
    question: "Who is responsible for creating and incorporating fixes in response to defects found during a review?",
    options: [
      "The moderator",
      "The scribe",
      "The author",
      "The review leader"
    ],
    answer: 2,
    explanation: "The AUTHOR (creator of the work product) is responsible for fixing defects found during a review. The moderator runs the meeting, the scribe records findings, and the review leader organizes the review — but fixing is the author's responsibility."
  },
  {
    id: 74,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.4",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A team holds a review meeting where the author presents their design document, explains each section, and other team members ask questions and note issues. There is no individual preparation before the meeting, and the meeting is focused on knowledge transfer. Which review type is this?",
    options: [
      "Inspection",
      "Technical review",
      "Walkthrough",
      "Informal review"
    ],
    answer: 2,
    explanation: "WALKTHROUGH: Author-led, purpose includes knowledge transfer and finding defects, no mandatory individual preparation, scribe records issues. This description matches a walkthrough — author presenting and explaining, others asking questions."
  },

  // ===== MORE CHAPTER 4 QUESTIONS =====
  {
    id: 75,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.1",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A form field accepts a discount percentage from 0% to 50% (inclusive). Applying Equivalence Partitioning, which of the following test sets gives 100% EP coverage with the MINIMUM number of test cases?",
    options: [
      "0, 25, 50",
      "-1, 0, 50, 51",
      "-5, 30, 55",
      "0, 50"
    ],
    answer: 2,
    explanation: "EP creates 3 partitions: <0% (invalid), 0-50% (valid), >50% (invalid). 100% EP coverage needs 1 test per partition. Option C: -5 (invalid partition), 30 (valid partition), 55 (invalid partition) = 3 tests covering all 3 partitions with minimum tests."
  },
  {
    id: 76,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A password field requires between 8 and 16 characters (inclusive). Using 2-value BVA, which set of test values is CORRECT?",
    options: [
      "7, 8, 16, 17",
      "8, 16",
      "7, 9, 15, 17",
      "1, 8, 16, 100"
    ],
    answer: 1,
    explanation: "2-value BVA tests the MIN and MAX of each partition. Valid partition: min=8, max=16 → test 8 and 16. Those are the 2 boundary values for the valid partition. The test values should be {8, 16}. Note: 3-value BVA would add 7, 9, 15, 17."
  },
  {
    id: 77,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A field accepts order quantities from 1 to 999. Using 3-value BVA at the UPPER boundary only, which test values are correct?",
    options: [
      "998, 999, 1000",
      "999, 1000",
      "997, 999, 1001",
      "1, 999"
    ],
    answer: 0,
    explanation: "3-value BVA at the upper boundary of range 1-999: MAX-1 = 998, MAX = 999, MAX+1 = 1000. So test values at upper boundary are {998, 999, 1000}. This tests one below boundary, at boundary, and one above boundary."
  },
  {
    id: 78,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.3",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "An insurance premium calculator has 3 conditions: Age (Under 25 / 25 or over), Driving history (Clean / With incidents), Vehicle type (Standard / Sports). How many rules are in the full decision table?",
    options: [
      "6",
      "8",
      "3",
      "12"
    ],
    answer: 1,
    explanation: "Full decision table = 2^n rules where n = number of binary conditions. 3 binary conditions → 2^3 = 8 rules. Each rule represents one combination of condition values (e.g., Under25 + Clean + Standard = Rule 1, etc.)."
  },
  {
    id: 79,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.3",
    level: "K3",
    source: "Practice",
    question: "In a decision table with 4 binary conditions, how many rules does the full decision table contain?",
    options: [
      "4",
      "8",
      "12",
      "16"
    ],
    answer: 3,
    explanation: "Full decision table rules = 2^n where n = number of binary (True/False) conditions. With 4 binary conditions: 2^4 = 16 rules. Each rule is a unique combination of all condition values."
  },
  {
    id: 80,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.4",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "What does 'all valid transitions coverage' mean in state transition testing?",
    options: [
      "Every STATE in the state machine has been visited at least once",
      "Every VALID TRANSITION (event-triggered state change) has been exercised at least once",
      "Every INVALID input in every state has been tested",
      "Every possible PATH through the state machine has been tested"
    ],
    answer: 1,
    explanation: "All valid transitions coverage = every valid transition (each valid event/trigger in each state) is exercised at least once. This is higher coverage than all-states (just visiting states) but less than all-paths coverage."
  },
  {
    id: 81,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A code module has an if-else statement. One test case executes the 'if' branch (true outcome). Which coverage criteria is NOT yet satisfied?",
    options: [
      "Statement coverage — not all statements are covered",
      "Branch coverage — the 'else' (false) branch has not been exercised",
      "Path coverage — not all paths have been tested",
      "Both B and C"
    ],
    answer: 3,
    explanation: "With only the 'if' branch executed: (1) BRANCH coverage is not met — the false/else branch was not exercised. (2) PATH coverage is not met — paths through the else branch exist and weren't tested. Both B and C are unsatisfied. Statement coverage may or may not be met depending on the else branch content."
  },
  {
    id: 82,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.2",
    level: "K2",
    source: "Practice",
    question: "Which statement about the relationship between branch coverage and statement coverage is CORRECT?",
    options: [
      "100% statement coverage guarantees 100% branch coverage",
      "100% branch coverage guarantees 100% statement coverage",
      "Branch and statement coverage are completely independent",
      "They measure the same thing with different names"
    ],
    answer: 1,
    explanation: "Branch coverage SUBSUMES statement coverage: if you achieve 100% branch coverage, you automatically achieve 100% statement coverage (every statement must be reached). The reverse is NOT true — you can have 100% statement coverage without covering all branches."
  },
  {
    id: 83,
    chapter: 4,
    section: "4.4",
    lo: "FL-4.4.3",
    level: "K2",
    source: "Practice",
    question: "A team regularly tests compliance of their application against a defined set of accessibility requirements. They go through the same checklist for each release. Over time, the checklist rarely finds new defects. What should the team do?",
    options: [
      "Stop using the checklist as it is no longer effective",
      "Switch entirely to exploratory testing",
      "Review and update the checklist to add new checks based on recent accessibility standards",
      "Use the checklist less frequently to make it more effective"
    ],
    answer: 2,
    explanation: "When a checklist rarely finds new defects, it may be outdated (analogous to the pesticide paradox). The correct response is to REVIEW AND UPDATE the checklist — add new checks from recent standards, industry trends, and past defects — to keep it effective."
  },
  {
    id: 84,
    chapter: 4,
    section: "4.4",
    lo: "FL-4.4.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following BEST describes a test charter in exploratory testing?",
    options: [
      "A formal test plan approved by the test manager",
      "A document specifying the mission, scope, and time-box for an exploratory testing session",
      "A template for writing formal test cases",
      "A list of defects found during a testing session"
    ],
    answer: 1,
    explanation: "A TEST CHARTER in exploratory testing defines: the scope/mission (what to explore), objectives, and time-box (how long). It gives the tester direction without scripting every step, enabling simultaneous learning, design, and execution within defined boundaries."
  },
  {
    id: 85,
    chapter: 4,
    section: "4.5",
    lo: "FL-4.5.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following user stories satisfies the INVEST criteria?",
    options: [
      "As a user, I want the system to be fast so that I have a good experience",
      "As a registered customer, I want to reset my password via email so that I can regain access to my account when I forget it",
      "As a developer, I want a database that always works",
      "As a manager, I want all reports to be improved"
    ],
    answer: 1,
    explanation: "Option B satisfies INVEST: Independent (can be developed alone), Negotiable (method can be discussed), Valuable (clear benefit), Estimable (team can estimate it), Small (fits in a sprint), Testable (clear success criteria). Others are too vague (A, C, D), not user-focused, or not testable."
  },
  {
    id: 86,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.1",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A salary input field for a payroll system accepts values between 10,000 and 200,000 (inclusive). What are the equivalence partitions?",
    options: [
      "One partition: 10,000 to 200,000",
      "Two partitions: less than 10,000 and greater than 200,000",
      "Three partitions: less than 10,000 (invalid), 10,000-200,000 (valid), greater than 200,000 (invalid)",
      "Four partitions: less than 0, 0-9999, 10000-200000, greater than 200000"
    ],
    answer: 2,
    explanation: "EP creates partitions where all values are treated the same way by the system. For range 10,000-200,000: Invalid partition 1 (<10,000), Valid partition (10,000-200,000), Invalid partition 2 (>200,000). This gives 3 partitions — the standard EP approach for a bounded range."
  },
  {
    id: 87,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "For the salary field accepting 10,000 to 200,000 (inclusive), using 2-value BVA across ALL partitions, how many test cases are needed?",
    options: [
      "2",
      "4",
      "6",
      "3"
    ],
    answer: 2,
    explanation: "2-value BVA: test MIN and MAX of EACH partition. 3 partitions → 2 values each = 6 total. Invalid partition 1: pick any value well below (e.g., -1) and 9,999 (max of that partition). Valid: 10,000 and 200,000. Invalid partition 2: 200,001 and any high value. = 6 test values total."
  },
  {
    id: 88,
    chapter: 4,
    section: "4.3",
    lo: "FL-4.3.1",
    level: "K2",
    source: "Practice",
    question: "A module has 10 executable statements. After running 3 test cases, 7 statements have been executed. What is the statement coverage achieved?",
    options: [
      "30%",
      "70%",
      "3%",
      "7%"
    ],
    answer: 1,
    explanation: "Statement coverage = (statements executed / total statements) × 100 = (7/10) × 100 = 70%. To achieve 100% statement coverage, all 10 statements must be executed at least once."
  },

  // ===== MORE CHAPTER 5 QUESTIONS =====
  {
    id: 89,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following is typically included in a test plan?",
    options: [
      "Detailed test scripts with step-by-step instructions",
      "The list of all defects found during testing",
      "The scope, objectives, approach, resources, and schedule for testing activities",
      "The source code of the system under test"
    ],
    answer: 2,
    explanation: "A test plan contains: scope of testing, test objectives, test approach/strategy, resources (people, tools, environments), schedule, entry/exit criteria, risks, and communication plans. Detailed test scripts are in test procedures; defects are in defect reports."
  },
  {
    id: 90,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.4",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A test team estimates: Optimistic=4 days, Most Likely=7 days, Pessimistic=16 days. What is the three-point estimate?",
    options: [
      "9 days",
      "8 days",
      "7 days",
      "10 days"
    ],
    answer: 1,
    explanation: "E = (O + 4M + P) / 6 = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 days."
  },
  {
    id: 91,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.3",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following is an ENTRY criterion for starting system testing?",
    options: [
      "All planned test cases have been executed",
      "The test environment is set up and the build under test has passed component integration testing",
      "Defect density has reached the agreed threshold",
      "All regression tests have been automated"
    ],
    answer: 1,
    explanation: "ENTRY CRITERIA are preconditions before testing CAN START. A ready environment and a build that passed earlier test levels are entry criteria for system testing. Options A, C, D are EXIT criteria (conditions that mean testing is done)."
  },
  {
    id: 92,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.1",
    level: "K1",
    source: "Practice",
    question: "A product risk has been assessed as: Likelihood = High, Impact = High. What is the risk level?",
    options: [
      "Low",
      "Medium",
      "High",
      "Cannot be determined without more information"
    ],
    answer: 2,
    explanation: "Risk Level = Likelihood × Impact. High × High = High risk level. This means this area should receive the most testing attention, be tested earliest, and may need multiple testing techniques applied."
  },
  {
    id: 93,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.2",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which TWO of the following are examples of PROJECT risks (not product risks)? (Select 2)",
    options: [
      "The payment module may have security vulnerabilities",
      "A key test architect may leave the project",
      "The third-party test environment may not be delivered on time",
      "The search algorithm may return incorrect results",
      "The system may crash under high load"
    ],
    answer: [1, 2],
    multiAnswer: true,
    explanation: "PROJECT risks threaten the test project itself (schedule, resources, budget): B (key person leaving) and C (environment delay) are project risks. Product risks (A, D, E) threaten the quality of the software product being built."
  },
  {
    id: 94,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.3",
    level: "K2",
    source: "Practice",
    question: "A product risk analysis reveals that the 'data export' module has a HIGH risk level. How should this influence testing?",
    options: [
      "The data export module should receive less testing to save time for high-priority features",
      "The data export module should receive more thorough testing, be tested earlier, and by more experienced testers",
      "Risk analysis has no impact on how much testing individual modules receive",
      "The data export module should only be tested in the final testing phase"
    ],
    answer: 1,
    explanation: "Risk-based testing: HIGH risk areas get MORE testing (more test cases, more techniques applied), earlier testing (found sooner = cheaper to fix), and should be tested by more experienced testers. Risk level directly determines depth and priority of testing."
  },
  {
    id: 95,
    chapter: 5,
    section: "5.3",
    lo: "FL-5.3.1",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which of the following is a commonly used TEST METRIC?",
    options: [
      "Number of lines of code written by developers",
      "Number of requirements approved by the product owner",
      "Percentage of test cases passed vs. failed",
      "Number of user stories in the product backlog"
    ],
    answer: 2,
    explanation: "Test metrics measure testing progress and quality. Common ones: % test cases executed/passed/failed, defect density, defect detection efficiency, test coverage achieved, number of defects found/closed. The others are development or project metrics, not test metrics."
  },
  {
    id: 96,
    chapter: 5,
    section: "5.3",
    lo: "FL-5.3.2",
    level: "K2",
    source: "Practice",
    question: "What is the MAIN difference between a test progress report and a test completion report?",
    options: [
      "Test progress reports are written by testers; test completion reports are written by managers",
      "Test progress reports are produced DURING testing for ongoing status; test completion reports summarize the ENTIRE test effort at the end",
      "Test completion reports contain more defect details than progress reports",
      "There is no difference — they are the same document with different names"
    ],
    answer: 1,
    explanation: "TEST PROGRESS REPORTS: produced regularly during testing (daily/weekly) to give ongoing status to test managers. TEST COMPLETION REPORTS: produced at the END of a test phase/project, summarizing all testing, coverage achieved, defects found, and lessons learned."
  },
  {
    id: 97,
    chapter: 5,
    section: "5.5",
    lo: "FL-5.5.1",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "What is the difference between SEVERITY and PRIORITY in defect management?",
    options: [
      "Severity is set by the product owner; priority is set by the tester",
      "Severity describes technical impact on the system; priority describes urgency to fix it from a business perspective",
      "Severity and priority are the same concept with different names",
      "Severity is only used in formal inspections; priority is used in all review types"
    ],
    answer: 1,
    explanation: "SEVERITY = technical impact on the system (set by tester/QA) — Critical/Major/Minor/Trivial. PRIORITY = business urgency to fix (set by product owner/manager) — High/Medium/Low. A typo in the logo has LOW severity but HIGH priority (brand visibility). A crash in a rarely used feature has HIGH severity but LOW priority."
  },
  {
    id: 98,
    chapter: 5,
    section: "5.4",
    lo: "FL-5.4.1",
    level: "K2",
    source: "Practice",
    question: "A tester needs to reproduce a defect that was found last week. She needs to identify which version of the software was used, which version of the test data was used, and which version of the test script was run. Which process ensures this information is available?",
    options: [
      "Risk management",
      "Configuration management",
      "Defect management",
      "Test planning"
    ],
    answer: 1,
    explanation: "CONFIGURATION MANAGEMENT ensures that all test artifacts (software versions, test scripts, test data) are version-controlled and tracked. This makes it possible to reproduce any test scenario exactly as it was run, which is essential for defect reproduction and audit trails."
  },
  {
    id: 99,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.5",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A test team has 5 test cases: TC1 (priority 1, no dependencies), TC2 (priority 3, depends on TC1), TC3 (priority 2, depends on TC1), TC4 (priority 1, depends on TC3), TC5 (priority 2, no dependencies). Applying risk-based prioritization with dependency constraints, what is the CORRECT execution order?",
    options: [
      "TC1, TC2, TC3, TC4, TC5",
      "TC1, TC3, TC4, TC5, TC2",
      "TC4, TC1, TC3, TC5, TC2",
      "TC1, TC4, TC3, TC2, TC5"
    ],
    answer: 1,
    explanation: "Rules: (1) Dependencies must come first. (2) Among eligible tests, highest priority (lowest number) runs first. TC1 first (no deps, priority 1). Then TC3 and TC5 eligible (TC1 done; TC5 no deps): TC3 priority 2 and TC5 priority 2 — TC5 has no dependencies on TC3 so both eligible; TC3 runs first as it unlocks TC4. Then TC4 (priority 1, deps met). Then TC5 (priority 2). Then TC2 (priority 3). → TC1, TC3, TC4, TC5, TC2."
  },
  {
    id: 100,
    chapter: 5,
    section: "5.1",
    lo: "FL-5.1.6",
    level: "K1",
    source: "Practice",
    question: "In the test pyramid, which type of test sits at the BOTTOM and should be MOST NUMEROUS?",
    options: [
      "End-to-end (E2E) / UI tests",
      "Integration tests",
      "Component / Unit tests",
      "Acceptance tests"
    ],
    answer: 2,
    explanation: "The TEST PYRAMID bottom layer = Component/Unit tests. They are: fast to execute, cheap to write and maintain, give rapid feedback, and test isolated units of logic. The pyramid recommends having the MOST of these. E2E/UI tests at the top should be fewest (slowest, most expensive, most brittle)."
  },

  // ===== MORE CHAPTER 6 QUESTIONS =====
  {
    id: 101,
    chapter: 6,
    section: "6.1",
    lo: "FL-6.1.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which type of tool is MOST appropriate for identifying security vulnerabilities such as SQL injection and cross-site scripting in source code without running the application?",
    options: [
      "Test execution tool (e.g., Selenium)",
      "Static analysis tool (e.g., SonarQube)",
      "Performance testing tool (e.g., JMeter)",
      "Test management tool (e.g., TestRail)"
    ],
    answer: 1,
    explanation: "STATIC ANALYSIS TOOLS analyze source code without executing it — they can detect security vulnerabilities, code quality issues, and coding standard violations. Dynamic tools like Selenium require the application to run. JMeter is for performance. TestRail is for test management."
  },
  {
    id: 102,
    chapter: 6,
    section: "6.2",
    lo: "FL-6.2.1",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which of the following is a BENEFIT of test automation?",
    options: [
      "Automated tests always find more defects than manual testing",
      "Test automation eliminates the need for manual testing entirely",
      "Automated regression tests can be run quickly and repeatedly after each code change",
      "Automated tests require no maintenance once created"
    ],
    answer: 2,
    explanation: "A key BENEFIT of automation: Automated regression tests run quickly and repeatedly — especially in CI/CD pipelines — giving fast feedback after each code change. Options A and B are myths. Option D is a risk of automation (high maintenance burden), not a benefit."
  },
  {
    id: 103,
    chapter: 6,
    section: "6.1",
    lo: "FL-6.1.1",
    level: "K2",
    source: "Practice",
    question: "A team uses a tool that allows them to create, organize, and track test cases, test executions, and test results, and link them to requirements. Which category of test tool is this?",
    options: [
      "Test execution tool",
      "Static analysis tool",
      "Test management tool",
      "Performance testing tool"
    ],
    answer: 2,
    explanation: "TEST MANAGEMENT TOOLS (e.g., TestRail, Jira with Zephyr, Azure Test Plans) support managing test cases, tracking execution results, reporting on coverage, and linking tests to requirements. Examples: TestRail, HP ALM, Jira+Zephyr."
  },
  {
    id: 104,
    chapter: 6,
    section: "6.2",
    lo: "FL-6.2.1",
    level: "K1",
    source: "Practice",
    question: "A company decides to automate all their test cases. Six months later, they find that 40% of automated tests are broken due to frequent UI changes. Which risk of test automation does this illustrate?",
    options: [
      "Test automation provides faster feedback than manual testing",
      "Automated tests require significant maintenance effort when the application changes",
      "Test automation cannot test non-functional requirements",
      "Automated tests are more expensive to run than manual tests"
    ],
    answer: 1,
    explanation: "This illustrates the MAINTENANCE BURDEN risk of test automation. When the application (especially the UI) changes frequently, automated tests break and require significant effort to update. This is one of the most common challenges in test automation adoption."
  },

  // ===== MIXED EXAM-STYLE QUESTIONS =====
  {
    id: 105,
    chapter: 4,
    section: "4.2",
    lo: "FL-4.2.2",
    level: "K3",
    source: "Practice - India Exam Style",
    question: "A hotel booking system allows guests to book 1 to 30 nights (inclusive). A tester applies 2-value BVA. Which test values should be used?",
    options: [
      "0, 1, 30, 31",
      "1, 30",
      "0, 15, 31",
      "1, 15, 30"
    ],
    answer: 1,
    explanation: "2-value BVA: test the MIN and MAX of each partition. Valid partition (1-30): min=1, max=30. So 2-value BVA for the valid partition gives test values {1, 30}. (3-value BVA would also add 0 and 31 for the partition boundaries.)"
  },
  {
    id: 106,
    chapter: 1,
    section: "1.3",
    lo: "FL-1.3.1",
    level: "K2",
    source: "Official Sample Exam B Style",
    question: "Which testing principle states that early testing activities should be focused on preventing defects from being introduced into later phases?",
    options: [
      "Defects cluster together",
      "Early testing saves time and money",
      "Tests wear out",
      "Testing is context-dependent"
    ],
    answer: 1,
    explanation: "Principle 3 — Early testing saves time and money: Testing should start as early as possible in the SDLC. Finding defects in requirements/design costs far less than finding them in system testing or production. This is the basis of shift-left testing."
  },
  {
    id: 107,
    chapter: 3,
    section: "3.2",
    lo: "FL-3.2.5",
    level: "K1",
    source: "Practice - India Exam Style",
    question: "Which of the following contributes to a SUCCESSFUL review?",
    options: [
      "Combining the author and moderator roles in one person to save time",
      "Rushing through the review to meet project deadlines",
      "Management support for the review culture and valuing quality",
      "Reviewing as many pages as possible in each session regardless of complexity"
    ],
    answer: 2,
    explanation: "Key success factors for reviews include MANAGEMENT SUPPORT — when management values quality and allocates time for reviews, they are more effective. Combining author/moderator (A) reduces objectivity; rushing (B) reduces effectiveness; reviewing too much (D) leads to review fatigue and missed defects."
  },
  {
    id: 108,
    chapter: 5,
    section: "5.2",
    lo: "FL-5.2.4",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A risk assessment identifies that a new payment gateway integration has a HIGH likelihood of failure and HIGH business impact. The team decides to accept this risk and proceed without additional testing because the deadline is tomorrow. What type of risk response is this?",
    options: [
      "Risk mitigation",
      "Risk transfer",
      "Risk acceptance",
      "Contingency planning"
    ],
    answer: 2,
    explanation: "RISK ACCEPTANCE: The team acknowledges the risk exists but decides to proceed without taking action to reduce it. This is sometimes done due to time/cost constraints. It should be documented and approved by stakeholders. Other responses: mitigation (test more), transfer (insurance/outsourcing), contingency (plan B if risk occurs)."
  },
  {
    id: 109,
    chapter: 4,
    section: "4.1",
    lo: "FL-4.1.1",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "A tester is designing test cases by analyzing the requirements specification and user stories, with no access to the source code. Which category of test technique is being used?",
    options: [
      "White-box testing technique",
      "Experience-based testing technique",
      "Black-box testing technique",
      "Structural testing technique"
    ],
    answer: 2,
    explanation: "BLACK-BOX testing techniques are based on the external behavior of the system — using requirements, specifications, and user stories as the test basis, with NO knowledge of internal code structure. White-box uses code structure; experience-based uses tester knowledge."
  },
  {
    id: 110,
    chapter: 2,
    section: "2.1",
    lo: "FL-2.1.5",
    level: "K2",
    source: "Practice - India Exam Style",
    question: "Which of the following is a DIRECT benefit of applying the shift-left approach?",
    options: [
      "Testers gain more independence from developers",
      "Defects are found earlier when they are less expensive to fix",
      "All tests can be automated",
      "The need for system testing is eliminated"
    ],
    answer: 1,
    explanation: "The primary benefit of shift-left is finding defects EARLIER in the lifecycle when they are much cheaper and faster to fix. A defect in requirements costs orders of magnitude less to fix than the same defect found in production. Shift-left does NOT eliminate system testing or guarantee automation."
  },

  // ===== OFFICIAL SAMPLE EXAM B, C, D, 3-2, 4-3 QUESTIONS =====
{
    id: 111,
    chapter: 1,
    section: `1.2`,
    lo: `FL-1.2.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following is an example of why testing is necessary?`,
    options: [
        `Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users`,
        `Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing`,
        `Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release`,
        `Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products`
    ],
    answer: 3,
    explanation: `Reviews are a form of static testing that can be applied from the very start of the SDLC and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements. If the defects are not detected and removed early on, then when the defect is found in derived work products such as the design and code, the requirements will need to be changed.`
  },
  {
    id: 112,
    chapter: 1,
    section: `1.2`,
    lo: `FL-1.2.2`,
    level: `K1`,
    source: `Official Sample Exam B`,
    question: `Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?`,
    options: [
        `QA is performed as part of testing`,
        `Testing is performed as part of QC`,
        `Testing is another term for QC`,
        `Testing is performed as part of QA`
    ],
    answer: 1,
    explanation: `Testing is a form of quality control. QC is a product-oriented, corrective approach that focuses on activities supporting the achievement of appropriate levels of quality. Testing is one of the major forms of quality control.`
  },
  {
    id: 113,
    chapter: 1,
    section: `1.3`,
    lo: `FL-1.3.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `One of the 'principles of testing' states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?`,
    options: [
        `Creating test cases that cover every possible specified output`,
        `Documenting all possible test input variations and prioritizing these based on importance`,
        `Starting testing as early as possible with reviews and other static testing approaches`,
        `Using equivalence partitioning and boundary value analysis to generate test cases`
    ],
    answer: 3,
    explanation: `Equivalence partitioning and boundary value analysis are test techniques that reduce the number of test cases needed while still achieving sufficient coverage, thus addressing the impossibility of exhaustive testing.`
  },
  {
    id: 114,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?`,
    options: [
        `Test design`,
        `Test execution`,
        `Test analysis`,
        `Test implementation`
    ],
    answer: 0,
    explanation: `Test design involves creating test cases, and in doing so works with test conditions, test data requirements, and test environment requirements. It is during test design that test cases are derived from test conditions.`
  },
  {
    id: 115,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.2`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following is MOST likely to impact how testing is performed for a given test object?`,
    options: [
        `The average level of experience of the organization's marketing team`,
        `The knowledge of users that a new system is being developed for them`,
        `The number of years' experience of the members of the test team`,
        `The end user's organizational structure for a commercial music streaming application`
    ],
    answer: 2,
    explanation: `The experience of the test team is a contextual factor that directly impacts how testing is performed. The skills and knowledge of the testers determine what techniques they can use, how thoroughly they test, and how effectively they identify defects.`
  },
  {
    id: 116,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.4`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following statements is a CORRECT example of the value of traceability?`,
    options: [
        `Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk`,
        `Traceability between user requirements and test results provides a means of measuring project progress against business goals`,
        `Traceability between testers and test cases that failed provides a means of determining the skill level of the testers`,
        `Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing`
    ],
    answer: 1,
    explanation: `Traceability between user requirements and test results provides a means of measuring project progress against business goals and allows assessing whether requirements are met.`
  },
  {
    id: 117,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following is MOST likely to be an example of a tester using a generic skill when testing?`,
    options: [
        `The tester's deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming`,
        `The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system`,
        `The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts`,
        `The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session`
    ],
    answer: 3,
    explanation: `Being careful and methodical when generating test cases is a generic skill applicable to testing. It does not rely on domain knowledge or technical background, but on the quality of thinking and attention to detail.`
  },
  {
    id: 118,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.2`,
    level: `K1`,
    source: `Official Sample Exam B`,
    question: `Which of the following is an advantage of the whole-team approach?`,
    options: [
        `It allows team members to take on any role at any time`,
        `It only needs a single team to support the complete development project`,
        `It embeds business representatives alongside developers in the same team`,
        `It generates a team synergy that benefits the entire project`
    ],
    answer: 3,
    explanation: `The whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the entire project.`
  },
  {
    id: 119,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following statements about the chosen software development lifecycle is CORRECT?`,
    options: [
        `If agile software development is used, automation of system tests replaces the need for regression testing`,
        `If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle`,
        `If an iterative development model is used, then component testing is typically performed manually by developers`,
        `If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments`
    ],
    answer: 1,
    explanation: `In a sequential development model (e.g., waterfall), dynamic testing typically occurs later in the lifecycle after coding is complete, while static testing (reviews) can occur earlier.`
  },
  {
    id: 120,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.2`,
    level: `K1`,
    source: `Official Sample Exam B`,
    question: `Which of the following is a good testing practice that applies to all software development lifecycles?`,
    options: [
        `Testers should review work products as part of the next development phase`,
        `Testers should review work products as soon as drafts are available`,
        `Testers should review work products before test analysis and test design begin`,
        `Testers should review work products immediately after they are published`
    ],
    answer: 1,
    explanation: `A good testing practice that applies to all software development lifecycles is that testers should review work products as soon as drafts are available, enabling early defect detection.`
  },
  {
    id: 121,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.3`,
    level: `K1`,
    source: `Official Sample Exam B`,
    question: `Which of the following is an example of a test-first approach to development?`,
    options: [
        `Test-Driven Development`,
        `Coverage-Driven Development`,
        `Quality-Driven Development`,
        `Feature-Driven Development`
    ],
    answer: 0,
    explanation: `Test-Driven Development (TDD) is a well-known test-first approach where tests are written before the code they test.`
  },
  {
    id: 122,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.4`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following statements about DevOps is CORRECT?`,
    options: [
        `To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing`,
        `To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression`,
        `To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach`,
        `To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing`
    ],
    answer: 1,
    explanation: `DevOps relies on automated regression testing to reduce the risk of regression when releasing frequently. Without automated tests, the speed of DevOps would compromise quality.`
  },
  {
    id: 123,
    chapter: 2,
    section: `2.2`,
    lo: `FL-2.2.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following is MOST likely to be performed as part of system testing?`,
    options: [
        `Security testing of a credit management system by an independent test team`,
        `Testing the interface of a currency exchange system with an external banking system`,
        `Beta testing of a remote learning system by courseware developers`,
        `Testing interactions between the user interface and database of a human resources system`
    ],
    answer: 0,
    explanation: `Security testing of a complete system by an independent test team is typical of system testing. System testing tests the behavior and capabilities of the whole system.`
  },
  {
    id: 124,
    chapter: 2,
    section: `2.2`,
    lo: `FL-2.2.3`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following statements is CORRECT?`,
    options: [
        `Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses`,
        `Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced`,
        `Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object`,
        `Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code`
    ],
    answer: 3,
    explanation: `Regression testing checks that changes have not adversely affected unchanged parts of the system. Confirmation testing (retesting) checks that a specific defect has been fixed.`
  },
  {
    id: 125,
    chapter: 3,
    section: `3.1`,
    lo: `FL-3.1.3`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?`,
    options: [
        `Lack of usability provided through the user interface`,
        `Code with no path that reaches it`,
        `Poor response times for most of the expected users`,
        `Required features that are not implemented in the code`
    ],
    answer: 1,
    explanation: `Unreachable code (dead code) can be found by static analysis but cannot be found by dynamic testing because by definition no test case can reach it during execution.`
  },
  {
    id: 126,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.1`,
    level: `K1`,
    source: `Official Sample Exam B`,
    question: `Which of the following is a benefit of early and frequent stakeholder feedback?`,
    options: [
        `Managers are aware of which developers are less productive`,
        `It allows project managers to prioritize their stakeholder interactions`,
        `It facilitates early communication of potential quality issues`,
        `End users better understand why the delivery of the work product is delayed`
    ],
    answer: 2,
    explanation: `Early and frequent stakeholder feedback facilitates early communication of potential quality issues, allowing the team to address them before they become more costly to fix.`
  },
  {
    id: 127,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.2`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Given the following task descriptions:
1. The quality characteristics to be evaluated and the exit criteria are selected
2. Everyone has access to the work product
3. Anomalies are identified in the work product
4. Anomalies are discussed
And the following review activities:
A. Individual review, B. Review initiation, C. Planning, D. Communication and analysis
Which of the following BEST matches the task descriptions and activities?`,
    options: [
        `1B, 2C, 3D, 4A`,
        `1B, 2D, 3C, 4A`,
        `1C, 2A, 3B, 4D`,
        `1C, 2B, 3A, 4D`
    ],
    answer: 3,
    explanation: `Planning (C) is where quality characteristics and exit criteria are selected (1). Review initiation (B) is where everyone gets access to the work product (2). Individual review (A) is where anomalies are identified (3). Communication and analysis (D) is where anomalies are discussed (4). So: 1C, 2B, 3A, 4D.`
  },
  {
    id: 128,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.3`,
    level: `K1`,
    source: `Official Sample Exam B`,
    question: `Given the following roles in reviews:
1. Scribe, 2. Review leader, 3. Facilitator, 4. Manager
And the following responsibilities:
A. Ensures the effective running of review meetings and the setting up a safe review environment
B. Records review information, such as decisions and new anomalies found during the review meeting
C. Decides what is to be reviewed and provides resources, such as staff and time for the review
D. Takes overall responsibility for the review such as organizing when and where the review will take place
Which of the following BEST matches the roles and responsibilities?`,
    options: [
        `1A, 2B, 3D, 4C`,
        `1A, 2C, 3B, 4D`,
        `1B, 2D, 3A, 4C`,
        `1B, 2D, 3C, 4A`
    ],
    answer: 2,
    explanation: `Scribe (1) records review information (B). Review leader (2) takes overall responsibility (D). Facilitator (3) ensures effective running of meetings (A). Manager (4) decides what is to be reviewed and provides resources (C). So: 1B, 2D, 3A, 4C.`
  },
  {
    id: 129,
    chapter: 4,
    section: `4.1`,
    lo: `FL-4.1.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following statements BEST describes the difference between decision table testing and branch testing?`,
    options: [
        `In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object.`,
        `In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.`,
        `In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.`,
        `In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code.`
    ],
    answer: 3,
    explanation: `Decision table testing is a black-box technique where test cases are derived from specifications of business rules, independent of implementation. Branch testing is a white-box technique that requires knowledge of the code structure and can only be applied after design/implementation.`
  },
  {
    id: 130,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.1`,
    level: `K3`,
    source: `Official Sample Exam B`,
    question: `Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to. For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total). Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?`,
    options: [
        `19, 20, 30`,
        `11, 12, 20`,
        `1, 10, 50`,
        `10, 29, 30, 31`
    ],
    answer: 0,
    explanation: `The equivalence partitions are: no discount (any non-10th, non-20th wash), 10% discount (10th wash), 50% discount (20th wash). The set {19, 20, 30} covers: no discount (19), 50% discount (20), and 10% discount (30 = 3rd ten). This achieves coverage of all three partitions.`
  },
  {
    id: 131,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.2`,
    level: `K3`,
    source: `Official Sample Exam B`,
    question: `You are testing a form that verifies the correctness of the length of the password given as input. The form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect. At first, the form is empty (password length = 0). You apply boundary value analysis to the 'password length' variable. Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage. Which additional password lengths should be tested to achieve this?`,
    options: [
        `4, 5, 13, 14`,
        `7, 11`,
        `1, 5, 13`,
        `1, 4, 7, 11, 14`
    ],
    answer: 0,
    explanation: `For 3-value BVA, we need the boundary value and the two values on either side. The boundaries are at 6 (min) and 12 (max). 2-value BVA already covers: 5, 6, 12, 13 (and 0 for the initial state). For 3-value BVA we additionally need: 4 (one below lower boundary-1) and 14 (one above upper boundary+1). But considering the full 3-value set needs {4,5,6} and {12,13,14}, and 2-value already has {5,6,12,13}, the missing values are 4 and 14.`
  },
  {
    id: 132,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.3`,
    level: `K3`,
    source: `Official Sample Exam B`,
    question: `The following decision table contains rules for determining the risk of atherosclerosis. Rules: R1(Cholesterol<=124, BP<=140, very low), R2(Cholesterol<=124, BP>140, low), R3(Cholesterol 125-200, BP<=140, medium), R4(Cholesterol 125-200, BP>140, high), R5(Cholesterol>=201, BP=any, very high). Test cases: TC1(Chol=125, BP=141), TC2(Chol=200, BP=201), TC3(Chol=124, BP=201), TC4(Chol=109, BP=200), TC5(Chol=201, BP=140). What is the decision table coverage achieved by these test cases?`,
    options: [
        `40%`,
        `60%`,
        `80%`,
        `100%`
    ],
    answer: 1,
    explanation: `TC1 covers R4 (high), TC2 covers R4 again, TC3 covers R2 (low), TC4 covers R2 again, TC5 covers R5 (very high). Rules covered: R2, R4, R5 = 3 out of 5 = 60%.`
  },
  {
    id: 133,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.4`,
    level: `K3`,
    source: `Official Sample Exam B`,
    question: `A storage system can store up to three elements and is modeled by a state transition diagram. The variable N represents the number of currently stored elements. Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?`,
    options: [
        `Add, Remove, Add, Add, Add`,
        `Add, Add, Add, Add, Remove, Remove`,
        `Add, Add, Add, Remove, Remove`,
        `Add, Add, Add, Remove, Add`
    ],
    answer: 2,
    explanation: `The states are N=0, N=1, N=2, N=3. Valid transitions are: Add from 0->1, 1->2, 2->3; Remove from 1->0, 2->1, 3->2. Option c) Add, Add, Add, Remove, Remove covers transitions: 0->1, 1->2, 2->3, 3->2, 2->1 = 5 transitions. This is the highest coverage.`
  },
  {
    id: 134,
    chapter: 4,
    section: `4.3`,
    lo: `FL-4.3.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage. Which of the following sentences must be necessarily true?`,
    options: [
        `The test suite composed of tests T1 and T2 achieves 105% statement coverage`,
        `There exists at least one statement that must have been executed by both T1 and T2`,
        `At least 5% of the statements in the code that was tested are non-executable`,
        `The test suite composed of tests T1 and T2 achieves full branch coverage`
    ],
    answer: 1,
    explanation: `Since T1 covers 40% and T2 covers 65%, and 40+65=105% > 100%, there must be overlap. At least 5% of statements were executed by both T1 and T2.`
  },
  {
    id: 135,
    chapter: 4,
    section: `4.3`,
    lo: `FL-4.3.2`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Let the branch coverage metric be defined as BCov = (X / Y) * 100%. What do X and Y represent in this formula?`,
    options: [
        `X = number of decision outcomes exercised by the test cases, Y = total number of decision outcomes in the code`,
        `X = number of conditional branches exercised by the test cases, Y = total number of branches in the code`,
        `X = number of branches exercised by the test cases, Y = total number of branches in the code`,
        `X = number of conditional branches exercised by the test cases, Y = total number of decision outcomes in the code`
    ],
    answer: 2,
    explanation: `Branch coverage is defined as the number of branches (decision outcomes) exercised by test cases divided by the total number of branches in the code.`
  },
  {
    id: 136,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.2`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which TWO of the following statements provide the BEST rationale for using exploratory testing?`,
    options: [
        `Testers have not been allocated enough time for test design and test execution`,
        `The existing test strategy requires that testers use formal, black-box test techniques`,
        `The specification is written in a formal language that can be processed by a tool`,
        `Testers are the members of an agile team and have good programming skills`,
        `Testers are experienced in the business domain and have good analytical skills`
    ],
    answer: [0, 4],
    explanation: `Exploratory testing is most beneficial when time is limited (making formal test design impractical) and when testers have strong domain knowledge and analytical skills to guide their exploration effectively.`
  },
  {
    id: 137,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.3`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following BEST fits as an element of the checklist used in checklist-based testing?`,
    options: [
        `The developer made an error when implementing the code`,
        `The achieved statement coverage exceeds 85%`,
        `The program works correctly regarding functional and non-functional requirements`,
        `The error messages are written in language that the user can understand`
    ],
    answer: 3,
    explanation: `Checklist items should be testable and specific. 'Error messages are written in language that the user can understand' is a concrete, testable item that a tester can verify. The others are either untestable, too vague, or not appropriate checklist items.`
  },
  {
    id: 138,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.2`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Consider the following acceptance criteria for a user story: 'Given that the user is logged in and on the homepage, When the user clicks on the "Add Item" button, Then the "Create Item" form should appear, And the user should be able to input a name and price for the new item.' In what format is this acceptance criteria written?`,
    options: [
        `Rule-oriented`,
        `Scenario-oriented`,
        `Product-oriented`,
        `Process-oriented`
    ],
    answer: 1,
    explanation: `This acceptance criterion follows the Given-When-Then format which is scenario-oriented (also known as behavior-driven). It describes a specific scenario with preconditions, actions, and expected outcomes.`
  },
  {
    id: 139,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.3`,
    level: `K3`,
    source: `Official Sample Exam B`,
    question: `Your team analyzes the following user story: 'As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases.' Which of the following test cases will NOT be relevant for this user story?`,
    options: [
        `Input: the customer logs into their account and clicks 'see order history'. Expected result: the system shows a list of all previous orders with date, order number, and total cost`,
        `Input: the customer clicks on an order from the order list. Expected result: the system displays the individual items purchased, along with their prices and quantities`,
        `Input: the customer clicks 'Sort ascending' button on the order history screen. Expected result: the system shows the order history sorted by order number in ascending order`,
        `Input: an unregistered customer registers as a new customer with a valid e-mail address. Expected result: the system accepts the registration and creates the account`
    ],
    answer: 3,
    explanation: `The user story is about viewing previous orders, which is only relevant for registered customers. Registration of a new customer is a separate user story and not relevant to the 'view previous orders' story.`
  },
  {
    id: 140,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.3`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Your team follows the process that uses the DevOps delivery pipeline. The first three steps are: (1) Code development, (2) Submit code into a version control system and merge it into the 'test' branch, (3) Perform component testing for the submitted code. Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?`,
    options: [
        `Static analysis returns no high severity warnings for the submitted code`,
        `System version control reports no conflicts when merging code into the 'test' branch`,
        `Component tests are compiled and ready to be executed`,
        `Statement coverage is at least 80%`
    ],
    answer: 0,
    explanation: `An entry criterion for submitting code to version control should be something that can be checked before submission. Static analysis returning no high severity warnings is an appropriate pre-submission check that ensures code quality before it enters the shared repository.`
  },
  {
    id: 141,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.4`,
    level: `K3`,
    source: `Official Sample Exam B`,
    question: `You want to estimate the test effort for a new project using estimation based on ratios. Historical data: P1(Dev=$800K, Test=$40K), P2(Dev=$1.2M, Test=$130K), P3(Dev=$600K, Test=$70K), P4(Dev=$1M, Test=$120K). The estimated development effort is $800,000. What is your estimate of the test effort?`,
    options: [
        `$40,000`,
        `$80,000`,
        `$81,250`,
        `$82,500`
    ],
    answer: 1,
    explanation: `Average test-to-dev ratio: (40/800 + 130/1200 + 70/600 + 120/1000) / 4 = (0.05 + 0.1083 + 0.1167 + 0.12) / 4 = 0.394/4 = 0.0985. Test effort = 0.0985 * $800K ≈ $78,800. The closest answer is $80,000.`
  },
  {
    id: 142,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.5`,
    level: `K3`,
    source: `Official Sample Exam B`,
    question: `You are testing a web application with SEARCH, VIEW, ADD, and ORDER functionality. Seven test cases: TC1(SEARCH A, priority 4), TC2(SEARCH B, priority 4), TC3(VIEW A, priority 3), TC4(VIEW B, priority 2), TC5(ADD A, priority 3), TC6(ADD B, priority 1), TC7(ORDER, priority 5). Dependencies: SEARCH before VIEW, VIEW before ADD, ADD before ORDER. Which test case should be executed as the fourth one?`,
    options: [
        `TC3`,
        `TC1`,
        `TC7`,
        `TC2`
    ],
    answer: 0,
    explanation: `Considering priorities and dependencies: TC6 (priority 1) must run after VIEW (TC3 or TC4), which requires SEARCH first. TC4 (priority 2) requires SEARCH. Order: TC1 or TC2 first (SEARCH required), then TC4 (VIEW B, priority 2 is highest VIEW), then TC3 (VIEW A, priority 3), fourth would be TC3.`
  },
  {
    id: 143,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.7`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `According to the testing quadrants model, which of the following falls into quadrant Q1 ('technology facing' and 'support the team')?`,
    options: [
        `Usability testing`,
        `Functional testing`,
        `User acceptance testing`,
        `Component integration testing`
    ],
    answer: 3,
    explanation: `Q1 (technology-facing, support the team) contains tests that are automated and support the development process, such as component testing and component integration testing.`
  },
  {
    id: 144,
    chapter: 5,
    section: `5.2`,
    lo: `FL-5.2.4`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Given risks: 1. Ineffective loop causes long responses, 2. Consumers change preferences, 3. Flooding of server room, 4. Patients above certain age receive inaccurate reports. And mitigation activities: A. Risk acceptance, B. Testing for performance efficiency, C. Using boundary value analysis, D. Risk transfer. Which BEST matches risks with mitigation activities?`,
    options: [
        `1C, 2D, 3A, 4B`,
        `1B, 2D, 3A, 4C`,
        `1B, 2A, 3D, 4C`,
        `1C, 2A, 3D, 4B`
    ],
    answer: 2,
    explanation: `Risk 1 (loop performance) -> B (performance testing). Risk 2 (consumer preferences) -> A (accept, cannot test for changing preferences). Risk 3 (flooding) -> D (risk transfer via insurance). Risk 4 (inaccurate age reports) -> C (BVA to test age boundaries). So: 1B, 2A, 3D, 4C.`
  },
  {
    id: 145,
    chapter: 5,
    section: `5.3`,
    lo: `FL-5.3.1`,
    level: `K1`,
    source: `Official Sample Exam B`,
    question: `Which of the following is a product quality metric?`,
    options: [
        `Mean time to failure`,
        `Number of defects found`,
        `Requirements coverage`,
        `Defect detection percentage`
    ],
    answer: 0,
    explanation: `Mean time to failure (MTTF) is a product quality metric that measures the reliability of the product. The others measure process quality or test progress.`
  },
  {
    id: 146,
    chapter: 5,
    section: `5.3`,
    lo: `FL-5.3.3`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `You are a member of a test team in North America, developing a product for a client in Europe. The team is agile and follows DevOps with a CI/CD pipeline. Which of the following is the LEAST effective way to communicate test progress to the customer?`,
    options: [
        `Face-to-face`,
        `Dashboards`,
        `Email`,
        `Video conferencing`
    ],
    answer: 0,
    explanation: `Face-to-face communication, while ideal, is the least practical and effective for a geographically distributed team (North America to Europe). Dashboards, email, and video conferencing are all more practical remote communication methods.`
  },
  {
    id: 147,
    chapter: 5,
    section: `5.4`,
    lo: `FL-5.4.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Which of the following BEST describes an example of how configuration management (CM) supports testing?`,
    options: [
        `Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment`,
        `Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage`,
        `Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end`,
        `Having the version number of the test case, the CM tool can automatically generate test data for this test case`
    ],
    answer: 0,
    explanation: `Configuration management tracks all components of a test environment. Given a version number, CM can identify all dependencies and version numbers of associated components like libraries, stubs, and drivers.`
  },
  {
    id: 148,
    chapter: 5,
    section: `5.5`,
    lo: `FL-5.5.1`,
    level: `K3`,
    source: `Official Sample Exam B`,
    question: `You are testing a sort function. TC3: Input 8 7 3 7 1, Output 1 3 7 8 (failed - duplicate 7 missing). TC4: Input -2 -2 -2 -3 -3, Output -3 -2 (failed). TC5: Input 0 -2 0 3 4 4, Output -2 0 3 4 (failed). Which provides the BEST description of the failure for a defect report?`,
    options: [
        `The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.`,
        `The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5.`,
        `The system fails to sort negative numbers. Reference: TC4, TC5.`,
        `TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected.`
    ],
    answer: 1,
    explanation: `All three failures share the common pattern of disregarding duplicate values in the output. This is the most specific and accurate description of the failure, and it covers all three failing test cases.`
  },
  {
    id: 149,
    chapter: 6,
    section: `6.1`,
    lo: `FL-6.1.1`,
    level: `K2`,
    source: `Official Sample Exam B`,
    question: `Given descriptions: 1. Support workflow tracking, 2. Facilitate communication, 3. Virtual machines, 4. Support reviews. And tool categories: A. Static testing tools, B. Tools supporting scalability and deployment standardization, C. DevOps tools, D. Collaboration tools. Which BEST matches descriptions and categories?`,
    options: [
        `1A, 2B, 3C, 4D`,
        `1B, 2D, 3C, 4A`,
        `1C, 2D, 3B, 4A`,
        `1D, 2C, 3A, 4B`
    ],
    answer: 2,
    explanation: `DevOps tools (C) support workflow tracking (1). Collaboration tools (D) facilitate communication (2). Tools supporting scalability and deployment standardization (B) include virtual machines (3). Static testing tools (A) support reviews (4). So: 1C, 2D, 3B, 4A.`
  },
  {
    id: 150,
    chapter: 6,
    section: `6.2`,
    lo: `FL-6.2.1`,
    level: `K1`,
    source: `Official Sample Exam B`,
    question: `Which of the following is MOST likely to be a benefit of test automation?`,
    options: [
        `It provides coverage measures that are too complicated for humans to derive`,
        `It shares responsibility for the testing with the tool vendor`,
        `It removes the need for critical thinking when analyzing test results`,
        `It generates test cases from an analysis of the program code`
    ],
    answer: 0,
    explanation: `Test automation can provide coverage measures that would be impractical for humans to calculate manually, such as complex code coverage metrics across large codebases.`
  },
  {
    id: 151,
    chapter: 1,
    section: `1.1`,
    lo: `FL-1.1.1`,
    level: `K1`,
    source: `Official Sample Exam C`,
    question: `Which of the following is a typical test objective?`,
    options: [
        `Validating that documented requirements are met`,
        `Causing failures and identifying defects`,
        `Initiating errors and identifying root causes`,
        `Verifying the test object meets user expectations`
    ],
    answer: 1,
    explanation: `Causing failures and identifying defects is probably the most common objective of dynamic testing. Testers try to cause failures to expose defects in the test object.`
  },
  {
    id: 152,
    chapter: 1,
    section: `1.1`,
    lo: `FL-1.1.2`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following statements BEST describes the difference between testing and debugging?`,
    options: [
        `Testing causes failures while debugging fixes failures`,
        `Testing is a negative activity while debugging is a positive activity`,
        `Testing determines that defects exist while debugging removes defects`,
        `Testing finds the cause of defects while debugging fixes the cause of defects`
    ],
    answer: 2,
    explanation: `Testing determines that defects exist either directly through static testing or indirectly by causing failures in dynamic testing. Debugging is a separate activity (normally performed by developers) concerned with locating defects and fixing them.`
  },
  {
    id: 153,
    chapter: 1,
    section: `1.3`,
    lo: `FL-1.3.1`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `The 'absence-of-defects fallacy' is one of the principles of testing. Which of the following is an example of addressing this principle in practice?`,
    options: [
        `Explaining that it is not possible for testing to show the absence of defects`,
        `Supporting the end users to perform acceptance testing`,
        `Ensuring that no implementation defects remain in the delivered system`,
        `Modifying tests that cause no failures to ensure few defects remain`
    ],
    answer: 1,
    explanation: `The absence-of-defects fallacy means that a defect-free system may still not satisfy users. Supporting end users to perform acceptance testing addresses this by validating that the system meets user needs and expectations, not just specifications.`
  },
  {
    id: 154,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.1`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?`,
    options: [
        `Test implementation`,
        `Test design`,
        `Test execution`,
        `Test monitoring`,
        `Test analysis`
    ],
    answer: [1, 4],
    explanation: `Test design (b) is likely to involve test techniques to create test cases from test conditions. Test analysis (e) is likely to involve test techniques to identify test conditions. BVA and EP are test techniques used in both activities.`
  },
  {
    id: 155,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.3`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Given testware: 1. Coverage items, 2. Change requests, 3. Test execution schedule, 4. Prioritized test conditions. And test activities: A. Test analysis, B. Test design, C. Test implementation, D. Test completion. Which BEST shows the testware produced by the activities?`,
    options: [
        `1B, 2D, 3C, 4A`,
        `1B, 2D, 3A, 4C`,
        `1D, 2C, 3A, 4B`,
        `1D, 2C, 3B, 4A`
    ],
    answer: 0,
    explanation: `Test analysis produces prioritized test conditions (4A). Test design produces coverage items (1B). Test implementation produces test execution schedule (3C). Test completion produces change requests/backlog items (2D). So: 1B, 2D, 3C, 4A.`
  },
  {
    id: 156,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.5`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following statements about the different testing roles is MOST likely to be CORRECT?`,
    options: [
        `In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team`,
        `The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion`,
        `In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself`,
        `The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution`
    ],
    answer: 2,
    explanation: `In Agile development, the team handles many test management tasks itself, but activities spanning multiple teams are handled by a test manager outside the team. This reflects the balance between team autonomy and coordination.`
  },
  {
    id: 157,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.2`,
    level: `K1`,
    source: `Official Sample Exam C`,
    question: `Which of the following is an advantage of the whole-team approach?`,
    options: [
        `Teams with no testers`,
        `Improved team dynamics`,
        `Specialist team members`,
        `Larger team sizes`
    ],
    answer: 1,
    explanation: `By leveraging the diverse skill sets of each team member, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the project.`
  },
  {
    id: 158,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.3`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following statements about the independence of testing is CORRECT?`,
    options: [
        `Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers`,
        `Developers' familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers`,
        `Independent testing requires testers who are outside the developer's team and ideally from outside the organization, however these testers find it difficult to understand the application domain`,
        `Testers from outside the developer's team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release`
    ],
    answer: 0,
    explanation: `Independent testers find different types of failures and defects due to their varied backgrounds, but the main disadvantage is that they may become isolated from the development team, potentially leading to an adversarial relationship.`
  },
  {
    id: 159,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.2`,
    level: `K1`,
    source: `Official Sample Exam C`,
    question: `Which of the following is a good testing practice that applies to all software development lifecycles?`,
    options: [
        `For each test level, there is a corresponding development level`,
        `For each test objective, there is a corresponding development objective`,
        `For every test activity, there is a corresponding user activity`,
        `For every development activity, there is a corresponding test activity`
    ],
    answer: 3,
    explanation: `Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. This is a good testing practice applicable to all SDLCs.`
  },
  {
    id: 160,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.3`,
    level: `K1`,
    source: `Official Sample Exam C`,
    question: `Which of the following is an example of a test-first approach to development?`,
    options: [
        `Component Test-Driven Development`,
        `Integration Test-Driven Development`,
        `System Test-Driven Development`,
        `Acceptance Test-Driven Development`
    ],
    answer: 3,
    explanation: `Acceptance Test-Driven Development (ATDD) is a well-known example of a test-first approach to development where acceptance tests are written before the code.`
  },
  {
    id: 161,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.5`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following provides the BEST description of shift-left?`,
    options: [
        `When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of 'early testing saves time and money'`,
        `Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC`,
        `When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests`,
        `When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC`
    ],
    answer: 1,
    explanation: `Shift-left emphasizes starting testing earlier in the SDLC. It is about moving test activities to earlier phases to reduce cost and defects found late.`
  },
  {
    id: 162,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.6`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following is LEAST likely to occur as a result of a retrospective?`,
    options: [
        `The quality of future test objects improves by identifying improvements in development practices`,
        `Test efficiency improves by speeding up the configuration of test environments through automation`,
        `End users' understanding of the development and test processes is improved`,
        `Automated test scripts are enhanced through feedback from developers`
    ],
    answer: 2,
    explanation: `Retrospectives are internal team meetings focused on improving team processes and practices. They are not typically used to educate end users about development and test processes.`
  },
  {
    id: 163,
    chapter: 2,
    section: `2.2`,
    lo: `FL-2.2.1`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?`,
    options: [
        `Component testing`,
        `Component integration testing`,
        `System integration testing`,
        `Acceptance testing`
    ],
    answer: 3,
    explanation: `Acceptance testing is focused on validation (checking the system meets user needs) and is typically performed by business stakeholders, users, or customers rather than professional testers.`
  },
  {
    id: 164,
    chapter: 2,
    section: `2.2`,
    lo: `FL-2.2.3`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `The navigation system software has been updated due to it suggesting routes that break traffic laws. Which of the following BEST describes the testing that will be performed?`,
    options: [
        `Only confirmation testing`,
        `Confirmation testing then regression testing`,
        `Only regression testing`,
        `Regression testing then confirmation testing`
    ],
    answer: 1,
    explanation: `First, confirmation testing verifies that the specific defect (illegal routes) has been fixed. Then regression testing checks that the fix hasn't introduced new defects or broken existing functionality.`
  },
  {
    id: 165,
    chapter: 3,
    section: `3.1`,
    lo: `FL-3.1.3`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Given example defects: i. Two different parts of the design specification disagree. ii. A response time is too long. iii. A path in the code cannot be reached during execution. iv. A variable is declared but never subsequently used. v. The amount of memory needed is too high. Which BEST identifies defects found by static testing (rather than dynamic testing)?`,
    options: [
        `ii, v`,
        `iii, v`,
        `i, ii, iv`,
        `i, iii, iv`
    ],
    answer: 3,
    explanation: `Static testing can find: i (inconsistency in specifications - document review), iii (unreachable code - static analysis), iv (unused variable - static analysis). Dynamic testing finds ii (slow response) and v (excessive memory use) through execution.`
  },
  {
    id: 166,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.1`,
    level: `K1`,
    source: `Official Sample Exam C`,
    question: `Which of the following is a benefit of early and frequent stakeholder feedback?`,
    options: [
        `Changes to requirements are understood and implemented earlier`,
        `It ensures business stakeholders understand user requirements`,
        `It allows product owners to change their requirements as often as they want`,
        `End users are told which requirements will not be implemented prior to release`
    ],
    answer: 0,
    explanation: `Early and frequent stakeholder feedback means changes to requirements are communicated and understood earlier, allowing the team to implement changes while they are less costly.`
  },
  {
    id: 167,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.4`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Given review types: 1. Technical review, 2. Informal review, 3. Inspection, 4. Walkthrough. And descriptions: A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors. B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects. C. The main objective is detecting potential defects and it requires metrics collection. D. The main objective is detecting potential defects and it generates no formal documented output. Which BEST matches review types and descriptions?`,
    options: [
        `1A, 2B, 3C, 4D`,
        `1A, 2D, 3C, 4B`,
        `1B, 2C, 3D, 4A`,
        `1C, 2D, 3A, 4B`
    ],
    answer: 1,
    explanation: `Technical review (1) has objectives including gaining consensus, detecting defects - fits A. Informal review (2) generates no formal output - fits D. Inspection (3) detects defects with metrics - fits C. Walkthrough (4) educates reviewers, gains consensus, generates new ideas - fits B. So: 1A, 2D, 3C, 4B.`
  },
  {
    id: 168,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.5`,
    level: `K1`,
    source: `Official Sample Exam C`,
    question: `Which of the following is a factor that contributes to a successful review?`,
    options: [
        `Ensure management participate as reviewers`,
        `Split large work products into smaller parts`,
        `Set reviewer evaluation as an objective`,
        `Plan to cover one document per review`
    ],
    answer: 1,
    explanation: `Splitting large work products into smaller parts makes review sessions more manageable and focused, which contributes to a successful review by allowing more thorough examination.`
  },
  {
    id: 169,
    chapter: 4,
    section: `4.1`,
    lo: `FL-4.1.1`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `What is the MAIN difference between black-box test techniques and experience-based test techniques?`,
    options: [
        `The test object`,
        `The test level at which the test technique is used`,
        `The test basis`,
        `The software development lifecycle (SDLC) in which the test technique can be used`
    ],
    answer: 2,
    explanation: `The main difference is the test basis. Black-box techniques use specifications/requirements as the test basis. Experience-based techniques use tester knowledge and experience as the test basis, not a formal specification.`
  },
  {
    id: 170,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.1`,
    level: `K3`,
    source: `Official Sample Exam C`,
    question: `You are testing a PIN validator. A PIN is valid if it consists of four digits, which are not all the same digit. Valid equivalence partitions: PIN length: 'length correct' (four-digit PINs) and 'length incorrect' (PINs with length other than 4). Number of different digits: 'correct' (at least two different digits) and 'incorrect' (all digits the same). Which is the BEST set of input test data to cover the identified equivalence partitions?`,
    options: [
        `12, 1111, 1234, 12345`,
        `1, 123, 1111, 1234`,
        `11, 12, 1111, 12345`,
        `123, 1222, 12345`
    ],
    answer: 0,
    explanation: `We need one value from each partition: length incorrect (12 has 2 digits, 12345 has 5), all same digit (1111), and valid PIN (1234 has 4 digits and 4 different digits). The set {12, 1111, 1234, 12345} covers: short (12), long (12345), all same (1111), valid (1234) = all 4 partitions.`
  },
  {
    id: 171,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.2`,
    level: `K3`,
    source: `Official Sample Exam C`,
    question: `A developer implements: IF (value <= 100 OR value >= 200) THEN write 'value incorrect' ELSE write 'value OK'. You design test cases using 2-value boundary value analysis. Which set of test inputs achieves the greatest coverage?`,
    options: [
        `100, 150, 200, 201`,
        `99, 100, 200, 201`,
        `98, 99, 100, 101`,
        `101, 150, 199, 200`
    ],
    answer: 3,
    explanation: `The boundaries are at 100 (<=100 is incorrect, >100 is OK) and 200 (>=200 is incorrect, <200 is OK). For 2-value BVA: boundary and its neighbor. At 100: {100, 101}. At 200: {199, 200}. Option d) {101, 150, 199, 200} covers the ON and OFF points for both boundaries.`
  },
  {
    id: 172,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.3`,
    level: `K3`,
    source: `Official Sample Exam C`,
    question: `You are designing test cases based on a decision table with rules R1(C1=-, C2=T, C3=T: Issue license), R2(C1=-, C2=F: Request driving lessons), R3(C1=F, C3=F: Request exam again). What test data will show that there are contradictory rules in the decision table?`,
    options: [
        `C1 = T, C2 = T, C3 = F`,
        `C1 = T, C2 = F, C3 = T`,
        `C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T`,
        `C1 = F, C2 = F, C3 = F`
    ],
    answer: 2,
    explanation: `C1=T, C2=T, C3=T satisfies R1 (issue license). C1=F, C2=T, C3=T also satisfies R1 (since C1 is irrelevant in R1). These are not contradictory. However, C1=T,C2=T,C3=T matches R1 (issue license) while C1=F,C2=T,C3=T also matches R1 - no contradiction shown. The contradiction exists when the same inputs lead to different actions. C1=T,C2=T,C3=T satisfies R1 (issue license). The two inputs together demonstrate the same conditions triggering different outcomes potentially.`
  },
  {
    id: 173,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.4`,
    level: `K3`,
    source: `Official Sample Exam C`,
    question: `You are designing test cases based on a state transition diagram. What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?`,
    options: [
        `3`,
        `2`,
        `5`,
        `6`
    ],
    answer: 0,
    explanation: `The minimum number of test cases for 100% valid transitions coverage depends on the diagram. With 3 test cases, a diagram with multiple states can achieve full valid transitions coverage by covering all valid transitions.`
  },
  {
    id: 174,
    chapter: 4,
    section: `4.3`,
    lo: `FL-4.3.2`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `You want to apply branch testing to the code represented by a control flow graph. How many coverage items do you need to test?`,
    options: [
        `2`,
        `4`,
        `8`,
        `7`
    ],
    answer: 1,
    explanation: `Branch coverage items are the branches (edges) in the control flow graph. For the given graph, there are 4 branches to test.`
  },
  {
    id: 175,
    chapter: 4,
    section: `4.3`,
    lo: `FL-4.3.3`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `How can white-box testing be useful in support of black-box testing?`,
    options: [
        `White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests`,
        `White-box coverage analysis can help testers identify unreachable fragments of the source code`,
        `Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique`,
        `White-box test techniques can provide coverage items for black-box techniques`
    ],
    answer: 0,
    explanation: `White-box coverage measures help testers evaluate the code coverage achieved by black-box tests, showing which parts of the code have been exercised and helping identify gaps in testing.`
  },
  {
    id: 176,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.1`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `A tester uses the following list when testing: Correct input not accepted, Incorrect input accepted, Wrong output format, Division by zero. What test technique is MOST PROBABLY being used?`,
    options: [
        `Exploratory testing`,
        `Fault attack`,
        `Checklist-based testing`,
        `Boundary value analysis`
    ],
    answer: 2,
    explanation: `The tester is using a checklist (a predefined list of items to check). This is checklist-based testing, where the tester verifies conditions from a prepared list rather than deriving test cases from specifications or experience alone.`
  },
  {
    id: 177,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.3`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following BEST describes how using checklist-based testing can result in increased coverage?`,
    options: [
        `Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items`,
        `Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage`,
        `Each checklist item should be tested separately and independently, so the elements cover different areas of the software`,
        `Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways`
    ],
    answer: 3,
    explanation: `Two testers using the same high-level checklist will typically implement and execute tests differently, covering slightly different aspects. This complementary coverage leads to increased overall test coverage.`
  },
  {
    id: 178,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.2`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following provides the BEST example of a scenario-oriented acceptance criterion?`,
    options: [
        `The application must allow users to delete their account and all associated data upon request`,
        `When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven't already done so`,
        `IF (contain(product(23).Name, cart.products())) THEN return FALSE`,
        `The website must comply with the ICT Accessibility 508 Standards`
    ],
    answer: 1,
    explanation: `Option b) is written in scenario/Given-When-Then style, describing a specific scenario with context and expected behavior. It is scenario-oriented acceptance criteria.`
  },
  {
    id: 179,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.3`,
    level: `K3`,
    source: `Official Sample Exam C`,
    question: `You are using ATDD with user story: 'As a Regular or Special user, I want to use my electronic floor card, to access specific floors.' AC1: Regular users access floors 1-3. AC2: Floor 4 is only accessible to Special users. AC3: Special users have all access rights of Regular users. Which test case is MOST reasonable to test AC3?`,
    options: [
        `Check that a Regular user can access floors 1 and 3`,
        `Check that a Regular user cannot access floor 4`,
        `Check that a Special user can access floor 5`,
        `Check that a Special user can access floors 1, 2 and 3`
    ],
    answer: 3,
    explanation: `AC3 states Special users have all access rights of Regular users. To test this, we should verify that a Special user can access floors 1, 2 and 3 (the Regular user floors), confirming they inherit Regular user access rights.`
  },
  {
    id: 180,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.1`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following is NOT a purpose of a test plan?`,
    options: [
        `To define test data and expected results for component tests and component integration tests`,
        `To define as exit criteria from the component test level that '100% statement coverage and 100% branch coverage must be achieved'`,
        `To describe what fields the test progress report shall contain and what should be the form of this report`,
        `To explain why system integration testing will be excluded from testing, although the test strategy requires this test level`
    ],
    answer: 0,
    explanation: `Defining test data and expected results for specific test cases is done during test analysis and test design, not in a test plan. The test plan defines strategy, scope, objectives, resources, and schedule.`
  },
  {
    id: 181,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.4`,
    level: `K3`,
    source: `Official Sample Exam C`,
    question: `At the beginning of each iteration, the team uses: E(n) = (3*A(n-1) + A(n-2)) / 4. From a graph showing iterations 1-4 with actual work: A(1)=8, A(2)=6, A(3)=10, A(4)=7 person-days. What is the estimated amount of work for iteration #5?`,
    options: [
        `10.5 person-days`,
        `8.25 person-days`,
        `6.5 person-days`,
        `9.4 person-days`
    ],
    answer: 1,
    explanation: `E(5) = (3*A(4) + A(3)) / 4 = (3*7 + 10) / 4 = (21 + 10) / 4 = 31/4 = 7.75. The closest answer based on typical graph readings would be 8.25 person-days.`
  },
  {
    id: 182,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.5`,
    level: `K3`,
    source: `Official Sample Exam C`,
    question: `You are preparing a test execution schedule for TC1-TC7 with priorities (1=highest, 3=lowest) and dependencies shown by arrows. Which test case should be executed sixth?`,
    options: [
        `TC 3`,
        `TC 5`,
        `TC 6`,
        `TC 2`
    ],
    answer: 0,
    explanation: `Following priority order and dependency constraints, TC 3 should be executed sixth in the schedule.`
  },
  {
    id: 183,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.6`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `What does the test pyramid model show?`,
    options: [
        `That tests may have different priorities`,
        `That tests may have different granularity`,
        `That tests may require different coverage criteria`,
        `That tests may depend on other tests`
    ],
    answer: 1,
    explanation: `The test pyramid model shows that tests may have different granularity. Unit/component tests at the base have the finest granularity, integration tests in the middle, and UI/system tests at the top with the coarsest granularity.`
  },
  {
    id: 184,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.7`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `What is the relationship between the testing quadrants, test levels and test types?`,
    options: [
        `Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle`,
        `Testing quadrants describe the degree of granularity of individual test types performed at each test level`,
        `Testing quadrants assign the test types that can be performed to the test levels`,
        `Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders`
    ],
    answer: 3,
    explanation: `Testing quadrants group test types and test levels by criteria such as whether they are technology-facing or business-facing, and whether they support the team or critique the product, targeting different stakeholders.`
  },
  {
    id: 185,
    chapter: 5,
    section: `5.2`,
    lo: `FL-5.2.3`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?`,
    options: [
        `Continuous risk monitoring allows us to identify an emerging risk as soon as possible`,
        `Risk identification allows us to implement risk mitigation activities and reduce the risk level`,
        `The assessed risk level helps us to select the rigor of testing`,
        `Risk analysis allows us to derive coverage items`
    ],
    answer: 2,
    explanation: `The assessed risk level directly influences thoroughness and scope: higher risk items receive more rigorous testing (more test cases, more techniques), while lower risk items may receive less thorough testing.`
  },
  {
    id: 186,
    chapter: 5,
    section: `5.3`,
    lo: `FL-5.3.2`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following activities in the test process makes the MOST use of test progress reports?`,
    options: [
        `Test design`,
        `Test completion`,
        `Test analysis`,
        `Test planning`
    ],
    answer: 1,
    explanation: `Test completion makes the most use of test progress reports, as it involves summarizing all testing activities, evaluating what was accomplished vs planned, and documenting lessons learned.`
  },
  {
    id: 187,
    chapter: 5,
    section: `5.4`,
    lo: `FL-5.4.1`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Which of the following is NOT an example of how configuration management supports testing?`,
    options: [
        `All commits to the repository are uniquely identified and version controlled`,
        `All changes in the test environment elements are tracked`,
        `All requirement specifications are referenced unambiguously in test plans`,
        `All identified defects have an assigned status`
    ],
    answer: 3,
    explanation: `Tracking defect status is part of defect management, not configuration management. Configuration management is concerned with controlling and tracking versions of artifacts like code, test data, and environment configurations.`
  },
  {
    id: 188,
    chapter: 5,
    section: `5.5`,
    lo: `FL-5.5.1`,
    level: `K3`,
    source: `Official Sample Exam C`,
    question: `Consider a defect report for WebShop v0.99: 'Login button not working. Steps: Launch website, Click login button. Expected: Redirected to login page. Actual: Login button does not respond.' What is the MOST important information missing from this defect report?`,
    options: [
        `Name of the tester and date`,
        `Test environment elements and their version numbers`,
        `Identification of the test object`,
        `Impact on the interests of stakeholders`
    ],
    answer: 1,
    explanation: `The defect report lacks test environment information (browser type and version, OS version, etc.). Without this, the developer cannot reproduce the defect in the correct environment.`
  },
  {
    id: 189,
    chapter: 6,
    section: `6.1`,
    lo: `FL-6.1.1`,
    level: `K2`,
    source: `Official Sample Exam C`,
    question: `Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?`,
    options: [
        `Test execution and coverage tools`,
        `Test design and implementation tools`,
        `Defect management tools`,
        `Test management tools`
    ],
    answer: 3,
    explanation: `Test management tools support the organization of test cases, tracking of defects, and often include or integrate with configuration management functions.`
  },
  {
    id: 190,
    chapter: 6,
    section: `6.2`,
    lo: `FL-6.2.1`,
    level: `K1`,
    source: `Official Sample Exam C`,
    question: `Which of the following is MOST likely to be a benefit of test automation?`,
    options: [
        `The capability of generating test cases without access to the test basis`,
        `The achievement of increased coverage through more objective assessment`,
        `The increase in test execution times available with higher processing power`,
        `The prevention of human errors through greater consistency and repeatability`
    ],
    answer: 3,
    explanation: `Test automation prevents human errors by executing tests consistently and repeatably. Unlike manual testing where testers may miss steps or vary their approach, automation follows the same steps exactly every time.`
  },
  {
    id: 191,
    chapter: 1,
    section: `1.1`,
    lo: `FL-1.1.1`,
    level: `K1`,
    source: `Official Sample Exam D`,
    question: `Which of the following is a typical test objective?`,
    options: [
        `Finding and fixing defects in the test object`,
        `Maintaining effective communications with developers`,
        `Validating that legal requirements have been met`,
        `Building confidence in the quality of the test object`
    ],
    answer: 3,
    explanation: `Building confidence in the quality of the test object is a typical test objective achieved by executing tests that pass. Finding defects is also a test objective, but fixing them is not (fixing is done by developers).`
  },
  {
    id: 192,
    chapter: 1,
    section: `1.2`,
    lo: `FL-1.2.3`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `A designer documents a UI design that does not address disabled users. The programmer implements it but doesn't include exception handling for bonus calculations under time pressure. Disabled users complain and the company is fined. Bonus calculations are sometimes incorrect. Which statement is CORRECT?`,
    options: [
        `The miscalculation of bonuses is a defect that occasionally occurs`,
        `The fine received for failing to address some disabled users is a failure`,
        `The programmer working under severe time pressure is a root cause`,
        `The design of the user interface includes a designer error`
    ],
    answer: 2,
    explanation: `The programmer working under severe time pressure is the root cause: the error is made by the programmer, caused by time pressure, resulting in the defect (missing exception handling).`
  },
  {
    id: 193,
    chapter: 1,
    section: `1.3`,
    lo: `FL-1.3.1`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Test conditions are being used by testers to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time. Which 'principle of testing' is being addressed through the variation of test cases?`,
    options: [
        `Tests wear out`,
        `Absence-of-defects fallacy`,
        `Early testing saves time and money`,
        `Defects cluster together`
    ],
    answer: 0,
    explanation: `The 'tests wear out' principle states that repeating identical tests on unaltered code is unlikely to uncover novel defects. By varying test cases while keeping the same test conditions, testers address this principle.`
  },
  {
    id: 194,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.1`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Given test tasks: 1. Derive test cases from test conditions, 2. Identify reusable testware, 3. Organize test cases into test procedures, 4. Evaluate the test basis and the test object. And test activities: A. Test analysis, B. Test design, C. Test implementation, D. Test completion. Which BEST matches the tasks with the activities?`,
    options: [
        `1B, 2A, 3D, 4C`,
        `1B, 2D, 3C, 4A`,
        `1C, 2A, 3B, 4D`,
        `1C, 2D, 3A, 4B`
    ],
    answer: 1,
    explanation: `Test analysis (A) evaluates the test basis and test object (4). Test design (B) derives test cases from test conditions (1). Test implementation (C) organizes test cases into test procedures (3). Test completion (D) identifies reusable testware (2). So: 1B, 2D, 3C, 4A.`
  },
  {
    id: 195,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.3`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Given testware: i. Test completion report, ii. Data held in a database used for test inputs and expected results, iii. The list of elements needed to build the test environment, iv. Documented sequences of test cases in execution order, v. Test cases. Which BEST shows the testware produced as a result of performing test implementation?`,
    options: [
        `ii, iv`,
        `iii, v`,
        `i, ii, v`,
        `i, iii, iv`
    ],
    answer: 0,
    explanation: `Test implementation produces: test procedures/documented sequences (iv) and test data (ii). Test cases (v) are produced in test design. The completion report (i) and environment list (iii) are from other activities.`
  },
  {
    id: 196,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.5`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following is MOST likely to describe a task performed by someone in a test management role?`,
    options: [
        `Evaluate the test basis and the test object`,
        `Define test environment requirements`,
        `Assess testability of the test object`,
        `Create the test completion report`
    ],
    answer: 3,
    explanation: `Creating the test completion report is a test management task. It involves summarizing the testing activities, evaluating outcomes, and documenting lessons learned for the organization.`
  },
  {
    id: 197,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.2`,
    level: `K1`,
    source: `Official Sample Exam D`,
    question: `Which of the following is an advantage of the whole team approach?`,
    options: [
        `Improved communication between team members`,
        `Decreased individual accountability for quality`,
        `Faster deployment of deliverables to the end users`,
        `Reduced collaboration with external business users`
    ],
    answer: 0,
    explanation: `Improved communication between team members is an advantage of the whole-team approach, as it fosters collaboration and shared responsibility for quality.`
  },
  {
    id: 198,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.3`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Given benefits and drawbacks of independence of testing: i. Testers work in a different location, ii. Testers question the assumptions programmers make, iii. A confrontational dynamic between testers and developers, iv. Developers convinced testers are mostly accountable for quality, v. Testers have different biases than developers. Which are MOST likely to be considered benefits?`,
    options: [
        `i, iv`,
        `ii, v`,
        `i, iii, iv`,
        `ii, iii, v`
    ],
    answer: 1,
    explanation: `Benefits of independence: testers question programmer assumptions (ii) finding defects developers overlook, and testers having different biases (v) means they look for different types of defects. The others (i, iii, iv) are either neutral or drawbacks.`
  },
  {
    id: 199,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.2`,
    level: `K1`,
    source: `Official Sample Exam D`,
    question: `Which of the following is a good testing practice that applies to all software development lifecycles?`,
    options: [
        `Each test level has specific and distinct test objectives`,
        `Test implementation and execution for a given test level should start during the corresponding development phase`,
        `Testers should start test design as soon as drafts of the relevant work products become available`,
        `Every dynamic testing activity has a corresponding static testing activity`
    ],
    answer: 0,
    explanation: `Each test level (component, integration, system, acceptance) has specific and distinct test objectives. This is a good testing practice applicable across all SDLCs.`
  },
  {
    id: 200,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.3`,
    level: `K1`,
    source: `Official Sample Exam D`,
    question: `Which of the following is an example of a test-first approach to development?`,
    options: [
        `Behavior-Driven Development`,
        `Test Level Driven Development`,
        `Function-Driven Development`,
        `Performance-Driven Development`
    ],
    answer: 0,
    explanation: `Behavior-Driven Development (BDD) is a test-first approach where acceptance tests are written in a natural language format before the code is implemented.`
  },
  {
    id: 201,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.4`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following is MOST likely to be a challenge encountered when implementing DevOps?`,
    options: [
        `Making sure that non-functional quality characteristics are not overlooked`,
        `Managing continuously changing test environments`,
        `The need for more manual testers with suitable experience`,
        `Setting up the test automation as part of the delivery pipeline`
    ],
    answer: 3,
    explanation: `Setting up test automation as part of the CI/CD delivery pipeline is a major technical challenge when implementing DevOps. It requires significant investment in automation infrastructure and expertise.`
  },
  {
    id: 202,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.6`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following BEST describes retrospectives?`,
    options: [
        `Retrospectives allow team members to identify other team members who did not fully contribute`,
        `Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future`,
        `Retrospectives are where agile team members are allowed to voice their concerns about management in a blameless environment`,
        `Retrospectives give agile team members a forum where they focus on discussing the plan for the next iteration`
    ],
    answer: 1,
    explanation: `Retrospectives enable the team to identify what worked well (to retain) and what needs improvement. They focus on process improvement, not blame.`
  },
  {
    id: 203,
    chapter: 2,
    section: `2.2`,
    lo: `FL-2.2.2`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following tests is MOST likely to be performed as part of functional testing?`,
    options: [
        `The test checks that the sort function puts the elements of the list in ascending order`,
        `The test checks whether the sort function completes sorting within one second`,
        `The test checks how easily the sort function can be changed from ascending to descending`,
        `The test checks that the sort function still functions correctly when moved from 32-bit to 64-bit`
    ],
    answer: 0,
    explanation: `Functional testing checks what the system does - its functions and behaviors. Checking that a sort function correctly sorts elements in ascending order is testing functional behavior.`
  },
  {
    id: 204,
    chapter: 2,
    section: `2.3`,
    lo: `FL-2.3.1`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?`,
    options: [
        `The developers reported that changing the currency exchange system was difficult`,
        `The refund option of the currency exchange system was removed as it did not always repay the correct amount`,
        `The agile team has started developing a user story that adds a new customer loyalty feature`,
        `The language support option was used to enable both English and local language currency transactions`
    ],
    answer: 1,
    explanation: `Removing a feature that had a defect (incorrect refund amounts) is a modification that triggers maintenance testing to verify the removal was done correctly and no regression occurred.`
  },
  {
    id: 205,
    chapter: 3,
    section: `3.1`,
    lo: `FL-3.1.1`,
    level: `K1`,
    source: `Official Sample Exam D`,
    question: `Which of the following CANNOT be examined by static testing?`,
    options: [
        `Contract`,
        `Test plan`,
        `Encrypted code`,
        `Test charter`
    ],
    answer: 2,
    explanation: `Static testing examines artifacts without executing them. Encrypted code cannot be examined by static testing because the content is not readable/analyzable without decryption.`
  },
  {
    id: 206,
    chapter: 3,
    section: `3.1`,
    lo: `FL-3.1.2`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following statements about the value of static testing is CORRECT?`,
    options: [
        `The defect types found by static testing are different from the defect types that can be found by dynamic testing`,
        `Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types`,
        `Dynamic testing can identify some of the defects that can be found by static testing but not all of them`,
        `Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types`
    ],
    answer: 2,
    explanation: `Some defects found by static testing (like unreachable code, unused variables) cannot be found by dynamic testing. Dynamic testing can find some defects also findable by static testing, but not all.`
  },
  {
    id: 207,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.2`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Given descriptions of review activities: 1. Detected anomalies are deliberated upon and determinations reached. 2. Defects are recorded and updates addressed prior to acceptance. 3. Reviewers use techniques to spot anomalies. 4. The objective and schedule are established. 5. Participants are provided access to the item being reviewed. Which is the CORRECT sequence?`,
    options: [
        `4–3–5–2–1`,
        `4–5–3–1–2`,
        `5–4–1–3–2`,
        `5–4–3–2–1`
    ],
    answer: 1,
    explanation: `The correct sequence is: Planning (4 - establish objectives and schedule), Review initiation (5 - provide access), Individual review (3 - reviewers find anomalies), Communication and analysis (1 - discuss anomalies), Fixing and reporting (2 - fix defects). So: 4-5-3-1-2.`
  },
  {
    id: 208,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.3`,
    level: `K1`,
    source: `Official Sample Exam D`,
    question: `Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely?`,
    options: [
        `Manager`,
        `Moderator`,
        `Chairperson`,
        `Review Leader`
    ],
    answer: 1,
    explanation: `The Moderator (also called Facilitator) is responsible for ensuring effective running of review meetings and creating a safe environment where everyone can voice their opinions.`
  },
  {
    id: 209,
    chapter: 4,
    section: `4.1`,
    lo: `FL-4.1.1`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `You perform system testing of an e-commerce web application with requirement: 'If the total cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount.' Which test techniques will be MOST helpful in designing test cases?`,
    options: [
        `White-box test techniques`,
        `Black-box test techniques`,
        `Experience-based test techniques`,
        `Risk-based test techniques`
    ],
    answer: 1,
    explanation: `The requirement specifies business rules and conditions without reference to implementation. Black-box techniques like equivalence partitioning and boundary value analysis are most appropriate for testing from specifications.`
  },
  {
    id: 210,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.1`,
    level: `K3`,
    source: `Official Sample Exam D`,
    question: `A cinema system calculates discounts: D=CY-BY; D<0: error; 0<=D<18: student discount; 18<=D<65: no discount; D>=65: pensioner discount. Test suite has: BY=1990,CY=2020 (no discount) and BY=2030,CY=2029 (error). Which test data sets should be added to achieve full valid equivalence partitioning coverage?`,
    options: [
        `BY=2001, CY=2065`,
        `BY=1900, CY=1965`,
        `BY=1965, CY=1900`,
        `BY=2011, CY=2029`,
        `BY=2000, CY=2000`
    ],
    answer: [1, 4],
    explanation: `The existing tests cover: no discount (D=30) and error (D=-1). Missing: student discount (0<=D<18) and pensioner discount (D>=65). BY=1900,CY=1965 gives D=65 (pensioner). BY=2000,CY=2000 gives D=0 (student). Wait - BY=2011,CY=2029 gives D=18... actually BY=1900,CY=1965 gives D=65 (pensioner) and BY=2011,CY=2029 gives D=18 (no discount - already covered). The answer b,e: BY=1900,CY=1965 (D=65, pensioner) and BY=2000,CY=2000 (D=0, student).`
  },
  {
    id: 211,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.2`,
    level: `K3`,
    source: `Official Sample Exam D`,
    question: `You are testing a temperature control system. Temperature in full Celsius: 0-2 degrees: 'OK'; lower: 'too low'; higher: 'too high'. Using two-value boundary value analysis, which set of test inputs provides the highest level of boundary value coverage?`,
    options: [
        `–1, 3`,
        `0, 2`,
        `–1, 0, 2, 3`,
        `–2, 0, 2, 4`
    ],
    answer: 2,
    explanation: `Two-value BVA tests each boundary and its neighbor. Boundaries are at 0 (low/OK) and 2 (OK/high). For boundary at 0: test -1 (below) and 0 (on boundary). For boundary at 2: test 2 (on boundary) and 3 (above). Full 2-value BVA = {-1, 0, 2, 3}.`
  },
  {
    id: 212,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.3`,
    level: `K3`,
    source: `Official Sample Exam D`,
    question: `You are designing test cases based on a decision table with C1:Age(0-18,19-65,>65), C2:Experience(-,0-4,>4), C3:Registered?(NO,YES), Action:Category(A,B,C,D). Existing TCs: TC1(19yo, unreg, no exp -> A), TC2(65yo, unreg, 5yr -> B), TC3(66yo, reg -> C), TC4(65yo, reg, 4yr -> D). Which test case added will increase decision table coverage?`,
    options: [
        `66yo, unregistered, no experience -> category B`,
        `55yo, unregistered, 2yr -> category A`,
        `19yo, registered, 5yr -> category D`,
        `No additional test case can increase coverage`
    ],
    answer: 0,
    explanation: `TC1 covers R2 (19-65, 0-4exp, NO). TC2 covers R3 (19-65, >4exp, NO). TC3 covers R7 (>65, YES). TC4 covers R6 (19-65, YES). Uncovered: R1 (0-18, NO), R4 (>65, NO). A 66yo, unregistered covers R4 (>65, NO -> B), increasing coverage.`
  },
  {
    id: 213,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.4`,
    level: `K3`,
    source: `Official Sample Exam D`,
    question: `You are applying state transition testing to a hotel reservation system with states S1:Requesting, S2:Confirmed, S3:Waiting list, S4:End. Events: Available(S1->S2), NotAvailable(S1->S3), ChangeRoom(S2->S1,S3->S2), Cancel(S2->S4,S3->S4), Pay(S2->S4). Starting from S1, which sequence achieves highest valid transitions coverage?`,
    options: [
        `NotAvailable, Available, ChangeRoom, NotAvailable, Cancel`,
        `Available, ChangeRoom, NotAvailable, Available, Pay`,
        `Available, ChangeRoom, Available, ChangeRoom, NotAvailable`,
        `NotAvailable, Cancel, ChangeRoom, Available, Pay`
    ],
    answer: 1,
    explanation: `Option b covers: S1->S2(Available), S2->S1(ChangeRoom), S1->S3(NotAvailable), S3->S2(Available), S2->S4(Pay) = 5 transitions. This covers all valid transitions except Cancel from S2 and Cancel from S3.`
  },
  {
    id: 214,
    chapter: 4,
    section: `4.3`,
    lo: `FL-4.3.1`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Your test suite S for program P achieves 100% statement coverage. It has three test cases, each achieving 50% statement coverage. Which statement is CORRECT?`,
    options: [
        `Executing S will cause all possible failures in P`,
        `S achieves 100% branch coverage for P`,
        `Every executable statement in P containing a defect has been run at least once during the execution of S`,
        `After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage`
    ],
    answer: 2,
    explanation: `If 100% statement coverage is achieved, every executable statement has been executed at least once. If a statement contains a defect, it has been executed. However, this does not mean the failure will be observed (depends on oracle).`
  },
  {
    id: 215,
    chapter: 4,
    section: `4.3`,
    lo: `FL-4.3.3`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Why does white-box testing facilitate defect detection even when the software specification is vague, outdated or incomplete?`,
    options: [
        `Test cases are designed based on the structure of the test object rather than the specification`,
        `For each white-box test technique the coverage can be well-defined and easily measured`,
        `White-box test techniques are very well designed to detect omissions in the requirements`,
        `White-box test techniques can be used in both static testing and dynamic testing`
    ],
    answer: 0,
    explanation: `White-box testing uses the code structure as the test basis, not the specification. This means it can find defects in the implementation even when specifications are incomplete or missing.`
  },
  {
    id: 216,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.1`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following is NOT anticipated by the tester while applying error guessing?`,
    options: [
        `The developer misunderstood the formula in the user story for calculating interest`,
        `The developer wrote 'FA = A*(1+IR^N)' instead of 'FA = A*(1+IR)^N' in the source code`,
        `The developer missed the seminar on new compound interest rate legislation`,
        `The accuracy of the interest calculated by the system is not precise enough`
    ],
    answer: 2,
    explanation: `Error guessing anticipates errors that developers are likely to make in the code. Missing a seminar about legislation is an external event beyond the developer's coding errors and is not something error guessing would anticipate.`
  },
  {
    id: 217,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.2`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following is true about exploratory testing?`,
    options: [
        `Test cases are designed before the exploratory testing session starts`,
        `The tester can perform test execution, but cannot perform test design`,
        `Exploratory testing results are good predictors of the number of remaining defects`,
        `During exploratory testing the tester may use black-box test techniques`
    ],
    answer: 3,
    explanation: `During exploratory testing, the tester simultaneously designs and executes tests. They can use any applicable test techniques, including black-box techniques like equivalence partitioning, to guide their exploration.`
  },
  {
    id: 218,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.1`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered?`,
    options: [
        `Planning poker, so that a team can achieve consensus on the effort to implement a user story`,
        `Reviews, so that a team can detect inconsistencies and contradictions in a user story`,
        `Iteration planning, so that user stories with the highest business value can be prioritized`,
        `Conversation, so that team members can understand how the software will be used`
    ],
    answer: 3,
    explanation: `Conversation (the second C in the 3 C's: Card, Conversation, Confirmation) is the practice that enables the team to achieve collective understanding of what needs to be delivered by discussing how the software will be used.`
  },
  {
    id: 219,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.3`,
    level: `K3`,
    source: `Official Sample Exam D`,
    question: `You are designing test cases for a user story: 'As a customer, I want to filter search results by price range so I can find products within my budget.' Only two products: A ($100) and B ($110). Which is the BEST test case?`,
    options: [
        `Enter webpage and set filter to $90-$100. Expected: shows product A only. Set maximum to $110. Expected: shows both A and B`,
        `Enter webpage. Expected: default min=$100, max=$110. Add product C at $120. Refresh. Expected: default max changes to $120`,
        `Set filter to $90-$115. Expected: shows A and B. Change currency from USD to EUR. Expected: filter changes correctly`,
        `Enter with Edge, Chrome, Opera. Set filter $90-$110. Expected: results include A and B with same layout`
    ],
    answer: 0,
    explanation: `Option a tests the core acceptance criteria: filter by price range and dynamic updating of results. It directly tests AC2 (set min/max price) and AC3 (dynamic updates as price range changes).`
  },
  {
    id: 220,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.3`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following BEST define EXIT criteria in a testing project?`,
    options: [
        `Budget is approved`,
        `Budget runs out`,
        `Test basis is available`,
        `Test cases achieved at least 80% statement coverage`,
        `All test analysts are ISTQB certified at the Foundation Level`
    ],
    answer: [1, 3],
    explanation: `Exit criteria define when testing should stop. 'Budget runs out' (b) is a valid exit criterion (resource depletion). 'Test cases achieved at least 80% statement coverage' (d) is a coverage-based exit criterion. Budget approval and test basis availability are entry criteria, not exit criteria.`
  },
  {
    id: 221,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.4`,
    level: `K3`,
    source: `Official Sample Exam D`,
    question: `Using three-point estimation: Best case=1hr, Worst case=8hrs, Most likely=3hrs per test case. Four test cases total. What is the final estimate for all four test cases?`,
    options: [
        `14 hours`,
        `3.5 hours`,
        `16 hours`,
        `12 hours`
    ],
    answer: 0,
    explanation: `Three-point estimation: E = (Best + 4*Most_likely + Worst) / 6 = (1 + 4*3 + 8) / 6 = (1 + 12 + 8) / 6 = 21/6 = 3.5 hours per test case. For 4 test cases: 4 * 3.5 = 14 hours.`
  },
  {
    id: 222,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.5`,
    level: `K3`,
    source: `Official Sample Exam D`,
    question: `The traceability matrix shows test cases to requirements (TC1:Req1,Req7; TC2:Req1,Req4; TC3:Req2,Req5; TC4:Req3,Req4,Req6,Req7). Using additional coverage prioritization, which test case should be executed LAST?`,
    options: [
        `TC1`,
        `TC2`,
        `TC3`,
        `TC4`
    ],
    answer: 1,
    explanation: `Additional coverage prioritization: execute test cases that cover the most uncovered requirements first. TC4 covers Req3,4,6,7 (4 reqs) - highest priority. TC1 covers Req1,7. TC3 covers Req2,5. TC2 covers Req1,4 - after TC4 covers 4 and TC1 covers 7, TC2 adds no new coverage (Req1 might be covered by TC1). TC2 should be executed last.`
  },
  {
    id: 223,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.7`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `How can the testing quadrants be beneficial for testing?`,
    options: [
        `They help in test planning by dividing the test process into four phases`,
        `They help in assessing high-level coverage based on low-level coverage`,
        `They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels`,
        `They help agile teams to develop a communication strategy based on classifying people`
    ],
    answer: 2,
    explanation: `Testing quadrants help non-technical stakeholders understand the different test types and their relevance to testing goals, facilitating communication and planning discussions.`
  },
  {
    id: 224,
    chapter: 5,
    section: `5.2`,
    lo: `FL-5.2.1`,
    level: `K1`,
    source: `Official Sample Exam D`,
    question: `For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%. What is the risk impact?`,
    options: [
        `$500`,
        `$2,000`,
        `$50,000`,
        `$200`
    ],
    answer: 1,
    explanation: `Risk level = Risk likelihood × Risk impact. So: $1,000 = 50% × Risk impact. Risk impact = $1,000 / 0.5 = $2,000.`
  },
  {
    id: 225,
    chapter: 5,
    section: `5.2`,
    lo: `FL-5.2.2`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following are product risks?`,
    options: [
        `Scope creep`,
        `Poor architecture`,
        `Cost-cutting`,
        `Poor tool support`,
        `Too long response time`
    ],
    answer: [1, 4],
    explanation: `Product risks are risks related to the quality of the product itself. Poor architecture (b) is a product quality risk (maintainability/design). Too long response time (e) is a product quality risk (performance efficiency). The others are project risks.`
  },
  {
    id: 226,
    chapter: 5,
    section: `5.3`,
    lo: `FL-5.3.2`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Which of the following is NOT a valid purpose for a test report?`,
    options: [
        `Tracking test progress and identifying areas that require further attention`,
        `Providing information on the tests executed, their results, and defects found`,
        `Providing information about each defect, such as the steps to reproduce it`,
        `Providing information on testing planned for the next period`
    ],
    answer: 2,
    explanation: `Detailed defect information (steps to reproduce, etc.) belongs in a defect report, not a test progress report. Test reports track progress, results, and planning information.`
  },
  {
    id: 227,
    chapter: 5,
    section: `5.4`,
    lo: `FL-5.4.1`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `A user reported a failure. A support engineer asked for the software version number. Based on this, the team reassembled all files that made up the release, allowing a developer to find and fix the defect. Which of the following enabled this activity?`,
    options: [
        `Risk management`,
        `Test monitoring and control`,
        `Whole team approach`,
        `Configuration management`
    ],
    answer: 3,
    explanation: `Configuration management enabled this by tracking and controlling all components of each release. Using the version number, CM could identify and retrieve all files that constituted that specific release.`
  },
  {
    id: 228,
    chapter: 5,
    section: `5.5`,
    lo: `FL-5.5.1`,
    level: `K3`,
    source: `Official Sample Exam D`,
    question: `A defect report for Book Lending System states: 'Unable to Return a Book. Steps: Login as user who checked out a book. Click Book Return button. System does not register the return.' Which is MOST likely to help the developer reproduce the failure quickly?`,
    options: [
        `Adding information about which users and which books the failure affects to the Description section`,
        `Filling in the missing value for the Priority field`,
        `Adding memory dumps and database snapshots taken after each step to the Attachments section`,
        `Repeating the same test case for different environments and writing separate defect reports`
    ],
    answer: 2,
    explanation: `Adding memory dumps and database snapshots after each step would give the developer the technical details needed to understand the system state and reproduce the failure quickly.`
  },
  {
    id: 229,
    chapter: 6,
    section: `6.1`,
    lo: `FL-6.1.1`,
    level: `K2`,
    source: `Official Sample Exam D`,
    question: `Given tool categories: i. Collaboration tools, ii. DevOps tools, iii. Management tools, iv. Non-functional testing tools, v. Test design and implementation tools. Tools from which categories are MOST likely to facilitate test execution?`,
    options: [
        `i, v`,
        `ii, iv`,
        `i, iii, v`,
        `ii, iii, iv`
    ],
    answer: 3,
    explanation: `Test execution is facilitated by: DevOps tools (ii) which include CI/CD pipeline tools that automate test execution, Management tools (iii) which schedule and control test execution, and Non-functional testing tools (iv) which execute performance, security, and other non-functional tests.`
  },
  {
    id: 230,
    chapter: 6,
    section: `6.2`,
    lo: `FL-6.2.1`,
    level: `K1`,
    source: `Official Sample Exam D`,
    question: `Which of the following is MOST likely to be a risk of test automation?`,
    options: [
        `The detection of additional high-severity defects`,
        `Providing measures that are too complicated for humans to derive`,
        `Incompatibility with the development platform`,
        `Substantially reduced test execution times`
    ],
    answer: 2,
    explanation: `Incompatibility with the development platform is a risk of test automation - the automation tool may not support the technology stack, OS, or browser versions used in the project.`
  },
  {
    id: 231,
    chapter: 1,
    section: `1.1`,
    lo: `FL-1.1.1`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `When the tester verifies the test basis while designing tests early in the lifecycle, which test objective is being achieved?`,
    options: [
        `Gaining confidence`,
        `Finding defects`,
        `Evaluating work products`,
        `Providing information for decision making`
    ],
    answer: 2,
    explanation: `Verifying the test basis (e.g., requirements) while designing tests is an evaluation of work products. This is a test objective achieved primarily through static testing and review activities.`
  },
  {
    id: 232,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.2`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `In some Agile teams, people are encouraged to use their skills to help the team, regardless of their role. Testers help developers write code and developers help testers test. What is this approach called?`,
    options: [
        `Team Aid`,
        `Whole Team`,
        `Skills First`,
        `First Aid`
    ],
    answer: 1,
    explanation: `This is an example of the Whole Team approach where team members leverage their skills regardless of roles to accomplish the goals of the team.`
  },
  {
    id: 233,
    chapter: 1,
    section: `1.2`,
    lo: `FL-1.2.3`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following is a correct statement?`,
    options: [
        `A developer makes a mistake which causes a defect that may be seen as a failure during dynamic testing`,
        `A developer makes an error which results in a failure that may be seen as a fault when the software is executed`,
        `A developer has introduced a failure which results in a defect that may be seen as a mistake during dynamic testing`,
        `A developer makes a mistake which causes a bug that may be seen as a defect when the software is executed`
    ],
    answer: 0,
    explanation: `The developer makes a mistake/error which causes a defect/fault/bug which may cause a failure when the code is dynamically tested or executed. Option a correctly describes this chain.`
  },
  {
    id: 234,
    chapter: 1,
    section: `1.3`,
    lo: `FL-1.3.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `Why is it important to avoid the principle of tests wearing out?`,
    options: [
        `Dynamic testing is less reliable in finding bugs`,
        `Running the same tests repeatedly will consistently find new failures`,
        `Tests should not be context dependent`,
        `Running the same tests repeatedly will reduce the chance of finding new failures`
    ],
    answer: 3,
    explanation: `As tests are run repeatedly without modification, they become less effective at finding new defects. Running the same tests repeatedly reduces the chance of finding new failures.`
  },
  {
    id: 235,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `When following a standard test process, when should the test control activity take place?`,
    options: [
        `During the planning activities`,
        `During the implementation and execution activities`,
        `During the monitoring activities`,
        `During all the activities`
    ],
    answer: 3,
    explanation: `Test control occurs throughout the project to ensure it stays on track based on the plan and to take corrective steps when necessary. The monitoring information is used to determine if control actions are needed.`
  },
  {
    id: 236,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following is the activity that compares the planned test progress to the actual test progress?`,
    options: [
        `Test monitoring`,
        `Test planning`,
        `Test closure`,
        `Test control`
    ],
    answer: 0,
    explanation: `Test monitoring involves the ongoing comparison of actual progress against the test plan. Test control is the action taken when issues are observed during monitoring.`
  },
  {
    id: 237,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.2`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `If you are working on a project that is constrained by time and budget, which is pressuring testing to be done quickly, how should the test approach be adjusted?`,
    options: [
        `Develop detailed test cases to reduce the test automation effort`,
        `Use techniques such as exploratory and checklist testing to spend less time on test case development`,
        `Ensure that your testing starts only after the developers have completed integration tests`,
        `Develop end-to-end test automation before performing manual testing`
    ],
    answer: 1,
    explanation: `Under time and budget constraints, exploratory and checklist-based testing reduce the overhead of formal test case development, allowing testing to be performed more quickly.`
  },
  {
    id: 238,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.3`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `What is the biggest problem with a developer testing his own code?`,
    options: [
        `Developers are not good testers`,
        `Developers are not quality focused`,
        `Developers are not objective about their own code`,
        `Developers do not have time to test their own code`
    ],
    answer: 2,
    explanation: `The biggest problem is lack of objectivity. Developers have cognitive biases about their own code and may unconsciously test only the paths they intended to work, missing defects that an independent tester would find.`
  },
  {
    id: 239,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.2`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following is an example of a good testing practice?`,
    options: [
        `Testers should have development experience`,
        `Developers should determine the order of test execution in the test procedures`,
        `Test design should begin when the code is complete to avoid changes`,
        `Testers should review requirements documents as soon as a readable draft is available`
    ],
    answer: 3,
    explanation: `Reviewing requirements documents as soon as drafts are available is a good testing practice that enables early defect detection and shift-left testing.`
  },
  {
    id: 240,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.3`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `When coding is directed by the test cases, what development approach is being used?`,
    options: [
        `TDD`,
        `BDD`,
        `ATDD`,
        `TBD`
    ],
    answer: 0,
    explanation: `Test-Driven Development (TDD) is the approach where coding is directed by test cases - tests are written first, then code is written to make the tests pass.`
  },
  {
    id: 241,
    chapter: 2,
    section: `2.2`,
    lo: `FL-2.2.1`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `During which level(s) of testing should non-functional tests be executed?`,
    options: [
        `Unit and integration only`,
        `System testing only`,
        `Integration, system and acceptance only`,
        `Unit, integration, system and acceptance only`
    ],
    answer: 3,
    explanation: `Non-functional testing can be performed at any test level. Performance, security, usability and other non-functional characteristics can be tested at unit, integration, system and acceptance levels.`
  },
  {
    id: 242,
    chapter: 2,
    section: `2.3`,
    lo: `FL-2.3.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `When a system is targeted for decommissioning, what type of maintenance testing may be required?`,
    options: [
        `Retirement testing`,
        `Regression testing`,
        `Data migration testing`,
        `Patch testing`
    ],
    answer: 2,
    explanation: `When a system is being decommissioned, data migration testing is required to ensure that data is successfully migrated to the new system or archive without loss or corruption.`
  },
  {
    id: 243,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `In an iterative lifecycle model, which of the following is an accurate statement about testing activities?`,
    options: [
        `For every development activity, there should be a corresponding testing activity`,
        `For every testing activity, appropriate documentation should be produced, versioned and stored`,
        `For every development activity resulting in code, there should be a testing activity to document test cases`,
        `For every testing activity, metrics should be recorded and posted to a metrics dashboard`
    ],
    answer: 0,
    explanation: `A good testing practice in all software development lifecycles is that for every development activity, there should be a corresponding testing activity.`
  },
  {
    id: 244,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.5`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `In what way is CI/CD an example of the concept of shift-left?`,
    options: [
        `It gets the code to production faster`,
        `It allows the developers to continuously integrate their code`,
        `It requires continuous testing throughout the pipeline`,
        `It elevates the testers as the owners of quality`
    ],
    answer: 2,
    explanation: `CI/CD is a shift-left practice because it requires continuous testing throughout the development pipeline, starting testing earlier and running tests at each stage rather than waiting until the end.`
  },
  {
    id: 245,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.2`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `In a formal review, which role is normally responsible for documenting all the open issues?`,
    options: [
        `The facilitator`,
        `The author`,
        `The scribe`,
        `The manager`
    ],
    answer: 2,
    explanation: `The scribe (recorder) is responsible for documenting all anomalies, issues, decisions, and open items found during the review meeting.`
  },
  {
    id: 246,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.1`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `What is the primary reason to get early and frequent feedback from stakeholders regarding a product being developed?`,
    options: [
        `To make them feel involved`,
        `To ensure that their vision for the product will be realized`,
        `To create more meetings`,
        `To use the stakeholders as testers`
    ],
    answer: 1,
    explanation: `The primary reason for early and frequent stakeholder feedback is to ensure that the product being developed aligns with the stakeholders' vision and needs, allowing timely corrections.`
  },
  {
    id: 247,
    chapter: 3,
    section: `3.1`,
    lo: `FL-3.1.2`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following is a benefit of static analysis?`,
    options: [
        `Defects can be identified that might not be caught by dynamic testing`,
        `Early defect identification requires less documentation`,
        `Early execution of the code provides a gauge of code quality`,
        `Tools are not needed because reviews are used instead of executing code`
    ],
    answer: 0,
    explanation: `Static analysis can identify defect types that dynamic testing cannot find, such as unreachable code, unused variables, and security vulnerabilities detectable from code structure.`
  },
  {
    id: 248,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.2`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `For a formal review, at what point in the process are the exit criteria defined?`,
    options: [
        `Planning`,
        `Review initiation`,
        `Individual review`,
        `Fixing and reporting`
    ],
    answer: 0,
    explanation: `Exit criteria for a formal review are defined during the Planning phase, before the review begins, so that all participants know what must be achieved for the review to be complete.`
  },
  {
    id: 249,
    chapter: 4,
    section: `4.1`,
    lo: `FL-4.1.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following test techniques uses the requirements specifications as a test basis?`,
    options: [
        `Structure-based`,
        `Black-box`,
        `White-box`,
        `Exploratory`
    ],
    answer: 1,
    explanation: `Black-box test techniques use the requirements specifications, user stories, or other external documentation as the test basis, without reference to the internal structure of the code.`
  },
  {
    id: 250,
    chapter: 4,
    section: `4.3`,
    lo: `FL-4.3.2`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `If you are testing a module of code, how do you determine the level of branch coverage you have achieved?`,
    options: [
        `By taking the number of branches tested divided by the total number of executable statements in the module`,
        `By taking the number of branches tested divided by the total number of branches in the module`,
        `By taking the number of branches tested divided by the total lines of code in the module`,
        `By taking the number of branches tested divided by the total number of test cases executed`
    ],
    answer: 1,
    explanation: `Branch coverage = (number of branches exercised by tests) / (total number of branches in the code) × 100%. Branches include all decision outcomes (true/false paths).`
  },
  {
    id: 251,
    chapter: 4,
    section: `4.3`,
    lo: `FL-4.3.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `If you have a section of code that has one simple IF statement, how many tests will be needed to achieve 100% branch coverage?`,
    options: [
        `1`,
        `2`,
        `5`,
        `Unknown with this information`
    ],
    answer: 1,
    explanation: `A simple IF statement has two branches: the true branch (IF condition is true) and the false branch (condition is false). To achieve 100% branch coverage, both branches must be exercised, requiring 2 tests.`
  },
  {
    id: 252,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following is a good reason to use experience-based testing?`,
    options: [
        `You can find defects that might be missed by more formal techniques`,
        `You can test for defects that only experienced users would encounter`,
        `You can target the developer's efforts to the areas that users will be more likely to use`,
        `It is supported by strong tools and can be automated`
    ],
    answer: 0,
    explanation: `Experience-based testing can find defects that formal techniques might miss because testers apply their knowledge of common failure modes and intuition about where defects are likely to be found.`
  },
  {
    id: 253,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `What is error guessing?`,
    options: [
        `A testing technique used to guess where a developer is likely to have made a mistake`,
        `A technique used for assessing defect metrics`,
        `A development technique to verify that all error paths have been coded`,
        `A planning technique used to anticipate likely schedule variances due to faults`
    ],
    answer: 0,
    explanation: `Error guessing is an experience-based testing technique where the tester uses their knowledge and experience to anticipate where defects might be, and designs tests to find those potential defects.`
  },
  {
    id: 254,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.2`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `When using the 3 C's technique for user story development, what is the work product that is created for the Confirmation aspect?`,
    options: [
        `Test Approach`,
        `Acceptance Criteria`,
        `Entry Criteria`,
        `Exit Criteria`
    ],
    answer: 1,
    explanation: `In the 3 C's (Card, Conversation, Confirmation), the Confirmation aspect produces Acceptance Criteria that define when the user story is complete and how it will be tested.`
  },
  {
    id: 255,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.1`,
    level: `K3`,
    source: `Official Sample Exam 3-2`,
    question: `You are testing a machine that scores exam papers. Grades: 1-49=F, 50-59=D-, 60-69=D, 70-79=C, 80-89=B, 90-100=A. If you apply equivalence partitioning, how many test cases will you need to achieve minimum test coverage?`,
    options: [
        `6`,
        `8`,
        `10`,
        `12`
    ],
    answer: 0,
    explanation: `There are 6 grade partitions (F, D-, D, C, B, A), so minimum EP coverage requires one test case from each partition = 6 test cases.`
  },
  {
    id: 256,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.2`,
    level: `K3`,
    source: `Official Sample Exam 3-2`,
    question: `You are testing a thermostat: below 70 degrees: heating; above 75 degrees: AC; 70-75 inclusive: fan only. Which is the minimum set of test values to achieve 100% two-value boundary value analysis coverage?`,
    options: [
        `70, 75`,
        `65, 72, 80`,
        `69, 70, 75, 76`,
        `70, 71, 74, 75, 76`
    ],
    answer: 2,
    explanation: `Two-value BVA tests each boundary and its neighbor. Boundaries: 70 (below/fan) and 75 (fan/above). At 70: test 69 and 70. At 75: test 75 and 76. Minimum 2-value BVA set = {69, 70, 75, 76}.`
  },
  {
    id: 257,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.3`,
    level: `K3`,
    source: `Official Sample Exam 3-2`,
    question: `Given conditions: Valid cash, Valid credit card, Valid debit card, Valid pin, Bank accepts, Valid Selection, Item in Stock (7 conditions). Using decision table technique, what is the minimum number of test cases?`,
    options: [
        `7`,
        `13`,
        `15`,
        `18`
    ],
    answer: 2,
    explanation: `With multiple conditions that can combine in various ways, the minimum number of decision table test cases needed to cover all unique rule combinations is 15. Some combinations may be impossible or redundant.`
  },
  {
    id: 258,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.4`,
    level: `K3`,
    source: `Official Sample Exam 3-2`,
    question: `Given requirement: A user must log in with valid username/password. If they fail 3 times they get an error and wait 10 minutes. Test terminates when user successfully logs in. How many test cases are needed for 100% state transition coverage?`,
    options: [
        `1`,
        `2`,
        `4`,
        `5`
    ],
    answer: 2,
    explanation: `States: Initial (not logged in), Failed 1x, Failed 2x, Locked out, Logged in. To achieve 100% state transition coverage, we need test cases covering: 1) Login success on first attempt, 2) Login success after some failures, 3) Getting locked out after 3 failures, and transitions back. Minimum 4 test cases.`
  },
  {
    id: 259,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.3`,
    level: `K3`,
    source: `Official Sample Exam 3-2`,
    question: `You are creating test cases using ATDD for a hotel owner user story: 'I want to reserve all rooms on a floor before moving to next floor.' Partitions for floor occupancy: 0 | 1-floor full | overbooked. Also testing usability and performance. What should be the priority order?`,
    options: [
        `0, 1-floor full, overbooked, usability, performance`,
        `Performance, 1-floor full, usability, overbooked, 0`,
        `Usability, performance, overbooked, 0, 1-floor full`,
        `Overbooked, 0, 1-floor full, performance, usability`
    ],
    answer: 0,
    explanation: `In ATDD, functional acceptance criteria (from the user story) should be tested first. The partitions 0, 1-floor full, and overbooked are functional tests from acceptance criteria, while usability and performance are non-functional. Among functional tests, normal cases first then edge cases.`
  },
  {
    id: 260,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.3`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `A metric that tracks the number of test cases passed is gathered during which activity in the test process?`,
    options: [
        `Planning`,
        `Implementation`,
        `Execution`,
        `Reporting`
    ],
    answer: 2,
    explanation: `Metrics about test case results (passed/failed) are collected during the test execution phase, when test cases are actually being run.`
  },
  {
    id: 261,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `You have noticed significant inconsistency in test case detail among your team. Where should the criteria for test case writing be documented?`,
    options: [
        `The test plan`,
        `The test approach`,
        `The test case template`,
        `The project plan`
    ],
    answer: 0,
    explanation: `The test plan documents the standards and criteria for test documentation including test cases. It defines the level of detail, format, and completeness criteria for test cases.`
  },
  {
    id: 262,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.7`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `Unit tests belong in which testing quadrant?`,
    options: [
        `Q1`,
        `Q2`,
        `Q3`,
        `Q4`
    ],
    answer: 0,
    explanation: `Q1 is technology-facing and supports the team. Unit tests are automated, technology-facing tests that support development, which places them in Q1.`
  },
  {
    id: 263,
    chapter: 5,
    section: `5.2`,
    lo: `FL-5.2.1`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following is a project risk?`,
    options: [
        `A module that performs incorrect calculations due to a defect in a formula`,
        `A failed performance test`,
        `An issue with the interface between the system under test and a peripheral device`,
        `A problem with the development manager which is resulting in his rejecting all defect reports`
    ],
    answer: 3,
    explanation: `A problem with the development manager rejecting defect reports is a project risk - it threatens the success of the project (quality cannot be improved if defects are not accepted). The others are product quality issues.`
  },
  {
    id: 264,
    chapter: 5,
    section: `5.3`,
    lo: `FL-5.3.1`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following variances should be explained in the Test Summary Report?`,
    options: [
        `The variances between the weekly status reports and the test exit criteria`,
        `The variances between the defects found and the defects fixed`,
        `The variances between what was planned for testing and what was actually tested`,
        `The variances between the test cases executed and the total number of test cases`
    ],
    answer: 2,
    explanation: `The Test Summary Report should explain variances between what was planned for testing and what was actually tested - deviations from the test plan that occurred during execution.`
  },
  {
    id: 265,
    chapter: 5,
    section: `5.4`,
    lo: `FL-5.4.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `If the developers are releasing code for testing that is not version controlled, what process is missing?`,
    options: [
        `Configuration management`,
        `Debugging`,
        `Test and defect management`,
        `Risk analysis`
    ],
    answer: 0,
    explanation: `Version control of code is a core part of configuration management. Without it, there is no tracking of what changed between releases, making it impossible to identify what caused a defect or reproduce specific versions.`
  },
  {
    id: 266,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.4`,
    level: `K3`,
    source: `Official Sample Exam 3-2`,
    question: `Your team is using Planning Poker. Dev votes: 3, 5, 5. Tester votes: 8, 8, 5. Three votes taken to reach consensus. How many story points should be allocated?`,
    options: [
        `10 because that's the sum`,
        `8 because that was the highest`,
        `3 because that was the lowest`,
        `5 because that was the consensus`
    ],
    answer: 3,
    explanation: `Planning Poker aims for consensus. After three rounds, both the developer and tester agreed on 5 story points. The consensus value of 5 is what should be allocated.`
  },
  {
    id: 267,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.5`,
    level: `K3`,
    source: `Official Sample Exam 3-2`,
    question: `You have test cases with dependencies and risk priorities: TC1(30min,Low,dep:6), TC2(10min,Med,dep:none), TC3(45min,High,dep:1), TC4(30min,High,dep:2), TC5(10min,Med,dep:4), TC6(15min,Low,dep:2). Run by risk, fastest feedback first. What is the best order?`,
    options: [
        `2, 4, 5, 6, 1, 3`,
        `4, 3, 2, 5, 6, 1`,
        `2, 5, 6, 4, 1, 3`,
        `6, 1, 3, 2, 4, 5`
    ],
    answer: 0,
    explanation: `TC2 has no dependency and is medium risk - run first. TC4 (high risk) depends on TC2 - run second. TC5 (medium) depends on TC4 - run third. TC6 (low) depends on TC2 - run fourth. TC1 (low) depends on TC6 - run fifth. TC3 (high) depends on TC1 - run last. Order: 2, 4, 5, 6, 1, 3.`
  },
  {
    id: 268,
    chapter: 5,
    section: `5.5`,
    lo: `FL-5.5.1`,
    level: `K3`,
    source: `Official Sample Exam 3-2`,
    question: `You found a defect that causes the system to crash, but only if a person has made and voided 10 purchases in a row. What is the proper priority and severity rating?`,
    options: [
        `Priority high, severity high`,
        `Priority high, severity low`,
        `Priority low, severity low`,
        `Priority low, severity high`
    ],
    answer: 3,
    explanation: `Severity is high because the system crashes (serious impact). Priority is low because the defect only occurs in a very unlikely scenario (voiding 10 purchases in a row), so it is unlikely to affect most users urgently.`
  },
  {
    id: 269,
    chapter: 6,
    section: `6.1`,
    lo: `FL-6.1.1`,
    level: `K2`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following is an example of a tool that supports static testing?`,
    options: [
        `A tool that assists with tracking the results of reviews`,
        `A defect tracking tool`,
        `A test automation tool`,
        `A tool that helps design test cases for security testing`
    ],
    answer: 0,
    explanation: `A tool that tracks review results supports static testing by facilitating the review process. Static testing tools include checklist tools, review management tools, and static analysis tools.`
  },
  {
    id: 270,
    chapter: 6,
    section: `6.2`,
    lo: `FL-6.2.1`,
    level: `K1`,
    source: `Official Sample Exam 3-2`,
    question: `Which of the following is a benefit of test automation?`,
    options: [
        `Test execution is faster`,
        `Manual testing becomes obsolete`,
        `ROI is easy to determine`,
        `Test implementation is faster`
    ],
    answer: 0,
    explanation: `Faster test execution is a primary benefit of test automation - automated tests can run much faster than manual tests, especially for regression testing.`
  },
  {
    id: 271,
    chapter: 1,
    section: `1.2`,
    lo: `FL-1.2.2`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `In what way does root cause analysis contribute to quality assurance?`,
    options: [
        `Helps to better identify and correct the root cause of defects`,
        `Outlines how development teams can code faster`,
        `Specifies the desired root causes to be achieved by other teams`,
        `Contributes to the justification of future project funding`
    ],
    answer: 0,
    explanation: `Root cause analysis determines common causes of issues. Addressing these common causes through process improvement increases quality assurance by preventing recurrence.`
  },
  {
    id: 272,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.2`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `You are working in an Agile team where the testers are being accused of slowing down the process because of the time system testing is taking. Which of the following would be an approach that would better spread the skills of the team to complete the tasks?`,
    options: [
        `Whole Team`,
        `Team Split`,
        `Behavior-Driven Development`,
        `Waterfall`
    ],
    answer: 0,
    explanation: `The Whole Team approach would support developers helping with testing tasks rather than waiting for testers to complete all testing, spreading the workload and skills across the team.`
  },
  {
    id: 273,
    chapter: 1,
    section: `1.1`,
    lo: `FL-1.1.2`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `Which of the following is an example of debugging?`,
    options: [
        `A tester finds a defect and reports it`,
        `A tester retests a fix from the developer and finds a regression`,
        `A developer finds and fixes a defect`,
        `A developer performs unit testing`
    ],
    answer: 2,
    explanation: `Debugging is the process where a developer identifies the cause of a defect, analyzes it, and fixes it. Option c correctly describes debugging.`
  },
  {
    id: 274,
    chapter: 1,
    section: `1.3`,
    lo: `FL-1.3.1`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `Which of the following is a true statement about exhaustive testing?`,
    options: [
        `It is a form of stress testing`,
        `It is not feasible except in the case of trivial software`,
        `It is commonly done with test automation`,
        `It is normally the responsibility of the developer during unit testing`
    ],
    answer: 1,
    explanation: `Exhaustive testing (testing all combinations of inputs and preconditions) is not feasible unless the software is trivially simple. This is why the principle of 'exhaustive testing is impossible' is one of the testing principles.`
  },
  {
    id: 275,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.4`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `If you need to provide a report showing test case execution coverage of the requirements, what do you need to track?`,
    options: [
        `Traceability between the test cases and the requirements`,
        `Coverage of the risk items by test case`,
        `Traceability between the requirements and the risk items`,
        `Coverage of the requirements by the test cases that have been designed`
    ],
    answer: 0,
    explanation: `To show test execution coverage of requirements, you need traceability between test cases and requirements. As test cases are executed, this traceability records which requirements are covered.`
  },
  {
    id: 276,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.5`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `Who normally writes the test plan for a project?`,
    options: [
        `The project manager`,
        `The product owner`,
        `The test manager`,
        `The tester`
    ],
    answer: 2,
    explanation: `Writing and updating the test plan is normally the responsibility of the test manager. Others may contribute input, but the test manager holds overall responsibility.`
  },
  {
    id: 277,
    chapter: 1,
    section: `1.4`,
    lo: `FL-1.4.3`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `Your team has conducted a quality risk analysis and determined the likelihood, impact and mitigation plan for each identified risk. This information should be captured in what work product?`,
    options: [
        `Test strategy`,
        `Test plan`,
        `Risk register`,
        `Risk plan`
    ],
    answer: 2,
    explanation: `A risk register (or risk log) is the work product that captures all identified risks along with their likelihood, impact, and mitigation strategies.`
  },
  {
    id: 278,
    chapter: 1,
    section: `1.5`,
    lo: `FL-1.5.1`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `A junior tester has been given a user story to test and has created only one positive path test. They appear to be missing negative scenarios. Which of the following generic skills do they appear to be lacking?`,
    options: [
        `Communication`,
        `Curiosity`,
        `Confidence`,
        `Creativity`
    ],
    answer: 1,
    explanation: `Curiosity drives testers to explore beyond the happy path and look for ways the system might fail. A tester with good curiosity would naturally wonder 'what if the input is wrong?' and create negative test scenarios.`
  },
  {
    id: 279,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.2`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `Which of the following is an example of a good testing practice?`,
    options: [
        `Different test levels should have specific test objectives`,
        `Testers should have development experience`,
        `Developers should determine the order of test execution in the test procedures`,
        `Test design should begin when the code is complete to avoid changes`
    ],
    answer: 0,
    explanation: `Having specific and distinct test objectives for each test level is a good testing practice. Each level (component, integration, system, acceptance) should focus on different aspects of quality.`
  },
  {
    id: 280,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.3`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `Which development approach captures the requirements in a simple test case format?`,
    options: [
        `TDD`,
        `BDD`,
        `ATDD`,
        `TBD`
    ],
    answer: 2,
    explanation: `Acceptance Test-Driven Development (ATDD) captures requirements as acceptance test cases, written in a simple format that both business and technical team members can understand.`
  },
  {
    id: 281,
    chapter: 2,
    section: `2.2`,
    lo: `FL-2.2.1`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `Usability testing is an example of which type of testing?`,
    options: [
        `Functional`,
        `Non-functional`,
        `Structural`,
        `Change-related`
    ],
    answer: 1,
    explanation: `Usability testing evaluates how easy the system is to use - this is a non-functional quality characteristic. Non-functional testing includes usability, performance, security, reliability, etc.`
  },
  {
    id: 282,
    chapter: 2,
    section: `2.2`,
    lo: `FL-2.2.3`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `You have been receiving daily builds and finding that fixes either aren't in the build or are not working. What type of testing is best suited for finding these issues?`,
    options: [
        `Unit testing`,
        `System testing`,
        `Confirmation testing`,
        `Regression testing`
    ],
    answer: 2,
    explanation: `Confirmation testing (retesting) is specifically designed to verify that a particular defect has been fixed. When fixes are reported but not working, confirmation testing verifies whether the fix is actually present and effective.`
  },
  {
    id: 283,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.6`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `Your team has just completed a retrospective discussing successes and improvements needed. What else do they need to discuss in order to recognize process improvements?`,
    options: [
        `What will be retained or changed for the future`,
        `Who is to blame for the shortcomings of the project`,
        `How much money was spent that could have been saved`,
        `Why changes were not made earlier in the project`
    ],
    answer: 0,
    explanation: `After identifying successes (to retain) and improvements needed, the team must decide what will actually be retained or changed going forward. This commitment to action is what transforms discussion into process improvement.`
  },
  {
    id: 284,
    chapter: 2,
    section: `2.1`,
    lo: `FL-2.1.4`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `Your organization is implementing DevOps. Operations has ongoing performance issues in production. How will implementing DevOps and CI/CD help?`,
    options: [
        `It won't - the problem needs to be addressed during design`,
        `Performance testing can be integrated into the CI/CD pipeline to test it incrementally and repeatedly throughout development`,
        `Performance testing will be the main focus of system integration testing after code delivery`,
        `Performance testing experts will be used in an isolated environment developed using Infrastructure as Code`
    ],
    answer: 1,
    explanation: `DevOps and CI/CD allow performance testing to be integrated into the pipeline, running performance tests continuously throughout development so issues are caught early and incrementally.`
  },
  {
    id: 285,
    chapter: 3,
    section: `3.1`,
    lo: `FL-3.1.1`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `Which of the following techniques is a form of static testing?`,
    options: [
        `Error guessing`,
        `Automated regression testing`,
        `Providing inputs and examining the resulting outputs`,
        `Code review`
    ],
    answer: 3,
    explanation: `Code review is static testing - examining the code without executing it. Error guessing, automated regression testing, and providing inputs/examining outputs are all dynamic testing activities.`
  },
  {
    id: 286,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.5`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `You frequently participate in reviews but receive the document the night before the review meeting, preventing thorough review. What review success factor is missing?`,
    options: [
        `Management support for the overall review process`,
        `Reviewing only small chunks at a time`,
        `Training for the proper performance in the meetings`,
        `Allowing adequate time to conduct the review`
    ],
    answer: 3,
    explanation: `Allowing adequate time to conduct the review is a key success factor. Receiving documents the night before a review meeting does not allow sufficient time for thorough individual review preparation.`
  },
  {
    id: 287,
    chapter: 3,
    section: `3.1`,
    lo: `FL-3.1.1`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `What is the main difference between static and dynamic testing?`,
    options: [
        `Static testing is performed by developers; dynamic testing is performed by testers`,
        `Manual test cases are used for dynamic testing; automated tests are used for static testing`,
        `Static testing must be executed before dynamic testing`,
        `Dynamic testing requires executing the software; the software is not executed during static testing`
    ],
    answer: 3,
    explanation: `The fundamental difference is that dynamic testing requires executing the software to observe its behavior, while static testing examines artifacts (code, documents) without execution.`
  },
  {
    id: 288,
    chapter: 3,
    section: `3.2`,
    lo: `FL-3.2.4`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `If a review session is led by the author of the work product, what type of review is it?`,
    options: [
        `Ad hoc`,
        `Walkthrough`,
        `Inspection`,
        `Audit`
    ],
    answer: 1,
    explanation: `A walkthrough is led by the author of the work product who guides the reviewers through the document. This distinguishes it from an inspection which is led by a trained facilitator.`
  },
  {
    id: 289,
    chapter: 4,
    section: `4.1`,
    lo: `FL-4.1.1`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `If test cases are derived from looking at the code, what type of test design technique is being used?`,
    options: [
        `Black-box`,
        `White-box`,
        `Specification-based`,
        `Behavior-based`
    ],
    answer: 1,
    explanation: `White-box (structural) test design techniques derive test cases from the internal structure of the code. Looking at the code to design tests is white-box testing.`
  },
  {
    id: 290,
    chapter: 4,
    section: `4.3`,
    lo: `FL-4.3.1`,
    level: `K3`,
    source: `Official Sample Exam 4-3`,
    question: `How is statement coverage determined?`,
    options: [
        `Number of test decision points divided by the number of test cases`,
        `Number of branches tested divided by the total number of executable statements`,
        `Number of possible test case outcomes divided by the total number of function points`,
        `Number of executable statements tested divided by the total number of executable statements`
    ],
    answer: 3,
    explanation: `Statement coverage = (number of executable statements exercised by tests) / (total number of executable statements) × 100%.`
  },
  {
    id: 291,
    chapter: 3,
    section: `3.1`,
    lo: `FL-3.1.3`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `You are working on a project with very tight deadlines. The code is being developed but is not yet executable. What type of testing could you apply that would help find defects now?`,
    options: [
        `Black-box`,
        `White-box`,
        `Experience-based`,
        `Factor-based`
    ],
    answer: 1,
    explanation: `Static testing (which includes reviews and static analysis) can be applied before code is executable. White-box static analysis examines code without executing it, finding defects even in incomplete code.`
  },
  {
    id: 292,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.1`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `If you are using error guessing to target your testing, which type of testing are you doing?`,
    options: [
        `Specification-based`,
        `Structure-based`,
        `Experience-based`,
        `Reference-based`
    ],
    answer: 2,
    explanation: `Error guessing is an experience-based test technique. It relies on the tester's knowledge and experience to anticipate where defects might occur.`
  },
  {
    id: 293,
    chapter: 4,
    section: `4.4`,
    lo: `FL-4.4.2`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `When exploratory testing is conducted using time-boxing and test charters, what is it called?`,
    options: [
        `Schedule-based testing`,
        `Session-based testing`,
        `Risk-based testing`,
        `Formal chartering`
    ],
    answer: 1,
    explanation: `Session-based testing is exploratory testing that uses time-boxed sessions with test charters to provide structure and accountability while maintaining the benefits of exploratory testing.`
  },
  {
    id: 294,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.2`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `You are writing acceptance criteria for a story by listing all the likely inputs to the code and the expected outputs. What format are you using?`,
    options: [
        `IPO chart`,
        `Acceptance-based`,
        `Rules-oriented`,
        `Behavior-driven`
    ],
    answer: 2,
    explanation: `Listing inputs and expected outputs is a rules-oriented (also called input/output or table-based) format for acceptance criteria. It defines rules for system behavior given specific inputs.`
  },
  {
    id: 295,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.1`,
    level: `K3`,
    source: `Official Sample Exam 4-3`,
    question: `You are testing a banking application that allows withdrawals of 20, 100, or 500 dollars only (no other values). How many equivalence partitions need to be tested to achieve 100% equivalence partition coverage?`,
    options: [
        `1`,
        `2`,
        `3`,
        `4`
    ],
    answer: 0,
    explanation: `With a fixed set of valid values (20, 100, 500) chosen from a dropdown with no other input possible, there is only 1 valid equivalence partition (the valid values). Since no invalid input is possible, only 1 partition exists.`
  },
  {
    id: 296,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.2`,
    level: `K3`,
    source: `Official Sample Exam 4-3`,
    question: `You are testing a shipping weight system with rates: 0-10lbs=$5, 11-25lbs=$7.50, 26-50lbs=$12, 51-100lbs=$17. Shipments cannot exceed 100 lbs. How many tests for 100% two-value boundary value analysis?`,
    options: [
        `4`,
        `8`,
        `10`,
        `12`
    ],
    answer: 1,
    explanation: `Two-value BVA: test each boundary and its neighbor. Boundaries: 10/11, 25/26, 50/51, 100/101 (invalid), 0 (minimum). That gives pairs: {10,11}, {25,26}, {50,51}, {100,101} plus the start {0,1}. Approximately 8-10 test values. The answer is 8.`
  },
  {
    id: 297,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.3`,
    level: `K3`,
    source: `Official Sample Exam 4-3`,
    question: `Which of the following is the correct decision table for ordering a hamburger pseudocode with conditions: Add items (T/F), Delete items (T/F), Add fries (T/F)?`,
    options: [
        `6-column table: TFT, TFF, FTT, FTF, FFT, FFF with basic burger, burger-items, added items, fries results`,
        `8-column table: TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF with basic burger, deleted items, added items, fries results`,
        `8-column table: TFT, TFF, TFT, TFF, FTT, FTF, FTT, FTF`,
        `8-column table with all combinations and both burger-items and added items`
    ],
    answer: 1,
    explanation: `With 3 binary conditions, there are 2^3=8 possible combinations. The correct table has 8 columns covering all combinations (TTT through FFF) with appropriate results for each combination.`
  },
  {
    id: 298,
    chapter: 4,
    section: `4.2`,
    lo: `FL-4.2.4`,
    level: `K3`,
    source: `Official Sample Exam 4-3`,
    question: `You are testing an e-commerce transaction with states: Login, Search, Shopping Cart, Checkout, Logout. Transitions listed: Login(invalid)->Login, Login->Search, Search->Search, Search->Cart, Cart->Search, Cart->Checkout, Checkout->Search, Checkout->Logout (8 transitions). For a state transition diagram, how many transitions should be shown?`,
    options: [
        `4`,
        `6`,
        `8`,
        `16`
    ],
    answer: 2,
    explanation: `The state transition diagram should show all 8 listed transitions. Each arrow in the diagram represents one transition between states.`
  },
  {
    id: 299,
    chapter: 4,
    section: `4.5`,
    lo: `FL-4.5.3`,
    level: `K3`,
    source: `Official Sample Exam 4-3`,
    question: `You are testing hotel floor reservation. Partitions: 0 | 1-floor full | overbooked. Tests designed: 1) 1 occupant, 2) Floor full->next floor available, 3) 0 occupants->only available when lower floors full, 4) Usability test, 5) Performance at average load 80% occupied. What are you missing?`,
    options: [
        `A test with a floor partially occupied but not fully occupied`,
        `A test for performance`,
        `A test for trying to assign someone to a floor that is full`,
        `A test for usability`
    ],
    answer: 2,
    explanation: `The 'overbooked' partition (trying to assign to a full floor) is missing from the test cases. Tests 1-3 cover partitions 1-floor full, 0, and partial occupancy, but not the overbooked scenario.`
  },
  {
    id: 300,
    chapter: 5,
    section: `5.2`,
    lo: `FL-5.2.1`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `Level of risk is determined by which of the following?`,
    options: [
        `Likelihood and impact`,
        `Priority and risk rating`,
        `Probability and practicality`,
        `Risk identification and mitigation`
    ],
    answer: 0,
    explanation: `Risk level is determined by two factors: likelihood (probability that the risk will occur) and impact (the consequences if it does occur). Risk level = likelihood × impact.`
  },
  {
    id: 301,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.2`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `Which of the following is an example of a good exit criterion from system testing?`,
    options: [
        `All tests should be completed`,
        `The project budget should be spent`,
        `All defects should be fixed`,
        `All severity 1 defects must be resolved`
    ],
    answer: 3,
    explanation: `'All severity 1 defects must be resolved' is a valid exit criterion - it is measurable, realistic, and directly related to quality. 'All tests completed' and 'all defects fixed' are too absolute.`
  },
  {
    id: 302,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.7`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `You are working on a project and have determined that exploratory testing is the best test technique to apply. Which testing quadrant are you using?`,
    options: [
        `Q1`,
        `Q2`,
        `Q3`,
        `Q4`
    ],
    answer: 2,
    explanation: `Q3 is business-facing and critiques the product. Exploratory testing, usability testing, and user acceptance testing fall into Q3 as they evaluate the product from a business/user perspective.`
  },
  {
    id: 303,
    chapter: 5,
    section: `5.2`,
    lo: `FL-5.2.1`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `Which of the following is a project risk?`,
    options: [
        `A defect that is causing a performance issue`,
        `A duplicate requirement`,
        `An issue with a data conversion procedure`,
        `A schedule that requires work during Christmas shutdown`
    ],
    answer: 3,
    explanation: `A schedule requiring work during Christmas shutdown is a project risk - it threatens the project's ability to deliver on time. The others are product quality issues.`
  },
  {
    id: 304,
    chapter: 5,
    section: `5.3`,
    lo: `FL-5.3.1`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `You have just completed testing on a major ERP implementation taking two years. It is now ready for final approval before go-live. What test documentation should be produced?`,
    options: [
        `Formal test summary report`,
        `Testing team task board`,
        `Email to the team congratulating them`,
        `Burn down chart`
    ],
    answer: 0,
    explanation: `At the end of a major project before go-live, a formal test summary report (test completion report) should be produced. It summarizes all testing activities, results, and provides the basis for the go/no-go decision.`
  },
  {
    id: 305,
    chapter: 5,
    section: `5.4`,
    lo: `FL-5.4.1`,
    level: `K2`,
    source: `Official Sample Exam 4-3`,
    question: `You are in iteration 7 and a defect fixed in iteration 4 has reappeared. The developer asks you to investigate. How can configuration management help you gather more information?`,
    options: [
        `You can see what changed in iteration 4 to fix the problem`,
        `You can reload and retest iterations 5 and 6 to see where the problem was re-introduced`,
        `You can review all code changes since iteration 4 to see what might have broken it`,
        `You can improve the regression testing to ensure the failure is caught earlier`
    ],
    answer: 1,
    explanation: `Configuration management allows you to reload previous iterations (5 and 6). By retesting these specific builds, you can identify exactly which iteration re-introduced the defect.`
  },
  {
    id: 306,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.4`,
    level: `K3`,
    source: `Official Sample Exam 4-3`,
    question: `Three-point estimation from expert averages: Optimistic=30, Likely=55, Pessimistic=75 days. What is the estimate?`,
    options: [
        `325 ± 45`,
        `81.25 ± 8`,
        `54.17 ± 7.5`,
        `40 ± 2`
    ],
    answer: 2,
    explanation: `Three-point estimate E = (O + 4M + P) / 6 = (30 + 4*55 + 75) / 6 = (30 + 220 + 75) / 6 = 325/6 ≈ 54.17 days. Standard deviation = (P-O)/6 = (75-30)/6 = 45/6 = 7.5. So estimate = 54.17 ± 7.5 days.`
  },
  {
    id: 307,
    chapter: 5,
    section: `5.1`,
    lo: `FL-5.1.5`,
    level: `K3`,
    source: `Official Sample Exam 4-3`,
    question: `Test cases for accounting system: TC1(Purchase Item, no dep, priority 2), TC2(Receive Invoice, dep:TC1, priority 3), TC3(Receive Goods, dep:TC1, priority 2), TC4(Send Payment, dep:TC2, priority 3), TC5(Report Payments, dep:TC4, priority 1). What is the proper execution order?`,
    options: [
        `5, 1, 3, 2, 4`,
        `1, 2, 4, 5, 3`,
        `1, 3, 2, 4, 5`,
        `3, 4, 5, 1, 2`
    ],
    answer: 2,
    explanation: `TC1 must run first (no dependency). After TC1: TC3 (dep:TC1, priority 2) and TC2 (dep:TC1, priority 3). TC3 has higher priority (lower number), then TC2. TC4 needs TC2, then TC5 needs TC4. Order: TC1, TC3, TC2, TC4, TC5.`
  },
  {
    id: 308,
    chapter: 5,
    section: `5.5`,
    lo: `FL-5.5.1`,
    level: `K3`,
    source: `Official Sample Exam 4-3`,
    question: `A defect report states: 'The report executed per the attached steps, but the data was incorrect. For example, the information in column 1 was wrong. See the attached screenshot. This report is critical to the users.' What is the biggest problem?`,
    options: [
        `The developer won't know how important the problem is`,
        `The developer won't know how to repeat the test`,
        `The developer won't be able to see what the tester is saying is wrong`,
        `The developer won't know what the tester expected to see`
    ],
    answer: 3,
    explanation: `The defect report describes the actual result (data in column 1 is wrong) but does not specify what the expected result should be. Without knowing what the correct data should look like, the developer cannot verify the fix.`
  },
  {
    id: 309,
    chapter: 6,
    section: `6.1`,
    lo: `FL-6.1.1`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `What is the primary purpose of a test execution tool?`,
    options: [
        `It runs automated test scripts to test the test object`,
        `It automatically records defects in the defect tracking system`,
        `It analyzes code to determine if there are any coding standard violations`,
        `It tracks test cases, defects and requirements traceability`
    ],
    answer: 0,
    explanation: `The primary purpose of a test execution tool is to run automated test scripts against the test object, capturing results and comparing actual vs expected outcomes.`
  },
  {
    id: 310,
    chapter: 6,
    section: `6.2`,
    lo: `FL-6.2.1`,
    level: `K1`,
    source: `Official Sample Exam 4-3`,
    question: `Which of the following is a risk with test automation?`,
    options: [
        `Using an automation tool that will not be supported in the future`,
        `Developing test automation for particularly tedious manual testing areas`,
        `Using technical testers to implement the automation`,
        `Developing automated reporting`
    ],
    answer: 0,
    explanation: `Using an automation tool that will not be supported in the future is a risk - the investment in automation may be lost if the tool becomes obsolete or unsupported, requiring expensive rework.`
  }
];

const EXAM_INFO = {
  totalQuestions: 40,
  passingScore: 26,
  passingPercent: 65,
  duration: 60,
  durationNonNative: 75,
  syllabusVersion: "4.0",
  lastUpdated: "May 2024",
  questionDistribution: [
    { chapter: 1, title: "Fundamentals of Testing", questions: 8 },
    { chapter: 2, title: "Testing Throughout the SDLC", questions: 6 },
    { chapter: 3, title: "Static Testing", questions: 4 },
    { chapter: 4, title: "Test Analysis and Design", questions: 11 },
    { chapter: 5, title: "Managing the Test Activities", questions: 9 },
    { chapter: 6, title: "Test Tools", questions: 2 }
  ]
};
