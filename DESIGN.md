# DESIGN v2 — innovaconsult.ca «SCREEN IN ITS WORLD»

Supersedes v1 «STAGE LINE» (petrol + turquoise, mono labels, ruled stage rows, pipeline board). The owner called v1 "AI slop" on 07.10.2026; nothing from it is to be reused in new work. All pages are ported to v2; `legacy.css` and the v1 components (StageLine, StageTrack, PipelineBoard, RiseHeading, StatusChip) were removed on 08.10.2026.

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
- **Home hero = one framed app window** (round 5, 08.10.2026; replaces the round-4 video film, which clipped its UI, showed a cursor and caught the waterfall half-drawn). `HeroStage.astro`: left, the outcome H1 "Applied AI and software from Ottawa, live in three products." (sentence case, 44–72px), the lede naming the three live products, two CTAs and ONE small registry line (corporation · NCAGE · D-U-N-S · Verify ↗). Right, a Workflow OS window (bar with three tabs) that cycles three FINISHED 2x crops every 5 s with a 450 ms cross-fade: process landscape → 88 score waterfall → automation route with the KYC human-approval gate. The tab carries a print timer line; tabs and a Pause control stop the cycle; reduced motion shows the first screen only. The caption sits below the window. Phones: the window sits above the H1 in its own 374:300 box, with the app's own 390 px layout of the same screens (short tab labels). LCP = the landscape crop (preloaded).
- *(superseded)* Round 4 home hero film: `HeroFilm.astro` plays a 10.6 s dark loop recorded from the redesigned Workflow OS (treemap → cursor on Client Onboarding → its 88 score waterfall), product right of ~44%, the white H1 left. Poster (frame 0) is the first paint and LCP; the video loads after window load, never with reduced motion or Save-Data, pauses off-screen, and has a visible Pause/Play control. In the waterfall half only the chart is shown (cut-off sentences and non-clickable app buttons are painted out). Bottom strip: the federal proof `<dl>` (corporation · NCAGE · D-U-N-S · Ottawa · Verify ↗). Media lives in `public/media/`.
- **Home order** (round 5): hero window → In use today (UAFest = the festival photo alone, one visual; FoundWall = the Lost, Stolen, Found crop; Porch Print Shop = the game's key art alone) → one "Four more in the lab" sentence → "What a funded project with INNOVA looks like" (`home/FundedProject.astro`: the four parts as ONE table at body size, each filled with the OpenField instance from projects.ts / /innovation; the "Needs a person" phone screen at its natural size beside it with the R&D links) → Workflow OS (stacked head, three tabs: opportunity map, designer, before/after chart; the $43,200 / payback / ROI screen is no longer shown) → the photo closing band (home only).
- **One crop per page** (round 5): the score waterfall appears only in the home hero and /workflow-os Score. /projects tiles differ from home (`presets.ts` `tile`): UAFest = certificate register on navy, FoundWall = a notice page, Porch = rules on the porch art, OpenField = "Needs a person", Workflow OS = the landscape (390 layout). /about shows no product cards.
- **Readable product imagery** (round 3): a product shot is shown as ONE readable crop cut from the 2x master (`public/proof/crop/`, `src/data/crops.ts`, `scripts/make-crops.py`), at ≥ 60% of the card width, never a whole app squeezed to 300px. Phone frames that render under ~150px are not used in cards.
- Short pages sell fast: home ≈ 5.4 screens at 1440 (hero → In use today → one "In the lab" line → Workflow OS → closing band that carries the founder line).
- Rules kept from round 1:
  - The photo is there at first paint and the entrance is done in under 1 s.
  - Workflow OS screens sit directly on bone, big enough to read (≥ 8 of 12 columns).
  - Captions never overlap screens. On phones the caption drops below the picture.
  - No text smaller than 14px. Mobile body is 17px.
- Round-3 removals: the hero product reel and its thumbnails, the floating screenshot over the hero photo, the four-column "In the lab" row on home (now one sentence), the "Who builds it" section on home (merged into the closing band), small grey eyebrows that repeat the H2, the /about stat banner (2012 / 50+ / 2023), the founder record rows and the company-record grid (one RecordIds line stays), the /projects status-meanings paragraph (now chip tooltips), the /workflow-os technology bullet grid (now inside the accordion) and the "Where Workflow OS ends" text wall (now a two-line callout), the bordered reel CTA box.
- Round-2 removals: capability rows on home, the lit-up process paragraph, the funded-project list, registry numerals as display type, the orange closing slab, the nav-repeating footer, status interstitials on /projects, INV codes, typographic placeholder frames for projects without screenshots (they go to a compact "In the lab" row).

## Tokens (law, `src/styles/global.css :root`)
| token | value | use |
|---|---|---|
| `--film` | #0D0C0B | page ground (warm black) |
| `--reel` / `--reel-2` | #171614 / #201E1B | raised dark panels, hover |
| `--print` | #EEEAE2 | text on film (never #fff) |
| `--ash` | #B8B1A4 | secondary text on film (AA; lifted in round 3 for the "one step larger and warmer" brief) |
| `--bone` / `--bone-2` | #E6E2D8 / #D8D3C7 | light material sections |
| `--ink` / `--ink-soft` | #141310 / #545048 | text on bone (AA) |
| `--flare` / `--flare-hi` | #FF5B22 / #FF7443 | THE accent. Use it at most 3 times per viewport: Contact, Live dot, the primary CTA, the closing block |
| `--flare-ink` | #B23A0E | flare used as text on bone |
| `--m-evergreen` `--m-loam` `--m-navy` | #1D3A2E #2C2A22 #1A2240 | product materials: only behind product screens (MediaFrame `material`) |
| `--ui-dark` | #0F1416 | poster colour of dark product screenshots while they decode |

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
- **Closing** (round 5): `CtaBlock variant="band"` (the photo band below) closes HOME only. Every other page ends with the default `variant="line"`: a hairline, the page's closing sentence at 32–52px, one paragraph, the flare "Write to us" button and the email, with no photo and no box.
- *(home only)* **Closing band** (`CtaBlock`, round 3): a full-width photo frame (Rideau Canal at night by default; `photo="festival"` on pages whose hero already uses the Rideau photo) with the line at 48–112px, ONE large flare button "Write to us" (68px) that opens the contact dialog, and the email as plain text under it. The CC credit is printed on the photo. Pages pass `cta={{ title, lede, link }}` through BaseLayout; home uses "Founder-led since 2012. Start a conversation." No orange slab, no bordered box.
- **Half frames** (`MediaFrame size="half"`, round 3): the picture sits in its own aspect box (default 16 / 10.6) and the caption sits BELOW it on solid reel, so a title never overlaps a screenshot. Full frames keep the caption bottom-left over a left scrim, with the screen placed right of 49%.
- **Footer**: one row (mark, legal line with the corporation number, email, Privacy, MMIX credit on its plate) plus CC credits when a page uses Commons photos. The header carries the nav.
- **Corporate record**: one verification line (`RecordIds`: corporation number · NCAGE · D-U-N-S · Verify ↗) on About; the home hero carries the same IDs as its proof strip (round 4).
- **/projects**: H1 is the count ("Eight projects. Three live."), the status chips sit in one row under it (horizontal scroll on phones; each chip's title explains the status), status shows only as the tag on each card. Projects without screenshots sit in three compact solid "In the lab" tiles.
- **/about** (round 5): hero ≈ 58vh: the name at 48–80px with one line, beside the federal record set as a bone document (corporation number large; name, incorporated, NCAGE, D-U-N-S; Verify ↗). Then the founder statement on bone in ONE column (statement, two sentences, one link), the UAFest venue photo with its caption, and "Where this has led so far" as one sentence with inline links. No project cards, no separate record row.
- **/workflow-os** (round 5): hero with the Overview screen. Then ONE dark stage (`WosModules.astro`): a five-step rail left (Discover · Score · Design · Deliver · Impact, each with its module name; the active one shows its line) and ONE sticky frame right (≈8/12, bleeding to the shell edge) that swaps a single-panel 2x crop (`src/data/wos3.ts`) at 1–1.15x its natural size, so UI text reads at 13px+. No coloured plates, no numerals, no app buttons, no $ headline. Phones: each step shows the app's own 390px crop full width under its text. Accordion descriptions sit under their titles.
- **/ai-transformation** (round 5, ≈5.4 screens at 1440): split head (statement left, the automation-route crop with the KYC gate right), "Four steps, one baseline" (the seven steps merged, no sticky panel, link to /workflow-os), the right-tool section as ONE labelled axis (Fully predictable → Supervised autonomy, six ticks) plus Propose → Undo, the four timelines with what we need / what you keep, Security. No outcomes buzz-list, no spectrum bars.
- **/projects "In the lab"** (round 5): one sentence with inline links, like home.
- Status is shown by form: Live = flare dot, Build/In development = solid dot, Prototype/R&D = ring, Exploring = dashed ring. The label is always written out.

## Imagery
- Real product screenshots from `public/proof/` use their data alt text. Real UAFest photos and the game's own key art are also used.
- UAFest photos (festival's own): Unity Ride aerial `uafest-unity-ride*` (home hero, full bleed), festival venue `uafest-venue*` (/about photo band; closing band with `photo="festival"`), dance troupe `uafest-dance*` (behind the UAFest crop). The game's own key art: `babakokum-porch` (behind the rules crop); `babakokum-porch-night` is currently unused.
- Commons photos must carry their credit through `BaseLayout credits=[…]`, which prints it in the footer. The Parliament Hill photo appears once on the whole site (404 only). The current ones are:
  - Parliament Hill at dawn, joiseyshowaa, CC BY-SA 2.0 (colour graded)
  - Rideau Canal at night, Dylandamic0, CC BY-SA 3.0 (also the default closing band; its credit is printed on the band itself)
- Workflow OS crops (round 5): `scripts/make-wos3.py` cuts one region per screen on panel boundaries from 2x (1440) and 3x (390) captures of the redesign/ui-v2 demo build into `public/proof/wos3/` (1x/2x, phones 2x/3x) with a 24px LQIP each; `--ui-dark` is #0F1012, the app's own ground, so crops sit on it seamlessly.
- Lazy images start loading 1500px before they enter the viewport (`site.ts`), so a normal scroll never meets an empty plate.
- Image loading: light screens use `--bone-2` as a poster colour while decoding; dark product UIs use `--ui-dark` (`.scr-dark`, `poster: 'dark'`), so nothing flashes a beige slab. Only the frame right under the hero passes `eager` (more eager images delay the hero LCP); `sizes` are in vw (a % in `sizes` is invalid and makes phones download the 1600w file). Crops and the Workflow OS stage ship 2x widths in `srcset`.
- Generated atmosphere is allowed only as a world behind a real screen, for example `field-robot.webp`. Never generate product UI or faces, never put text in an image, and never label an image "AI".
- No robot or brain stock, no abstract tech graphics, no octagons as decoration, no glow orbs, gradient meshes or glassmorphism.

## Motion
- **Hero, CSS only.** Round 3: the home hero H1, lede and buttons are final at first paint (no mask, no fade); only the photo drifts from scale 1.1 to 1.01. The /workflow-os frame still opens from a 5% inset; its H1 is no longer masked. Page H1s never fade in.
- **Structural (`src/scripts/motion.ts`, GSAP + ScrollTrigger + Lenis, loaded on idle):**
  1. The depth dolly on `[data-dolly]` frames. The world goes from scale 1.16 to 1 and the screens travel from y 80 to −40 × depth. Travel drops to ×0.45 on phones.
  2. `[data-dolly-bg]` photo bands slowly zoom out.
  3. `[data-light]` paragraphs light up word by word (still available; no longer used on home).
- **Reveals (`site.ts`, CSS transitions, IntersectionObserver once, rootMargin +6% bottom):** headings with `[data-rise]` use a clip-wipe, and `[data-mask]` lines rise from their masks. Both take 400 ms; nothing on the page waits longer than that to be readable. Screenshot stacks swap instantly (visibility), never through an opacity fade.
- **Loupe:** on /workflow-os the close-up settles in 420 ms (translate + scale .94 → 1) when its module becomes active; reduced motion shows it still.
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

## Gates (round 5, 08.10.2026, local preview)
- Integration (round 5): every page passes its own closing sentence to the line CTA (the default "Start a conversation." is no longer shown anywhere; /innovation "Bring us a research question.", /partnerships "Tell us what you bring.", /capabilities "Tell us what you need built or automated.", /software "Tell us what the software must change."). Desktop Lighthouse 100/100/100/100 on home, /workflow-os, /projects, /about, /ai-transformation; contrast OK on all 19 built routes; 0 console errors and no horizontal scroll at 320/390/768.
- Lighthouse mobile perf / a11y / BP / SEO: home 99/100/100/100 (LCP 2.3 s, CLS 0), /workflow-os 99/100/100/100, /projects 98/100/100/100, /about 100/100/100/100, /ai-transformation 100/100/100/100.
- contrast.cjs OK on all 20 routes. sloplint 0 findings on the five main pages. No horizontal scroll at 320, 390, 768 or 1440. Throttled cold load (1.6 Mbps, 150 ms, 4x CPU): H1, lede, CTAs and the landscape window are painted at 1.5 s.
- Page length at 1440: home 5,900px, /workflow-os 2,914px, /projects 3,080px, /about 2,866px, /ai-transformation 4,888px (was 7,113).

## Gates (round 4 integration, 08.10.2026, local preview)
- Lighthouse mobile perf / a11y / BP / SEO: home 99/100/100/100 (LCP 2.2 s, CLS 0), /workflow-os 100/100/100/100, /projects 93/100/100/100 (LCP 3.2 s), /about 99/100/100/100. Desktop: 100, 100, 99, 100 perf; a11y 100 on all four.
- contrast.cjs OK on all 19 routes. sloplint 0 findings. 0 console errors. No horizontal scroll at 320, 390, 768 or 1440 on any route. Throttled cold load (Slow 4G, 4x CPU): H1, lede, CTAs and poster are painted at 1.2 s.
- Old Workflow OS screenshots (`public/proof/workflow-os-*`) are no longer referenced; capability pages use `public/proof/wos2/`.

## Gates (round 3, 08.10.2026, local preview)
- Lighthouse mobile perf / a11y: home 96/100 (LCP 2.7 s, CLS .014), /projects 94/100, /about 99/100, /workflow-os 99/100.
- contrast.cjs OK on all four. sloplint 0 findings on home. 0 console errors. No horizontal scroll at 390 or 1440.
- Page length at 1440: home 4,823px, /workflow-os ~5,100px, /projects 3,739px, /about 4,044px.

## Gates (round 2, 08.10.2026)
- Lighthouse mobile perf / a11y: home 99/100 (LCP 2.3 s, CLS .002), /projects 96/100, /about 97/100, /workflow-os 99/100.
- contrast.cjs OK on all four. sloplint 0 findings. 0 console errors. No horizontal scroll at 390 or 1440.
- Page length at 1440: home 4,956px (was 10,648), /workflow-os 4,669px (was 9,105), /projects 3,150px, /about 3,953px.

## Gates (home, 07.10.2026)
- Lighthouse mobile: perf 99, a11y 100, best practices 100, SEO 100 (LCP 2.0 s, CLS .03).
- Lighthouse desktop: perf 100, a11y 100.
- contrast.cjs OK. sloplint 0 findings.
- 0 console errors. No horizontal scroll at 390 or 1440.

Component API and the rules for inner pages: see `SYSTEM-NOTES.md` in the redesign scratchpad, mirrored at `docs/SYSTEM-NOTES.md`.
