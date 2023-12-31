/**
 * Adds two numbers.
 * @param a - The first number to add.
 * @param b - The second number to add.
 * @returns The sum of the two numbers.
 */
export const add = (a: number, b: number) => {
  'worklet';

  return a + b;
};

/**
 * Subtracts two numbers.
 * @param a - The first number to subtract from.
 * @param b - The second number to subtract.
 * @returns The result of the subtraction.
 */
export const subtract = (a: number, b: number) => {
  'worklet';

  return a - b;
};

/**
 * Multiplies two numbers.
 * @param a - The first number to multiply.
 * @param b - The second number to multiply.
 * @returns The product of the two numbers.
 */
export const multiply = (a: number, b: number) => {
  'worklet';

  return a * b;
};

/**
 * Divides two numbers.
 *
 * @param a - The dividend number.
 * @param b - The divisor number.
 * @returns The quotient of the two numbers.
 */
export const divide = (a: number, b: number) => {
  'worklet';

  return a / b;
};

/**
 * Returns the minimum value from a list of numbers.
 * @param args - The list of numbers to compare.
 * @returns The minimum value from the list of numbers.
 */
export const min = (...args: number[]) => {
  'worklet';

  return Math.min(...args);
};

/**
 * Calculates the median value of a set of numbers.
 * @param args The numbers to calculate the median from.
 * @returns The median value of the set of numbers.
 */
export const median = (...args: number[]) => {
  'worklet';

  const sorted = args.sort();

  if (sorted.length % 2 === 0) {
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  }

  return sorted[(sorted.length - 1) / 2];
};

/**
 * Returns the maximum value from a list of numbers.
 * @param args The numbers to compare.
 * @returns The maximum value.
 */
export const max = (...args: number[]) => {
  'worklet';

  return Math.max(...args);
};

/**
 * Rounds a number to a specified precision.
 * @param value - The number to round.
 * @param precision - The number of digits to keep after the decimal point. Default is 0.
 * @returns The rounded number.
 */
export const round = (value: number, precision = 0) => {
  'worklet';

  const p = Math.pow(10, precision);

  return Math.round(value * p) / p;
};

/**
 * Rounds down a number to a specified precision.
 * @param value The number to round down.
 * @param precision The number of decimal places to preserve. Default is 0.
 * @returns The rounded down number.
 */
export const floor = (value: number, precision = 0) => {
  'worklet';

  const p = Math.pow(10, precision);

  return Math.floor(value * p) / p;
};

/**
 * Rounds up a number to the nearest integer or to the specified precision.
 * @param value - The number to round up.
 * @param precision - The number of decimal places to preserve. Default is 0.
 * @returns The rounded up number.
 */
export const ceil = (value: number, precision = 0) => {
  'worklet';

  const p = Math.pow(10, precision);

  return Math.ceil(value * p) / p;
};

/**
 * Returns the absolute value of a number.
 * @param value The number to get the absolute value of.
 * @returns The absolute value of the given number.
 */
export const abs = (value: number) => {
  'worklet';

  return Math.abs(value);
};

/**
 * Returns the square root of a number.
 * @param value - The number to calculate the square root of.
 * @returns The square root of the given number.
 */
export const sqrt = (value: number) => {
  'worklet';

  return Math.sqrt(value);
};

/**
 * Converts radians to degrees.
 * @param rad The angle in radians.
 * @returns The angle in degrees.
 */
export const toDeg = (rad: number) => {
  'worklet';

  return (rad * 180) / Math.PI;
};

/**
 * Converts degrees to radians.
 * @param deg - The angle in degrees.
 * @returns The angle in radians.
 */
export const toRad = (deg: number) => {
  'worklet';

  return (deg * Math.PI) / 180;
};

/**
 * Returns true if the given value is between the lower and upper bounds (inclusive).
 * @param value The value to check.
 * @param lower The lower bound.
 * @param upper The upper bound.
 * @returns True if the value is between the lower and upper bounds (inclusive), false otherwise.
 */
export const between = (value: number, lower: number, upper: number) => {
  'worklet';

  return value >= lower && value <= upper;
};

/**
 * Calculates the cosine of a given angle in radians.
 * @param radian The angle in radians.
 * @returns The cosine of the angle.
 */
export const cos = (radian: number) => {
  'worklet';

  return Math.cos(radian);
};

/**
 * Calculates the sine of a given angle in radians.
 * @param radian The angle in radians.
 * @returns The sine of the angle.
 */
export const sin = (radian: number) => {
  'worklet';

  return Math.sin(radian);
};

/**
 * Calculates the tangent of a given angle in radians.
 * @param radian The angle in radians.
 * @returns The tangent of the angle.
 */
export const tan = (radian: number) => {
  'worklet';

  return Math.tan(radian);
};

/**
 * Calculates the arccosine of a number.
 * @param value - The number to calculate the arccosine of.
 * @returns The arccosine value in radians.
 */
export const acos = (value: number) => {
  'worklet';

  return Math.acos(value);
};

/**
 * Calculates the arcsine of a number.
 * @param value - The number to calculate the arcsine of.
 * @returns The arcsine of the given number.
 */
export const asin = (value: number) => {
  'worklet';

  return Math.asin(value);
};

/**
 * Calculates the arctangent of a number.
 * @param value - The number to calculate the arctangent of.
 * @returns The arctangent of the given number.
 */
export const atan = (value: number) => {
  'worklet';

  return Math.atan(value);
};

/**
 * Calculates the arctangent of the quotient of its arguments.
 * @param y - The y-coordinate of the point.
 * @param x - The x-coordinate of the point.
 * @returns The angle in radians between the positive x-axis and the point (x, y).
 */
export const atan2 = (y: number, x: number) => {
  'worklet';

  return Math.atan2(y, x);
};
