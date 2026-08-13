# Kitbash Design System

## Design Thesis

Kitbash should feel like a box of precise creative instruments: editorial, practical, printable, and warm. The interface should avoid generic SaaS softness. It should use boxy forms, hairline borders, long-serif headings, monospace output, and orange-based color themes.

## Visual Keywords

- Boxy
- Classic
- Editorial
- Paper-like
- Tactile
- Precise
- Warm
- Useful
- Slightly old-world, but not nostalgic clutter

## Color Direction

Orange is the shared brand anchor. Each tool can have its own theme, but all themes should be derived from orange families.

### Global Palette

- Ink: `#1F1914`
- Charcoal: `#332A23`
- Paper: `#FFF9EF`
- Warm White: `#FFFCF6`
- Border: `#D8C3A7`
- Burnt Orange: `#B85C1E`
- Kitbash Orange: `#E97826`
- Amber: `#F2A23A`
- Clay: `#9C5335`
- Rust: `#7C351F`

### Tool Theme Examples

- Invoice: paper, ink, burnt orange, faint blue-gray grid
- Image tools: amber, cream, charcoal, warm gray
- Color tools: orange, coral, apricot, ink
- Generators: rust, amber, ivory, charcoal
- Developer utilities: clay, paper, muted ochre, ink

Use tints and shades, not neon oranges. Avoid making every screen the same orange-on-cream composition.

## Typography

Use free and commercially usable fonts.

### Recommended Display Serif Options

- Instrument Serif: elegant, long-serif, free via Google Fonts.
- Cormorant Garamond: more literary and refined, free via Google Fonts.
- Fraunces: expressive and variable, free via Google Fonts.
- Libre Baskerville: classic and sturdy, free via Google Fonts.

Recommended default: Instrument Serif for display headings.

### Recommended UI Text Options

- Inter: reliable for controls and small UI.
- Source Sans 3: warmer, clear, free via Google Fonts.
- IBM Plex Sans: technical but human.

Recommended default: Inter or Source Sans 3.

### Recommended Monospace Options

- IBM Plex Mono.
- JetBrains Mono.
- Space Mono.
- Geist Mono.

Recommended default: IBM Plex Mono for outputs and generated artifacts.

## Layout System

- Use full-width sections with constrained inner content.
- Avoid nesting cards inside cards.
- Use grids, columns, and bordered panels.
- Keep page sections unframed unless the section itself is a tool surface.
- Prefer square corners or a maximum radius of `4px`.
- Use hairline borders: `1px` solid warm neutral tones.
- Use generous whitespace, but keep tools efficient and dense enough for repeated use.

## Homepage Structure

1. Hero section with the Kitbash name as the main first-viewport signal.
2. Short value proposition.
3. Immediate tool grid with flagship invoice tool emphasized.
4. Tool buckets.
5. Small footer with product identity and links.

The homepage should not feel like a marketing splash page. It should feel like opening the drawer of the tool suite.

## Tool Page Pattern

Every tool page should include:

- Tool title and short description.
- Input panel.
- Output panel.
- Copy/download/export controls.
- Small usage notes where needed.
- Related tools.
- SEO content below the working tool, not above it.

## Output Panel Pattern

Generated output should be visually special:

- Monospace text.
- Bordered receipt, notebook sheet, label, or code-slip styling.
- Clear copy/download buttons.
- Print/export-friendly dimensions when applicable.
- Empty, loading, error, and success states.

## Interaction

- Controls should be direct and visible.
- Use icon buttons where icons are obvious.
- Use text buttons for clear primary actions like Generate, Download PDF, Copy CSS, Compress, and Export.
- Use segmented controls for modes.
- Use sliders for numeric visual tuning.
- Use toggles for binary options.
- Use swatches for color choices.

## Motion

Motion should be restrained and purposeful.

- Typewriter animation belongs to the invoice tool and can become a signature motif.
- Tool outputs can animate in subtly.
- Avoid constant decorative motion.
- Respect reduced-motion preferences.

## Accessibility

- All controls need labels.
- Focus states must be visible.
- Text contrast should meet WCAG AA where possible.
- Generated color combinations should warn users when contrast fails.
- Do not rely on color alone to communicate state.
