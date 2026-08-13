import Link from "next/link";
import type { CSSProperties } from "react";
import type { Tool } from "@/data/tools";

type ToolCardProps = {
  tool: Tool;
  featured?: boolean;
};

export function ToolCard({ tool, featured = false }: ToolCardProps) {
  const style = {
    "--tool-accent": tool.theme.accent,
    "--tool-deep": tool.theme.deep,
    "--tool-soft": tool.theme.soft,
  } as CSSProperties;

  const className = `tool-card ${tool.status} ${featured ? "featured" : ""}`;
  const content = (
    <>
      <span className="status-pill">
        {tool.status === "ready" ? "Ready" : "Planned"}
      </span>
      <h3>{tool.title}</h3>
      <p>{tool.description}</p>
      <span className="bucket-label">{tool.bucket}</span>
      <div className="mini-receipt" aria-hidden="true">
        {tool.receipt}
      </div>
    </>
  );

  if (tool.status === "ready") {
    return (
      <Link className={className} href={tool.route} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <article className={className} style={style} aria-disabled="true">
      {content}
    </article>
  );
}
