// INNOVA AI Workflow OS: page facts.
// Product facts are traceable to /data/projects/innova-workflow-os (README.md, docs/SCORING.md,
// src/domain/types.ts, src/domain/patterns.ts; vitest run 2026-10-01: 226 passed) and to the
// memory note innova-workflow-os.md (invite-only deployment, 1 October 2026).
// Alt text and captions: .proof-staging/MANIFEST.json (captured 2026-10-01 from commit 94b14f3).

export interface Shot {
  src: string;
  src800: string;
  src2000?: string;
  w: number;
  h: number;
  alt: string;
  caption: string;
  /** Optional zoom into one panel of the screenshot: scale + transform-origin (in % of the image). */
  zoom?: { s: number; ox: string; oy: string };
}

const shot = (name: string) => ({
  src: `/proof/workflow-os-${name}-1440-1600.webp`,
  src800: `/proof/workflow-os-${name}-1440-800.webp`,
  /** 2000w variant for the big sticky stage (retina at ~1000 css px). */
  src2000: `/proof/workflow-os-${name}-1440-2000.webp`,
  w: 1600,
  h: 1000
});

export const SHOTS = {
  overview: {
    ...shot('overview'),
    alt: 'Workflow OS overview for the demo company Northstar Professional Services: 30 people, 5 departments, 9 systems, 15 mapped workflows and the top-ranked automation opportunities.',
    caption: 'Company overview with ranked opportunities (illustrative demo data).'
  },
  map: {
    ...shot('opportunity-map'),
    alt: 'Workflow OS Opportunity Map: 15 processes plotted by business value and implementation feasibility, with Client Onboarding ranked first at 88 and its score broken into value, feasibility, strategic fit and risk.',
    caption: 'Opportunity Map for the demo company Northstar Professional Services (illustrative demo data). Every score shows its parts.'
  },
  designer: {
    ...shot('designer'),
    alt: 'Workflow OS Automation Designer for Client Onboarding: effort per case from 100 to 40 minutes, current and proposed process flows with human, system and AI lanes.',
    caption: 'Automation Designer: current state against proposed state, with the human approval gate kept. Illustrative demo data.'
  },
  impl: {
    ...shot('overview'),
    alt: 'Detail of the Workflow OS overview: the current implementation of Client Onboarding, with 5 of 20 tasks done, the prototype phase dates, the next task and a projected go-live date.',
    caption: 'Current implementation panel on the overview: tasks, phase and projected go-live (illustrative demo data).',
    zoom: { s: 2.75, ox: '98.6%', oy: '71.5%' }
  },
  impact: {
    ...shot('impact'),
    alt: 'Workflow OS business case for Client Onboarding: projected staff hours, payback and Year-1 ROI with every figure labelled calculated, assumption, estimated or projected.',
    caption: 'Business case with each number tagged by origin (illustrative demo data).'
  }
} satisfies Record<string, Shot>;

export const TECHNOLOGY = [
  'React + TypeScript',
  'Deterministic scoring engine (14 factors + risk penalty)',
  'AI process discovery with rules-engine fallback',
  'Architecture recommender (6 patterns, 5 human-control levels)',
  'ROI model',
  '226 automated tests'
];

/** Each answer shows the matching panel of a real screenshot. crop: box in source px (1600×1000), height = w / 1.6. */
export interface Crop {
  shot: 'overview' | 'map' | 'designer' | 'impact';
  x: number;
  y: number;
  w: number;
  label: string;
}

export const QA: { q: string; a: string; m: number; crop: Crop }[] = [
  {
    q: 'What exactly should be automated?',
    a: 'Module 2 scores every process on 14 factors in three groups (value, feasibility, strategic fit), subtracts a risk penalty, and shows the reason behind each number.',
    m: 2,
    crop: { shot: 'map', x: 1050, y: 340, w: 524, label: 'Priority score 88 for Client Onboarding, broken into value, feasibility, strategic fit and risk penalty, with the reasons listed below it.' }
  },
  {
    q: 'Which process comes first?',
    a: 'Processes are ranked by priority score, and the plan starts with the top two or three.',
    m: 2,
    crop: { shot: 'overview', x: 286, y: 482, w: 736, label: 'Top opportunities table: five processes ranked by priority score, Client Onboarding first at 88.' }
  },
  {
    q: 'Where is AI actually useful?',
    a: 'Where drafting, classifying, summarizing or a bounded task with tools saves real time. Stable, rule-based work goes to deterministic software.',
    m: 3,
    crop: { shot: 'designer', x: 890, y: 560, w: 700, label: 'Proposed state in human, system and AI lanes: an automation trigger passes the work to a document request agent.' }
  },
  {
    q: 'Does this need an agent, or ordinary automation?',
    a: 'Module 3 recommends one of six patterns, from traditional automation to supervised agents, with one of five levels of human control.',
    m: 3,
    crop: { shot: 'designer', x: 284, y: 150, w: 820, label: 'Recommended pattern for Client Onboarding: Hybrid AI-Assisted Automation, with the KYC decision kept under human approval.' }
  },
  {
    q: 'What will implementation cost?',
    a: 'Module 4 turns the design into tasks, owners, integrations and milestones, which is the basis of the estimate.',
    m: 4,
    crop: { shot: 'overview', x: 1048, y: 483, w: 526, label: 'Current implementation panel: 5 of 20 tasks done, prototype phase dates, next task and projected go-live.' }
  },
  {
    q: 'Did the automation produce measurable value?',
    a: 'Module 5 projects the return from stated assumptions, then records actual results against the baseline after go-live.',
    m: 5,
    crop: { shot: 'impact', x: 286, y: 456, w: 840, label: 'Business case figures with origin tags and the projected cumulative net benefit chart.' }
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
    shot: SHOTS.overview,
    fields: ['Company', 'Departments', 'Roles', 'Systems', 'Processes', 'Process steps', 'Pain points', 'Volume and minutes per case']
  },
  {
    name: 'Automation opportunity map',
    stations: ['Score', 'Select'],
    line: 'Score every process on 14 factors in three groups (value, feasibility, strategic fit), subtract a risk penalty, and show the reason and evidence source behind each number.',
    shot: SHOTS.map,
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
    shot: SHOTS.designer,
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
    shot: SHOTS.impl,
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
