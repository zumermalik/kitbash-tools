import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { getTool } from "@/data/tools";
import { ColorPaletteTool } from "./color-palette-tool";

const tool = getTool("color-palette-generator");

export const metadata: Metadata = {
  title: tool?.seoTitle,
  description: tool?.seoDescription,
};

export default function ColorPalettePage() {
  if (!tool) return null;

  return (
    <ToolShell
      tool={tool}
      helpTitle="Fast palettes for brand and interface work"
      helpItems={[
        "Start with a seed color, then choose a mood to shift hue, saturation, and lightness into a usable palette.",
        "The CSS variable output is designed for quick project setup, prototypes, and visual identity exploration.",
        "Generated palettes are deterministic and local, so the same inputs produce the same palette without uploading anything.",
      ]}
    >
      <ColorPaletteTool />
    </ToolShell>
  );
}
