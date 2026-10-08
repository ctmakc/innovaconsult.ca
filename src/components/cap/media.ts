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
  /* Workflow OS UI v2 screens (public/proof/wos2, captured 8 October 2026 at deviceScaleFactor 2 from the
     demo build). Fictional demo company Northstar Professional Services; alt texts follow src/components/wos/data.ts. */
  wosOverview: {
    src: '/proof/wos2/landscape@2x.webp',
    src800: '/proof/wos2/landscape.webp',
    w: 2224,
    h: 1154,
    alt: 'Workflow OS overview for a fictional demo company: a process landscape where each tile is sized by staff hours a month and coloured by priority, with Client Onboarding leading at 88 (illustrative demo data).'
  },
  wosMap: {
    src: '/proof/wos2/score@2x.webp',
    src800: '/proof/wos2/score.webp',
    w: 2344,
    h: 1026,
    alt: 'Workflow OS priority score for Client Onboarding: 88, Priority 1, built up from value, feasibility and strategic fit minus a risk penalty (illustrative demo data).'
  },
  wosDesigner: {
    src: '/proof/wos2/route@2x.webp',
    src800: '/proof/wos2/route.webp',
    w: 2344,
    h: 1066,
    alt: 'Workflow OS Automation Designer for Client Onboarding: a 12-step automation route of software, AI agents and four human approval gates, with the KYC decision kept under human approval (illustrative demo data).'
  },
  wosImpact: {
    src: '/proof/wos2/impact@2x.webp',
    src800: '/proof/wos2/impact.webp',
    w: 2344,
    h: 796,
    alt: 'Workflow OS business case for Client Onboarding: staff hours a month before and after on one scale, 100 hours today and 40 projected, and an estimated labour value of $43,200 a year (illustrative demo data).'
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
  'workflow-os': { src: '/proof/wos2/score-960.webp', w: 960, h: 309 },
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
  ai: { material: 'bone', screen: { ...SHOT.wosDesigner, kind: 'desktop' } },
  software: { material: 'evergreen', screen: { ...SHOT.foundwallPhone, kind: 'phone' } },
  rd: { world: { src: '/img/field-robot.webp', src800: '/img/field-robot-800.webp', w800: 800, w: 1376, h: 768, pos: '58% 60%' }, screen: { ...SHOT.openfieldPhone, kind: 'phone' } },
  partnerships: { world: { src: '/img/uafest-dance.webp', src800: '/img/uafest-dance-800.webp', w800: 800, w: 1280, h: 818, pos: '34% 50%' } }
};
