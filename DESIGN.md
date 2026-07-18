---
name: Smilyx Clear Aligners
description: The Precision Lab — a clinical, orthodontist-grade visual system for a clear-aligner fabrication lab
colors:
  brand-900: "#03045e" #[cite: 1]
  brand-800: "#023e8a" #[cite: 1]
  brand-700: "#0077b6" #[cite: 1]
  brand-600: "#0096c7" #[cite: 1]
  brand-500: "#00b4d8" #[cite: 1]
  brand-400: "#48cae4" #[cite: 1]
  brand-300: "#90e0ef" #[cite: 1]
  brand-100: "#ade8f4" #[cite: 1]
  brand-50: "#caf0f8" #[cite: 1]
  ink-900: "#03045e" #[cite: 1]
  ink-800: "#023e8a" #[cite: 1]
  ink-700: "#1e293b" 
  ink-600: "#334155" 
  muted-500: "#64748b" 
  surface: "#ffffff"
  canvas: "#f8fafc"
  hairline: "#e2e8f0"
  status-mild: "#0f766e"
  status-moderate: "#b45309"
  status-severe: "#be123c"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-700}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-800}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
  nav-link:
    textColor: "{colors.muted-500}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1rem"
  nav-link-active:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.brand-800}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "1.5rem"
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-800}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
---

# Design System: Smilyx Clear Aligners

## 1. Overview

**Creative North Star: "The Precision Lab"**

Smilyx is a clear-aligner fabrication lab, and the interface should read like the inside of one: clean instrument surfaces, exact readouts, and a clinical calm that signals *these people measure things to the micron*. The system speaks clinician-to-clinician. Its job is to make a practitioner believe, before they submit a case, that the setup design and fabrication behind the screen are as rigorous as the copy claims. Confidence comes from exactness — precise numbers, monospace data labels, generous whitespace — not from decoration.

The dominant material is bright, clinical white and cool canvas layered over a deep, diagnostic navy (`#03045e`)[cite: 1]. A technical, ultraviolet-leaning cyan (`#00b4d8`)[cite: 1] carries interactive intent and diagnostic accents. 

This system explicitly rejects four things: the **consumer DTC / gimmicky** mail-order-teeth look (pastels, hype, subscription-box tone); the **generic dental-clinic template** (soft teals, stock smiling faces, everything rounded, forgettable); a **sterile / lifeless** hospital-software feel where precision tips into coldness; and **generic SaaS slop** (gradient blobs, hero-metric templates, identical card grids). We avoid the "generic dental" trap by treating our blues as high-tech, blueprint-grade indicators rather than soft, friendly pastels[cite: 1].

**Key Characteristics:**
*   Bright clinical white surfaces on a crisp, cool-toned canvas; depth from soft shadow, not heavy chrome.
*   A strict spectrum of technical blues[cite: 1] owns all interaction; neutrals are anchored in deep navy (`#03045e`)[cite: 1] to provide sharp, laboratory-grade contrast.
*   Monospace metadata as the signature of instrumentation.
*   Fully rounded pills for actions and nav; large soft-cornered containers for content.
*   Restrained motion: hover lifts, gentle reveals, nothing bouncy.

## 2. Colors

A cool, clinical palette: an active cyan accent doing the interactive work over a bright white/navy neutral field[cite: 1], with three muted status hues reserved strictly for clinical data.

### Primary
*   **Ultraviolet Cyan** (`#00b4d8`, brand-500)[cite: 1]: the bright signal — small highlights, icons on dark grounds, the "after" tag on case previews.
*   **Technical Azure** (`#0077b6`, brand-700)[cite: 1]: the primary action color, providing excellent WCAG AA contrast against white text. Every primary button and link emphasis uses this hue.
*   **Deep Azure Pressed** (`#023e8a`, brand-800)[cite: 1]: hover/pressed state for primary actions and active nav pill text.
*   **Cyan Tint** (`#caf0f8`, brand-50 / `#ade8f4`, brand-100)[cite: 1]: the crisp, cool wash behind active nav pills, callout panels, and success iconography.
*   **Diagnostic Navy** (`#03045e`, brand-900)[cite: 1]: for the darkest, highest-contrast text on tinted grounds.

### Neutral
*   **Deepest Ink** (`#03045e`, ink-900)[cite: 1]: primary headings and highest-contrast text; also the dark footer field and image overlays.
*   **Navy Ink** (`#023e8a`, ink-800)[cite: 1]: default body and title text on light surfaces.
*   **Slate Muted** (`#64748b`–`#334155`, muted-500/ink-600): secondary text, captions, inactive nav labels. Guard contrast when used on tinted grounds.
*   **Instrument White** (`#ffffff`, surface): cards, forms, the scrolled header, floating menus.
*   **Lab Canvas** (`#f8fafc`, canvas): the page background — a crisp, cool whisper off pure white.
*   **Hairline** (`#e2e8f0`, hairline): dividers, card borders, the scrollbar track. Structure by whisper, not by rule.

### Tertiary
Clinical status hues, used **only** on case-complexity chips and clinical data — never as decoration:
*   **Mild Teal** (`#0f766e`, status-mild): low-complexity cases.
*   **Moderate Amber** (`#b45309`, status-moderate): mid-complexity cases.
*   **Severe Rose** (`#be123c`, status-severe): high-complexity cases.

### Named Rules
**The Precision-Blue Rule.** The core blue spectrum (`#03045e` to `#caf0f8`)[cite: 1] is the *only* chromatic accent in the interface chrome. Buttons, links, active states, focus rings — all drawn from this scale[cite: 1]. The status teal/amber/rose are data, not decoration, and never leak into UI chrome.

**The Diagnostic-Navy Rule.** Every dark neutral is anchored in deep navy (`#03045e` or `#023e8a`)[cite: 1]. This keeps the contrast sharp and technical, avoiding muddy or warm grays that clash with the clinical cyan. 

## 3. Typography

**Display Font:** Outfit (with `sans-serif` fallback)
**Body Font:** Inter (with `ui-sans-serif, system-ui, sans-serif`)
**Label/Mono Font:** JetBrains Mono (with `monospace`)

**Character:** A geometric display over a neutral humanist body, with monospace reserved for precise metadata. Outfit gives headlines an engineered, confident geometry; Inter keeps long clinical prose quiet and legible; JetBrains Mono makes small data labels read like instrument readouts.

### Hierarchy
*   **Display** (Outfit, 800, `clamp(2.25rem, 5vw, 3.75rem)`, lh 1.05, tracking -0.025em): hero and page-title headlines. Frequently set in italic on the hero for a forward-leaning, motion-implied feel. Ceiling stays less than or equal to 3.75rem — engineered, not shouting.
*   **Headline** (Outfit, 700, `clamp(1.5rem, 3vw, 2rem)`, lh 1.15): section headers and form titles.
*   **Title** (Outfit, 700, 1.125rem, lh 1.35): card titles (case condition, service name), dropdown panel headers.
*   **Body** (Inter, 400, 1rem, lh 1.65): all reading copy. Cap measure at 65–75ch. Secondary copy drops to 0.875rem but never lighter than Muted Slate on white.
*   **Label** (JetBrains Mono, 700, 0.75rem, tracking 0.1em, UPPERCASE): eyebrows, case-study numbers, badges, timing chips ("FULL SETUP IN 24 HOURS"), form section kickers. The signature instrumentation detail.

### Named Rules
**The Instrument-Label Rule.** Monospace is reserved for short, precise metadata — numbers, timings, IDs, category tags. Never set body copy, headings, or sentences in mono; on a non-technical health brand it becomes costume. Its job is to make data feel measured.

**The Geometric-Headline Rule.** Headings are always the display family at weight 700–800 with tracking less than or equal to -0.02em. Never letter-space headings positive; never set a heading in the body or mono family.

## 4. Elevation

A flat-by-default system with soft, ambient elevation. Depth is conveyed by low-blur diffuse shadows and hairline borders over the cool white canvas, not by heavy chrome or dark drop shadows. The scrolled header and floating menus add a backdrop blur to separate from content beneath. Surfaces are calm at rest and lift on interaction.

### Shadow Vocabulary
*   **Resting card** (`box-shadow: 0 1px 2px rgba(3,4,94,0.04)`, Tailwind `shadow-sm`): the default for content cards; barely-there separation from canvas.
*   **Hover lift** (`box-shadow: 0 20px 25px -5px rgba(3,4,94,0.10)`, `shadow-xl`): case cards and interactive tiles on hover, paired with a 1–2px translateY.
*   **Floating surface** (`shadow-xl` + `backdrop-blur-md`): the scrolled header, nav dropdown, and mobile drawer.
*   **Accent glow** (`box-shadow: 0 10px 15px -3px rgba(0,119,182,0.20)`): primary buttons carry a faint tinted glow in the brand hue (`#0077b6`)[cite: 1], deepening on hover.
*   **Form panel** (`shadow-2xl`): the interactive lab form, deliberately the most elevated element on its page — the destination.

### Named Rules
**The Flat-At-Rest Rule.** Content surfaces are flat with only a hairline or `shadow-sm` at rest. Elevation is a *response* to state (hover, scroll, focus), never an ambient default. If everything is lifted, nothing is.

## 5. Components

### Buttons
*   **Shape:** fully rounded pill (`rounded-full`) for all primary and nav actions; large radius (`rounded-xl`, 1rem) for full-width form submits.
*   **Primary:** Technical Azure (`#0077b6`, brand-700)[cite: 1] fill, white text, display font 700, UPPERCASE, tracking-wider, padding `0.75rem 1.5rem`. Carries a faint brand-hue glow.
*   **Hover / Focus:** darkens to Deep Azure (`#023e8a`, brand-800)[cite: 1], lifts `-translate-y-0.5`, shadow deepens. Focus-visible must show a visible ring (2px brand at greater than or equal to 3:1 against adjacent surface).
*   **Icon convention:** most CTAs pair a label with a trailing `ArrowRight` (16px) — reinforces forward motion toward the case submission.

### Chips
*   **Complexity chips:** tinted status pill — Mild teal / Moderate amber / Severe rose — background at the 50 tint, text at the 700 shade, 1px border at the 100 tint, `rounded-full`, mono 700 uppercase at 10px. Data only.
*   **Before/After tags:** absolute-positioned pills over case imagery — "Before" on ink-900/80, "After" on brand-700/90, white text.
*   **Timing eyebrow:** brand-tinted glass pill (brand-500/20 fill, brand-500/30 border, `backdrop-blur`) carrying a mono uppercase timing label with a leading clock icon.

### Cards / Containers
*   **Corner Style:** large and soft — `rounded-3xl` (1.5rem) for case and content cards, `rounded-2xl` for nested panels.
*   **Background:** Instrument White on Lab Canvas.
*   **Shadow Strategy:** `shadow-sm` at rest → `shadow-xl` on hover (see Elevation). Group-hover also scales inner imagery `scale-105` and shifts the title to brand-700 (`#0077b6`)[cite: 1].
*   **Border:** 1px Hairline (`#e2e8f0`) — full borders only; colored side-stripe borders are forbidden.
*   **Internal Padding:** 1.5rem (`p-6`) standard; 2.5rem (`p-10`) for the form panel.

### Inputs / Fields
*   **Style:** Lab Canvas fill (`bg-slate-50/50`), 1px slate-200 stroke, `rounded-xl` (0.75rem), padding `0.75rem 1rem`, ink-800 text.
*   **Label:** mono-adjacent — 12px display 700 UPPERCASE tracking-wider, ink-700, with a red asterisk for required.
*   **Focus:** border shifts to brand-500 (`#00b4d8`)[cite: 1] with a soft `ring-2 ring-brand-100` halo; no outline removal without this replacement ring.
*   **Error:** rose-50 field/message with rose-700 text; messages are specific and actionable.
*   **File dropzone:** dashed slate-200 border → brand-500 (`#00b4d8`)[cite: 1] on hover with a brand-50 wash; upload icon + supported-format helper text.

### Navigation
*   **Style:** fixed header, transparent over hero → on scroll becomes `bg-white/95 backdrop-blur-md` with `shadow-md` and a hairline bottom border.
*   **Links:** display 700, 12px, UPPERCASE, tracking-wider, `rounded-full` pills. Default Muted Slate; hover → brand-800 (`#023e8a`)[cite: 1] on slate-50; active → brand-800 on brand-50 tint (`#caf0f8`)[cite: 1].
*   **Treatments dropdown:** white `rounded-2xl` floating panel, `shadow-xl`, hairline border, scale+fade transition. Must escape the header stacking context (fixed/portal), not clip.
*   **Header CTA:** the primary pill button, always "Submit Trial Case."
*   **Mobile:** hamburger toggles a full-width white drawer that slides from the top; treatments become a tinted sub-list; CTA is full-width at the bottom.

### Signature Component — Before/After Slider
A draggable clinical comparison of a case's before and after imagery. The handle carries a soft glow (`box-shadow: 0 0 10px rgba(0,0,0,0.25)`). This is the proof-through-evidence device the whole system builds toward; treat it as a first-class instrument, not a widget.

## 6. Do's and Don'ts

### Do:
*   **Do** keep the clinical blue spectrum (`#03045e` to `#caf0f8`)[cite: 1] as the single interactive hue family — one visual indicator a practitioner's eye follows to the case submission.
*   **Do** keep dark neutrals anchored in Diagnostic Navy (`#03045e`)[cite: 1].
*   **Do** reserve JetBrains Mono for short precise metadata — numbers, timings, IDs, tags (The Instrument-Label Rule).
*   **Do** keep surfaces flat at rest and elevate only on state change (The Flat-At-Rest Rule).
*   **Do** verify contrast to WCAG 2.2 AA: body greater than or equal to 4.5:1, large text greater than or equal to 3:1, placeholders greater than or equal to 4.5:1. 
*   **Do** use `brand-700` (`#0077b6`) or `brand-800` (`#023e8a`)[cite: 1] for any blue fill under white text to pass AA contrast standards.
*   **Do** give every animation a `prefers-reduced-motion` alternative (crossfade or instant).
*   **Do** let real clinical evidence — cases, the before/after slider, named clinicians — carry warmth, since decoration may not.

### Don't:
*   **Don't** drift into the **generic dental-clinic template**: though we are using blues[cite: 1], they must remain sharp, technical, and high-contrast. Avoid reverting to soft, pastel "spa" teals paired with over-rounded UI elements.
*   **Don't** slide into **consumer DTC / gimmicky** territory (hype, subscription-box tone). This is a clinical lab, not mail-order teeth.
*   **Don't** let precision tip into **sterile / lifeless** hospital software. Named clinicians and real outcomes must keep it human.
*   **Don't** import **generic SaaS slop**: gradient blobs, the hero-metric template, identical icon-heading-text card grids, or tiny tracked eyebrows over every section.
*   **Don't** use `background-clip: text` gradient text or `border-left/right` colored side-stripes anywhere — both are banned outright.
*   **Don't** set body copy, headings, or sentences in monospace — mono is data only.
*   **Don't** add a conflicting UI accent hue. If it isn't part of the core blue spectrum[cite: 1] or a clinical status color on data, it doesn't belong.