import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { getTool } from "@/data/tools";
import { ContrastCheckerTool } from "./contrast-checker-tool";

const tool = getTool("wcag-contrast-checker");

export const metadata: Metadata = {
  title: tool?.seoTitle,
  description: tool?.seoDescription,
};

export default function ContrastCheckerPage() {
  if (!tool) return null;

  return (
    <ToolShell
      tool={tool}
      helpTitle="Check accessible color pairs before they ship"
      helpItems={[
        "The checker uses the WCAG relative luminance formula and reports AA and AAA thresholds for normal and large text.",
        "Use the preview block to judge the color relationship visually while the ratio gives the formal accessibility result.",
        "Palette decisions are strongest when contrast is checked early, especially for buttons, captions, forms, and generated exports.",
      ]}
    >
      <ContrastCheckerTool />
    </ToolShell>
  );
}
