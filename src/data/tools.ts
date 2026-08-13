export type ToolBucket =
  | "Signature"
  | "Image & Asset Tools"
  | "Color & Design-System Tools"
  | "Generators & Calculators";

export type ToolStatus = "ready" | "coming-soon";

export type Tool = {
  slug: string;
  title: string;
  bucket: ToolBucket;
  description: string;
  status: ToolStatus;
  route: string;
  theme: {
    accent: string;
    deep: string;
    soft: string;
  };
  seoTitle: string;
  seoDescription: string;
  relatedTools: string[];
  receipt: string;
};

export const bucketOrder: ToolBucket[] = [
  "Signature",
  "Image & Asset Tools",
  "Color & Design-System Tools",
  "Generators & Calculators",
];

export const tools: Tool[] = [
  {
    slug: "typewriter-invoice",
    title: "Typewriter Invoice",
    bucket: "Signature",
    description:
      "Write a polished invoice onto a notebook-grid page with typed monospace detail and a print-ready finish.",
    status: "ready",
    route: "/tools/typewriter-invoice",
    theme: { accent: "#E97826", deep: "#7C351F", soft: "#FFE1B8" },
    seoTitle: "Typewriter Invoice Generator",
    seoDescription:
      "Create a printable aesthetic invoice with line items, totals, typewriter animation, and a Japanese notebook-grid paper style.",
    relatedTools: ["color-palette-generator", "qr-code-generator"],
    receipt: "INV-0007\nsubtotal  1,420.00\ntotal     1,562.00\nstatus    typed",
  },
  {
    slug: "image-compressor",
    title: "Image Compressor",
    bucket: "Image & Asset Tools",
    description:
      "Compress image files in the browser with clear before-and-after file size feedback.",
    status: "coming-soon",
    route: "/tools/image-compressor",
    theme: { accent: "#F2A23A", deep: "#8F4A1B", soft: "#FFE8BD" },
    seoTitle: "Image Compressor",
    seoDescription:
      "Compress PNG, JPG, and WebP images locally in the browser with a warm, precise Kitbash interface.",
    relatedTools: ["qr-code-generator", "color-palette-generator"],
    receipt: "drop image\nquality 82%\nsaved  41%\nlocal only",
  },
  {
    slug: "favicon-generator",
    title: "Favicon Generator",
    bucket: "Image & Asset Tools",
    description:
      "Upload one mark and prepare the favicon, apple-touch, manifest, and HTML tag set.",
    status: "coming-soon",
    route: "/tools/favicon-generator",
    theme: { accent: "#D96F27", deep: "#7C351F", soft: "#FFE0C7" },
    seoTitle: "Favicon Generator",
    seoDescription:
      "Generate a complete favicon package for websites from one uploaded image.",
    relatedTools: ["image-compressor", "qr-code-generator"],
    receipt: "favicon.ico\napple-touch.png\nmanifest.json\nready soon",
  },
  {
    slug: "screenshot-beautifier",
    title: "Screenshot Beautifier",
    bucket: "Image & Asset Tools",
    description:
      "Frame screenshots in browser or device mockups with padding, paper, and orange-tinted backdrops.",
    status: "coming-soon",
    route: "/tools/screenshot-beautifier",
    theme: { accent: "#C7652D", deep: "#6E321F", soft: "#FFE6CF" },
    seoTitle: "Screenshot Beautifier",
    seoDescription:
      "Turn plain screenshots into framed presentation images with Kitbash's boxy visual system.",
    relatedTools: ["image-compressor", "color-palette-generator"],
    receipt: "frame browser\npadding 48\nexport png\nready soon",
  },
  {
    slug: "color-palette-generator",
    title: "Color Palette Generator",
    bucket: "Color & Design-System Tools",
    description:
      "Generate tasteful color sets from a seed color, mood, and palette size, then copy CSS variables.",
    status: "ready",
    route: "/tools/color-palette-generator",
    theme: { accent: "#EF7F3C", deep: "#8A3A23", soft: "#FFD8BA" },
    seoTitle: "Color Palette Generator",
    seoDescription:
      "Generate brand and UI color palettes from a seed color with copyable hex values and CSS variables.",
    relatedTools: ["wcag-contrast-checker", "typewriter-invoice"],
    receipt: "--color-1 #E97826\n--color-2 #F2A23A\n--color-3 #7C351F\ncopy css",
  },
  {
    slug: "wcag-contrast-checker",
    title: "WCAG Contrast Checker",
    bucket: "Color & Design-System Tools",
    description:
      "Check foreground and background pairs against WCAG AA and AAA thresholds with a live preview.",
    status: "ready",
    route: "/tools/wcag-contrast-checker",
    theme: { accent: "#D85F22", deep: "#74331E", soft: "#FFD4BE" },
    seoTitle: "WCAG Contrast Checker",
    seoDescription:
      "Check color contrast ratios for WCAG AA and AAA accessibility with live text previews.",
    relatedTools: ["color-palette-generator", "typewriter-invoice"],
    receipt: "ratio  7.42\nAA     pass\nAAA    pass\npair copied",
  },
  {
    slug: "gradient-generator",
    title: "Gradient Generator",
    bucket: "Color & Design-System Tools",
    description:
      "Tune gradient stops and angles, then copy CSS or SVG output.",
    status: "coming-soon",
    route: "/tools/gradient-generator",
    theme: { accent: "#E98E43", deep: "#84421E", soft: "#FFE3C3" },
    seoTitle: "Gradient Generator",
    seoDescription:
      "Create CSS and SVG gradients with visual controls and copyable output.",
    relatedTools: ["color-palette-generator", "wcag-contrast-checker"],
    receipt: "linear 38deg\nstop a #E97826\nstop b #FFF9EF\nready soon",
  },
  {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    bucket: "Generators & Calculators",
    description:
      "Create QR codes from text or URLs with color controls and a downloadable canvas output.",
    status: "ready",
    route: "/tools/qr-code-generator",
    theme: { accent: "#C95C23", deep: "#68301E", soft: "#FFD7B5" },
    seoTitle: "QR Code Generator",
    seoDescription:
      "Generate browser-side QR codes from URLs or text with custom colors and PNG download.",
    relatedTools: ["typewriter-invoice", "color-palette-generator"],
    receipt: "data url/text\nmargin 2\nsize 256\nexport png",
  },
  {
    slug: "json-formatter",
    title: "JSON Formatter",
    bucket: "Generators & Calculators",
    description:
      "Format, validate, minify, copy, and download JSON in a code-slip output panel.",
    status: "coming-soon",
    route: "/tools/json-formatter",
    theme: { accent: "#B85C1E", deep: "#5D2B1C", soft: "#FFE2C0" },
    seoTitle: "JSON Formatter",
    seoDescription:
      "Format and validate JSON with copyable output in the Kitbash utility suite.",
    relatedTools: ["qr-code-generator", "wcag-contrast-checker"],
    receipt: "{\n  \"valid\": true,\n  \"lines\": 24\n}\nready soon",
  },
];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getReadyTools() {
  return tools.filter((tool) => tool.status === "ready");
}

export function getToolsByBucket(bucket: ToolBucket) {
  return tools.filter((tool) => tool.bucket === bucket);
}

export function getRelatedTools(slugs: string[]) {
  return slugs.map(getTool).filter((tool): tool is Tool => Boolean(tool));
}
