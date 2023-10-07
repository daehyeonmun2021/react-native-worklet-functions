import { vec, vector } from '../vector';

describe('vector', () => {
  const v1 = vec(1, 2);
  const v2 = vec(3, 4);

  describe('add', () => {
    it('should add two vectors', () => {
      const result = vector.add(v1, v2);
      expect(result).toEqual(vec(4, 6));
    });

    it('should add a scalar to a vector', () => {
      const result = vector.add(v1, 2);
      expect(result).toEqual(vec(3, 4));
    });
  });

  describe('subtract', () => {
    it('should subtract two vectors', () => {
      const result = vector.subtract(v1, v2);
      expect(result).toEqual(vec(-2, -2));
    });

    it('should subtract a scalar from a vector', () => {
      const result = vector.subtract(v1, 2);
      expect(result).toEqual(vec(-1, 0));
    });
  });

  describe('divide', () => {
    it('should divide two vectors', () => {
      const result = vector.divide(v1, v2);
      expect(result).toEqual(vec(1 / 3, 2 / 4));
    });

    it('should divide a vector by a scalar', () => {
      const result = vector.divide(v1, 2);
      expect(result).toEqual(vec(0.5, 1));
    });
  });

  describe('multiply', () => {
    it('should multiply two vectors', () => {
      const result = vector.multiply(v1, v2);
      expect(result).toEqual(vec(3, 8));
    });

    it('should multiply a vector by a scalar', () => {
      const result = vector.multiply(v1, 2);
      expect(result).toEqual(vec(2, 4));
    });
  });

  describe('distance', () => {
    it('should calculate the distance between two vectors', () => {
      const result = vector.distance(v1, v2);
      expect(result).toEqual(2.8284271247461903);
    });
  });

  describe('angleBetween', () => {
    it('should calculate the angle between two vectors', () => {
      const result = vector.angleBetween(v1, v2);
      expect(result).toEqual(Math.atan2(2, 2));
    });
  });

  describe('normalize', () => {
    it('should normalize a vector', () => {
      const result = vector.normalize(v1);
      expect(result).toEqual(vec(1 / Math.sqrt(5), 2 / Math.sqrt(5)));
    });
  });

  describe('dot', () => {
    it('should calculate the dot product of two vectors', () => {
      const result = vector.dot(v1, v2);
      expect(result).toEqual(11);
    });
  });

  describe('cross', () => {
    it('should calculate the cross product of two vectors', () => {
      const result = vector.cross(v1, v2);
      expect(result).toEqual(-2);
    });
  });

  describe('magnitude', () => {
    it('should calculate the magnitude of a vector', () => {
      const result = vector.magnitude(v1);
      expect(result).toEqual(Math.sqrt(5));
    });
  });

  describe('rotate', () => {
    it('should rotate a vector by a given angle', () => {
      const result = vector.rotate(v1, Math.PI / 2);
      expect(result.x).toBeCloseTo(-2);
      expect(result.y).toBeCloseTo(1);
    });
  });

  describe('lerp', () => {
    it('should interpolate between two vectors', () => {
      const result = vector.lerp(v1, v2, 0.5);
      expect(result).toEqual(vec(2, 3));
    });
  });

  describe('clone', () => {
    it('should create a clone of a vector', () => {
      const result = vector.clone(v1);
      expect(result).toEqual(v1);
      expect(result).not.toBe(v1);
    });
  });
});
