---
name: saulburgos.com
description: José Saúl Burgos's portfolio and logbook, rendered as one frozen particle-detector event.
colors:
  vac: "#07090d"
  vac-2: "#0b0e13"
  panel: "#0a0d12"
  code: "#0e131a"
  ink: "#e8ecf1"
  ink-2: "#c3cad4"
  dim: "#8e99a8"
  faint: "#6b7686"
  rule: "#1a212b"
  rule-2: "#242d39"
  steel: "#5c7896"
  cyan: "#3fd3e0"
  yel: "#f2d23c"
  red: "#e5483b"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "54px"
    fontWeight: 620
    lineHeight: 0.96
    letterSpacing: "-0.022em"
    fontVariation: "'wdth' 86"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "46px"
    fontWeight: 620
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 86"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "27px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 88"
  title-sm:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
    fontVariation: "'wdth' 90"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'tnum'"
  reading:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 78"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
spacing:
  gut: "32px"
  gut-mobile: "16px"
  bar: "48px"
  section-y: "96px"
  section-y-mobile: "64px"
  block: "36px"
  row: "20px"
components:
  nav-link:
    textColor: "{colors.dim}"
    typography: "{typography.label}"
    padding: "10px 12px"
  nav-link-active:
    textColor: "{colors.ink}"
  door:
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    padding: "11px 0"
  tag:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    padding: "5px 7px 4px"
  readout:
    backgroundColor: "{colors.vac}"
    textColor: "{colors.ink-2}"
    padding: "18px 32px 24px"
  readout-mobile:
    backgroundColor: "{colors.panel}"
  text-link:
    textColor: "{colors.ink}"
    padding: "0 0 5px"
  code-block:
    backgroundColor: "{colors.code}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "16px 18px 18px"
---

# Design System: saulburgos.com

## Overview

**Creative North Star: "The Frozen Collision"**

The site is one particle-detector event display. José's public work leaves a vertex labelled `vertex: osmait` and flies outward through a steel-ringed detector: projects are charged tracks, logbook entries are neutral dashed photons, and technologies are red calorimeter towers whose height is counted from the real project data. The detector is the portfolio; nothing on the page is a card, a hero, or a grid of tiles. Everything else on the site (sections, the blog, the post template, the 404) is written in the same instrument language: run headers, readouts, logbooks, calibration tables, service records.

The mood is a control-room printout at night: near-black vacuum, crisp 1px hairlines, condensed engineering labels, tabular figures, and saturated colour reserved for data. It is dense but legible, and it tells the truth: every number on the screen (track count, tower heights, "2/12", "0 logbook entries") is computed from the repo's data files at build time, so the visual system and the content rules are the same thing.

Rejected by the build: the hero-plus-card-grid developer portfolio, the old bento-grid dark look, glow, gradients, rounded containers, and decorative colour.

**Key Characteristics:**
- One dark world (`color-scheme: dark`), no light theme.
- Colour is category, never decoration: cyan backend, yellow native/tooling, dashed white logbook, red technology energy, steel detector structure.
- Shape is weight: straight tracks are featured projects, curling tracks are smaller ones with radius from commit count.
- Archivo's width axis does the typographic work; four faces, each with a fixed job.
- Flat, square, hairline-ruled; depth comes from opacity and isolation, not shadows.
- Honest data: public repos only, counts derived, empty states stated plainly.

## Colors

A near-black blue vacuum with a blue-grey ink ladder, one structural steel, and three saturated signal colours that only ever mean one thing each.

### Primary
- **Detector Cyan** (`cyan`): the backend and distributed-systems category. Straight and curling tracks, their hit points, the track glyph in the rows and the mark, and the `Backend & distributed systems` legend swatch. Doubles as the system's interaction colour: the 1px focus outline, the active-nav underline, link hover on repos/contact channels/footer, and the underline colour of links inside articles. In code it colours keywords and inserted lines.

### Secondary
- **Signal Yellow** (`yel`): the native apps and developer tools category (tracks, dots, kind labels). Outside the display it is the "reading" highlight: text selection, the caret, the skip link, the post reading-progress hairline, the current table-of-contents item, logbook row hover, and the big email link's hover. In code it colours strings and numeric literals.

### Tertiary
- **Calorimeter Red** (`red`): technology energy only. Tower bars in the display (frames at 35% opacity), the filled cells in the calibration table (empty cells use a 35% red outline), the `n/12` counts on tower labels, and the readout's "Calorimeter tower" classification. Also the only alarm colour: the 404's "no hits recorded" line, a post's `Draft` status, and invalid/deleted tokens in code.

### Neutral
- **Vacuum** (`vac`): page background, the top bar (at 94% opacity), SVG label halo (`paint-order: stroke` with a 3px vacuum stroke) and scrollbar track.
- **Vacuum Lift** (`vac-2`) and **Panel** (`panel`): barely lifted surfaces; `panel` backs the sticky readout drawer on mobile.
- **Code Bed** (`code`): code block background; the Shiki theme uses the same value.
- **Ink** (`ink`): primary text, headings, the vertex dot, and the logbook's dashed photon (white, not a category hue).
- **Ink Two** (`ink-2`): secondary text, body copy in dense areas, tags, SVG secondary labels.
- **Dim** (`dim`): supporting copy, section deks, meta lines, idle readout text, inactive nav.
- **Faint** (`faint`): uppercase field labels (`dt`), table heads, and the resting underline of text links.
- **Rule** (`rule`) / **Rule Two** (`rule-2`): the two hairline weights. `rule` separates rows and columns; `rule-2` is the stronger top edge that opens a list or table, and the border on tags, inline code and code blocks.
- **Detector Steel** (`steel`): every piece of detector structure: rings, phi ticks, muon chambers, calorimeter sectors, the mark's rings, the empty-state rings, list markers and highlight dashes, blockquote borders. Always at partial opacity inside the display (0.1 fill to 0.8 stroke).

### Named Rules

**The One Meaning Rule.** Cyan means backend, yellow means native apps and tools, red means technology energy, dashed white means a logbook entry, steel means structure. A new surface may reuse a signal colour only for that meaning or for the interaction role it already holds (cyan focus and link hover, yellow reading highlight).

**The Dashed White Logbook Rule.** Logbook entries are drawn as dashed ink lines (`6 5` dash in the display, `4 3` in legends and glyphs), never in a category colour. They are neutral because the logbook is not a project category, and because it launched empty.

**The Structure Is Steel Rule.** Anything that is apparatus rather than data is `steel` at reduced opacity. If it glows, fills with a signal colour, or competes with a track, it is wrong.

## Typography

**Label / Display Font:** Archivo, variable, weight 400–700, width axis 62–125 (fallback Arial Narrow)
**Body Font:** Hanken Grotesk, 400–600 with italics (fallback system-ui)
**Reading Font:** Source Serif 4, 400–600 with italics (fallback Georgia)
**Mono Font:** JetBrains Mono, 400–500 with italics (fallback ui-monospace)

All four are downloaded at build time by Astro's font API and self-hosted; Archivo and Hanken Grotesk are preloaded, the serif and mono are not.

**Character:** Archivo is the instrument's voice, condensed like panel lettering; Hanken Grotesk is the plain operator's voice for interface copy; Source Serif 4 is the long-form reading voice, used only in logbook entries; JetBrains Mono carries every figure, date, repo path and reading time. The body sets `font-variant-numeric: tabular-nums` globally so numbers line up everywhere.

### How font-stretch is used

Width is a hierarchy axis, not a style choice. The narrower the text, the more it is a label; the wider, the more it is a thing you read.

- **75–80%**: uppercase field labels, table heads, run-header keys, captions, nav (`dt`, `th`, "Readout", "In this entry").
- **82–86%**: detector SVG labels (82%), tags (82%), the display name, section headlines and post titles (86%).
- **88–92%**: titles you click or scan (track titles, readout title, logbook entry titles, door labels, `.more`/`.back` links, role line at 92%).
- Body, reading and mono text are never stretched.

### Hierarchy
- **Display** (Archivo 620, 54px, 0.96, -0.022em, 86% width): the name in the event summary. Steps to 46px under 1100px and 40px under 820px. Post titles use the same voice at `clamp(38px, 5.2vw, 62px)`; the blog index h1 is 58px.
- **Headline** (Archivo 620, 46px, 1.0, -0.02em, 86%): section heads (Logbook, Tracks, Detector config, Contact); 38px on mobile. Article h2 is 30px/1.12 at 88%.
- **Title** (Archivo 600, 27px/1.1, 88%): featured track titles. Smaller titles at 18–22px, 88–90% width: readout title (22px), logbook entry title (21px), curling track and prev/next titles (18px), doors (16.5px).
- **Body** (Hanken Grotesk 400, 17px/1.6): default copy. Dense areas step to 14.5–15.5px; deks and summaries hold to 42–62ch. The About paragraph opens at 20px/1.55 in `ink`.
- **Reading** (Source Serif 4 400, 19px/1.7, 68ch max): article prose and the post dek (21px). 18px under 640px.
- **Label** (Archivo 500, 11–12.5px, 0.06–0.08em tracking, uppercase, 75–82% width): field names, table heads, captions, nav.
- **Mono** (JetBrains Mono 400, 12–13px): dates, counts, repo paths, reading times, tech lists, role arrangement. Code blocks at 14.5px/1.7 (13px on phones).

### Named Rules

**The Width Is Rank Rule.** Hierarchy is set by Archivo's width axis together with size: labels condensed to 75–80%, headings 86%, clickable titles 88–92%. Never stretch Hanken, Source Serif or JetBrains Mono.

**The Figures Are Mono Rule.** Any value a reader might compare (dates, counts, minutes, `n of 12`, repo paths) is set in JetBrains Mono or tabular Hanken. Prose never carries a naked statistic.

**The Serif Is For Reading Rule.** Source Serif 4 appears only in a logbook entry's dek and body. Interface copy is Hanken Grotesk.

## Layout

The home first viewport is a two-column instrument: a left event-summary column (`minmax(360px, 408px)`; 340px under 1100px) holding the run header, name, role, lede, three doors and the readout, and a right column where the detector SVG (`viewBox -720 -560 1440 1120`) fills the remaining width and height. The event fills `100svh` minus the 48px bar, clamped to 740–1100px. Legend sits top-right of the display, the "Transverse view" caption top-left, the interaction hint bottom-right.

Below the event, content sections sit in a 1440px max-width column with a 32px gutter (16px under 820px) and 96px/88px vertical padding (64px/56px on mobile), each closed by a `rule` hairline. A section header is a two-column grid: the headline in a 360px column, the dek right-aligned in the rest; on mobile they stack left-aligned. Featured tracks are rows (72px glyph, summary column, tech/links column); curling tracks are a two-column list; Detector config is two equal columns with a 64px gap. The post template is a 240px sticky rail plus a 68ch column with a 72px gap, centred in 1240px; under 1000px the rail moves above the body and the table of contents is dropped.

**Responsive rules:**
- **≤1100px:** summary column 340px, name 46px, legend narrows to 210px, track rows drop the side column under the main one.
- **≤820px:** gutter 16px; the bar stacks mark over wrapped nav (the "Display" link is hidden); the event becomes a single column: summary, then the display at its native aspect ratio with legend and hint moved into flow below it, then the readout as a sticky bottom drawer (`panel` background, max 46svh) that hides the totals until something is selected. All multi-column grids collapse to one; the logbook table becomes stacked rows.
- **≤640px:** SVG labels and the vertex callout are hidden (they would render at 4–5px); the readout carries every name instead. Code blocks bleed to the screen edges.

**The Rows Not Cards Rule.** Collections are ruled rows and tables: a `rule-2` hairline opens the list, a `rule` hairline follows each item. No boxed cards, no tile grids.

## Elevation & Depth

The system is flat. Surfaces are separated by 1px hairlines and near-identical vacuum tones, never by elevation. Depth inside the detector is conveyed by stroke opacity (inner silicon layers solid, outer layers dashed and fainter) and by isolation: when something is selected, everything else drops to 14% opacity.

### Shadow Vocabulary
- **Drawer lift** (`box-shadow: 0 -12px 24px rgba(0,0,0,0.45)`): only on the mobile sticky readout, to separate it from the display scrolling beneath. It is the single shadow in the build.

**The No Glow Rule.** Tracks, towers and signal colours are drawn as crisp strokes and flat fills. No blur, no bloom, no gradient, no coloured shadow.

## Shapes

Square everywhere: no border radius on any container, tag, button, code block or input (`rounded.none`). The only curves are data and apparatus: detector rings, curling tracks, the 10px ring dots marking curling projects in the list, and the mark. Borders are always 1px (the solenoid ring at 2.5px is the one heavy stroke). Hit points on tracks are 4px squares; muon-chamber hits are 14×8 rotated rectangles; the logbook photon ends in a 6px square in the calorimeter. Dashes are a vocabulary: `6 5`/`4 3` for logbook entries, `2 3` for outer detector layers and empty-state rings, `3 3` for the SVG keyboard focus ring.

## Components

### Top Bar and Navigation
Sticky 48px bar on 94%-opaque vacuum with a `rule` bottom edge. Left: the 22px detector mark (two steel rings, a cyan straight track, a yellow curl, an ink vertex) plus "Osmait" and a condensed uppercase "event display" subtitle. Right: five uppercase Archivo links (Display, Logbook, Tracks, Detector config, Contact) in `dim`; hover and current go to `ink`, and the current page gets a 1px cyan underline inset 12px each side. On mobile the nav wraps under the mark.

### Event Summary and Doors
A run header (`dl`) of three hairline-divided fields: Run (year), Tracks (count), Built (build date, right-aligned). Then the display-size name, the role line with a mono arrangement line under it, the lede, and three doors as ruled rows: an 18px glyph drawn in the track language (cyan stroke for Projects, dashed white for Logbook, an outlined envelope for Contact), a title at 16.5px/90%, and a mono meta value on the right ("12 public repos", "first entry soon", the email). Hover underlines the title; the Projects door also turns cyan.

### Detector Display (signature)
Built entirely from data at build time. Featured projects are straight tracks punching out to the muon chambers, labelled with title plus a mono line of their first three technologies. Smaller projects are curling tracks with radius `70 + 18·√commits`, labelled only on hover, focus or selection. Logbook entries (up to eight) are dashed white photons stopping in the calorimeter. Technologies used by two or more projects (up to 18) are red towers whose bar height is `n / max`, labelled with name and `n/total`. A "vertex: osmait" callout in a steel-outlined box sits at the origin. Every track and tower has a 16px transparent hit stroke, `tabindex="0"`, `role="button"` and a descriptive `aria-label`.

### Readout and Isolation (signature interaction)
Hover, focus, tap or keyboard-activate any track or tower to isolate it: the target gets class `on` (track strokes thicken to 2.8px, curl labels appear), every other selectable fades to 14% opacity over 180ms ease-out, and the readout panel rewrites itself. Selecting a tower also lights every project that uses that technology. Clicking or pressing Enter/Space pins a selection (`aria-pressed`); leaving hover or focus falls back to the pinned one; Escape or clicking empty detector space clears it. The readout header shows "no selection" in `dim`, or "isolated: …" in `ink`; its body is `aria-live="polite"`.
- **Idle:** one line inviting a pick, then a totals list (featured, smaller, logbook entries, technologies shown) with the same line glyphs as the legend.
- **Project:** a coloured classification line (straight or curling track · category), title, summary, a Tech/Updated/Note field list in mono, and repo and demo links.
- **Technology:** red classification, name, "Energy: n of total projects", "Seen in: …".
- **Logbook entry:** white classification with date, title, description, reading time, tags, "Read entry".

### Load Replay (motion)
The detector is fully drawn in the HTML. Only when `prefers-reduced-motion` is not set, the SVG gets class `fire` for 2.6s on load: straight tracks draw out from the vertex over 1.1s with `cubic-bezier(0.16, 1, 0.3, 1)` via `pathLength` dash offset, curling tracks follow 0.35s later, hit points and labels fade in at 0.8s, and tower bars fade in one after another from 0.9s with a 40ms stagger. It plays once and never loops. Reduced motion also disables smooth scrolling and collapses all transitions globally.

### Track Rows
Featured tracks below the fold: a 72px glyph (straight stroke with five hit ticks in the category colour, an ink vertex dot), the title linked to the GitHub repo, an uppercase category and updated date in the category colour, a summary, highlight bullets marked by an 8px steel dash, an optional mono note, then tags and mono repo/demo links. Curling tracks are compact ruled list items: a ring dot in the category colour, title, one-line summary and a mono tech line.

### Tags
Archivo 500 12px at 82% width in `ink-2`, a 1px `rule-2` border, 5px 7px 4px padding, square corners. Static labels, never interactive.

### Text Links
Standalone links (`.more`, `.back`, readout links, the contact email) are Archivo 600 at 90% width with a 1px `faint` underline set 5px below; hover turns text and underline to the relevant signal colour (cyan for outbound repo and channel links, yellow for reading and navigation within the logbook and for the email). Inline links inherit colour with a 1px underline at 0.22em offset.

### Logbook Table and Empty State
Posts are a four-column table (mono date, title plus description, right-aligned mono reading time, tags) with `rule` row hairlines; hovering a row turns its title yellow. On mobile each row becomes a small grid. With no posts, the table is replaced by an empty state framed by `rule-2`/`rule` hairlines: a 120px steel detector with dashed inner rings and a single faint dashed photon that has not yet been recorded, the heading "No entries recorded yet.", one honest line about what the logbook will hold, and RSS and GitHub links to follow along. The empty state is the real content until posts exist; the home doors, legend ("none recorded yet") and readout totals ("0") state the same fact.

Other empty states follow the same voice: post navigation shows "None: this is the first entry" and "Nothing newer yet" in `dim`; the 404 is "This track left the detector."

### Entry Record and Article
Post pages carry a sticky rail with a field list (Entry number zero-padded to three digits, Draft status in red when present, Recorded, Updated, Reading, Tags) and a numbered "In this entry" table of contents whose current item turns yellow. A 1px yellow progress hairline runs along the bottom of the top bar. Articles: serif body, Archivo h2/h3, cyan-underlined links, inline code on a slightly lifted bed with a `rule-2` border, steel list markers, steel-bordered blockquotes, `rule-2` hairlines around figures and above tables. Code blocks use the "detector" Shiki theme: cyan keywords, yellow strings and numbers, white functions, pale steel types, italic grey comments, red for invalid and deleted lines.

### Calibration Table
Technology energy outside the display: name in Archivo, a row of 30px cells (16px on mobile) filled red up to the count and outlined in 35% red beyond it, and a mono "n of total" value right-aligned. Technologies seen only once are listed as plain "Single hits" text instead of bars.

## Do's and Don'ts

### Do:
- **Do** derive every count, bar height and track radius from `src/data/projects.ts` and the blog collection at build time. If a number is on screen, it must be computed from real data.
- **Do** list only public GitHub repositories; private repos never appear, not even as unlinked names.
- **Do** keep claims to what the data and PRODUCT.md support: current role (Software Engineer, SkoolScout LLC, contract, remote, since Mar 2024), no city, no invented metrics, testimonials or employer details.
- **Do** state emptiness plainly ("No entries recorded yet.", "first entry soon", "0") and keep the empty state as a designed part of the page. Never add sample posts to fill it.
- **Do** keep each signal colour to its one meaning (cyan backend, yellow native/tooling, red technology energy, dashed white logbook, steel structure).
- **Do** rank type with Archivo's width axis: 75–80% labels, 86% headlines, 88–92% clickable titles.
- **Do** separate content with 1px `rule`/`rule-2` hairlines and ruled rows, square corners throughout.
- **Do** make every detector element keyboard focusable with a descriptive label, and let the readout, not SVG text, carry names on small screens.
- **Do** ship the detector fully drawn and play the load replay only once, only when reduced motion is not requested.

### Don't:
- **Don't** build a hero-plus-card-grid or bento layout; collections are rows, the home is the detector.
- **Don't** add glow, blur, gradients, coloured shadows or rounded containers; the drawer lift on the mobile readout is the only shadow.
- **Don't** colour a logbook entry yellow or cyan, or use red for anything but technology energy and error/draft states.
- **Don't** stretch Hanken Grotesk, Source Serif 4 or JetBrains Mono, or use the serif for interface copy.
- **Don't** loop animations or add scroll-triggered reveals; motion is the one load replay, 180ms isolation fades, and the post's reading-progress hairline.
- **Don't** show SVG labels below 640px wide, where they would render at unreadable sizes.
