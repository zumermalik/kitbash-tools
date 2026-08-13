# Kitbash Agent Guide

## Project Intent

Kitbash is a one-page-first creative utility suite where every tool is both useful on its own and a growth/SEO wedge for the larger brand. The suite should feel like one coherent product: boxy, editorial, precise, classic, and warm, with orange-based color families tying each tool together.

The flagship tool is the typewriter invoice generator. It should set the tone for the whole suite: tactile, printable, monospace output, paper-like surfaces, and a strong visual point of view.

## Product Principles

- Build useful tools before adding AI.
- Keep each tool fast, direct, and understandable from the first screen.
- Treat every tool page as both a working utility and a search landing page.
- Use one shared visual system across the suite, while giving each tool its own orange-tinted theme.
- Prefer local, browser-side processing when possible for privacy and speed.
- Make exports feel polished: PDFs, images, CSS snippets, JSON, manifests, and copyable code should look intentional.
- Keep the interface boxy: hairline borders, square or very small-radius corners, clean grids, and restrained motion.

## Design Guardrails

- Buttons, panels, inputs, and result boxes should use square or nearly-square corners.
- Use serif display typography with long, classic serifs where licenses allow.
- Use monospace typography for generated outputs, receipts, code, invoice lines, metadata, and technical values.
- Orange is the brand anchor, but avoid making the whole app one flat orange wash. Use cream, ink, off-white, rust, amber, clay, charcoal, and muted accent tints.
- Every tool should include a bordered output area, often styled like a receipt, notebook page, code slip, or print artifact.
- Avoid generic SaaS gradients and overly rounded card-heavy layouts.
- Avoid marketing-first pages. The hero should introduce Kitbash and immediately lead into the tool grid.

## Engineering Guardrails

- Start with a frontend-only implementation unless a tool truly needs a backend.
- Prefer browser APIs and well-maintained client libraries for image, color, QR, PDF, and file export workflows.
- Keep tool logic modular so each tool page can rank independently and be developed independently.
- Do not upload user files unless a future server feature explicitly requires it and the UX clearly says so.
- Design for static deployment first, then add server/API capabilities only where needed.
- Keep accessibility non-negotiable: keyboard support, contrast checks, labels, focus states, and readable generated outputs.

## Documentation Map

- `README.md`: high-level project description.
- `SCOPE.md`: what Kitbash includes, excludes, and prioritizes.
- `DESIGN.md`: visual system, typography, color, layout, and interaction direction.
- `ARCHITECTURE.md`: technical architecture and suggested app structure.
- `TOOL_CATALOG.md`: tool inventory, MVP order, and per-tool behavior.
- `SEO_CONTENT.md`: programmatic SEO and content model.
- `ROADMAP.md`: build phases and milestones.
- `DECISIONS.md`: durable product and technical decisions.

## MVP Priority

1. Typewriter invoice generator.
2. Tool suite shell and shared visual system.
3. Color palette generator.
4. WCAG contrast checker.
5. Image compressor.
6. QR code generator.
7. Favicon generator.
8. Screenshot beautifier.

## Working Style

When changing this project, preserve the strong visual identity. New tools should not feel like detached utilities; they should feel like new instruments inside the same studio.
