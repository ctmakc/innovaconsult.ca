// Round 4 imagery for the company pages (/projects, /projects/[slug], /ai-transformation).
//
// 1) WOS2: readable 2x crops of the redesigned Workflow OS UI (branch redesign/ui-v2, local demo
//    build, seeded fictional firm "Northstar Professional Services"). Cut from 2880px-wide captures,
//    served at 640/960/1400/full widths in public/proof/wos2/. Alt texts describe only what the crop shows.
// 2) hires(): adds the 2400w file cut from the privacy-checked 2x master (.proof-staging/MANIFEST.json)
//    to a /proof screenshot's srcset, so product screens are sharp on retina (public/proof/x2/).

export interface Shot {
  src: string;
  srcset: string;
  w: number;
  h: number;
  alt: string;
  dark?: boolean;
}

const wos = (name: string, w: number, h: number, alt: string): Shot => {
  const ws = [640, 960, 1400, w];
  return { src: `/proof/wos2/${name}-1400.webp`, srcset: ws.map((x) => `/proof/wos2/${name}-${x}.webp ${x}w`).join(', '), w, h, alt, dark: true };
};

export const WOS2 = {
  landscape: wos(
    'landscape',
    2276,
    976,
    'Workflow OS process landscape: workflows grouped by department as tiles sized by staff hours a month and coloured by priority, with Client Onboarding largest at 100 hours and score 88 (illustrative demo data).'
  ),
  score: wos(
    'score',
    2296,
    740,
    'Workflow OS priority score for Client Onboarding: 88, Priority 1, built in a waterfall from value 94 × .50, feasibility 94 × .30 and strategic fit 100 × .20 to a base of 95.2, minus a 7.1 risk penalty (illustrative demo data).'
  ),
  route: wos(
    'route',
    2296,
    740,
    'Workflow OS automation route for Client Onboarding: effort per case from 100 to 40 minutes, 60% of human effort removed, and twelve steps left to right with the KYC decision held at a human approval gate (illustrative demo data).'
  ),
  beforeAfter: wos(
    'before-after',
    2310,
    860,
    'Workflow OS business case for Client Onboarding: staff hours a month before and after on one scale, 100 hours today and 40 with the design, with the projected labour value, payback and Year-1 ROI beside it (illustrative demo data).'
  )
};

const co = (name: string, w: number, h: number, alt: string, dark = false): Shot => {
  const ws = [640, 960, 1400, w];
  return { src: `/proof/co/${name}-1400.webp`, srcset: ws.map((x) => `/proof/co/${name}-${x}.webp ${x}w`).join(', '), w, h, alt, dark };
};

/** Card crops (round 4): one readable area per product, sized for half frames on /projects. */
export const CARD = {
  openfield: co(
    'openfield-week',
    2020,
    850,
    'OpenField season report for a demo dealer: the 2027 season ruler and a block-by-week grid of passes done, late and missing, 83.3% on time (demo data).'
  ),
  wosScore: co(
    'wos-score-chart',
    1536,
    740,
    'Workflow OS score waterfall: value, feasibility and strategic fit add up to 95.2, a 7.1 risk penalty brings the priority score to 88 (illustrative demo data).',
    true
  )
};

/** Widths of the 2x files in public/proof/x2/, by screenshot base name. */
const X2: Record<string, number> = {
  'uafest-applications-1440': 2400,
  'uafest-certificate-check-1440': 2400,
  'foundwall-home-1440': 2400,
  'foundwall-board-1440': 2400,
  'foundwall-notice-1440': 2400,
  'foundwall-board-390': 1170,
  'foundwall-home-390': 1170,
  'openfield-today-1440': 2400,
  'openfield-season-report-1440': 2400,
  'openfield-entry-390': 1170,
  'babakokum-title-tablet': 2360,
  'babakokum-rules-tablet': 1760
};

/** srcset for a /proof screenshot (src = largest 1x file, src800 = half file), plus its 2x file when one exists. */
export const hires = (img: { src: string; src800?: string; w: number }): string => {
  const base = img.src.replace(/^\/proof\//, '').replace(/-\d+\.webp$/, '');
  const parts = [img.src800 ? `${img.src800} ${Math.round(img.w / 2)}w` : '', `${img.src} ${img.w}w`].filter(Boolean);
  const x = X2[base];
  if (x && x > img.w) parts.push(`/proof/x2/${base}-${x}.webp ${x}w`);
  return parts.join(', ');
};
