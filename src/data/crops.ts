// Readable crops of the real product screenshots (round 3, 08.10.2026).
// Each crop is cut from the 2x master PNG in .proof-staging/ (privacy-checked captures, see
// MANIFEST.json) and served at several widths, so the UI text inside reads at its displayed size.
// Built by scratchpad crops.py; files live in public/proof/crop/<name>-<w>.webp.
// Alt texts restate MANIFEST.json / projects.ts — no new facts.

export interface Crop {
  /** largest file */
  src: string;
  srcset: string;
  w: number;
  h: number;
  alt: string;
  dark?: boolean;
}

const mk = (name: string, w: number, h: number, ws: number[], alt: string, dark = false): Crop => ({
  src: `/proof/crop/${name}-${ws[ws.length - 1]}.webp`,
  srcset: ws.map((x) => `/proof/crop/${name}-${x}.webp ${x}w`).join(', '),
  w,
  h,
  alt,
  dark
});

export const CROPS = {
  uafestForm: mk(
    'uafest-form',
    1260,
    807,
    [480, 800, 1200, 1260],
    'UAFest 2027 sign-up on uafest.ca: one form asks how each person takes part, as a guest, volunteer, vendor, performer, sponsor, Unity Ride driver, the Rushnyk or the organizing team.'
  ),
  foundwall: mk(
    'foundwall-hero',
    2203,
    1440,
    [480, 800, 1200, 1600, 2000, 2203],
    'FoundWall homepage: the Lost, Stolen, Found headline beside sample notices for a bike, a beagle, a robotic mower and a reunited bike.'
  ),
  foundwallNotice: mk(
    'foundwall-notice',
    1352,
    826,
    [676, 1352],
    'FoundWall notice page for a found keyring near Dundas West station, Toronto: the Found label, the notice title, what happened and the photo.'
  ),
  babakokum: mk(
    'babakokum-rules2',
    1090,
    570,
    [480, 800, 1090],
    'BABA & KOKUM rules card: the Ink patch and Flower bunch scoring patterns, with printed tiles on a scarf grid.'
  ),
  openfield: mk(
    'openfield-report',
    1814,
    864,
    [480, 800, 1200, 1814],
    'OpenField season report preview for a demo dealer: the 2027 season timeline and a block-by-week pass grid with on-time share (demo data).'
  ),
  wosHomeMap: mk(
    'wos-home-map',
    1823,
    950,
    [480, 800, 1200, 1600, 1823],
    'Workflow OS Opportunity Map, close up: processes plotted by value and feasibility, and Client Onboarding ranked first at 88, Priority 1 (illustrative demo data).',
    true
  ),
  wosHomeDesigner: mk(
    'wos-home-designer',
    2318,
    1210,
    [480, 800, 1200, 1600, 2000, 2318],
    'Workflow OS Automation Designer for Client Onboarding: recommended pattern, effort per case from 100 to 40 minutes, and current and proposed flows in human, system and AI lanes (illustrative demo data).',
    true
  ),
  wosHomeImpact: mk(
    'wos-home-impact',
    2318,
    1209,
    [480, 800, 1200, 1600, 2000, 2318],
    'Workflow OS business case for Client Onboarding: staff hours, cost, payback and Year-1 ROI, each tagged calculated, assumption, estimated or projected, above the cumulative net benefit chart (illustrative demo data).',
    true
  ),
  /* Close-ups of the one number that matters in each module (/workflow-os). */
  wosOverview234: mk('wos-overview-234', 462, 236, [462], 'Projected annual opportunity of $234,218 across 6 opportunities, marked Projected (illustrative demo data).', true),
  wosMap88: mk(
    'wos-map-88',
    942,
    461,
    [480, 800, 942],
    'Client Onboarding, rank 1 of 15: priority score 88, built from value 94 × .50, feasibility 94 × .30, strategic fit 100 × .20 and a risk penalty of −7.1 (illustrative demo data).',
    true
  ),
  wosDesigner60: mk('wos-designer-60', 930, 245, [480, 800, 930], 'Human effort removed 60%, staff hours released 60 per month, both calculated and marked Projected (illustrative demo data).', true),
  wosImpl: mk(
    'wos-impl-panel',
    945,
    576,
    [480, 800, 945],
    'Current implementation of Client Onboarding: 29% of effort, 5 of 20 tasks done, prototype phase dates, the next task and a projected go-live of 12 November 2026 (illustrative demo data).',
    true
  ),
  wosImpactKpi: mk(
    'wos-impact-kpi',
    1156,
    465,
    [480, 800, 1156],
    'Potential reduction of 60 staff hours a month, $43,200 estimated annual labour value, payback in 4.3 months and Year-1 ROI of 137.4%, each tagged by origin (illustrative demo data).',
    true
  )
} satisfies Record<string, Crop>;

/** A crop as a MediaFrame screen, placed with l/t/width (and lm/tm/wm on phones). */
export const asScreen = (c: Crop, pos: Record<string, string | number | boolean>) => ({
  src: c.src,
  srcset: c.srcset,
  w: c.w,
  h: c.h,
  alt: c.alt,
  poster: c.dark ? ('dark' as const) : ('light' as const),
  ...pos
});
