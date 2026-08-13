import { normalizeHex } from "./color";

export function contrastRatio(foreground: string, background: string) {
  const fg = relativeLuminance(foreground);
  const bg = relativeLuminance(background);
  const lighter = Math.max(fg, bg);
  const darker = Math.min(fg, bg);
  return (lighter + 0.05) / (darker + 0.05);
}

export function relativeLuminance(hex: string) {
  const clean = normalizeHex(hex);
  const channels = [clean.slice(1, 3), clean.slice(3, 5), clean.slice(5, 7)]
    .map((channel) => parseInt(channel, 16) / 255)
    .map((value) =>
      value <= 0.03928
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4),
    );

  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

export function contrastResults(ratio: number) {
  return {
    aaNormal: ratio >= 4.5,
    aaLarge: ratio >= 3,
    aaaNormal: ratio >= 7,
    aaaLarge: ratio >= 4.5,
  };
}
