"use client";

import { useMemo, useState } from "react";
import { copyText } from "@/lib/export";
import { generatePalette } from "@/lib/color";

export function ColorPaletteTool() {
  const [seed, setSeed] = useState("#E97826");
  const [size, setSize] = useState(5);
  const [mode, setMode] = useState("editorial");
  const palette = useMemo(() => generatePalette(seed, size, mode), [seed, size, mode]);
  const css = palette
    .map((color, index) => `--kitbash-color-${index + 1}: ${color};`)
    .join("\n");

  return (
    <section className="tool-workspace">
      <div className="panel">
        <div className="field-grid">
          <label className="field">
            <span>Seed color</span>
            <input
              type="color"
              value={seed}
              onChange={(event) => setSeed(event.target.value)}
            />
          </label>
          <label className="field">
            <span>Palette size</span>
            <input
              type="range"
              min="3"
              max="8"
              value={size}
              onChange={(event) => setSize(Number(event.target.value))}
            />
          </label>
          <label className="field">
            <span>Mood</span>
            <select value={mode} onChange={(event) => setMode(event.target.value)}>
              <option value="editorial">Editorial</option>
              <option value="warm">Warm</option>
              <option value="muted">Muted</option>
            </select>
          </label>
          <button className="button" type="button" onClick={() => copyText(css)}>
            Copy CSS variables
          </button>
        </div>
      </div>
      <div className="output-block">
        <div className="swatch-grid">
          {palette.map((color) => (
            <div
              className="swatch"
              key={color}
              style={{ background: color, color: readableText(color) }}
            >
              {color}
            </div>
          ))}
        </div>
        <pre className="code-slip">{css}</pre>
      </div>
    </section>
  );
}

function readableText(hex: string) {
  const value = parseInt(hex.slice(1), 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return r * 0.299 + g * 0.587 + b * 0.114 > 150 ? "#1F1914" : "#FFFCF6";
}
