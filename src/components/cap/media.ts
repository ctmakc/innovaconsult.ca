// Imagery for the capability pages (/capabilities, /ai-transformation, /software, /innovation).
// Real screenshots from public/proof; alt text follows src/data/projects.ts or describes what is on screen.
// Worlds: real photos (Commons ones need a credit on the page that shows them) or product materials.

export type CapKey = 'ai' | 'software' | 'rd' | 'partnerships';

export const RIDEAU_CREDIT = 'Photo via Wikimedia Commons: Rideau Canal at night by Dylandamic0, CC BY-SA 3.0';

export interface Shot {
  src: string;
  src800: string;
  w: number;
  h: number;
  alt: string;
}

export const SHOT = {
  wosOverview: {
    src: '/proof/workflow-os-overview-1440-1600.webp',
    src800: '/proof/workflow-os-overview-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'Workflow OS overview of a fictional demo company: 30 people, 5 departments, 9 core systems and 15 mapped workflows, with the top automation opportunities (illustrative demo data).'
  },
  wosMap: {
    src: '/proof/workflow-os-opportunity-map-1440-1600.webp',
    src800: '/proof/workflow-os-opportunity-map-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'Workflow OS Opportunity Map: 15 processes plotted by business value and feasibility, Client Onboarding ranked first at 88 (illustrative demo data).'
  },
  wosDesigner: {
    src: '/proof/workflow-os-designer-1440-1600.webp',
    src800: '/proof/workflow-os-designer-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'Workflow OS designer: the recommended architecture for Client Onboarding, current and proposed state side by side, with its human approval gate (illustrative demo data).'
  },
  wosImpact: {
    src: '/proof/workflow-os-impact-1440-1600.webp',
    src800: '/proof/workflow-os-impact-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'Workflow OS impact view: projected staff hours, cost and payback for one automation, each figure marked as calculated, estimated or projected (illustrative demo data).'
  },
  uafestApps: {
    src: '/proof/uafest-applications-1440-1600.webp',
    src800: '/proof/uafest-applications-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'UAFest 2027 sign-up page on uafest.ca: one form with participation types for guests, volunteers, vendors, performers, sponsors and the organizing team.'
  },
  foundwallHome: {
    src: '/proof/foundwall-home-1440-1600.webp',
    src800: '/proof/foundwall-home-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'FoundWall homepage: Lost, Stolen, Found headline beside sample notices for a bike, a beagle and a robotic mower.'
  },
  foundwallNotice: {
    src: '/proof/foundwall-notice-1440-1600.webp',
    src800: '/proof/foundwall-notice-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'FoundWall notice page for a found keyring: photo, area, report date and a Contact the reporter privately button (sample notice).'
  },
  foundwallPhone: {
    src: '/proof/foundwall-board-390-800.webp',
    src800: '/proof/foundwall-board-390-400.webp',
    w: 800,
    h: 1731,
    alt: 'FoundWall board on a phone: stacked notice cards for a stolen bike and a lost cat (sample notices).'
  },
  babakokum: {
    src: '/proof/babakokum-rules-tablet-1600.webp',
    src800: '/proof/babakokum-rules-tablet-800.webp',
    w: 1600,
    h: 1331,
    alt: 'BABA & KOKUM rules card: six scoring patterns for placing printed tiles on a scarf grid and the five ink colours.'
  },
  openfieldReport: {
    src: '/proof/openfield-season-report-1440-1600.webp',
    src800: '/proof/openfield-season-report-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'OpenField season report preview: block-by-week pass grid and report figures, each tagged with its data source (demo data).'
  },
  openfieldToday: {
    src: '/proof/openfield-today-1440-1600.webp',
    src800: '/proof/openfield-today-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'OpenField Today screen for a demo dealer: stopped machines that need a person, and the fleet list with live and entry-only machines (demo farm, simulated data).'
  },
  openfieldPhone: {
    src: '/proof/openfield-entry-390-800.webp',
    src800: '/proof/openfield-entry-390-400.webp',
    w: 800,
    h: 1621,
    alt: 'OpenField technician entry screen on a phone (demo farm, simulated data).'
  }
} satisfies Record<string, Shot>;

/** Small proof thumbnails by project slug (800px variants). */
export const THUMB: Record<string, { src: string; w: number; h: number }> = {
  'workflow-os': { src: '/proof/workflow-os-overview-1440-800.webp', w: 800, h: 500 },
  uafest: { src: '/proof/uafest-applications-1440-800.webp', w: 800, h: 500 },
  foundwall: { src: '/proof/foundwall-home-1440-800.webp', w: 800, h: 500 },
  babakokum: { src: '/proof/babakokum-rules-tablet-800.webp', w: 800, h: 665 },
  openfield: { src: '/proof/openfield-season-report-1440-800.webp', w: 800, h: 500 }
};

export interface World {
  src: string;
  src800?: string;
  /** Pixel width of src800. */
  w800?: number;
  w: number;
  h: number;
  pos?: string;
}

/** One picture per capability: a world (photo or material) and at most one screen. */
export const CAP_ART: Record<CapKey, { world?: World; material?: 'bone' | 'evergreen' | 'navy' | 'loam'; screen?: Shot & { kind: 'desktop' | 'phone' }; credit?: string }> = {
  ai: { material: 'bone', screen: { ...SHOT.wosMap, kind: 'desktop' } },
  software: { material: 'evergreen', screen: { ...SHOT.foundwallPhone, kind: 'phone' } },
  rd: { world: { src: '/img/field-robot.webp', src800: '/img/field-robot-800.webp', w800: 800, w: 1376, h: 768, pos: '58% 60%' }, screen: { ...SHOT.openfieldPhone, kind: 'phone' } },
  partnerships: { world: { src: '/img/uafest-dance.webp', src800: '/img/uafest-dance-800.webp', w800: 800, w: 1280, h: 818, pos: '34% 50%' } }
};
