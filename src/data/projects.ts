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

/**
 * Each status sits on exactly one stage — status and stage never disagree.
 * Deploy (4) holds only things already in users' hands, so Built stays on Build (3).
 */
export const STATUS_STAGE: Record<ProjectStatus, StageIndex> = {
  exploring: 0,
  'partner-opportunity': 0,
  research: 1,
  prototype: 2,
  'in-development': 3,
  built: 3,
  live: 4
};

export type Domain = 'ai' | 'software' | 'community' | 'culture' | 'agritech' | 'dual-use';

export const DOMAINS: { key: Domain; label: string }[] = [
  { key: 'ai', label: 'Applied AI & agents' },
  { key: 'software', label: 'Business software' },
  { key: 'community', label: 'Community platforms' },
  { key: 'culture', label: 'Cultural games' },
  { key: 'agritech', label: 'AgriTech' },
  { key: 'dual-use', label: 'Dual-use' }
];

/** A real, privacy-checked screenshot from public/proof (see .proof-staging/MANIFEST.json). */
export interface ProofImage {
  /** 1600-wide (or 800-wide for phone shots) master variant. */
  src: string;
  /** Half-size variant for srcset. */
  src800: string;
  w: number;
  h: number;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  code: string;
  name: string;
  /** Short label for the pipeline board. */
  short: string;
  /** Two-to-four word product descriptor. */
  tagline?: string;
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
  /** INNOVA's part in the work. */
  role?: string;
  /** Who it was built for, when that is someone else. */
  client?: string;
  /** What the project needs next from outside (pilot sites, partners). */
  lookingFor?: string;
  /** Page title without the " | INNOVA" suffix (total ≤ 60 chars). */
  seoTitle?: string;
  /** Meta description, 140–160 chars. */
  seoDescription?: string;
  images?: ProofImage[];
  capability?: { href: string; label: string };
  /** Only real, public URLs. */
  url?: string;
  urlLabel?: string;
  /** A project with its own page elsewhere on the site gets no /projects/<slug> page. */
  internal?: string;
}

const CAP_AI = { href: '/ai-transformation', label: 'AI transformation' };
const CAP_SOFTWARE = { href: '/software', label: 'Software & products' };
const CAP_INNOVATION = { href: '/innovation', label: 'Innovation & R&D' };
const CAP_PARTNERSHIPS = { href: '/partnerships', label: 'Partnerships' };

const proof = (name: string, w: number, h: number, alt: string, caption: string, phone = false): ProofImage => ({
  src: `/proof/${name}-${phone ? 800 : 1600}.webp`,
  src800: `/proof/${name}-${phone ? 400 : 800}.webp`,
  w,
  h,
  alt,
  caption
});

export const PROJECTS: Project[] = [
  {
    slug: 'uafest',
    code: 'INV-01',
    name: 'UAFest digital ecosystem',
    short: 'UAFest',
    tagline: 'Festival operations platform',
    domain: 'community',
    status: 'live',
    featured: true,
    visible: true,
    summary:
      'One connected system that runs a Ukrainian cultural festival in Carleton Place, Ontario: public site, applications, participant cabinets, sponsor and finance registers, and certificates anyone can verify online. Built for the Ukrainian Community of Lanark County, a non-profit co-founded by INNOVA’s founder.',
    problem:
      'A community festival run by a non-profit and its volunteers juggled vendors, performers, volunteers, sponsors and money across spreadsheets, shared inboxes and chats. Nobody could see the whole picture.',
    solution:
      'A public website joined to an operations back office: application intake for every participant type, personal cabinets, sponsor and finance registers, task assignment, and certificates anyone can verify online.',
    technology: [
      'Next.js',
      'Supabase Postgres, row-level security on every table',
      'Role-based CRM (78 screens)',
      'Sync of 13 shared mailboxes',
      'Certificate verification at /verify',
      'English, Ukrainian, French'
    ],
    outcome:
      'CRM in production since August 2026; the festival ran on it on 13 September 2026. By September the system held about 300 participant applications and 199 participant cabinets, with 13 shared mailboxes synced into one record.',
    role: 'Designed, built and operated with the festival team.',
    // The related-party note (Ukrainian Community of Lanark County, co-founded by INNOVA's founder) lives in the summary,
    // so it shows on the home and /projects cards too and is printed once on the detail page.
    seoTitle: 'UAFest: Festival Operations Platform',
    seoDescription:
      'UAFest runs a Ukrainian festival in Carleton Place, Ontario: applications, participant cabinets, sponsor and finance registers and verifiable certificates.',
    images: [
      proof(
        'uafest-applications-1440',
        1600,
        1000,
        'UAFest 2027 sign-up page on uafest.ca: one form with participation types for guests, volunteers, vendors, performers, sponsors, Unity Ride drivers, the Rushnyk and the organizing team.',
        'The 2027 sign-up list: one form files every participant type into the CRM, ready for each call.'
      ),
      proof(
        'uafest-certificate-check-1440',
        1600,
        473,
        'UAFest certificate register on uafest.ca: a code field and Check button for verifying a printed certificate.',
        'Anyone can check a UAFest certificate code online at uafest.ca/verify.'
      )
    ],
    capability: CAP_SOFTWARE,
    url: 'https://uafest.ca',
    urlLabel: 'uafest.ca'
  },
  {
    slug: 'foundwall',
    code: 'INV-02',
    name: 'FoundWall',
    short: 'FoundWall',
    tagline: 'Lost & found network',
    domain: 'community',
    status: 'live',
    featured: true,
    visible: true,
    summary:
      'A Canada-first recovery network for lost, stolen and found property: bikes, pets, robot mowers and drones. Web platform live; iOS and Android apps in public beta (TestFlight, Google Play testing).',
    problem:
      'Lost-and-found reports are scattered across social posts, police forms and classified sites, and a phone photo can carry the owner’s home location in its metadata.',
    solution:
      'One public board with structured reports, private messaging between owner and finder, and privacy-first media handling: every photo is quarantined, stripped of location data and re-encoded before anyone sees it.',
    technology: [
      'Next.js 16',
      'React Native (Expo)',
      'Supabase Postgres with row-level security',
      'Server-side media sanitizing worker',
      'Privacy impact assessment and threat model'
    ],
    outcome: 'Web platform live at foundwall.com; iOS and Android apps in public beta (TestFlight, Google Play testing).',
    role: 'Designed, built and published by INNOVA CONSULT LTD.: web platform, plus iOS and Android apps in public beta (TestFlight, Google Play testing).',
    seoTitle: 'FoundWall: Lost & Found Recovery Network',
    seoDescription:
      'FoundWall is a Canada-first network for lost, stolen and found bikes, pets, robot mowers and drones; photos lose their location data before anyone sees them.',
    images: [
      proof(
        'foundwall-board-1440',
        1600,
        1000,
        'FoundWall public recovery board: notice cards with status bands (stolen, lost, found), area-level locations and recognition details.',
        'Public board with seeded sample notices: area-level locations only; owner identities and full serials stay private.'
      ),
      proof(
        'foundwall-notice-1440',
        1600,
        1000,
        'FoundWall notice page for a found keyring: photo, area, report date and a Contact the reporter privately button.',
        'A sample notice. Owner and finder talk through FoundWall messaging; no email or phone is published.'
      ),
      proof(
        'foundwall-board-390',
        800,
        1731,
        'FoundWall board on a 390 px phone screen: stacked notice cards for a stolen bike and a lost cat.',
        'The same board on a phone (sample notices).',
        true
      )
    ],
    capability: CAP_SOFTWARE,
    url: 'https://foundwall.com',
    urlLabel: 'foundwall.com'
  },
  {
    slug: 'aicrmius',
    code: 'INV-03',
    name: 'AICRMIUS',
    short: 'AICRMIUS',
    tagline: 'AI-native CRM',
    domain: 'software',
    status: 'in-development',
    featured: true,
    visible: true,
    summary:
      'An AI-native CRM where people and AI agents work in the same records. Agent changes wait for a person’s approval and can be undone.',
    problem:
      'Teams bolt AI assistants onto CRMs they cannot audit: the assistant suggests, a person copies, and nobody can tell later who changed what.',
    solution:
      'Agents act inside the CRM through one controlled cycle: propose, validate, approve, apply, undo. Each step is written to an audit trail, so a manager can see and reverse any change.',
    technology: [
      'Next.js + TypeScript monorepo',
      'Postgres (Prisma)',
      'Gemini agents with Google Search grounding',
      'Human approval before every change',
      'Audit trail with one-click undo'
    ],
    outcome:
      'Core agent cycle (propose, validate, approve, apply, undo) runs end to end on a self-hosted build; not yet offered to customers.',
    seoTitle: 'AICRMIUS: AI-Native CRM with Auditable Agents',
    seoDescription:
      'AICRMIUS is an AI-native CRM in development: Gemini agents propose changes to shared records, a person approves each one, and every change can be undone.',
    capability: CAP_SOFTWARE
  },
  {
    slug: 'workflow-os',
    code: 'INV-04',
    name: 'INNOVA AI Workflow OS',
    short: 'Workflow OS',
    tagline: 'Automation planning tool',
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
    technology: [
      'React + TypeScript',
      'Deterministic scoring engine (14 factors + risk penalty)',
      'AI process discovery with rules-engine fallback',
      'Architecture recommender (6 patterns, 5 human-control levels)',
      'ROI model',
      '226 automated tests'
    ],
    outcome:
      'Working prototype, online since 1 October 2026 as an invite-only demo with a fictional 30-person services firm and 15 mapped workflows.',
    capability: CAP_AI,
    internal: '/workflow-os'
  },
  {
    slug: 'finmozg',
    code: 'INV-05',
    name: 'FINMOZG',
    short: 'FINMOZG',
    tagline: 'AI finance back office',
    domain: 'ai',
    status: 'prototype',
    featured: false,
    visible: true,
    summary:
      'An AI finance department: eight specialized agents and a CFO copilot working over a real double-entry ledger. Built first for Ukrainian accounting rules.',
    problem:
      'Small companies need bookkeeping, reconciliation and reporting every month, and a general-purpose chat assistant cannot be trusted with the books.',
    solution:
      'Deterministic engines classify, post and reconcile, and keep the ledger correct. Eight AI agents read the books through read-only tools, report what needs attention and open approval tasks for a person; every posting lands in a tamper-evident audit chain.',
    technology: [
      'Next.js 15 + TypeScript',
      'Postgres (Prisma)',
      'Agents calling read-only ledger tools',
      'Hash-chained audit log',
      '200+ automated tests'
    ],
    outcome:
      'Working prototype with bank import, classification and closing flows, configured for Ukrainian charts of accounts and taxes. Not yet sold to customers.',
    seoTitle: 'FINMOZG: AI Finance Agents on a Real Ledger',
    seoDescription:
      'FINMOZG is a working prototype of an AI finance back office: eight agents and a CFO copilot on a real double-entry ledger, built for Ukrainian accounting rules.',
    capability: CAP_AI
  },
  {
    slug: 'openfield',
    code: 'INV-06',
    name: 'OpenField',
    short: 'OpenField',
    tagline: 'Ag-robot fleet logbook',
    domain: 'agritech',
    status: 'prototype',
    featured: true,
    visible: true,
    summary:
      'Season logbook for agricultural robot fleets: interventions, field reports and compliance records across machines from different manufacturers.',
    problem:
      'Dealers who service farm robots from many brands have no common record of what each machine did, where it failed and what the grower must report.',
    solution:
      'A two-tap field logbook for technicians, offline-first, that turns daily records into season reports and pre-filled compliance forms.',
    technology: [
      'Python 3.12 + FastAPI',
      'SQLite',
      'Offline-first PWA with on-device queue',
      'Exports: CanadaGAP H1, OMAFRA spray record, Transport Canada RPAS logs, AgExpert',
      '1,000+ automated tests'
    ],
    outcome:
      'Lab prototype tested on demo and simulated data. No manufacturer integration yet; field validation is planned for the 2027 growing season.',
    lookingFor: 'Ontario dealers and growers running robots from more than one manufacturer, for field validation in the 2027 season.',
    seoTitle: 'OpenField: Logbook for Farm Robot Fleets',
    seoDescription:
      'OpenField is a prototype logbook for mixed farm robot fleets: offline field records, season reports, and CanadaGAP, OMAFRA and Transport Canada RPAS exports.',
    images: [
      proof(
        'openfield-season-report-1440',
        1600,
        1000,
        'OpenField season report preview: block-by-week pass grid and report figures such as hectares completed and passes on time, each tagged with its data source.',
        'Season report preview from the logbook, on a simulated 2027 season (demo data).'
      ),
      proof(
        'openfield-entry-390',
        800,
        1621,
        'OpenField technician entry screen on a 390 px phone: open stops and a machine list for starting a walk-out record.',
        'Technician entry on a phone (demo farm, simulated data).',
        true
      )
    ],
    capability: CAP_INNOVATION
  },
  {
    slug: 'babakokum',
    code: 'INV-07',
    name: 'BABA & KOKUM: Porch Print Shop',
    short: 'Porch Print Shop',
    tagline: 'Puzzle game',
    domain: 'culture',
    status: 'live',
    featured: false,
    visible: true,
    summary:
      'A cozy puzzle game about the printed floral kokum scarf, a cloth shared by Ukrainian and Plains Cree family traditions. Built for web, iOS and Android from one codebase.',
    problem:
      'Stories of how Ukrainian settlers and Indigenous peoples in Canada shared everyday objects rarely reach people outside museums and festivals.',
    solution:
      'A short print-shop puzzle with a daily scarf, nine guests and four seasons. It runs fully offline, and the store apps make no network requests.',
    technology: [
      'Vanilla JavaScript game, no framework',
      'Expo shell around an offline copy',
      'Service-worker offline play',
      'Telegram Mini App'
    ],
    outcome:
      'On the App Store since 24 September 2026, playable on the web (itch.io, Game Jolt) and as a Telegram Mini App; Android in Google Play testing.',
    seoTitle: 'Porch Print Shop: Kokum Scarf Puzzle Game',
    seoDescription:
      'BABA & KOKUM is a cozy offline puzzle game about the kokum scarf, shared by Ukrainian and Plains Cree families. Play it on iPhone, iPad or in a web browser.',
    images: [
      {
        src: '/proof/babakokum-rules-tablet-1600.webp',
        src800: '/proof/babakokum-rules-tablet-800.webp',
        w: 1600,
        h: 1331,
        alt: 'BABA & KOKUM rules card: six scoring patterns for placing printed tiles on a scarf grid and the five ink colours.',
        caption: 'How the print-shop puzzle scores.'
      }
    ],
    capability: CAP_SOFTWARE,
    url: 'https://scarf.babakokum.com/game',
    urlLabel: 'scarf.babakokum.com'
  },
  {
    slug: 'dual-use',
    code: 'INV-08',
    name: 'Dual-use technology',
    short: 'Dual-use',
    tagline: 'Defence-adjacent scouting',
    domain: 'dual-use',
    status: 'exploring',
    featured: false,
    visible: true,
    summary: 'Exploring where INNOVA’s software and AI work can serve Canadian dual-use and defence-adjacent programs.',
    problem:
      'Defence and public-safety programs need software that converts, checks and shares operational data between systems that were never built to talk to each other.',
    solution:
      'Early stage: program research, responses to public requests for information, and a lab prototype tested on synthetic data only. No contracts or deliverables claimed.',
    technology: ['Program research', 'Responses to public requests for information', 'Lab prototype on synthetic data'],
    outcome: 'Exploring. Lab work only; no contracts.',
    seoTitle: 'Dual-Use Software and AI, Canada',
    seoDescription:
      'INNOVA explores where its software and AI work can serve Canadian dual-use and defence-adjacent programs. Early stage: research and lab work only, no contracts.',
    capability: CAP_PARTNERSHIPS
  }
];

export const visibleProjects = PROJECTS.filter((p) => p.visible);
export const featuredProjects = visibleProjects.filter((p) => p.featured);

/** Where a project lives on the site: its own product page, or its /projects detail page. */
export const projectHref = (p: Project) => p.internal ?? `/projects/${p.slug}`;
