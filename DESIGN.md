# DESIGN — innovaconsult.ca (INNOVA, Applied Innovation & Technology)

Subject & audience: Ottawa applied-innovation company; read by Invest Ottawa, NRC IRAP, grant reviewers, CTOs, research partners.
Page job: in 30 seconds a stranger sees a technology company that builds real things, works across sectors, and states each project's stage honestly.

## Direction — «STAGE LINE»
One axis carries the whole company: **Opportunity → Research → Prototype → Build → Deploy → Impact**.
Grant reviewers think in readiness levels; INNOVA's hard rule is honest status. So the design *is* the readiness axis:
the hero is a pipeline board (domains × stages) with every real project placed on its stage; every list on the site
(capabilities, projects, sectors, partnership models) is a ruled row that carries a mini stage track showing where on the line it works.

Rejected directions: (B) «Lab notebook» — light graph paper + Newsreader + margin annotations: fights the owner's dark-UI need and the PRD palette.
(C) «Field map» — sectors as topographic territories, contour draw: decorative, overlaps legal.ua/Plast map rows. Grafted from B: record-style mono meta (`INV-04 · AgriTech · R&D`).

Unexpected pairing / risk: an engineering readiness chart used as brand identity on a company homepage, set in a wide robotic grotesk instead of the usual AI-startup neo-grotesk.

## Tokens (law)
Palette (cool, INNOVA petrol family; brand turquoise inherited from the group mark):
- `--ground` #08161A — petrol ink (page)
- `--plate` #0E2126 — raised surface · `--plate-hi` #142C32 — hover/raised 2
- `--frost` #E4EEEC — text (never #fff)
- `--lichen` #93ADA9 — secondary text (AA on ground and plate)
- `--signal` #45C9C0 — INNOVA turquoise: the stage line, markers, focus; ≤3 appearances per viewport
- `--live` #8FD694 — ONLY the LIVE/BUILT status dot
- `--rule` rgb(150 210 205 / .14) — hairlines

Status is encoded by FORM, not by a rainbow: Live/Built = filled dot (live green), In development/Prototype = turquoise filled ring,
R&D = turquoise ring, Exploring = dashed ring, Partner opportunity = open diamond.

Type:
- Display **Hubot Sans** variable (wdth 110–118, wght 400–560): weight down as size up; −0.035em at hero size, line-height .96.
- Text **Instrument Sans** 16–18px / 1.6, measure ≤ 64ch.
- Mono **Fragment Mono** 12–13px: stage labels, status, record meta; uppercase only with .06em tracking, and only on the stage line + status chips (not as wallpaper eyebrows).
- Radius language: 0 everywhere except status dots/rings. No shadows; elevation by lightness steps + hairlines.

## Layout primitive
**The ruled stage row**: 12-col grid, hairline top rule, title (display, 4 cols) · text (5 cols) · mini stage track (3 cols, 6 ticks, highlighted span = where this thing works).
Repeated for capabilities, projects, sectors, partnership models. Asymmetric splits (5/7, 4/8) for prose sections. One full-bleed moment: the hero pipeline board.

## Motion personality — «signal runs the line»
- Hero: headline lines rise out of masks (overlapping, 90ms stagger, `cubic-bezier(.16,1,.3,1)` 900ms); then the stage line draws left→right (scaleX 1.4s), stations ignite in sequence (120ms apart), project markers land on their stage (scale .4→1, opacity, 360ms).
- Scroll: each row's mini track draws its span once (scaleX 700ms, `once`), title/text no fade-up wallpaper — rows reveal by the track only.
- Hover: row title shifts 6px right, its marker brightens; links underline slide 220ms.
- `prefers-reduced-motion`: everything renders in final state.
Vanilla JS + CSS only (no GSAP/Lenis) — keeps Lighthouse ≥ 90.

## Signature elements (≥5)
1. Hero PIPELINE BOARD — domains × stages, real projects as markers on their true stage.
2. Mini stage track on every ruled row.
3. Status-by-form legend (dot / ring / dashed ring / diamond).
4. Record meta in mono (`INV-01 · Live · Ottawa`).
5. Footer: giant INNOVA wordmark sitting on the stage line, corporation record (INNOVA CONSULT LTD., federal corp. 1522612-1, Ottawa).

## Ledger check
vs innova-brandkit (petrol, Unbounded, teal, octagon rings, rings self-draw): differs on font, signature, motion (3/5; bg+accent inherited by brand law).
vs LinkedIn carousel v1/v2 (petrol, Red Hat Display, turquoise, static): font, signature, motion.
vs sovereign /today, nevod /control, unistaff, relohub, regserv «ШКАЛА ВОЛН»: font + signature + motion differ on each.

## Forbidden here
Glow orbs, gradient meshes, glassmorphism, robot/brain imagery, stock handshakes, icon-in-tinted-square cards, stat banners, numbered 01/02/03 on non-sequences,
uniform fade-up on every block, centered hero, rounded cards with shadows, «not X but Y» copy, «consulting/consultation» CTAs, invented traction.

## Changelog
**2026-10-05 — polish round (audit: Invest Ottawa/IRAP persona, fact check, art director).**
- Display type: tracking eased and word-spacing added (.d-hero/.d-page −0.022em +0.1em word, .d-xl −0.018em +0.12em, .d-l −0.014em +0.08em) — Hubot's narrow space glued words at −0.035em.
- **No years or zeros in display type**: Hubot's zero carries a bar and reads as θ («2θ12»). Years live in text/mono (trust line, record strip, path rows).
- Hubot Sans `font-display: swap` + metric-matched 'Hubot Fallback' (local Arial, size-adjust) in --font-display.
- Light product screenshots (UAFest, FoundWall, OpenField) always sit on a --plate mat (10–16px, 1px --rule) with `filter: brightness(.9) saturate(.95)`, restored on hover/focus — protects the dark page and the owner's eyes.
- Board on the homepage shows featured projects only; /projects shows all. Hero board bleeds to the right viewport edge on purpose (the line continues).
- Homepage gains: Ottawa eyebrow, partner CTA, "What a funded project with INNOVA looks like", corporate record strip (corp. no., NCAGE L15L3, D-U-N-S, hidden registry link).
- Section heads are always left-aligned 7/5; the operating-model band is no longer centered.
