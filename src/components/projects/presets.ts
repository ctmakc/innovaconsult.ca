// Presentation presets for the /projects pages: which world, material and real screens each
// project is shown with, and where the screens sit in a full or half frame.
// Facts are NOT defined here: every `fact` string is copied from src/data/projects.ts or the
// fact-checked homepage cards. Alt texts and captions come from projects.ts or
// .proof-staging/MANIFEST.json (privacy-checked captures).
import type { FrameScreen, FrameWorld } from '../MediaFrame.astro';
import type { ProofImage } from '../../data/projects';
import { CROPS, asScreen } from '../../data/crops';
import { WOS2, CARD, hires } from './shots';
// Placements use l/lm only: MediaFrame writes `r` to the --r custom property, which is also the
// global corner-radius token, so an `r` offset would round the screenshot's corners by that much.

type Material = 'evergreen' | 'loam' | 'navy' | 'reel' | 'bone';

export interface Preset {
  /** One sourced fact for the card caption. */
  fact: string;
  statusLabel?: string;
  world?: FrameWorld;
  material?: Material;
  credit?: string;
  /** Screen placements in a full frame (16 / 8.6, caption bottom-left ≤ 40%). */
  full?: FrameScreen[];
  /** Screen placements in a half frame (5 / 4.6, caption in the bottom ~35%). */
  half?: FrameScreen[];
  aspectM?: string;
  /** Typographic frame for projects without public screenshots. */
  words?: string[];
  wordsLabel?: string;
  /** Extra real screenshots for the detail-page gallery (beyond projects.ts images). */
  extra?: ProofImage[];
  /** Screenshots already shown in the detail hero, left out of its gallery. */
  heroSrcs?: string[];
}

const S0 = {
  uafestApps: {
    src: '/proof/uafest-applications-1440-1600.webp',
    src800: '/proof/uafest-applications-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'UAFest 2027 sign-up page on uafest.ca: one form with participation types for guests, volunteers, vendors, performers, sponsors and the organizing team.'
  },
  uafestCert: {
    src: '/proof/uafest-certificate-check-1440-1600.webp',
    src800: '/proof/uafest-certificate-check-1440-800.webp',
    w: 1600,
    h: 473,
    alt: 'UAFest certificate register on uafest.ca: a code field and Check button for verifying a printed certificate.'
  },
  fwHome: {
    src: '/proof/foundwall-home-1440-1600.webp',
    src800: '/proof/foundwall-home-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'FoundWall homepage: Lost, Stolen, Found headline beside sample notices for a bike, a beagle and a robotic mower.'
  },
  fwPhone: {
    src: '/proof/foundwall-board-390-800.webp',
    src800: '/proof/foundwall-board-390-400.webp',
    w: 800,
    h: 1731,
    alt: 'FoundWall board on a phone: stacked notice cards for a stolen bike and a lost cat (sample notices).',
    kind: 'phone' as const
  },
  bkRules: {
    src: '/proof/babakokum-rules-tablet-1600.webp',
    src800: '/proof/babakokum-rules-tablet-800.webp',
    w: 1600,
    h: 1331,
    alt: 'BABA & KOKUM rules card: six scoring patterns for placing printed tiles on a scarf grid and the five ink colours.',
    kind: 'tablet' as const
  },
  ofReport: {
    src: '/proof/openfield-season-report-1440-1600.webp',
    src800: '/proof/openfield-season-report-1440-800.webp',
    w: 1600,
    h: 1000,
    alt: 'OpenField season report preview: block-by-week pass grid and report figures, each tagged with its data source (demo data).'
  },
  ofPhone: {
    src: '/proof/openfield-entry-390-800.webp',
    src800: '/proof/openfield-entry-390-400.webp',
    w: 800,
    h: 1621,
    alt: 'OpenField technician entry screen on a phone (demo farm, simulated data).',
    kind: 'phone' as const
  }
};

/* Every screenshot also lists its 2x file (public/proof/x2) so it stays sharp on retina. */
const S = Object.fromEntries(Object.entries(S0).map(([k, v]) => [k, { ...v, srcset: hires(v) }])) as {
  [K in keyof typeof S0]: (typeof S0)[K] & { srcset: string };
};
/* Half frames (round 4): every screen sits fully inside the picture, centred, with a short dolly
   travel (depth .5), so scrolling never crops it. */
const D = 0.5;

export const PRESETS: Record<string, Preset> = {
  uafest: {
    fact: '199 participant cabinets and 13 shared mailboxes in one record, for a Ukrainian festival in Carleton Place, Ontario.',
    world: { src: '/img/uafest-dance.webp', src800: '/img/uafest-dance-800.webp', w: 1280, h: 818, pos: '30% 50%' },
    credit: 'UAFest festival, Carleton Place',
    // Round 3: one readable crop of the sign-up form (2x master), kept clear of the caption.
    full: [asScreen(CROPS.uafestForm, { l: '50%', t: '10%', width: '45%', lm: '6%', tm: '7%', wm: '88%' })],
    half: [asScreen(CROPS.uafestForm, { l: '30%', t: '19%', width: '64%', lm: '6%', tm: '16%', wm: '88%', depth: D })],
    aspectM: '4 / 3.3',
    heroSrcs: [CROPS.uafestForm.src]
  },
  foundwall: {
    fact: 'Web platform live; iOS and Android apps in public beta. Every photo loses its location data before anyone sees it.',
    material: 'evergreen',
    full: [
      { ...S.fwHome, l: '39%', t: '10%', width: '42%', lm: '6%', tm: '9%', wm: '76%' },
      { ...S.fwPhone, l: '82.5%', t: '17%', width: '12.5%', lm: '67%', tm: '16%', wm: '27%', depth: 1.6 }
    ],
    half: [asScreen(CROPS.foundwall, { l: '11%', t: '11.5%', width: '78%', lm: '8%', tm: '16%', wm: '84%', depth: D })],
    heroSrcs: [S.fwHome.src, S.fwPhone.src]
  },
  babakokum: {
    fact: 'On the App Store since 24 September 2026, and playable on the web. Runs fully offline.',
    world: { src: '/img/babakokum-title.webp', src800: '/img/babakokum-title-800.webp', w: 1376, h: 768, pos: '30% 40%' },
    full: [{ ...S.bkRules, l: '62%', t: '9%', width: '34%', lm: '14%', tm: '7%', wm: '72%' }],
    half: [asScreen(CROPS.babakokum, { l: '9%', t: '17.5%', width: '82%', lm: '6%', tm: '22%', wm: '88%', depth: D })],
    heroSrcs: [S.bkRules.src]
  },
  openfield: {
    fact: 'Field validation is planned for the 2027 season, with Ontario dealers and growers running robots from more than one manufacturer.',
    statusLabel: 'Prototype · demo data',
    world: { src: '/img/field-robot.webp', src800: '/img/field-robot-800.webp', w: 1376, h: 768, pos: '50% 60%' },
    full: [
      { ...S.ofReport, l: '39%', t: '9%', width: '42%', lm: '6%', tm: '9%', wm: '74%' },
      { ...S.ofPhone, l: '82.5%', t: '14%', width: '12.5%', lm: '67%', tm: '14%', wm: '27%', depth: 1.6 }
    ],
    half: [{ ...CARD.openfield, poster: 'light', l: '6%', t: '22%', width: '88%', lm: '6%', tm: '27.5%', wm: '88%', depth: D }],
    extra: [
      {
        src: '/proof/openfield-today-1440-1600.webp',
        src800: '/proof/openfield-today-1440-800.webp',
        w: 1600,
        h: 1000,
        alt: 'OpenField Today screen: machine stops that need a person (rain stop, low battery, lost heartbeat) above a fleet list showing live and entry-only machines.',
        caption: 'OpenField dispatcher view with demo data: stops that need a person, then the fleet.'
      }
    ],
    heroSrcs: [S.ofReport.src, S.ofPhone.src]
  },
  'workflow-os': {
    fact: 'Invite-only demo online since 1 October 2026, on a fictional 30-person firm with 15 mapped workflows. 226 automated tests.',
    statusLabel: 'Prototype · demo data',
    material: 'navy',
    // Round 4: the redesigned product UI (2x crops); the old Overview screenshot is no longer repeated here.
    full: [
      { ...WOS2.route, poster: 'dark', l: '46%', t: '12%', width: '50%', lm: '6%', tm: '10%', wm: '88%', depth: 0.8 },
      { ...WOS2.score, poster: 'dark', l: '52%', t: '50%', width: '44%', lm: '20%', tm: '52%', wm: '74%', depth: 1.3 }
    ],
    half: [{ ...CARD.wosScore, poster: 'dark', l: '10%', t: '21%', width: '80%', lm: '6%', tm: '24.5%', wm: '88%', depth: D }]
  },
  aicrmius: {
    fact: 'Agents propose, a person approves, every change can be undone.',
    material: 'reel',
    words: ['Propose.', 'Validate.', 'Approve.', 'Apply.', 'Undo.'],
    wordsLabel: 'One cycle for every agent change'
  },
  finmozg: {
    fact: 'Eight finance agents and a CFO copilot on a real double-entry ledger.',
    material: 'loam',
    words: ['Classify.', 'Post.', 'Reconcile.'],
    wordsLabel: 'Deterministic engines keep the ledger correct'
  },
  'dual-use': {
    fact: 'Research and lab work only; no contracts.',
    material: 'reel',
    words: ['Lab work only.', 'No contracts.'],
    wordsLabel: 'Early scouting for Canadian programs'
  }
};
