import {
  abs,
  acos,
  add,
  asin,
  atan,
  atan2,
  between,
  ceil,
  cos,
  divide,
  floor,
  max,
  median,
  min,
  multiply,
  round,
  sin,
  sqrt,
  subtract,
  tan,
  toDeg,
  toRad,
} from '..';

describe('math functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add a positive and a negative number', () => {
      expect(add(2, -3)).toBe(-1);
    });

    it('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should subtract a positive and a negative number', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    it('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should multiply a positive and a negative number', () => {
      expect(multiply(2, -3)).toBe(-6);
    });

    it('should multiply two negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    it('should divide a positive and a negative number', () => {
      expect(divide(6, -3)).toBe(-2);
    });

    it('should divide two negative numbers', () => {
      expect(divide(-6, -3)).toBe(2);
    });

    it('should return Infinity when dividing by zero', () => {
      expect(divide(6, 0)).toBe(Infinity);
    });
  });

  describe('min', () => {
    it('should return the minimum value from an array of numbers', () => {
      expect(min(2, 3, 1, 4)).toBe(1);
    });
  });

  describe('max', () => {
    it('should return the maximum value from an array of numbers', () => {
      expect(max(2, 3, 1, 4)).toBe(4);
    });
  });

  describe('round', () => {
    it('should round a number to the nearest integer', () => {
      expect(round(2.4)).toBe(2);
      expect(round(2.6)).toBe(3);
    });

    it('should round a number to a specified number of decimal places', () => {
      expect(round(2.345, 2)).toBe(2.35);
      expect(round(2.345, 1)).toBe(2.3);
    });
  });

  describe('floor', () => {
    it('should round a number down to the nearest integer', () => {
      expect(floor(2.4)).toBe(2);
      expect(floor(2.6)).toBe(2);
    });

    it('should round a number down to a specified number of decimal places', () => {
      expect(floor(2.345, 2)).toBe(2.34);
      expect(floor(2.345, 1)).toBe(2.3);
    });
  });

  describe('ceil', () => {
    it('should round a number up to the nearest integer', () => {
      expect(ceil(2.4)).toBe(3);
      expect(ceil(2.6)).toBe(3);
    });

    it('should round a number up to a specified number of decimal places', () => {
      expect(ceil(2.345, 2)).toBe(2.35);
      expect(ceil(2.345, 1)).toBe(2.4);
    });
  });

  describe('abs', () => {
    it('should return the absolute value of a number', () => {
      expect(abs(-2)).toBe(2);
      expect(abs(2)).toBe(2);
    });
  });

  describe('sqrt', () => {
    it('should return the square root of a number', () => {
      expect(sqrt(4)).toBe(2);
      expect(sqrt(9)).toBe(3);
    });
  });

  describe('toDeg', () => {
    it('should convert radians to degrees', () => {
      expect(toDeg(Math.PI)).toBe(180);
      expect(toDeg(Math.PI / 2)).toBe(90);
    });
  });

  describe('toRad', () => {
    it('should convert degrees to radians', () => {
      expect(toRad(180)).toBe(Math.PI);
      expect(toRad(90)).toBe(Math.PI / 2);
    });
  });

  describe('between', () => {
    it('should return true if a value is between two other values', () => {
      expect(between(2, 1, 3)).toBe(true);
      expect(between(0, -1, 1)).toBe(true);
    });

    it('should return false if a value is outside of two other values', () => {
      expect(between(4, 1, 3)).toBe(false);
      expect(between(-2, -1, 1)).toBe(false);
    });

    it('should return true if a value is equal to one of the other values', () => {
      expect(between(2, 1, 2)).toBe(true);
      expect(between(0, -1, 0)).toBe(true);
    });
  });

  describe('median', () => {
    it('should return the median of an odd number of arguments', () => {
      const result = median(1, 2, 3, 4, 5);
      expect(result).toBe(3);
    });

    it('should return the median of an even number of arguments', () => {
      const result = median(1, 2, 3, 4);
      expect(result).toBe(2.5);
    });

    it('should work with negative numbers', () => {
      const result = median(-5, -3, 0, 2, 4);
      expect(result).toBe(0);
    });

    it('should work with duplicate numbers', () => {
      const result = median(1, 2, 2, 3, 4);
      expect(result).toBe(2);
    });

    it('should work with a single argument', () => {
      const result = median(1);
      expect(result).toBe(1);
    });
  });

  describe('cos', () => {
    it('should return the cosine of a given angle in radians', () => {
      expect(cos(0)).toBe(1);
      expect(cos(toRad(90))).toBeCloseTo(0);
    });
  });

  describe('sin', () => {
    it('should return the sine of a given angle in radians', () => {
      expect(sin(0)).toBe(0);
      expect(sin(toRad(90))).toBeCloseTo(1);
    });
  });

  describe('tan', () => {
    it('should return the tangent of a given angle in radians', () => {
      expect(tan(0)).toBe(0);
      expect(tan(toRad(45))).toBeCloseTo(1);
    });
  });

  describe('acos', () => {
    it('should return the arccosine of a given value', () => {
      expect(acos(1)).toBe(0);
      expect(acos(0)).toBe(Math.PI / 2);
    });
  });

  describe('asin', () => {
    it('should return the arcsine of a given value', () => {
      expect(asin(0)).toBe(0);
      expect(asin(1)).toBe(Math.PI / 2);
    });
  });

  describe('atan', () => {
    it('should return the arctangent of a given value', () => {
      expect(atan(0)).toBe(0);
      expect(atan(1)).toBeCloseTo(0.7853981633974483);
    });
  });

  describe('atan2', () => {
    it('should return the arctangent of the quotient of its arguments', () => {
      expect(atan2(1, 1)).toBeCloseTo(0.7853981633974483);
      expect(atan2(0, 1)).toBe(0);
      expect(atan2(-1, 1)).toBeCloseTo(-0.7853981633974483);
    });
  });
});
