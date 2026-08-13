import type { Metadata } from "next";
import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";
import { bucketOrder, getToolsByBucket, tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Kitbash - Boxy Creative Utility Suite",
  description:
    "A browser-first suite of precise, orange-tinted creative utilities: typewriter invoices, color palettes, contrast checks, QR codes, and more.",
};

export default function HomePage() {
  const flagship = tools.find((tool) => tool.slug === "typewriter-invoice");
  const firstTools = tools.filter((tool) => tool.slug !== "typewriter-invoice");

  return (
    <div className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <div>
            <p className="eyebrow">Browser-first creative utilities</p>
            <h1>Kitbash</h1>
            <p>
              A warm, boxy tool suite for invoices, palettes, contrast checks,
              QR codes, and asset chores. Each tool works on its own, but the
              shared paper-and-receipt system makes the suite feel like one
              precise studio drawer.
            </p>
            <div className="action-row">
              <Link className="button" href="/tools/typewriter-invoice">
                Open flagship invoice
              </Link>
              <Link className="ghost-button" href="/tools">
                Browse all tools
              </Link>
            </div>
          </div>
          <div className="mini-receipt">
            kitbash suite{"\n"}tools ready: invoice / palette / contrast / qr
            {"\n"}files stay local{"\n"}outputs stay pretty
          </div>
        </div>
        <div className="tool-grid">
          {flagship ? <ToolCard featured tool={flagship} /> : null}
          {firstTools.slice(0, 4).map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {bucketOrder.map((bucket) => (
        <section key={bucket}>
          <div className="section-header">
            <h2>{bucket}</h2>
            <p>
              Focused tools with shared controls, copyable outputs, and Kitbash
              paper-system styling.
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
