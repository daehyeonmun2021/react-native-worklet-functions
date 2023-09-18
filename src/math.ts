export const add = (a: number, b: number) => {
  'worklet';

  return a + b;
};

export const subtract = (a: number, b: number) => {
  'worklet';

  return a - b;
};

export const multiply = (a: number, b: number) => {
  'worklet';

  return a * b;
};

export const divide = (a: number, b: number) => {
  'worklet';

  return a / b;
};

export const min = (...args: number[]) => {
  'worklet';

  return Math.min(...args);
};

export const max = (...args: number[]) => {
  'worklet';

  return Math.max(...args);
};

export const round = (value: number, precision = 0) => {
  'worklet';

  const p = Math.pow(10, precision);

  return Math.round(value * p) / p;
};

export const floor = (value: number, precision = 0) => {
  'worklet';

  const p = Math.pow(10, precision);

  return Math.floor(value * p) / p;
};

export const ceil = (value: number, precision = 0) => {
  'worklet';

  const p = Math.pow(10, precision);

  return Math.ceil(value * p) / p;
};

export const abs = (value: number) => {
  'worklet';

  return Math.abs(value);
};

export const sqrt = (value: number) => {
  'worklet';

  return Math.sqrt(value);
};

export const toDeg = (rad: number) => {
  'worklet';

  return (rad * 180) / Math.PI;
};

export const toRad = (deg: number) => {
  'worklet';

  return (deg * Math.PI) / 180;
};

export const between = (value: number, lower: number, upper: number) => {
  'worklet';

  return value >= lower && value <= upper;
};
