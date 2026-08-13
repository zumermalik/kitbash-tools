# Kitbash Architecture

## Technical Direction

Kitbash should start as a frontend-first web app. Most tools can run locally in the browser, which keeps the product fast, private, inexpensive, and easy to deploy.

Recommended stack:

- Framework: Next.js or Astro with React islands.
- Styling: CSS modules, vanilla CSS, or Tailwind with strict design tokens.
- Rendering: static-first pages for SEO.
- Tool logic: client-side modules.
- Exports: browser-side file generation where practical.
- Deployment: static or edge-friendly hosting.

If choosing between Next.js and Astro, Astro is attractive for static SEO-heavy tool pages, while Next.js is attractive if the suite is expected to grow into app-like workflows. Either can work.

## Architecture Goals

- Each tool page should be independently indexable.
- Each tool should have isolated logic and components.
- Shared UI primitives should enforce the Kitbash visual system.
- Browser-only processing should be the default.
- Server routes should be added only for tasks that cannot run well in the browser.
- The flagship invoice export must produce reliable PDF output.

## Suggested Folder Structure

```txt
src/
  app/
    page.tsx
    tools/
      page.tsx
      invoice/
        page.tsx
      color-palette/
        page.tsx
      contrast-checker/
        page.tsx
      image-compressor/
        page.tsx
      qr-code/
        page.tsx
  components/
    layout/
    ui/
    tool-shell/
    output-panels/
  data/
    tools.ts
    seo.ts
  lib/
    color/
    image/
    invoice/
    export/
    validators/
  styles/
    globals.css
    tokens.css
```

## Core Modules

### Tool Registry

A central tool registry should define:

- slug
- title
- bucket
- short description
- theme
- route
- status
- related tools
- SEO title
- SEO description

This registry powers the homepage grid, tool directory, related-tool links, and metadata.

### Tool Shell

The shared tool shell should provide:

- consistent page layout
- input/output panel grid
- themed CSS variables
- related tools
- SEO content slot
- copy/download action styling

### Design Tokens

Use CSS variables for:

- colors
- borders
- shadows
- typography
- spacing
- radii
- tool themes

Tool pages can override theme variables without breaking the shared visual system.

### Export Layer

Export helpers should cover:

- text download
- image download
- PDF generation
- zip generation
- clipboard copy

Keep export logic separate from UI components.

## Tool Implementation Notes

### Typewriter Invoice

Potential libraries:

- `react-hook-form` for form state.
- `zod` for invoice schema validation.
- `jspdf`, `pdf-lib`, or browser print-to-PDF flow for PDF output.
- `html-to-image` for PNG export.

The invoice renderer should be a dedicated component that can render both animated and static states.

### Image Tools

Prefer browser APIs:

- Canvas API for compression and conversion.
- File API for uploads.
- Web Workers for heavy processing.
- WASM libraries only where needed.

Background removal may need a model or third-party library later, so it should be planned as a post-MVP tool unless a lightweight browser-side implementation is chosen.

### Color Tools

Color operations should live in a shared color library:

- hex/rgb/hsl conversions
- contrast ratio
- palette generation
- color blindness simulation
- gradient generation

### Generator Tools

Generator tools should be lightweight and deterministic:

- QR code generation
- UUID generation
- password generation
- timestamp conversion
- JSON formatting

## Data & Privacy

- User uploads should stay local by default.
- No tracking of uploaded file contents.
- No account required for MVP.
- Analytics, if added, should track page/tool usage events without collecting user content.

## Performance

- Keep initial homepage payload small.
- Lazy-load tool-specific libraries.
- Use dynamic imports for heavy image/PDF libraries.
- Run expensive image operations in workers where needed.
- Provide progress states for large files.

## SEO Architecture

- Static routes for every public tool.
- Metadata generated from the tool registry.
- Structured data for software/tool pages where appropriate.
- SEO content below the interactive tool.
- Clean URLs: `/tools/typewriter-invoice`, `/tools/image-compressor`, etc.

## Testing Strategy

- Unit tests for calculation and conversion logic.
- Component tests for shared tool shell behavior.
- Accessibility checks for core components.
- Visual regression checks for the invoice output.
- Export tests for generated PDF/PNG where practical.
