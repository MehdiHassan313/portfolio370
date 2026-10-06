---
name: design-khanpdf-com
description: Design system extracted from KhanPDF (https://www.khanpdf.com/). Use when building UI that should match this brand's visual identity.
triggers:
  - "KhanPDF"
  - "khanpdf-com"
  - "design like KhanPDF"
  - "KhanPDF風"
source: https://www.khanpdf.com/
extractedAt: 2026-09-29T12:41:52.262Z
tags: ["light", "rounded", "accented", "monospace", "sans-serif"]
---
# Design System Inspired by KhanPDF

> Auto-extracted from `https://www.khanpdf.com/` on 2026-09-29

## 1. Visual Theme & Atmosphere

Friendly, approachable design with rounded shapes and generous whitespace.

The hero section leads with "Convert URL to PDF Secure" followed by "Paste any public webpage URL and convert it into a clean, downloadable PDF file in seconds. No sign-".

**Key Characteristics:**
- Space Grotesk as the heading font
- Inter as the body font for all running text
- Heading weight 700, letter-spacing -0.9px
- Light/white background (#ffffff) as the primary canvas
- Primary accent `#ff550d` used for CTAs and brand highlights
- 4 shadow level(s) detected — tinted shadows
- Rounded corners (8.5px+) creating a friendly, approachable feel
- Tags: light, rounded, accented, monospace, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#ff550d`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Background** (`#ffffff`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (``) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#000000`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#666666`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#e5e5e5`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#ff550d` | `--palette-1` | text-accent | small | text-dark |

## 3. Typography Rules

- **Heading Font:** `Space Grotesk`, sans-serif
- **Body Font:** `Inter` (web font)

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Space Grotesk | 36px | 700 | 37.8px | -0.9px |
| H2 | Space Grotesk | 15px | 700 | 21px | -0.3px |
| H3 | Space Grotesk | 12px | 700 | 18px | -0.24px |
| H4 | Space Grotesk | 12px | 700 | 18px | -0.24px |
| Body | Inter | 12px | 400 | 19.5px | normal |
| Small | Inter | 10.5px | 700 | 15px | -0.2625px |
| Code | ui-monospace | 9px | 400 | 12px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `36px` | headings |
| H1 | `27px` | headings |
| H2 | `22.5px` | headings |
| H3 | `18px` | headings |
| H4 | `15px` | headings |
| Body L | `13.5px` | body / supporting text |
| Body | `12px` | body / supporting text |
| Small | `11px` | body / supporting text |
| XS | `10.5px` | body / supporting text |
| Caption | `10px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: transparent;
  color: ;
  border-radius: 18.5px;
  padding: 18px 18px;
  font-size: 12px;
  font-weight: 400;
  border: 0.666667px solid lab(16.3845 -0.109598 -6.65552);
  cursor: pointer;
}
```

### Card

```css
.card {
  background: ;
  border-radius: 10.5px;
  padding: 6px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
```

## 5. Layout Principles

- **Base spacing unit:** `3px` — use multiples (6px, 9px, 12px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `3px` | element |
| spacing-2 | `15px` | element |
| spacing-3 | `6px` | element |
| spacing-4 | `18px` | element |
| spacing-5 | `12px` | element |
| spacing-6 | `60px` | section |
| spacing-7 | `36px` | card |
| spacing-8 | `9px` | element |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-button | `8.5px` | button |
| radius-button | `10.5px` | button |
| radius-button | `14.5px` | button |
| radius-card | `18.5px` | card |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |
| Deep | `lab(60.9188 66.2156 63.1143 / 0.55) 0px 20px 60px -20px` | Hero sections, deep layers |
| Low | `lab(16.3845 -0.109598 -6.65552) 0px 1px 0px 0px, lab(0 0 0 / 0.4) 0px 12px 32px ...` | Cards, subtle elevation |
| Deep | `lab(0 0 0 / 0.5) 0px 10px 40px -12px` | Hero sections, deep layers |


## 7. Do's and Don'ts

### Do
- Use `#ffffff` as the primary background color
- Use `Space Grotesk` for all headings and `Inter` for body text
- Use `#ff550d` as the single dominant accent/CTA color
- Maintain `3px` as the base spacing unit — all gaps should be multiples
- Use rounded corners (`8.5px`+) consistently for all interactive elements
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 700 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Space Grotesk/Inter with generic alternatives
- Don't use irregular spacing — stick to 3px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use pure black (#000000) for text — use `#000000` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 3px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #ffffff
Text:        #000000
Accent:      #ff550d
Border:      #e5e5e5
```

### Example Prompts

1. "Build a hero section with a `#ffffff` background, `Space Grotesk` heading in `#000000`, and a `#ff550d` CTA button."
2. "Create a pricing card using background ``, border `#e5e5e5`, `Inter` for text, and 9px padding."
3. "Design a navigation bar — `#ffffff` background, `#000000` links, `#ff550d` for active state."
4. "Build a feature grid with 3 columns, 9px gap, each card using the card component style."
5. "Create a footer with `#000000` background, `#ffffff` text, and 6px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 3 custom properties extracted from `:root` / `html` stylesheets.

### Spacing Variables

| Variable | Value |
|---|---|
| `--radius` | `.875rem` |

### Typography Variables

| Variable | Value |
|---|---|
| `--font-display` | `"Space Grotesk", "Inter", ui-sans-serif, system-ui, sans-serif` |
| `--font-body` | `"Inter", ui-sans-serif, system-ui, sans-serif` |
