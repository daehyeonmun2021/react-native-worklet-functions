import {
  chunk,
  clamp,
  concat,
  count,
  debounce,
  find,
  findIndex,
  groupBy,
  head,
  isEmpty,
  isEqual,
  isNil,
  isNull,
  isUndefined,
  keys,
  nth,
  random,
  range,
  sample,
  sampleSize,
  shuffle,
  tail,
  take,
  throttle,
  times,
  values,
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

  describe('times', () => {
    it('should call the iteratee function n times', () => {
      const n = 5;
      const iteratee = jest.fn();
      times(n, iteratee);
      expect(iteratee).toHaveBeenCalledTimes(n);
    });

    it('should pass the index to the iteratee function', () => {
      const n = 3;
      const iteratee = jest.fn();
      times(n, iteratee);
      expect(iteratee).toHaveBeenCalledWith(0);
      expect(iteratee).toHaveBeenCalledWith(1);
      expect(iteratee).toHaveBeenCalledWith(2);
    });

    it('should return an array of the results of calling the iteratee function', () => {
      const n = 4;
      const iteratee = (i: number) => i * 2;
      const result = times(n, iteratee);
      expect(result).toEqual([0, 2, 4, 6]);
    });

    it('should return an empty array when n is 0', () => {
      const n = 0;
      const iteratee = jest.fn();
      const result = times(n, iteratee);
      expect(result).toEqual([]);
      expect(iteratee).not.toHaveBeenCalled();
    });
  });

  describe('find', () => {
    it('should return the first element that satisfies the predicate', () => {
      const arr = [1, 2, 3, 4, 5];
      const predicate = (v: number) => v % 2 === 0;
      const result = find(arr, predicate);
      expect(result).toBe(2);
    });

    it('should return undefined if no element satisfies the predicate', () => {
      const arr = [1, 3, 5, 7, 9];
      const predicate = (v: number) => v % 2 === 0;
      const result = find(arr, predicate);
      expect(result).toBeUndefined();
    });

    it('should work with an empty array', () => {
      const arr: number[] = [];
      const predicate = (v: number) => v % 2 === 0;
      const result = find(arr, predicate);
      expect(result).toBeUndefined();
    });

    it('should work with an array of objects', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
      const predicate = (v: { id: number; name: string }) => v.name === 'Bob';
      const result = find(arr, predicate);
      expect(result).toEqual({ id: 2, name: 'Bob' });
    });
  });

  describe('findIndex', () => {
    it('should return the index of the first element that satisfies the predicate', () => {
      const arr = [1, 2, 3, 4, 5];
      const predicate = (v: number) => v % 2 === 0;
      const result = findIndex(arr, predicate);
      expect(result).toBe(1);
    });

    it('should return -1 if no element satisfies the predicate', () => {
      const arr = [1, 3, 5, 7, 9];
      const predicate = (v: number) => v % 2 === 0;
      const result = findIndex(arr, predicate);
      expect(result).toBe(-1);
    });

    it('should work with an empty array', () => {
      const arr: number[] = [];
      const predicate = (v: number) => v % 2 === 0;
      const result = findIndex(arr, predicate);
      expect(result).toBe(-1);
    });

    it('should work with an array of objects', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
      const predicate = (v: { id: number; name: string }) => v.name === 'Bob';
      const result = findIndex(arr, predicate);
      expect(result).toBe(1);
    });
  });

  describe('concat', () => {
    it('should concatenate multiple arrays into a single array', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      const arr3 = [7, 8, 9];
      const result = concat(arr1, arr2, arr3);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should work with empty arrays', () => {
      const arr1: number[] = [];
      const arr2: number[] = [];
      const result = concat(arr1, arr2);
      expect(result).toEqual([]);
    });

    it('should work with arrays of different types', () => {
      const arr1 = [1, 2, 3];
      const arr2 = ['a', 'b', 'c'];
      const arr3 = [true, false];
      const result = concat(arr1, arr2, arr3);
      expect(result).toEqual([1, 2, 3, 'a', 'b', 'c', true, false]);
    });
  });

  describe('count', () => {
    it('should return the length of an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = count(arr);
      expect(result).toBe(5);
    });

    it('should return 0 for an empty array', () => {
      const arr: number[] = [];
      const result = count(arr);
      expect(result).toBe(0);
    });

    it('should work with an array of objects', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
      const result = count(arr);
      expect(result).toBe(3);
    });
  });

  describe('count', () => {
    it('should return the length of an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = count(arr);
      expect(result).toBe(5);
    });

    it('should return 0 for an empty array', () => {
      const arr: number[] = [];
      const result = count(arr);
      expect(result).toBe(0);
    });

    it('should work with an array of objects', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
      const result = count(arr);
      expect(result).toBe(3);
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty array', () => {
      const arr: number[] = [];
      const result = isEmpty(arr);
      expect(result).toBe(true);
    });

    it('should return false for a non-empty array', () => {
      const arr = [1, 2, 3];
      const result = isEmpty(arr);
      expect(result).toBe(false);
    });
  });

  describe('keys', () => {
    it('should return the keys of an object', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = keys(obj);
      expect(result).toEqual(['a', 'b', 'c']);
    });

    it('should work with an empty object', () => {
      const obj = {};
      const result = keys(obj);
      expect(result).toEqual([]);
    });
  });

  describe('values', () => {
    it('should return the values of an object', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = values(obj);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should work with an empty object', () => {
      const obj = {};
      const result = values(obj);
      expect(result).toEqual([]);
    });
  });
});
