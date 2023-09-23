import {
  chunk,
  clamp,
  debounce,
  groupBy,
  head,
  isEqual,
  isNil,
  isNull,
  isUndefined,
  nth,
  random,
  range,
  sample,
  sampleSize,
  shuffle,
  tail,
  take,
  throttle,
  without,
  zipObject,
} from '..';

describe('lodash functions', () => {
  describe('sample', () => {
    it('should return a random element from an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = sample(arr);
      expect(arr).toContain(result);
    });
  });

  describe('sampleSize', () => {
    it('should return an array of n random elements from an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = sampleSize(arr, 3);
      expect(result.length).toBe(3);
      result.forEach((item) => {
        expect(arr).toContain(item);
      });
    });

    it('should return an empty array if n is less than or equal to 0', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = sampleSize(arr, 0);
      expect(result).toEqual([]);
    });
  });

  describe('random', () => {
    it('should return a random integer between min and max (inclusive)', () => {
      const result = random(1, 5);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(5);
    });
  });

  describe('clamp', () => {
    it('should return a value between lower and upper bounds', () => {
      expect(clamp(2, 1, 3)).toBe(2);
      expect(clamp(0, -1, 1)).toBe(0);
      expect(clamp(4, 1, 3)).toBe(3);
    });
  });

  describe('nth', () => {
    it('should return the nth element of an array', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(nth(arr, 0)).toBe(1);
      expect(nth(arr, 2)).toBe(3);
      expect(nth(arr, 5)).toBeUndefined();
    });
  });

  describe('head', () => {
    it('should return the first element of an array', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(head(arr)).toBe(1);
      expect(head([])).toBeUndefined();
    });
  });

  describe('tail', () => {
    it('should return the last element of an array', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(tail(arr)).toBe(5);
      expect(tail([])).toBeUndefined();
    });
  });

  describe('zipObject', () => {
    it('should return an object with keys from props and values from values', () => {
      const props = ['a', 'b', 'c'];
      const values = [1, 2, 3];
      const result = zipObject(props, values);
      expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
  });

  describe('chunk', () => {
    it('should split an array into chunks of a specified size', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = chunk(arr, 2);
      expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });
  });

  describe('take', () => {
    it('should return the first n elements of an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = take(arr, 3);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should return an empty array if n is less than or equal to 0', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = take(arr, 0);
      expect(result).toEqual([]);
    });
  });

  describe('without', () => {
    it('should return an array without the specified values', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = without(arr, 2, 4);
      expect(result).toEqual([1, 3, 5]);
    });
  });

  describe('shuffle', () => {
    it('should return a shuffled copy of an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = shuffle(arr);
      expect(result).not.toEqual(arr);
      expect(result.sort()).toEqual(arr.sort());
    });
  });

  describe('isNull', () => {
    it('should return true if a value is null', () => {
      expect(isNull(null)).toBe(true);
      expect(isNull(undefined)).toBe(false);
      expect(isNull(0)).toBe(false);
    });
  });

  describe('isUndefined', () => {
    it('should return true if a value is undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined(0)).toBe(false);
    });
  });

  describe('isEqual', () => {
    it('should return true if two values are equal', () => {
      expect(isEqual(1, 1)).toBe(true);
      expect(isEqual('hello', 'hello')).toBe(true);
      expect(isEqual({}, {})).toBe(false);
    });
  });

  describe('isNil', () => {
    it('should return true if a value is null or undefined', () => {
      expect(isNil(null)).toBe(true);
      expect(isNil(undefined)).toBe(true);
      expect(isNil(0)).toBe(false);
    });
  });

  describe('debounce', () => {
    it('should delay the execution of a function by the specified wait time', () => {
      jest.useFakeTimers();
      const func = jest.fn();
      const debouncedFunc = debounce(func, 100);
      debouncedFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(50);
      debouncedFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    it('should delay the execution of a function by the specified wait time', () => {
      jest.useFakeTimers();
      const func = jest.fn();
      const throttledFunc = throttle(func, 100);
      throttledFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(50);
      throttledFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should pass the arguments to the throttled function', () => {
      jest.useFakeTimers();
      const func = jest.fn();
      const throttledFunc = throttle(func, 100);
      throttledFunc(1, 2, 3);
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledWith(1, 2, 3);
    });

    it('should only execute the function once during the wait time', () => {
      jest.useFakeTimers();
      const func = jest.fn();
      const throttledFunc = throttle(func, 100);
      throttledFunc();
      throttledFunc();
      throttledFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(50);
      expect(func).not.toHaveBeenCalled();
      throttledFunc();
      expect(func).not.toHaveBeenCalled();
      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  describe('range', () => {
    it('should return an array of numbers from start to end with a step of 1', () => {
      const result = range(1, 5);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should return an array of numbers from start to end with a custom step', () => {
      const result = range(1, 10, 2);
      expect(result).toEqual([1, 3, 5, 7, 9]);
    });

    it('should return an empty array if start is greater than or equal to end', () => {
      const result = range(5, 1);
      expect(result).toEqual([]);
    });
  });

  describe('groupBy', () => {
    it('should group an array of objects by a given key', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'Alice' },
        { id: 5, name: 'Bob' },
      ];
      const result = groupBy(arr, (v) => v.name);
      expect(result).toEqual({
        Alice: [
          { id: 1, name: 'Alice' },
          { id: 4, name: 'Alice' },
        ],
        Bob: [
          { id: 2, name: 'Bob' },
          { id: 5, name: 'Bob' },
        ],
        Charlie: [{ id: 3, name: 'Charlie' }],
      });
    });

    it('should return an empty object when given an empty array', () => {
      const arr: any[] = [];
      const result = groupBy(arr, (v) => v);
      expect(result).toEqual({});
    });

    it('should group an array of numbers by their parity', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = groupBy(arr, (v) => (v % 2 === 0 ? 'even' : 'odd'));
      expect(result).toEqual({
        odd: [1, 3, 5],
        even: [2, 4],
      });
    });
  });
});
