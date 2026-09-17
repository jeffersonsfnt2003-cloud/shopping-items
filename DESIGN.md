---
name: Catálogo
description: Marketplace canon executed straight — an Amazon-grade storefront for a two-person Goofish due-diligence catalog.
colors:
  fondo: "#eaeded"
  blanco: "#ffffff"
  borde: "#d5d9d9"
  borde-suave: "#e7e7e7"
  texto: "#0f1111"
  texto-secundario: "#565959"
  enlace: "#007185"
  enlace-hover: "#c7511f"
  navy: "#131921"
  navy-sub: "#232f3e"
  oferta: "#b12704"
  amarillo: "#ffd814"
  amarillo-hover: "#f7ca00"
  amarillo-borde: "#fcd200"
  naranja: "#ffa41c"
  naranja-hover: "#fa8900"
  naranja-borde: "#ff8f00"
  ok: "#007600"
  warn: "#c45500"
  azul-tec: "#2c5f8a"
  hover-lavado: "#f7fafa"
typography:
  headline:
    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.3
  product-title:
    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  body-secondary:
    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.5
  micro:
    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  xs: "2px"
  sm: "4px"
  md: "8px"
  pill: "20px"
spacing:
  xs: "7px"
  sm: "8px"
  md: "12px"
  lg: "14px"
components:
  button-primary:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.texto}"
    rounded: "{rounded.pill}"
    padding: "8px 10px"
  button-primary-hover:
    backgroundColor: "{colors.amarillo-hover}"
    textColor: "{colors.texto}"
  button-action:
    backgroundColor: "{colors.naranja}"
    textColor: "{colors.texto}"
    rounded: "{rounded.pill}"
    padding: "8px 10px"
  button-action-hover:
    backgroundColor: "{colors.naranja-hover}"
    textColor: "{colors.texto}"
  button-neutral:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.texto}"
    rounded: "{rounded.pill}"
    padding: "8px 10px"
  button-neutral-hover:
    backgroundColor: "{colors.hover-lavado}"
    textColor: "{colors.texto}"
  chip:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.texto}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  chip-selected:
    backgroundColor: "{colors.navy-sub}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  card:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.texto}"
    rounded: "{rounded.md}"
  navlink:
    backgroundColor: "transparent"
    textColor: "{colors.blanco}"
    rounded: "{rounded.xs}"
    padding: "9px 11px"
---

# Design System: Catálogo

## Overview

**Creative North Star: "The Marketplace Canon, Executed Straight"**

Catálogo is a two-person purchase due-diligence tool that deliberately reads as a real e-commerce storefront: the category canon, craft bar Amazon, chosen by the user as a permanent direction (seed b0192ea8, recorded as a brand commitment in PRODUCT.md). There is no irony and no pastiche — the goal is instant legibility: light results background, white product-first cards, a dark two-stripe header, price as protagonist, and yellow/orange pill CTAs. The world lands exactly as the direction contract named it; the build and the contract agree token for token.

What separates it from a generic clone is its trust material: every confidence signal is real data. The green "Verificado foto por foto" line, the reservas lists, the motivo de descarte, and the to-scale SVG fit diagrams are the product's actual due diligence rendered in the marketplace's own visual grammar. Density is high but calm — 14px body type, 12px rhythm, thin `#d5d9d9` borders doing the structural work instead of shadows.

**Key Characteristics:**
- Storefront-literal: light gray canvas, white cards, navy two-stripe header, pill CTAs.
- Price is the loudest type on every card (22px/700) while product titles stay regular weight.
- Trust signals only from real data; verdicts carry a strict green/amber/red semantic palette.
- Flat at rest: borders structure, shadows respond to hover and overlays only.
- Thumb-first PWA: safe-area padding everywhere, pressed `:active` states, no hover dependencies.

## Colors

An Amazon-canon palette: neutral gray-and-white commerce surfaces, a navy chrome, teal links, and hot yellow/orange reserved for action.

### Primary
- **Marketplace Yellow** (#ffd814): the default CTA pill fill (Detalle, hoja actions); hover deepens to #f7ca00 with a #fcd200 border.
- **Action Orange** (#ffa41c): the single filled external action per card (the Goofish link); hover #fa8900, border #ff8f00. Also the accent dot on the open-filters button and the install banner icon.

### Secondary
- **Commerce Teal** (#007185): all links, the radio-mark fill, focus outlines, selection tint, and caret color; hover flips to rust #c7511f with underline — the canonical link behavior.
- **Two-Stripe Navy** (#131921 header, #232f3e subnav): the dark chrome that frames the light store; #232f3e doubles as the selected state for chips and the open-filters button.

### Tertiary (semantic verdicts)
- **Offer Red** (#b12704): the modal offer price, discard tags, blocked-proxy warnings, and the "NO ENTRA" verdict. One hex, two token names in CSS (`--oferta`, `--mal`); both roles are price-drama and bad-news.
- **Verified Green** (#007600): "Verificado foto por foto", "envío incl.", positive fit verdicts, copied-state feedback.
- **Caution Amber** (#c45500): reservas, exprés-only notices, "JUSTO" fit verdicts, the mouse silhouette in diagrams.
- **Diagram Blue** (#2c5f8a): reference objects in the technical fit diagrams (MacBook, mandos) — never a UI accent.

### Neutral
- **Results Gray** (#eaeded): the page canvas and scrollbar track.
- **Card White** (#ffffff): every card, panel, bar, and modal surface.
- **Hairline** (#d5d9d9): the universal card/control border; #e7e7e7 for interior dividers (photo edges, spec-grid cells, table rows).
- **Ink** (#0f1111) and **Muted Ink** (#565959): primary text and secondary metadata; #f7fafa is the near-white hover wash on neutral controls.

### Named Rules
**The One Orange Rule.** Orange fills exactly one action per card — the external Goofish link. Everything else on a card is a yellow or white-outlined pill. Two filled orange buttons in one component is a defect.

**The Real-Data Rule.** Trust colors (#007600, #c45500, #b12704) may only render facts that exist in `window.CATALOGO`: photo verification, reservas, discard reasons, fit verdicts, proxy states. Ratings, review counts, and stars do not exist in this world and must never be invented.

## Typography

**Body Font:** Source Sans 3 (with 'Helvetica Neue', Arial, sans-serif) — loaded from Google Fonts in weights 400, 600, 700 (+400 italic).

**Character:** A single utilitarian grotesque doing everything, exactly as the marketplace canon demands. Hierarchy comes from weight contrast and a tight pixel ramp, not from a display face.

### Hierarchy
The build uses an eight-step pixel ramp: 11 / 12 / 13 / 14 / 15 / 19 / 22 / 26.

- **Price Display** (600, 26px): the offer price in the modal price box, colored #b12704. The largest type in the system.
- **Headline** (700, 22px, -0.01em): the header logo and the card price (`.y`), in ink. Drops to 18px on small screens.
- **Title** (600, 19px, 1.3): the modal product title.
- **Product Title** (400, 15px, 1.35, 2-line clamp): card titles — deliberately regular weight; hover shifts to link-rust #c7511f.
- **Body** (400, 14px, 1.45): base text and descriptions.
- **Body Secondary** (400, 13px): the workhorse size — buttons, nav links, chips, metadata, tables, summaries.
- **Label** (600–700, 12px): badges, verified lines, header metadata, fine print.
- **Micro** (400–600, 11px): photo counters, spec-grid keys, chip counts, the logo tagline. Counters use `font-variant-numeric: tabular-nums`.

### Named Rules
**The Quiet Title Rule.** Product titles stay weight 400; the price carries the bold. Loud is reserved for numbers, verdicts, and totals (`tr.tot` at 700/15px).

**The No-Uppercase Rule.** No tracked-out uppercase labels anywhere; even spec-grid keys explicitly set `text-transform: none`. Emphasis is weight and color, never case.

## Layout

Single centered column, `max-width: 1280px`, 14px side padding plus iOS safe-area insets on all four edges (`env(safe-area-inset-*)` is composed into every fixed and edge-touching element). The header and subnav bleed full-width via negative margins while their content rows stay on the 1280px grid.

- **Product grid:** `repeat(auto-fill, minmax(240px, 1fr))` with 12px gaps; below 520px it tightens to `minmax(160px, 1fr)` with 9px gaps.
- **Rhythm:** 12px vertical gap between stacked bars/panels/cards; 14px internal padding on panels; 11–14px on card bodies; small clusters at 7–8px.
- **One breakpoint** (520px): type steps down (title 13px, price 18px), the card summary line hides, the modal goes full-bleed edge-to-edge, and card actions wrap with Detalle taking the full first row.
- **Density:** high, list-of-results density; content areas like spec grids and constancias use `auto-fit minmax(150–250px, 1fr)` sub-grids.

## Elevation & Depth

Flat by default: surfaces rest on 1px `#d5d9d9` borders, not shadows. Shadows are a response — a resting whisper on bars/buttons, a lift on card hover, and real depth only for overlays. Overlays (modal, hoja, lightbox) sit on a `rgba(15,17,17,.6)` scrim; the lightbox is a plain full-white sheet.

### Shadow Vocabulary
- **Rest whisper** (`box-shadow: 0 2px 5px rgba(15,17,17,.08)` — `--sombra`): bars, panels, secondary buttons, carousel arrows at rest.
- **Hover lift** (`box-shadow: 0 4px 14px rgba(15,17,17,.15)` — `--sombra2`): product card hover, the install banner, lightbox controls.
- **Modal depth** (`box-shadow: 0 10px 40px rgba(15,17,17,.35)`): the detail modal only.

### Named Rules
**The Border-First Rule.** If a surface needs definition, it gets a #d5d9d9 border. Shadows never replace borders; they only add hover/overlay depth on top of them.

## Shapes

Round-cornered commerce geometry in four steps: 2px on the tightest chrome (nav links, focus rings), 4px on badges and inline warnings, 8px on every card, panel, bar, and modal, and a 20px pill on all buttons and chips. Circles (50%) are reserved for icon-only controls: carousel arrows, close buttons, radio marks. Photo counters and the lightbox counter use intermediate 10–12px pills. The bottom sheet (`hoja`) uniquely rounds only its top corners (12px 12px 0 0). Motion follows the same softness: `aparecer` (fade, .15s), `subir` (rise 14px + scale .99, .22s `cubic-bezier(.2,.8,.3,1)`), `despliegue` (drop-in, .16s); every pressable control gets a pressed `:active` state (translateY(1px) + brightness(.94)); `prefers-reduced-motion` kills all animation and transitions.

## Components

### Buttons
- **Shape:** full pill (20px radius), 13px text, 8px 10px padding, always 1px bordered.
- **Primary (yellow):** #ffd814 fill, #fcd200 border, ink text; hover #f7ca00. The default in-app action.
- **Action (orange, `.go`):** #ffa41c fill, #ff8f00 border, ink text; hover #fa8900. One per card, external destination only.
- **Neutral / outlined:** white fill, #d5d9d9 border, ink text; hover washes #f7fafa. Semantic variants recolor border+text: `.ok`/`.re` green #007600, `.oc` (hide) red #b12704 with a #fff5f4 hover tint.
- **Icon-copy (`.cp`):** a compact white pill holding a 13px inline stroke SVG; flips to green check + "Copiado" feedback for 1.6s.
- **Pressed:** every button sinks 1px and dims to 94% brightness on `:active`.

### Chips
- **Style:** white pill, #d5d9d9 border, 13px text, 6px 14px padding; counts inline at 11px/80% opacity.
- **Selected:** inverts to navy #232f3e fill, white 600-weight text.

### Cards / Containers
- **Corner Style:** 8px, `overflow: hidden` so the square photo carousel clips flush.
- **Background:** white on the #eaeded canvas; 1px #d5d9d9 border; photo area separated by a #e7e7e7 hairline.
- **Shadow Strategy:** flat at rest, `--sombra2` lift on hover (see Elevation & Depth).
- **Structure:** 1:1 photo carousel on top (scroll-snap, tap-vs-drag discrimination, hover-revealed circular arrows, tabular-nums counter pill), then an 11/14px-padded body: quiet title → green verified line → dimensions/volume → US$ proxy cost → 2-line summary → price row (¥ bold 22px + US$ muted + green "envío incl.") pinned to the bottom with `margin-top: auto` → action row.
- **States:** discarded cards sit at 78% opacity with a red "Descartado" tag chip (4px radius, white-translucent fill); hidden cards at 55%.

### Inputs / Fields
No text inputs exist. Selection controls are custom radio rows (16px circle, #888c8c border, teal #007185 dot when on, 700-weight label) and filter chips. Focus everywhere is `outline: 2px solid #007185; outline-offset: 2px`.

### Navigation
- **Header:** two stripes — navy #131921 brand row (22px/700 logo with an 11px #ccc tagline, right-aligned 12px metadata) over #232f3e category subnav.
- **Nav links:** 13px white text, transparent 1px border, 2px radius; hover and active draw a white border; active also goes 700. The row scrolls horizontally with hidden scrollbars on small screens.

### Disclosure rows (signature)
`<details>` bars (cart note, manual search, descartados) styled as white 8px cards whose summary carries a 9px chevron SVG (data-URI) that rotates 90° on open; panel content animates in with `despliegue`.

### Technical fit diagram (signature)
A white 8px-bordered annex card holding to-scale SVG plan/elevation drawings: container outline stroked in the verdict color (#007600 / #c45500 / #b12704), reference objects in translucent diagram-blue #2c5f8a and amber #c45500 fills, 9–11px Source Sans 3 annotations in muted grays, and a bold colored one-line verdict ("ENTRA…", "JUSTO…", "NO ENTRA…"). This is the product's proof-of-fit rendered in-system.

### Cost table (signature)
The Superbuy breakdown: 13px rows divided by #e7e7e7 hairlines, right-aligned tabular-nums values, a 2px ink top-border total row at 700/15px with the total in offer-red #b12704, followed by muted `obs` caveat lines (red for blocked, amber for exprés-only). Status badges ("Solo courier exprés", "No disponible…") are 4px-radius tinted chips (#fef8f2/#fff5f4) bordered in their semantic color.

## Do's and Don'ts

### Do:
- **Do** keep every actionable control a bordered pill (20px) with a pressed `:active` sink; this is a thumb-first PWA and press feedback replaces hover.
- **Do** route all links through teal #007185 → rust #c7511f + underline on hover; the link pair is the system's most recognizable canon signal.
- **Do** compose `env(safe-area-inset-*)` into any new fixed or edge-touching element, and give any new animation a `prefers-reduced-motion` escape (already global).
- **Do** draw icons as inline stroke SVGs (currentColor, 2–2.6 stroke width, 9–18px); the world has no icon font and no glyph characters.
- **Do** state uncertainty in words ("a confirmar", "se ajusta después") in muted #565959; honesty lines are part of the visual system.

### Don't:
- **Don't** invent ratings, stars, review counts, or social proof — The Real-Data Rule; the marketplace look never overrides the truth contract.
- **Don't** fill more than one orange CTA per card, and never use orange for in-app navigation — orange means "leaves the app".
- **Don't** add resting shadows or drop the #d5d9d9 border to "clean up" a surface; borders structure, shadows respond.
- **Don't** use uppercase tracked labels, a second typeface, or bold product titles; hierarchy is weight-on-numbers, not case or size inflation.
- **Don't** use diagram-blue #2c5f8a outside the technical fit diagrams.
