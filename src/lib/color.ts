export type Hsl = {
  h: number;
  s: number;
  l: number;
};

export function hexToHsl(hex: string): Hsl {
  const clean = normalizeHex(hex);
  const r = parseInt(clean.slice(1, 3), 16) / 255;
  const g = parseInt(clean.slice(3, 5), 16) / 255;
  const b = parseInt(clean.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    if (max === g) h = (b - r) / d + 2;
    if (max === b) h = (r - g) / d + 4;
    h *= 60;
  }

  return { h, s: s * 100, l: l * 100 };
}

export function hslToHex({ h, s, l }: Hsl): string {
  const normalizedHue = ((h % 360) + 360) % 360;
  const sat = clamp(s, 0, 100) / 100;
  const light = clamp(l, 0, 100) / 100;
  const c = (1 - Math.abs(2 * light - 1)) * sat;
  const x = c * (1 - Math.abs(((normalizedHue / 60) % 2) - 1));
  const m = light - c / 2;
  let [r, g, b] = [0, 0, 0];

  if (normalizedHue < 60) [r, g, b] = [c, x, 0];
  else if (normalizedHue < 120) [r, g, b] = [x, c, 0];
  else if (normalizedHue < 180) [r, g, b] = [0, c, x];
  else if (normalizedHue < 240) [r, g, b] = [0, x, c];
  else if (normalizedHue < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return `#${[r, g, b]
    .map((value) =>
      Math.round((value + m) * 255)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")
    .toUpperCase()}`;
}

export function generatePalette(seed: string, size: number, mode: string) {
  const base = hexToHsl(seed);
  const count = clamp(Math.round(size), 3, 8);
  const mood =
    mode === "editorial"
      ? [-26, -10, 0, 16, 34, 48, 64, 92]
      : mode === "warm"
        ? [-14, 0, 12, 26, 42, 58, 74, 88]
        : [-42, -18, 0, 22, 48, 74, 110, 148];

  return Array.from({ length: count }, (_, index) => {
    const offset = mood[index] ?? index * 18;
    const lightShift = index % 2 === 0 ? -8 + index * 2 : 10 - index;
    return hslToHex({
      h: base.h + offset,
      s: clamp(base.s + (mode === "muted" ? -18 : -4 + index * 2), 28, 88),
      l: clamp(base.l + lightShift, 18, 88),
    });
  });
}

export function normalizeHex(hex: string) {
  if (/^#[0-9a-fA-F]{6}$/.test(hex)) return hex;
  if (/^#[0-9a-fA-F]{3}$/.test(hex)) {
    return `#${hex
      .slice(1)
      .split("")
      .map((char) => `${char}${char}`)
      .join("")}`;
  }
  return "#E97826";
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
