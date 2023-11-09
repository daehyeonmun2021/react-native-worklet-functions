export type Vector = {
  x: number;
  y: number;
};

/**
 * Creates a vector object with x and y properties.
 * @param x - The value for the x property.
 * @param y - The value for the y property. If not provided, it defaults to the value of x.
 * @returns An object with x and y properties.
 */
export const vec = (x: number, y?: number) => {
  'worklet';
  return { x, y: y ?? x };
};

/**
 * A collection of vector functions for use in React Native worklets.
 */
export const vector = {
  add: (v1: Vector, v2: Vector | number) => {
    'worklet';
    if (typeof v2 === 'number') {
      return vec(v1.x + v2, v1.y + v2);
    }
    return vec(v1.x + v2.x, v1.y + v2.y);
  },
  subtract: (v1: Vector, v2: Vector | number) => {
    'worklet';
    if (typeof v2 === 'number') {
      return vec(v1.x - v2, v1.y - v2);
    }
    return vec(v1.x - v2.x, v1.y - v2.y);
  },
  divide: (v1: Vector, v2: Vector | number) => {
    'worklet';
    if (typeof v2 === 'number') {
      return vec(v1.x / v2, v1.y / v2);
    }
    return vec(v1.x / v2.x, v1.y / v2.y);
  },
  multiply: (v1: Vector, v2: Vector | number) => {
    'worklet';
    if (typeof v2 === 'number') {
      return vec(v1.x * v2, v1.y * v2);
    }
    return vec(v1.x * v2.x, v1.y * v2.y);
  },
  distance: (v1: Vector, v2: Vector): number => {
    'worklet';
    const dx = v1.x - v2.x;
    const dy = v1.y - v2.y;
    return Math.sqrt(dx * dx + dy * dy);
  },
  angleBetween: (v1: Vector, v2: Vector): number => {
    'worklet';
    const dx = v2.x - v1.x;
    const dy = v2.y - v1.y;
    return Math.atan2(dy, dx);
  },
  normalize: (v: Vector) => {
    'worklet';
    const magnitude = Math.sqrt(v.x * v.x + v.y * v.y);
    return vec(v.x / magnitude, v.y / magnitude);
  },
  dot: (v1: Vector, v2: Vector) => {
    'worklet';
    return v1.x * v2.x + v1.y * v2.y;
  },
  cross: (v1: Vector, v2: Vector) => {
    'worklet';
    return v1.x * v2.y - v1.y * v2.x;
  },
  magnitude: (v: Vector) => {
    'worklet';
    return Math.sqrt(v.x * v.x + v.y * v.y);
  },
  rotate: (v: Vector, radian: number) => {
    'worklet';
    const cos = Math.cos(radian);
    const sin = Math.sin(radian);
    return vec(v.x * cos - v.y * sin, v.x * sin + v.y * cos);
  },
  lerp: (v1: Vector, v2: Vector, amount: number) => {
    'worklet';
    return vec(v1.x + (v2.x - v1.x) * amount, v1.y + (v2.y - v1.y) * amount);
  },
  clone: (v: Vector) => {
    'worklet';
    return vec(v.x, v.y);
  },
};
