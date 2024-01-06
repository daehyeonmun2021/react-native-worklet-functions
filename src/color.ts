/**
 * Converts the given RGB values to a CSS RGB string.
 * @param r - The red value (0-255).
 * @param g - The green value (0-255).
 * @param b - The blue value (0-255).
 * @returns The CSS RGB string representation of the RGB values.
 */
export const rgb = (r: number, g: number, b: number): string => {
  'worklet';

  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Returns the RGBA color value as a string.
 * @param r - The red channel value (0-255).
 * @param g - The green channel value (0-255).
 * @param b - The blue channel value (0-255).
 * @param a - The alpha channel value (0-1).
 * @returns The RGBA color value as a string.
 */
export const rgba = (r: number, g: number, b: number, a: number): string => {
  'worklet';

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

/**
 * Converts HSL (Hue, Saturation, Lightness) color values to RGB (Red, Green, Blue) color values.
 * @param h - The hue value (0-360).
 * @param s - The saturation value (0-100).
 * @param l - The lightness value (0-100).
 * @returns An array containing the RGB color values (0-255).
 */
export const hslToRgb = (h: number, s: number, l: number): string => {
  'worklet';

  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));

  const r = f(0);
  const g = f(8);
  const b = f(4);

  return rgb(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
};
