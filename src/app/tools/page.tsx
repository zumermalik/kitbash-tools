import type { Metadata } from "next";
import { ToolCard } from "@/components/ToolCard";
import { bucketOrder, getToolsByBucket } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Browse the Kitbash suite: typewriter invoices, color palettes, WCAG contrast checks, QR codes, and planned image utilities.",
};

export default function ToolsPage() {
  return (
    <div className="page-shell">
      <section className="tool-hero">
        <div>
          <p className="eyebrow">Tool directory</p>
          <h1>Tools</h1>
          <p>
            Every Kitbash tool is a small working surface with a copyable or
            exportable result. Ready tools open immediately; planned tools show
            where the suite grows next.
          </p>
        </div>
        <div className="mini-receipt">
          ready tools: 4{"\n"}planned tools: many{"\n"}shape: boxy{"\n"}tone:
          orange paper
        </div>
      </section>

      {bucketOrder.map((bucket) => (
        <section key={bucket}>
          <div className="section-header">
            <h2>{bucket}</h2>
            <p>
              Each page keeps the working utility first, then adds concise help
              and internal links below the tool.
            </p>
          </div>
          <div className="bucket-grid">
            {getToolsByBucket(bucket).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
