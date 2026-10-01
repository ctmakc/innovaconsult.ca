import type { StageIndex } from './stages';

export type ProjectStatus =
  | 'live'
  | 'built'
  | 'in-development'
  | 'prototype'
  | 'research'
  | 'exploring'
  | 'partner-opportunity';

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: 'Live',
  built: 'Built',
  'in-development': 'In development',
  prototype: 'Prototype',
  research: 'R&D',
  exploring: 'Exploring',
  'partner-opportunity': 'Partner opportunity'
};

/** Each status sits on exactly one stage — status and stage never disagree. */
export const STATUS_STAGE: Record<ProjectStatus, StageIndex> = {
  exploring: 0,
  'partner-opportunity': 0,
  research: 1,
  prototype: 2,
  'in-development': 3,
  built: 4,
  live: 4
};

export type Domain = 'ai' | 'software' | 'community' | 'agritech' | 'dual-use';

export const DOMAINS: { key: Domain; label: string }[] = [
  { key: 'ai', label: 'Applied AI & agents' },
  { key: 'software', label: 'Business software' },
  { key: 'community', label: 'Community platforms' },
  { key: 'agritech', label: 'AgriTech' },
  { key: 'dual-use', label: 'Dual-use' }
];

export interface Project {
  slug: string;
  code: string;
  name: string;
  /** Short label for the pipeline board. */
  short: string;
  domain: Domain;
  status: ProjectStatus;
  /** Shown on the homepage and the board. Set false to keep a project off the site. */
  featured: boolean;
  visible: boolean;
  summary: string;
  problem: string;
  solution: string;
  technology: string[];
  outcome: string;
  /** Only real, public URLs. */
  url?: string;
  urlLabel?: string;
  internal?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'uafest',
    code: 'INV-01',
    name: 'UAFest digital ecosystem',
    short: 'UAFest',
    domain: 'community',
    status: 'live',
    featured: true,
    visible: true,
    summary:
      'One connected system that runs an Ottawa cultural festival: public site, applications, volunteer cabinets, sponsor and finance registers, certificates with public verification.',
    problem:
      'A volunteer-run festival juggled vendors, performers, volunteers, sponsors and money across spreadsheets, inboxes and chats. Nothing showed the whole picture.',
    solution:
      'A public website joined to an operations back office: application intake for every participant type, personal cabinets, sponsor and finance registers, task assignment, and certificates anyone can verify online.',
    technology: ['Next.js', 'Postgres with row-level security', 'Role-based CRM', 'AI-assisted triage', 'Multilingual (EN/UK)'],
    outcome: 'In daily use by the festival team since the 2026 season.',
    url: 'https://uafest.ca',
    urlLabel: 'uafest.ca'
  },
  {
    slug: 'foundwall',
    code: 'INV-02',
    name: 'FoundWall',
    short: 'FoundWall',
    domain: 'community',
    status: 'live',
    featured: true,
    visible: true,
    summary:
      'A Canada-first recovery network for lost, stolen and found property: bikes, pets, tools, drones. Web platform live; iOS and Android apps in public beta.',
    problem:
      'Lost and found reports are scattered across social posts, police forms and classified sites, and photos often leak owners’ locations.',
    solution:
      'A single public board with structured reports, privacy-first media handling (every photo is quarantined, stripped of location data and re-encoded before it is shown) and native mobile apps.',
    technology: ['Next.js', 'React Native (Expo)', 'Postgres in ca-central-1', 'Server-side media sanitising worker'],
    outcome: 'Web platform live at foundwall.com; mobile apps in TestFlight and Google Play testing.',
    url: 'https://foundwall.com',
    urlLabel: 'foundwall.com'
  },
  {
    slug: 'aicrmius',
    code: 'INV-03',
    name: 'AICRMIUS',
    short: 'AICRMIUS',
    domain: 'software',
    status: 'in-development',
    featured: true,
    visible: true,
    summary:
      'An AI-native CRM where people and AI agents work inside the same records, with every agent action reviewed, applied and reversible.',
    problem:
      'Teams bolt AI assistants onto CRMs they cannot audit: the assistant suggests, a person copies, and nobody can tell later who changed what.',
    solution:
      'Agents act inside the CRM through one controlled cycle: propose, validate, approve, apply, undo. Each step is written to an audit trail, so a manager can see and reverse any change.',
    technology: ['TypeScript monorepo', 'Postgres', 'LLM agents with web grounding', 'Human-in-the-loop approval', 'Audit log'],
    outcome: 'Core agent cycle working end to end; product in active development.'
  },
  {
    slug: 'workflow-os',
    code: 'INV-04',
    name: 'INNOVA AI Workflow OS',
    short: 'Workflow OS',
    domain: 'ai',
    status: 'prototype',
    featured: true,
    visible: true,
    summary:
      'Maps how a company actually works, scores every process for automation value and recommends the right architecture, from plain software to supervised AI agents.',
    problem:
      'Companies buy AI tools before they know which processes are worth automating, which approach fits, or how they will measure the result.',
    solution:
      'A guided flow from company to processes, scores, selection, design, implementation and measured ROI. Every score shows the reasons behind it.',
    technology: ['Deterministic scoring engine', 'Process modelling', 'Architecture recommender', 'ROI model'],
    outcome: 'Working prototype; first demonstrations in October 2026.',
    internal: '/workflow-os'
  },
  {
    slug: 'finmozg',
    code: 'INV-05',
    name: 'FinMozg',
    short: 'FinMozg',
    domain: 'ai',
    status: 'prototype',
    featured: false,
    visible: true,
    summary:
      'An AI finance department: specialised agents and a CFO copilot working over a real double-entry ledger.',
    problem:
      'Small companies need bookkeeping, reconciliation and reporting every month, and generic chat assistants cannot be trusted with the books.',
    solution:
      'Deterministic accounting engines keep the ledger correct; AI agents classify, reconcile and draft on top of them, and every posting lands in a tamper-evident audit chain.',
    technology: ['Next.js', 'Postgres', 'Agent tool-calling loop', 'Hash-chained audit log', '200+ automated tests'],
    outcome: 'Working prototype with bank import, classification and closing flows.'
  },
  {
    slug: 'openfield',
    code: 'INV-06',
    name: 'OpenField',
    short: 'OpenField',
    domain: 'agritech',
    status: 'research',
    featured: true,
    visible: true,
    summary:
      'Season logbook for agricultural robot fleets: interventions, field reports and compliance records across machines from different manufacturers.',
    problem:
      'Dealers who service farm robots from many brands have no common record of what each machine did, where it failed and what the grower must report.',
    solution:
      'A two-tap field logbook for technicians, offline-first, that turns daily records into season reports and pre-filled compliance forms.',
    technology: ['Python', 'Offline-first PWA', 'Fleet and job model', 'Report generation (CanadaGAP, OMAFRA, Transport Canada formats)'],
    outcome: 'Software prototype built; field validation is being scoped for the 2027 growing season.'
  },
  {
    slug: 'babakokum',
    code: 'INV-07',
    name: 'BABA & KOKUM: Porch Print Shop',
    short: 'Porch Print Shop',
    domain: 'community',
    status: 'built',
    featured: false,
    visible: true,
    summary: 'A puzzle game for children about traditional Ukrainian block printing, built for web, iOS and Android from one codebase.',
    problem: 'Cultural education for children rarely reaches them where they already spend time: on phones and tablets.',
    solution: 'A short, playful print-shop puzzle that works offline and ships as native store apps without network requests.',
    technology: ['Web game engine', 'Expo native shell', 'Offline build'],
    outcome: 'Built; store releases in preparation.'
  },
  {
    slug: 'dual-use',
    code: 'INV-08',
    name: 'Dual-use collaborations',
    short: 'Dual-use',
    domain: 'dual-use',
    status: 'exploring',
    featured: false,
    visible: true,
    summary:
      'Exploring where INNOVA’s software and AI work can serve dual-use and defence-adjacent programs, together with Canadian and allied partners.',
    problem: 'Field-proven technology from allied innovators rarely meets Canadian programs that could use it.',
    solution: 'Early-stage scouting and partner conversations; no deliverables claimed yet.',
    technology: ['Technology scouting', 'Program readiness'],
    outcome: 'Exploring.'
  }
];

export const visibleProjects = PROJECTS.filter((p) => p.visible);
export const featuredProjects = visibleProjects.filter((p) => p.featured);
