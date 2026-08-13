# Kitbash Tool Catalog

## Buckets

Kitbash tools naturally sort into four buckets:

- Image and asset tools.
- Color and design-system tools.
- Generators and calculators.
- Signature typewriter invoice tool.

## MVP Tools

### Typewriter Invoice Generator

Purpose: create a beautiful printable invoice with a Japanese notebook-grid inspired paper style and typewriter animation.

Inputs:

- sender details
- client details
- invoice number
- issue date
- due date
- line items
- quantity, rate, tax, discount
- notes and payment terms

Outputs:

- animated preview
- static print-ready invoice
- PDF download
- PNG download

Design notes:

- flagship treatment
- paper texture
- faint grid
- monospace typed content
- serif title area
- subtle shadow

### Color Palette Generator

Purpose: generate tasteful color palettes for brand, UI, and design work.

Inputs:

- seed color
- mood preset
- palette size
- harmony mode

Outputs:

- color swatches
- hex, rgb, hsl values
- CSS variables
- copyable palette block

### WCAG Contrast Checker

Purpose: check foreground and background color contrast.

Inputs:

- foreground color
- background color
- font size mode

Outputs:

- contrast ratio
- AA/AAA pass-fail states
- preview text
- suggested accessible alternatives

### Image Compressor

Purpose: reduce image file size in the browser.

Inputs:

- uploaded image
- quality setting
- max width/height
- output format

Outputs:

- compressed image
- before/after size
- percentage saved
- download file

### QR Code Generator

Purpose: generate downloadable QR codes.

Inputs:

- URL or text
- foreground color
- background color
- size
- margin

Outputs:

- QR preview
- PNG/SVG download
- copyable data

## Phase Two Tools

### Favicon Generator

Upload one image and generate a complete favicon package:

- `favicon.ico`
- PNG sizes
- Apple touch icon
- web manifest
- HTML tags
- ZIP download

### Screenshot Beautifier

Drop a screenshot and frame it:

- browser frame
- device mockup
- padding controls
- orange-tinted background themes
- PNG export

### Image Format Converter

Convert between common web formats:

- PNG
- JPG
- WebP
- AVIF
- HEIC where support allows

### Image Palette Extractor

Upload an image and extract:

- dominant colors
- ordered palette
- hex values
- CSS variables

### Gradient Generator

Build CSS and SVG gradients with:

- angle controls
- stop controls
- palette presets
- copyable CSS

### Font Pairing Tool

Preview free font combinations:

- serif and sans pairings
- heading/body preview
- brand presets
- Google Fonts links

## Phase Three Tools

### Background Remover

Remove image backgrounds. This may need heavier browser-side ML, a backend service, or a third-party API. Defer until the core suite is stable.

### Raster To SVG Vector Converter

Trace raster graphics into SVG. Likely requires a specialized library or WASM tool.

### Color Blindness Simulator

Preview palettes under:

- protanopia
- deuteranopia
- tritanopia
- achromatopsia

### CSS Box Shadow Generator

Visual sliders for:

- x offset
- y offset
- blur
- spread
- color
- inset

### CSS Clip Path Generator

Visual polygon editor with CSS output.

### Price/Quote Calculator

Build service quote calculators and optionally export/share an embeddable widget later.

### UUID And Password Generator

Fast utility page with:

- UUID v4
- secure passwords
- passphrases
- copy actions

### Timestamp Converter

Convert between:

- human date/time
- Unix seconds
- Unix milliseconds
- time zones

### JSON Formatter And Validator

Paste JSON and receive:

- formatted JSON
- validation errors
- minified JSON
- copy/download controls

### Meta Tag And OG Previewer

Preview how metadata may render for:

- Twitter/X
- LinkedIn
- Slack
- generic link previews

Inputs can be pasted metadata first. URL fetching can be added later if server support exists.
