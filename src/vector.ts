export interface IVector {
  x: number;
  y: number;
  set: (x: number, y: number) => IVector;
  add: (v: IVector) => IVector;
  subtract: (v: IVector) => IVector;
  multiply: (v: IVector) => IVector;
  divide: (v: IVector) => IVector;
  magnitude: () => number;
  normalize: () => IVector;
  rotate: (a: number) => IVector;
  angleBetween: (v: IVector) => number;
  dot: (v: IVector) => number;
  lerp: (v: IVector, n: number) => IVector;
  dist: (v: IVector) => number;
  clone: () => IVector;
}

export const vector = (x: number = 0, y: number = 0): IVector => {
  'worklet';

  const set = (x: number, y: number) => {
    vectorInstance.x = x;
    vectorInstance.y = y;
    return vectorInstance;
  };

  const add = (v: IVector) => {
    vectorInstance.x += v.x;
    vectorInstance.y += v.y;
    return vectorInstance;
  };

  const subtract = (v: IVector) => {
    vectorInstance.x -= v.x;
    vectorInstance.y -= v.y;
    return vectorInstance;
  };

  const multiply = (v: IVector) => {
    vectorInstance.x *= v.x;
    vectorInstance.y *= v.y;
    return vectorInstance;
  };

  const divide = (v: IVector) => {
    vectorInstance.x /= v.x;
    vectorInstance.y /= v.y;
    return vectorInstance;
  };

  const magnitude = () => {
    return Math.sqrt(vectorInstance.x * vectorInstance.x + vectorInstance.y * vectorInstance.y);
  };

  const normalize = () => {
    return vectorInstance.divide(vector(vectorInstance.magnitude(), vectorInstance.magnitude()));
  };

  const rotate = (radian: number) => {
    const cos = Math.cos(radian);
    const sin = Math.sin(radian);
    const x = vectorInstance.x * cos - vectorInstance.y * sin;
    const y = vectorInstance.x * sin + vectorInstance.y * cos;
    vectorInstance.x = x;
    vectorInstance.y = y;
    return vectorInstance;
  };

  const angleBetween = (v: IVector) => {
    return Math.atan2(v.y - vectorInstance.y, v.x - vectorInstance.x);
  };

  const dot = (v: IVector) => {
    return vectorInstance.x * v.x + vectorInstance.y * v.y;
  };

  const lerp = (v: IVector, n: number) => {
    return vectorInstance.add(v.subtract(vectorInstance).multiply(vector(n, n)));
  };

  const dist = (v: IVector) => {
    const dx = vectorInstance.x - v.x;
    const dy = vectorInstance.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const clone = () => {
    return vector(vectorInstance.x, vectorInstance.y);
  };

  const vectorInstance: IVector = {
    x,
    y,
    set,
    add,
    subtract,
    multiply,
    divide,
    magnitude,
    normalize,
    rotate,
    angleBetween,
    dot,
    lerp,
    dist,
    clone,
  };

  return vectorInstance;
};
