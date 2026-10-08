// INNOVA AI Workflow OS: page facts.
// Product facts are traceable to /data/projects/innova-workflow-os (README.md, docs/SCORING.md,
// src/domain/types.ts, src/domain/patterns.ts; vitest run 2026-10-01: 226 passed) and to the
// memory note innova-workflow-os.md (invite-only deployment, 1 October 2026).
// Screens: public/proof/wos2/ (UI v2, captured 2026-10-08 from the demo build; alt text describes what each crop shows).

export interface Shot {
  /** 1x desktop crop (natural CSS size) */
  src: string;
  /** 2x desktop crop */
  src2x: string;
  /** CSS px of the desktop crop (the 2x file is twice this) */
  w: number;
  h: number;
  /** 2x crop of the same panel from the app's own 390px layout (764 px wide, shown on phones) */
  m?: { src: string; w: number; h: number };
  alt: string;
}

/* Workflow OS UI v2 (branch redesign/ui-v2), captured 8 October 2026 from the local demo build
   at 1440 (and 390 for phones) with deviceScaleFactor 2: public/proof/wos2/. Every number in
   these screens is the seeded demo company Northstar Professional Services (fictional). */
const W2 = '/proof/wos2/';
const shot = (name: string, w: number, h: number, mh: number | null, alt: string): Shot => ({
  src: `${W2}${name}.webp`,
  src2x: `${W2}${name}@2x.webp`,
  w,
  h,
  m: mh ? { src: `${W2}m-${name}@2x.webp`, w: 382, h: mh } : undefined,
  alt
});

export const SHOTS = {
  /** The Overview appears once on the whole site: the /workflow-os hero. */
  landscape: shot(
    'landscape',
    1112,
    577,
    482,
    'Workflow OS overview for the demo company Northstar Professional Services: 30 people, 5 departments, 11 core systems and 17 mapped workflows, drawn as a process landscape where each tile is sized by staff hours a month and coloured by priority. Client Onboarding leads at 88.'
  ),
  discovery: shot(
    'discovery',
    1172,
    550,
    442,
    'Workflow OS Discovery: a written description of a 30-person accounting and legal firm pasted into “Describe how the company operates”, three sample companies to start from, and the demo company profile with 5 departments, 12 roles and 11 systems.'
  ),
  score: shot(
    'score',
    1172,
    513,
    553,
    'Workflow OS priority score for Client Onboarding: 88, Priority 1. A waterfall chart adds value 47.0, feasibility 28.2 and strategic fit 20.0 to a base of 95.2, then subtracts a 7.1 risk penalty.'
  ),
  route: shot(
    'route',
    1172,
    533,
    340,
    'Workflow OS Automation Designer for Client Onboarding: hybrid AI-assisted automation, human effort per case from 100 to 40 minutes, and a 12-step automation route of software, AI agents and four human approval gates, with the KYC decision kept under human approval.'
  ),
  plan: shot(
    'plan',
    1164,
    570,
    537,
    'Workflow OS implementation plan for Client Onboarding: five phases from Validate to Optimize with tasks done and dates, and a task board with owners, effort in days and dependencies.'
  ),
  impact: shot(
    'impact',
    1172,
    398,
    514,
    'Workflow OS business case for Client Onboarding: staff hours a month before and after on one scale, 100 hours today and 40 hours projected, an estimated labour value of $43,200 a year, payback in 4.5 months and a projected Year-1 ROI of 129.4%.'
  )
} satisfies Record<string, Shot>;

export const TECHNOLOGY = [
  'React + TypeScript',
  'Deterministic scoring engine (14 factors + risk penalty)',
  'AI process discovery with rules-engine fallback',
  'Architecture recommender (6 patterns, 5 human-control levels)',
  'ROI model',
  '226 automated tests'
];

export const QA: { q: string; a: string; m: number }[] = [
  {
    q: 'What exactly should be automated?',
    a: 'Module 2 scores every process on 14 factors in three groups (value, feasibility, strategic fit), subtracts a risk penalty, and shows the reason behind each number.',
    m: 2
  },
  {
    q: 'Which process comes first?',
    a: 'Processes are ranked by priority score, and the plan starts with the top two or three.',
    m: 2
  },
  {
    q: 'Where is AI actually useful?',
    a: 'Where drafting, classifying, summarizing or a bounded task with tools saves real time. Stable, rule-based work goes to deterministic software.',
    m: 3
  },
  {
    q: 'Does this need an agent, or ordinary automation?',
    a: 'Module 3 recommends one of six patterns, from traditional automation to supervised agents, with one of five levels of human control.',
    m: 3
  },
  {
    q: 'What will implementation cost?',
    a: 'Module 4 turns the design into tasks, owners, integrations and milestones, which is the basis of the estimate.',
    m: 4
  },
  {
    q: 'Did the automation produce measurable value?',
    a: 'Module 5 projects the return from stated assumptions, then records actual results against the baseline after go-live.',
    m: 5
  }
];

export interface Group {
  label: string;
  items: string[];
}
export interface Module {
  name: string;
  /** Stations of the product path this module handles (Company → … → Measure). */
  stations: string[];
  line: string;
  shot: Shot;
  formula?: string[];
  fields?: string[];
  groups?: Group[];
  phases?: string[];
  levels?: string[];
  patterns?: string[];
}

export const MODULES: Module[] = [
  {
    name: 'Process discovery',
    stations: ['Company', 'Processes'],
    line: 'Capture departments, roles, systems and processes by hand, or paste a written company description and review the draft process model the AI proposes.',
    shot: SHOTS.discovery,
    fields: ['Company', 'Departments', 'Roles', 'Systems', 'Processes', 'Process steps', 'Pain points', 'Volume and minutes per case']
  },
  {
    name: 'Automation opportunity map',
    stations: ['Score', 'Select'],
    line: 'Score every process on 14 factors in three groups (value, feasibility, strategic fit), subtract a risk penalty, and show the reason and evidence source behind each number.',
    shot: SHOTS.score,
    formula: ['Value × 0.50', '+ Feasibility × 0.30', '+ Fit × 0.20', '− Risk penalty'],
    groups: [
      { label: 'Value', items: ['Time consumed', 'Volume', 'Rework', 'Waiting time', 'Client and revenue impact'] },
      { label: 'Feasibility', items: ['Standardization', 'Data readiness', 'System readiness', 'Rule clarity', 'Exception predictability'] },
      { label: 'Fit', items: ['Repeatability', 'Scalability', 'Employee pain', 'Management priority'] },
      { label: 'Risk penalty', items: ['Privacy', 'Regulatory', 'Consequence', 'Change complexity'] }
    ]
  },
  {
    name: 'Automation designer',
    stations: ['Design'],
    line: 'Recommend one of six patterns for the selected process, draw its current and proposed flow, and set a level of human control for every component.',
    shot: SHOTS.route,
    patterns: [
      'Traditional workflow automation',
      'AI assistant with human execution',
      'Bounded AI agent',
      'Multi-agent system',
      'Human-in-the-loop AI support',
      'Hybrid AI-assisted automation'
    ],
    levels: ['Fully automated', 'Review after execution', 'Approval before external action', 'Approval before critical action', 'Human only']
  },
  {
    name: 'Implementation workspace',
    stations: ['Implement'],
    line: 'Turn the design into a delivery plan in five phases, with an owner, dependencies, effort, a target date and acceptance criteria for every task.',
    shot: SHOTS.plan,
    phases: ['Validate', 'Prototype', 'Pilot', 'Production', 'Optimize'],
    fields: ['Tasks', 'Owners', 'Dependencies', 'Systems touched', 'Milestones', 'Effort in days', 'Target dates', 'Acceptance criteria']
  },
  {
    name: 'Impact & ROI',
    stations: ['Measure'],
    line: 'Project the return from stated assumptions, then record actual results against the baseline after go-live.',
    shot: SHOTS.impact,
    fields: [
      'Monthly case volume',
      'Baseline minutes per case',
      'Projected minutes per case',
      'Loaded hourly cost',
      'Implementation and operating cost',
      'Payback and Year-1 ROI',
      'Actual minutes after go-live',
      'Actual volume after go-live'
    ]
  }
];

export const RISK = ['Privacy', 'Security', 'Regulatory', 'Financial', 'Legal', 'Reputational', 'Operational', 'Model hallucination', 'Unauthorized tool use'];
