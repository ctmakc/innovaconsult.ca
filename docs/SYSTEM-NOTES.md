# INNOVA v2 «SCREEN IN ITS WORLD»: system notes for page agents

Repo: `/data/projects/innovaconsult.ca`, branch `redesign/v2`. Read `DESIGN.md` (v2) first. The reference implementation is `src/pages/index.astro`.

## Golden rules for inner pages
1. **Visual first.** Each page gets at least one real image moment. That means a `MediaFrame` with a real screenshot in its world, a real photo, or a `Screen`. A page made of text sections only fails review.
2. **Short.** Aim for 4–7 screens on desktop. Merge or cut before adding a section.
3. **Rhythm.** Use the film tone by default, with at most one or two bone sections per page (`tone="bone"`) and at most one full-bleed photo band. Alternate the layouts: a split head, then a frame grid, then a bone block, then the CTA.
4. **One accent.** `--flare` appears at most 3 times per viewport. The closing CTA block is added by the layout automatically (`footerCta` defaults to true), so do not build another one.
5. **No v1 classes in new code.** Leave out `.wrap`, `.grid12`, `.row`, `.rows`, `.kicker`, `.mono`, `.status`, `.mark`, `.d-*`, `.lede`, `.body`, `.btn-primary`, `.ulink`, `.arrow-link`, `.proof`, `StageTrack`, `StageLine`, `PipelineBoard` and `RiseHeading`. They live in `src/styles/legacy.css` only so un-ported pages still build. When the last page is ported, delete `legacy.css`, its `@import` in `global.css`, the legacy `[data-draw]` script in `BaseLayout`, and the v1 components.
6. **Facts.** Take every fact from `src/data/*.ts` or the current page copy, and do not add claims. Remember the basics: incorporated 2023, founder Maksym Stepanenko, in business since 2012, no employees (never write "our team of N"). Mark demo data as "demo data" or "illustrative".
7. **Tone.** No "not X but Y" and no negation openers. Banned words: streamline, empower, unlock, seamless, cutting-edge, revolutionize. Use concrete verbs.
8. **Text sizes.** Body text is ≥16px and labels are ≥14px. `--ash` is only for secondary text on film and `--ink-soft` only on bone.
9. **Motion.** Put `data-rise` on section headings (clip-wipe). Put `data-mask` on a block whose first child should rise from a mask. Use `data-dolly` (automatic on `MediaFrame`) for depth. Add nothing else; motion.ts handles the rest and respects reduced motion.
10. **Check.** Build, preview, screenshot at 1440 and 390, read the screenshots, and run `contrast.cjs` and `sloplint.sh src`. No horizontal scroll is allowed.

## Layout utilities (global.css)
| class | what |
|---|---|
| `.shell` | page gutter (`--gut`, 12–32px). Frames sit directly in it |
| `.inset` | text inset inside a shell (`--in`), so copy aligns with frame captions |
| `.g12` | 12-column grid with `--col-gap` |
| `.tone-film` `.tone-reel` `.tone-bone` | section material (bone flips text to ink) |
| `.pad-lg` `.pad-md` `.pad-top` | section rhythm from `--sec` |
| `.frame` | 6px radius, overflow hidden, isolated stacking |
| `.t-giant` `.t-display` `.t-h2` `.t-h3` `.t-h4` | display sizes (Host Grotesk only) |
| `.t-lede` `.t-body` `.t-small` `.t-label` `.t-mute` | text styles (`.t-mute` = ash on film, ink-soft on bone) |
| `.two-tone` + `<span class="d">` | name with its descriptor on a second line in ash |
| `.btn .btn--flare/.btn--ghost/.btn--ink/.btn--print .btn--sm` | buttons. Put `<span class="ar">→</span>` inside for the arrow slide |
| `.lnk` | text link with an underline sweep and an arrow slide |
| `.tnum` | tabular numbers |
| `.scr-img` | screenshot plate (radius and depth shadow; a lighter shadow on bone) |

Scoped styles: every v2 component forwards extra attributes to its root, so a page's scoped CSS reaches a class you pass to it (`<SectionHead class="x" />` and then `.x { … }` in the page style works).

## Components (`src/components/`)

### `BaseLayout` (`src/layouts/BaseLayout.astro`)
Props: `title`, `description?`, `path?`, `ogImage?`, `noindex?`, `jsonLd?`, `footerCta?` (default true, which renders `CtaBlock`), `breadcrumbs?`, `credits?: string[]` (attribution for CC photos, printed in the footer).
Slot `head`: extra head tags, for example a hero image preload.
```astro
<BaseLayout title="Partnerships | INNOVA" path="/partnerships" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Partnerships', path: '/partnerships' }]}
  credits={['Rideau Canal at night by Dylandamic0, CC BY-SA 3.0']}>
  <Fragment slot="head"><link rel="preload" as="image" href="/img/rideau-night-1200.webp" /></Fragment>
  …
</BaseLayout>
```
The layout includes `Header`, `<main id="main">`, `CtaBlock` (when `footerCta`), `Footer` (with the MMIX credit) and `ContactDialog`, plus `site.ts`, which handles fit text, reveals, data-x links, the dialog and the idle-loaded motion.

### `PageHead`: inner-page head (v1 props kept)
Props: `crumb`, `crumbHref?`, `title` (H1), `lede?`. Slots: `aside` (under the lede) and `media` (full width under the head: put a `MediaFrame` or `Screen` here to make the page visual-first).
```astro
<PageHead crumb="Projects" title="Real products, each at its real stage." lede="…">
  <MediaFrame slot="media" size="full" world={…} screens={[…]} />
</PageHead>
```

### `Section` and `SectionHead`
`Section` props: `tone='film'|'reel'|'bone'`, `pad='lg'|'md'|'top'|'none'`, `inset=true` (wraps the content in `.shell > .inset`; set it false for full-bleed frames and add your own `.shell`), `id?`, `labelledby?`, `class?`.
`SectionHead` props: `title`, `id?`, `label?` (a small sentence-case line above), `lede?`, `link?: {href,label}`, `layout='split'|'stack'`, `size='display'|'h2'`, `as='h2'|'h1'`. In the split layout the title takes 7 columns, the lede and link take 4, and their bottoms align.
```astro
<Section tone="bone" labelledby="models-h">
  <SectionHead id="models-h" title="Eight ways to work together" lede="…" link={{ href: '/contact?topic=partnership', label: 'Discuss a partnership' }} size="h2" />
  …
</Section>
```

### `MediaFrame`: the signature
A real screen floats in front of its world, with depth dolly on scroll. Props:
- `world?: { src, src800?, w, h, alt?, pos? }`: a photo behind the screens. An empty alt makes it decorative.
- `material?: 'evergreen'|'loam'|'navy'|'reel'|'bone'`: used when there is no photo.
- `screens?: FrameScreen[]`, where each is `{ src, src800?, w, h, alt, kind?: 'desktop'|'phone'|'tablet', l?|r?, t?, width?, lm?|rm?, tm?, wm?, depth?, desktopOnly? }`. Positions are % of the frame. The m-suffixed values apply at ≤900px. Use depth 1.6 for phones.
- `size='full'|'half'|'stage'` (16/8.6, 5/4.6, 4/3) or `aspect`. `aspectM` is the phone picture area (default 4/3.3).
- `scrim='bottom'|'left'|'none'`, `href?` (the whole frame becomes a link), `credit?`, `dolly=true`.
- Default slot: the caption (bottom-left on desktop, below the picture on phones).

Placement rule: keep the screens clear of the caption, which takes roughly the bottom 35% of a half frame. Top 6–9% with width ≤62% for a desktop shot and ≤20% for a phone works.
```astro
<MediaFrame size="half" material="evergreen" href="/projects/foundwall"
  screens={[
    { src: '/proof/foundwall-home-1440-1600.webp', src800: '/proof/foundwall-home-1440-800.webp', w: 1600, h: 1000, alt: '…', l: '8%', t: '8%', width: '62%', wm: '76%' },
    { src: '/proof/foundwall-board-390-800.webp', src800: '/proof/foundwall-board-390-400.webp', w: 800, h: 1731, alt: '…', kind: 'phone', r: '8%', t: '13%', width: '19%', wm: '27%', depth: 1.6 }
  ]}>
  <StatusTag status="live" /><h3 class="t-h3 two-tone">FoundWall<span class="d">Lost & found network</span></h3>
</MediaFrame>
```

### `ProjectCard`
A `MediaFrame` with a standard caption: status, an optional headline, the two-tone name (`short` + `tagline`), one fact, and "Open the project" (full size only). Props: `project` (from `projects.ts`), `fact` (required, sourced), `headline?`, `statusLabel?` (for example "Prototype · demo data"), `world?`, `material?`, `screens?`, `size='half'|'full'`, `aspect?`, `aspectM?`, `credit?`, `headingLevel='h3'|'h2'`. See the four cards in `index.astro` for tuned screen placements for UAFest, FoundWall, Porch Print Shop and OpenField. Reuse them.

### `Screen`
A single screenshot plate with a caption. Props: `img: ProofImage` (straight from `project.images[i]`), `kind`, `caption?` (string, or `false` to hide it; defaults to the data caption), `sizes?`, `eager?`.
```astro
{p.images?.map((img) => <Screen img={img} kind={img.h > img.w ? 'phone' : 'desktop'} />)}
```

### `StatusTag` (and the v1 alias `StatusChip`)
Props: `status: ProjectStatus`, `label?`. Live = flare dot, Built/In development = solid dot, Prototype/R&D = ring, Exploring/Partner opportunity = dashed ring.

### `Button`
Props: `href?`, `variant='flare'|'ghost'|'ink'|'print'`, `size='md'|'sm'`, `type`, `arrow=true`, `openContact` (opens the dialog; without JS it links to `/contact`). Extra attributes pass through.
```astro
<Button openContact>Start a conversation</Button>
<Button href="/projects/openfield" variant="ghost">See OpenField</Button>
<Button href="/workflow-os" variant="ink">Explore Workflow OS</Button>  <!-- on bone -->
```
Any element with `data-open-contact` opens the dialog, for example `<a href="/contact?topic=rd" data-open-contact>`. The dialog form keeps the URL `?topic` preselect when you are on /contact.

### `FitText`
Giant caps lines fitted to the box width. Props: `lines: string[]`, `mobileLines?` (≤640px, sharing one size), `text?` (the accessible label), `as`, `id?`, `class?`, `rise?` (mask rise on scroll). Use it once per page at most, for the home hero and the CTA block. Inner pages normally use `PageHead`.

### `ContactForm` and `ContactDialog`
`ContactForm` props: `idPrefix` (unique per page instance; the dialog uses `dlg`), `tone='bone'|'film'`, `submitLabel`, `rows`. The contract matches v1: a POST to `/api/contact` with a JSON body containing `topic`, `name`, `organization`, `email`, `message`, `website` (honeypot), `page` and `elapsed`. **The /contact page agent:** replace the page's inline form and script with `<ContactForm idPrefix="cf" tone="film" submitLabel="Start a conversation" />`. On /contact, `[data-open-contact]` does not open the dialog. Never submit the form in tests.

### `RecordIds`
The corporation number, NCAGE and D-U-N-S as big numerals, plus "Verify on Corporations Canada" (data-x, no href). Use it on bone (`tone-bone`) or on a `--print` card; it also works on film. It is used on home and is ready for /about.

### `CtaBlock`
The flare closing block (rendered by the layout). Props: `lede?`, `lines?`. Leave it to the layout.

### `Header` and `Footer`
`Header`: the brand, five links (with the active underline), Contact (flare, opens the dialog) and a full-screen mobile menu below 1100px (focus trap, Esc, inert). `Footer`: brand, nav, record, credits, and the MMIX plate. Both are automatic.

## Assets
- `public/img/`: `ottawa-dawn-{1440,2400,m}.webp` (hero, graded Commons, needs credit), `rideau-night{,-1200}.webp` (Commons, needs credit), `uafest-dance{,-800}.webp` (UAFest festival photo), `babakokum-porch.webp` (the game's key art), `field-robot{,-800}.webp` (generated atmosphere, for the OpenField world only).
- `public/proof/`: real screenshots in 1600/800 (desktop) and 800/400 (phone) variants. Their alt text and captions are in `projects.ts`.
- `public/fonts/host-grotesk-latin.woff2`: the only font.

## Inner-page suggestions (keep to the system)
- **/projects:** `PageHead`, then a `ProjectCard` grid like the home "What we build" (full + halves), then the rest as `MediaFrame` halves or a lab tile. No ruled rows.
- **/projects/[slug]:** `PageHead`, with the hero `MediaFrame` in the media slot. Then problem, solution and outcome as a split (`SectionHead` + text), then a `Screen` gallery and a status/"looking for" block on bone.
- **/workflow-os:** reuse the home sticky-stack pattern (steps plus a screen swap) on bone, the 14-factor list as two columns of large text, and the demo-data disclosure.
- **/about:** `PageHead`, the founder path, `RecordIds` on bone, and the subcontractor wording.
- **/capabilities, /innovation, /software, /ai-transformation:** big type rows with real proof thumbnails, as in the home "Four kinds of work". Reuse the `.cap` markup and its CSS from `index.astro`.
- **/partnerships:** a photo band (`data-dolly-bg`), the eight models as large type with a "You bring / We bring" split, and the funded-project steps.
- **/contact:** `PageHead`, then `ContactForm tone="film"`, then the email and location aside.
