import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { getTool } from "@/data/tools";
import { QrCodeTool } from "./qr-code-tool";

const tool = getTool("qr-code-generator");

export const metadata: Metadata = {
  title: tool?.seoTitle,
  description: tool?.seoDescription,
};

export default function QrCodePage() {
  if (!tool) return null;

  return (
    <ToolShell
      tool={tool}
      helpTitle="Browser-side QR codes with simple export"
      helpItems={[
        "Enter a URL or any text value and Kitbash renders the QR code locally in a canvas.",
        "Color controls make quick brand-safe QR codes possible while keeping enough contrast for reliable scanning.",
        "The PNG download uses the current canvas state, so the exported file matches the preview.",
      ]}
    >
      <QrCodeTool />
    </ToolShell>
  );
}
