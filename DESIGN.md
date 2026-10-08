# DESIGN v2 — innovaconsult.ca «SCREEN IN ITS WORLD»

Supersedes v1 «STAGE LINE» (petrol + turquoise, mono labels, ruled stage rows, pipeline board). The owner called v1 "AI slop" on 07.10.2026; nothing from it is to be reused in new work. Legacy v1 classes survive only in `src/styles/legacy.css` so inner pages keep building until each one is ported.

Subject and audience: INNOVA CONSULT LTD., Ottawa, an applied AI and software company. Readers are Invest Ottawa, NRC IRAP, grant reviewers, CTOs and research partners.
Page job: within one second the page says "applied AI and software, Ottawa, real products in use". Then it sends the reader to Contact.

## Direction
A cinematic deep-tech look in the Anduril / Helsing register. The ground is a dark film, with one giant fitted statement over a real photograph. Products appear as real images, with few words per screen.
- **Signature, SCREEN IN ITS WORLD:** every real product screenshot floats in front of the world it serves:
  - UAFest: the festival stage.
  - BABA & KOKUM: the porch key art.
  - OpenField: a dawn field with a robot.
  - FoundWall: an evergreen material.
- On scroll, the world and the screens move at different depths.
- The risk we take on purpose: software screenshots are treated as film stills.
- The judges' fixes are built in:
  - The hero no longer opens from a black slit. The photo is there at first paint and the entrance is done in under 1 s.
  - A "Live now" proof line sits in the first screen.
  - Workflow OS screens sit directly on bone. The dark-on-dark room is gone.
  - The six stage words are now one paragraph that lights up.
  - Captions never overlap screens. On phones the caption drops below the picture.
  - No text smaller than 14px. Mobile body is 17px.

## Tokens (law, `src/styles/global.css :root`)
| token | value | use |
|---|---|---|
| `--film` | #0D0C0B | page ground (warm black) |
| `--reel` / `--reel-2` | #171614 / #201E1B | raised dark panels, hover |
| `--print` | #EEEAE2 | text on film (never #fff) |
| `--ash` | #AAA498 | secondary text on film (AA) |
| `--bone` / `--bone-2` | #E6E2D8 / #D8D3C7 | light material sections |
| `--ink` / `--ink-soft` | #141310 / #545048 | text on bone (AA) |
| `--flare` / `--flare-hi` | #FF5B22 / #FF7443 | THE accent. Use it at most 3 times per viewport: Contact, Live dot, the primary CTA, the closing block |
| `--flare-ink` | #B23A0E | flare used as text on bone |
| `--m-evergreen` `--m-loam` `--m-navy` | #1D3A2E #2C2A22 #1A2240 | product materials: only behind product screens (MediaFrame `material`) |

Teal appears only inside the logo mark. Colours come from tokens only, with no raw hex in components.

## Type
- Use **Host Grotesk** only. It is self-hosted as a variable woff2 (300–800) with a metric-matched fallback. No mono and no second family.
- Giant (`.t-giant` + FitText): 600 caps, −0.035em, line-height .84. Each line is fitted to its box width, and mobile lines share one size.
- `.t-display` 48–120px / 500 / −0.045em. `.t-h2` 38–76. `.t-h3` 30–48. `.t-h4` 22–30.
- Body 18px/1.55 (17px ≤900px). `.t-lede` 19–23px. `.t-label` 15px/500 sentence case. The floor is 14px.
- Product names are two-tone: the name in print with the descriptor in ash on the next line (`.two-tone .d`).

## Layout primitives
- **The inset frame**: one radius (`--r` 6px). Frames sit inside `.shell` (the gutter `--gut`, 12–32px), so the film shows around them like a mount. Text aligns through `.inset` (`--in`).
- The 12-column grid (`.g12`) with asymmetric splits: 7/4, 5/7, 8/4. No centred hero and no badge over the H1.
- Section rhythm comes from `--sec` (88–168px). Tones are film → bone → film. One full-bleed photo band per page at most.
- Status is shown by form: Live = flare dot, Build/In development = solid dot, Prototype/R&D = ring, Exploring = dashed ring. The label is always written out.

## Imagery
- Real product screenshots from `public/proof/` use their data alt text. Real UAFest photos and the game's own key art are also used.
- Commons photos must carry their credit through `BaseLayout credits=[…]`, which prints it in the footer. The current ones are:
  - Parliament Hill at dawn, joiseyshowaa, CC BY-SA 2.0 (colour graded)
  - Rideau Canal at night, Dylandamic0, CC BY-SA 3.0
- Generated atmosphere is allowed only as a world behind a real screen, for example `field-robot.webp`. Never generate product UI or faces, never put text in an image, and never label an image "AI".
- No robot or brain stock, no abstract tech graphics, no octagons as decoration, no glow orbs, gradient meshes or glassmorphism.

## Motion
- **Hero, CSS only, done by about 1 s.** The frame opens from a 5% inset, the photo settles from scale 1.12 to 1.02, the giant lines rise from masks (160 ms and 240 ms, then 320 ms on mobile), and the lede and CTAs fade in last.
- **Structural (`src/scripts/motion.ts`, GSAP + ScrollTrigger + Lenis, loaded on idle):**
  1. The depth dolly on `[data-dolly]` frames. The world goes from scale 1.16 to 1 and the screens travel from y 80 to −40 × depth. Travel drops to ×0.45 on phones.
  2. `[data-dolly-bg]` photo bands slowly zoom out.
  3. `[data-light]` paragraphs light up word by word.
- **Reveals (`site.ts`, CSS transitions, IntersectionObserver once):** headings with `[data-rise]` use a clip-wipe, and `[data-mask]` lines rise from their masks.
- **Micro, 240–550 ms:** the arrow slides on buttons and links, a screen lifts on frame hover, links get an underline sweep.
- **Lenis** runs only for a fine pointer at ≥901px, and it pauses while the dialog is open.
- **`prefers-reduced-motion`:** motion.ts is never loaded, everything renders final, and there are no transitions.
- Easing tokens: `--e-out` cubic-bezier(.16,1,.3,1), `--e-gate` (.76,0,.24,1).

## Forbidden (v2)
- No mono anywhere, no uppercase eyebrows, and no hairline ruled rows as the main layout.
- No stage-line diagrams or dots on a line.
- No icon-in-tinted-square cards, stat banners or uniform fade-ups. No glow, mesh or glass.
- No teal UI accents and no second accent colour.
- Copy contains no "not X but Y" and no negation openers, and none of these words: streamline, empower, unlock, seamless, cutting-edge, revolutionize.
- No facts that are missing from `src/data/*.ts` or the fact-checked pages.

## Required
- MMIX credit in the footer ("Development & promotion —" + `/mmix-logo.png` on a light plate, linking to https://mmix.ua/en/zakazat-korporativnyj-sajt/).
- The contact form posts to `/api/contact` with the honeypot `website` and `elapsed` ms (the `ContactForm` component).
- External registry links render without an href (`data-x`, base64).
- WCAG AA contrast, visible focus (a 2px flare outline, ink on bone), and 44px targets.

## Ledger check (≥3/5 axes vs every row)
- vs dreamhvac-thermal (#0C0E12 / Archivo / orange #FF4D00 / thermal delta / masked lines): differs on font, signature and motion (3).
- vs innovaconsult STAGE LINE: differs on all 5 axes.
- vs innova-brandkit and the LinkedIn carousels (petrol / Unbounded / Red Hat / teal): differs on background, font, accent, signature and motion.
- vs Workflow OS GRAPHITE (#0A0B0D / Instrument Sans / teal): differs on font, accent, signature and motion.
- Host Grotesk is new to the ledger. The row was appended on 07.10.2026.

## Gates (home, 07.10.2026)
- Lighthouse mobile: perf 99, a11y 100, best practices 100, SEO 100 (LCP 2.0 s, CLS .03).
- Lighthouse desktop: perf 100, a11y 100.
- contrast.cjs OK. sloplint 0 findings.
- 0 console errors. No horizontal scroll at 390 or 1440.

Component API and the rules for inner pages: see `SYSTEM-NOTES.md` in the redesign scratchpad, mirrored at `docs/SYSTEM-NOTES.md`.
