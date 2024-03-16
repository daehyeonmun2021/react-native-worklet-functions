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

/**
 * Converts a hexadecimal color code to an RGB color array.
 * @param hex - The hexadecimal color code to convert.
 * @returns An array containing the red, green, and blue values of the converted color.
 */
export const hexToRgb = (hex: string) => {
  'worklet';

  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
};

/**
 * Converts a hexadecimal color code to HSL (Hue, Saturation, Lightness) format.
 * @param hex - The hexadecimal color code to convert.
 * @returns The color in HSL format.
 */
export const hexToHsl = (hex: string) => {
  'worklet';

  let r: string | number = 0;
  let g: string | number = 0;
  let b: string | number = 0;
  if (hex.length === 4) {
    r = '0x' + hex[1] + hex[1];
    g = '0x' + hex[2] + hex[2];
    b = '0x' + hex[3] + hex[3];
  } else if (hex.length === 7) {
    r = '0x' + hex[1] + hex[2];
    g = '0x' + hex[3] + hex[4];
    b = '0x' + hex[5] + hex[6];
  }

  r = +r / 255;
  g = +g / 255;
  b = +b / 255;
  const cMin = Math.min(r, g, b);
  const cMax = Math.max(r, g, b);
  const delta = cMax - cMin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) {
    h = 0;
  } else if (cMax === r) {
    h = ((g - b) / delta) % 6;
  } else if (cMax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cMax + cMin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
};
