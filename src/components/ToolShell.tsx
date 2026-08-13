import Link from "next/link";
import type { CSSProperties } from "react";
import type { ReactNode } from "react";
import { getRelatedTools, type Tool } from "@/data/tools";

type ToolShellProps = {
  tool: Tool;
  children: ReactNode;
  helpTitle: string;
  helpItems: string[];
};

export function ToolShell({
  tool,
  children,
  helpTitle,
  helpItems,
}: ToolShellProps) {
  const related = getRelatedTools(tool.relatedTools);
  const style = {
    "--tool-accent": tool.theme.accent,
    "--tool-deep": tool.theme.deep,
    "--tool-soft": tool.theme.soft,
  } as CSSProperties;

  return (
    <div className="page-shell" style={style}>
      <section className="tool-hero">
        <div>
          <p className="eyebrow">{tool.bucket}</p>
          <h1>{tool.title}</h1>
          <p>{tool.description}</p>
        </div>
        <div className="mini-receipt">{tool.receipt}</div>
      </section>
      {children}
      <section className="related-strip">
        <p className="eyebrow">Related tools</p>
        <div className="related-list">
          {related.map((item) => (
            <Link className="ghost-button" href={item.route} key={item.slug}>
              {item.title}
            </Link>
          ))}
          <Link className="ghost-button" href="/tools">
            All tools
          </Link>
        </div>
      </section>
      <section className="seo-block">
        <p className="eyebrow">Notes</p>
        <h2>{helpTitle}</h2>
        <div className="seo-grid">
          {helpItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
