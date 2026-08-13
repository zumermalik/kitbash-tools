"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { copyText, downloadDataUrl } from "@/lib/export";

export function QrCodeTool() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [value, setValue] = useState("https://kitbash.tools");
  const [foreground, setForeground] = useState("#1F1914");
  const [background, setBackground] = useState("#FFF9EF");
  const [size, setSize] = useState(280);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!canvasRef.current) return;

    QRCode.toCanvas(canvasRef.current, value || " ", {
      width: size,
      margin: 2,
      color: {
        dark: foreground,
        light: background,
      },
    }).catch((reason: unknown) => {
      setError(reason instanceof Error ? reason.message : "Could not render QR code.");
    });
  }, [background, foreground, size, value]);

  function downloadPng() {
    if (!canvasRef.current) return;
    downloadDataUrl(canvasRef.current.toDataURL("image/png"), "kitbash-qr.png");
  }

  return (
    <section className="tool-workspace">
      <div className="panel">
        <div className="field-grid">
          <label className="field">
            <span>Text or URL</span>
            <textarea value={value} onChange={(event) => setValue(event.target.value)} />
          </label>
          <div className="two-col field-grid">
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
          </div>
          <label className="field">
            <span>Size</span>
            <input
              type="range"
              min="180"
              max="520"
              step="20"
              value={size}
              onChange={(event) => setSize(Number(event.target.value))}
            />
          </label>
          <div className="action-row">
            <button className="button" type="button" onClick={downloadPng}>
              Download PNG
            </button>
            <button className="ghost-button" type="button" onClick={() => copyText(value)}>
              Copy source
            </button>
          </div>
        </div>
      </div>
      <div className="output-block">
        <div className="qr-box">
          <canvas ref={canvasRef} aria-label="Generated QR code" />
        </div>
        {error ? <p role="alert">{error}</p> : null}
        <pre className="code-slip">source: {value || "empty"}{"\n"}size: {size}px</pre>
      </div>
    </section>
  );
}
