"use client";

import { useMemo, useState } from "react";
import { contrastRatio, contrastResults } from "@/lib/contrast";
import { copyText } from "@/lib/export";

export function ContrastCheckerTool() {
  const [foreground, setForeground] = useState("#1F1914");
  const [background, setBackground] = useState("#FFF9EF");
  const ratio = useMemo(
    () => contrastRatio(foreground, background),
    [foreground, background],
  );
  const results = contrastResults(ratio);
  const output = `foreground: ${foreground}\nbackground: ${background}\nratio: ${ratio.toFixed(
    2,
  )}:1`;

  return (
    <section className="tool-workspace">
      <div className="panel">
        <div className="field-grid">
          <label className="field">
            <span>Foreground</span>
            <input
              type="color"
              value={foreground}
              onChange={(event) => setForeground(event.target.value)}
            />
          </label>
          <label className="field">
            <span>Background</span>
            <input
              type="color"
              value={background}
              onChange={(event) => setBackground(event.target.value)}
            />
          </label>
          <button className="button" type="button" onClick={() => copyText(output)}>
            Copy color pair
          </button>
        </div>
      </div>
      <div className="output-block">
        <div className="ratio">{ratio.toFixed(2)}:1</div>
        <div
          className="contrast-preview"
          style={{ color: foreground, backgroundColor: background }}
        >
          <h3>Readable work is generous work.</h3>
          <p style={{ color: "inherit" }}>
            Preview body text, captions, labels, and buttons before the palette
            settles into production.
          </p>
        </div>
        <div className="pass-grid">
          <PassCell label="AA normal" pass={results.aaNormal} />
          <PassCell label="AA large" pass={results.aaLarge} />
          <PassCell label="AAA normal" pass={results.aaaNormal} />
          <PassCell label="AAA large" pass={results.aaaLarge} />
        </div>
        <pre className="code-slip">{output}</pre>
      </div>
    </section>
  );
}

function PassCell({ label, pass }: { label: string; pass: boolean }) {
  return (
    <div className="pass-cell">
      <strong>{label}</strong>
      <br />
      {pass ? "Pass" : "Fail"}
    </div>
  );
}
