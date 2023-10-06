import { IVector, vector } from '..';

describe('vector', () => {
  let v1: IVector;
  let v2: IVector;

  beforeEach(() => {
    v1 = vector(1, 2);
    v2 = vector(3, 4);
  });

  it('should create a vector with the specified x and y values', () => {
    expect(v1).toMatchObject({ x: 1, y: 2 });
  });

  it('should default to x and y values of 0', () => {
    const v = vector();
    expect(v).toMatchObject({ x: 0, y: 0 });
  });

  it('should set the x and y values of the vector', () => {
    v1.set(3, 4);
    expect(v1).toMatchObject({ x: 3, y: 4 });
  });

  it('should add another vector to the vector', () => {
    v1.add(v2);
    expect(v1).toMatchObject({ x: 4, y: 6 });
  });

  it('should subtract another vector from the vector', () => {
    v1.subtract(v2);
    expect(v1).toMatchObject({ x: -2, y: -2 });
  });

  it('should multiply the vector by another vector', () => {
    v1.multiply(v2);
    expect(v1).toMatchObject({ x: 3, y: 8 });
  });

  it('should divide the vector by another vector', () => {
    v1.divide(v2);
    expect(v1.x).toBeCloseTo(0.333333);
    expect(v1.y).toBeCloseTo(0.5);
  });

  it('should return the magnitude of the vector', () => {
    const result = v1.magnitude();
    expect(result).toBeCloseTo(2.236068);
  });

  it('should normalize the vector', () => {
    v1.normalize();
    expect(v1.x).toBeCloseTo(0.447214);
    expect(v1.y).toBeCloseTo(0.894427);
  });

  it('should rotate the vector by the specified angle', () => {
    v1.rotate(Math.PI / 2);
    expect(v1.x).toBeCloseTo(-2);
    expect(v1.y).toBeCloseTo(1);
  });

  it('should return the angle between the vector and another vector', () => {
    const result = v1.angleBetween(v2);
    expect(result).toBeCloseTo(0.7853981633974483, 2);
  });

  it('should return the dot product of the vector and another vector', () => {
    const result = v1.dot(v2);
    expect(result).toBe(11);
  });

  it('should perform linear interpolation between the vector and another vector', () => {
    const result = v1.lerp(v2, 0.5);
    expect(result).toMatchObject({ x: 2, y: 3 });
  });

  it('should return the distance between the vector and another vector', () => {
    const result = v1.dist(v2);
    expect(result).toBeCloseTo(2.828427);
  });

  it('should return a clone of the vector', () => {
    const v = v1.clone();
    expect(v).toMatchObject({ x: 1, y: 2 });
  });
});
