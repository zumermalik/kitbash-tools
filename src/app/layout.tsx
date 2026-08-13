import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kitbash - Boxy Creative Utility Suite",
    template: "%s | Kitbash",
  },
  description:
    "Kitbash is a browser-first design-tool suite with typewriter invoices, color tools, QR codes, and precise orange-tinted utility pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand-mark" href="/">
            Kitbash
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="/tools">Tools</Link>
            <Link href="/tools/typewriter-invoice">Invoice</Link>
            <Link href="/tools/color-palette-generator">Palette</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <span>Kitbash</span>
          <span>Browser-first tools with paper-minded outputs.</span>
        </footer>
      </body>
    </html>
  );
}
