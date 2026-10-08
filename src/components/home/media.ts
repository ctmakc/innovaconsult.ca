// Home-only product imagery (round 4, 08.10.2026), served from public/media/.
// - wos-*: 2x crops (2288 px masters) of the redesigned Workflow OS UI (branch redesign/ui-v2),
//   captured from the seeded demo company. Northstar Professional Services is fictional; every
//   number on screen is illustrative demo data, and the alt texts restate only what is visible.
// - openfield-entry: top of the technician entry screen on a 390 px phone (3x capture
//   .proof-staging/openfield-entry-390.png, fictional demo dataset).
// - uafest-cert: the public certificate register on uafest.ca, cut from the privacy-checked capture
//   .proof-staging/uafest-certificate-check-1440.png (empty field with a placeholder code).
import type { Crop } from '../../data/crops';

const mk = (name: string, w: number, h: number, ws: number[], alt: string, dark = false): Crop => ({
  src: `/media/${name}-${ws[ws.length - 1]}.webp`,
  srcset: ws.map((x) => `/media/${name}-${x}.webp ${x}w`).join(', '),
  w,
  h,
  alt,
  dark
});

const WOS_W = [800, 1200, 1600, 2288];

export const HOME_MEDIA = {
  wosMap: mk(
    'wos-opportunities',
    2288,
    1192,
    WOS_W,
    'Workflow OS Opportunity Map: processes plotted by business value and implementation feasibility, Client Onboarding ranked 1 of 17 at 88, Priority 1, with value, feasibility, strategic fit and a risk penalty of −7.1 behind the score (illustrative demo data).',
    true
  ),
  wosRoute: mk(
    'wos-design',
    2288,
    1192,
    WOS_W,
    'Workflow OS Automation Designer for Client Onboarding: human effort per case from 100 to 40 minutes, and a 12-step automation route with 10 automated steps and 4 human approval gates, the KYC decision among them (illustrative demo data).',
    true
  ),
  wosImpact: mk(
    'wos-impact',
    2288,
    1192,
    WOS_W,
    'Workflow OS business case for Client Onboarding: staff hours a month before and after the design, 100 to 40, an estimated $43,200 a year in labour value, payback in 4.5 months and Year-1 ROI of 129.4%, each marked projected or estimated (illustrative demo data).',
    true
  ),
  openfieldEntry: mk(
    'openfield-entry',
    1170,
    1150,
    [600, 900, 1170],
    'OpenField technician entry screen on a phone: three machine stops that need a person, a rain stop, a low battery on return and a lost heartbeat, each with its farm, block and time open (demo data).'
  ),
  uafestCert: mk(
    'uafest-cert',
    1160,
    500,
    [600, 1160],
    'UAFest certificate register on uafest.ca: a code field and Check button for verifying a printed certificate.'
  )
} satisfies Record<string, Crop>;
