import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { getTool } from "@/data/tools";
import { TypewriterInvoiceTool } from "./typewriter-invoice-tool";

const tool = getTool("typewriter-invoice");

export const metadata: Metadata = {
  title: tool?.seoTitle,
  description: tool?.seoDescription,
};

export default function TypewriterInvoicePage() {
  if (!tool) return null;

  return (
    <ToolShell
      tool={tool}
      helpTitle="A printable invoice with a visual signature"
      helpItems={[
        "Use the form to update sender, client, dates, line items, tax, and discount. Totals recalculate in the browser as you type.",
        "Generate replay runs the typewriter effect for a shareable moment. Print / Save PDF uses the browser print dialog with Kitbash print styles.",
        "The page is designed around local data entry. No upload, account, or server-side invoice storage is required for this first version.",
      ]}
    >
      <TypewriterInvoiceTool />
    </ToolShell>
  );
}
