/**
 * Shuffles an array in place.
 * @param arr - The array to shuffle.
 * @returns A new shuffled array.
 */
export function shuffle<T>(arr: T[]) {
  'worklet';

  return arr.slice().sort(() => Math.random() - 0.5);
}

/**
 * Returns a random sample of n elements from an array.
 * @param arr The input array.
 * @param n The number of elements to sample.
 * @returns An array of n randomly selected elements from the input array.
 */
export function sampleSize<T>(arr: T[], n: number) {
  'worklet';

  if (n <= 0) {
    return [];
  }

  return shuffle(arr).slice(0, n);
}

/**
 * Returns a random element from an array.
 * @param arr The input array.
 * @returns A random element from the input array.
 */
export function sample<T>(arr: T[]) {
  'worklet';

  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Returns a random integer between the specified minimum and maximum values, inclusive.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns A random integer between the specified minimum and maximum values, inclusive.
 */
export function random(min: number, max: number) {
  'worklet';

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param value The number to clamp.
 * @param lower The minimum value to clamp to.
 * @param upper The maximum value to clamp to.
 * @returns The clamped number.
 */
export function clamp(value: number, lower: number, upper: number) {
  'worklet';

  return Math.min(Math.max(lower, value), upper);
}

/**
 * Returns the element at the specified index in an array.
 * @param arr The array to retrieve the element from.
 * @param index The index of the element to retrieve.
 * @returns The element at the specified index, or undefined if the index is out of range.
 */
export function nth<T>(arr: T[], index: number) {
  'worklet';

  if (index < 0 || index >= arr.length) {
    return undefined;
  }

  return arr[index];
}

/**
 * Returns the first element of an array.
 * @template T
 * @param {T[]} arr - The input array.
 * @returns {T | undefined} - The first element of the array or undefined if the array is empty.
 */
export function head<T>(arr: T[]) {
  'worklet';

  if (arr.length === 0) {
    return undefined;
  }

  return arr[0];
}

/**
 * Returns the last element of an array.
 * @param arr - The input array.
 * @returns The last element of the input array or undefined if the array is empty.
 */
export function tail<T>(arr: T[]) {
  'worklet';

  if (arr.length === 0) {
    return undefined;
  }

  return arr[arr.length - 1];
}

/**
 * Zips two arrays into an array of tuples.
 * @param arr1 The first array to be zipped.
 * @param arr2 The second array to be zipped.
 * @returns An array of tuples where each tuple contains an element from arr1 and an element from arr2.
 */
export function zip<T, U>(arr1: T[], arr2: U[]) {
  'worklet';

  const result = [];
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    result.push([arr1[i], arr2[i]]);
  }

  return result;
}

/**
 * Creates an object composed of keys generated from the `props` array and corresponding values from the `values` array.
 * @param props An array of property names.
 * @param values An array of corresponding values.
 * @returns An object composed of the key-value pairs.
 */
export function zipObject<T extends string | number | symbol, U>(props: T[], values: U[]) {
  'worklet';

  const result: Record<T, U> = {} as Record<T, U>;

  for (let i = 0; i < props.length; i++) {
    result[props[i]] = values[i];
  }

  return result;
}

/**
 * Splits an array into smaller chunks of a specified size.
 * @param arr The array to be chunked.
 * @param size The size of each chunk.
 * @returns An array of smaller arrays, each of length `size` (except for the last one, which may be shorter).
 */
export function chunk<T>(arr: T[], size: number) {
  'worklet';

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

/**
 * Returns the first n elements of an array.
 * @param arr - The input array.
 * @param n - The number of elements to return.
 * @returns An array containing the first n elements of the input array.
 */
export function take<T>(arr: T[], n: number) {
  'worklet';

  if (n <= 0) {
    return [];
  }

  return arr.slice(0, n);
}

/**
 * Returns a new array with all the elements of the original array except for the specified values.
 * @param arr - The original array.
 * @param values - The values to be removed from the original array.
 * @returns A new array with all the elements of the original array except for the specified values.
 */
export function without<T>(arr: T[], ...values: T[]) {
  'worklet';

  return arr.filter((item) => !values.includes(item));
}

/**
 * Debounces a worklet function.
 * @template T - The type of the worklet function.
 * @param {T} worklet - The worklet function to debounce.
 * @param {number} [wait=0] - The time in milliseconds to wait before invoking the worklet function.
 * @returns {(...args: Parameters<T>) => void} - A debounced version of the worklet function.
 */
export function debounce<T extends (...args: any[]) => any>(worklet: T, wait = 0) {
  'worklet';

  const value = {
    time: 0,
  };

  return (...args: any[]) => {
    'worklet';

    const t = Date.now();
    const now = t - value.time;
    if (now < wait) {
      value.time = t;
      return;
    }

    worklet(...args);
    value.time = t;
  };
}

/**
 * Throttles a given worklet function to be called at most once per `wait` milliseconds.
 * @template T The type of the worklet function.
 * @param {T} worklet The worklet function to throttle.
 * @param {number} [wait=0] The number of milliseconds to wait before allowing the worklet function to be called again.
 * @returns {(...args: Parameters<T>) => void} A throttled version of the worklet function.
 */
export function throttle<T extends (...args: any[]) => any>(worklet: T, wait = 0) {
  'worklet';

  const value = {
    time: 0,
  };

  return (...args: any[]) => {
    'worklet';

    const t = Date.now();
    const now = t - value.time;
    if (now > wait) {
      value.time = t;
      worklet(...args);
    }
  };
}

/**
 * Checks if a value is null.
 * @template T - The type of the value being checked.
 * @param {T | null | undefined} value - The value to check.
 * @returns {value is null} - True if the value is null, false otherwise.
 */
export function isNull<T>(value: T | null | undefined): value is null {
  'worklet';

  return value === null;
}

/**
 * Checks if a value is undefined.
 * @param value - The value to check.
 * @returns Returns `true` if the value is undefined, else `false`.
 */
export function isUndefined(value: any) {
  'worklet';

  return value === undefined;
}

/**
 * Determines whether two values are equal.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if the values are equal, false otherwise.
 */
export function isEqual(a: any, b: any) {
  'worklet';

  return a === b;
}

/**
 * Checks if a value is null or undefined.
 *
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export function isNil<T>(value: T | null | undefined): value is null | undefined {
  'worklet';

  return value === null || value === undefined;
}

/**
 * Returns an array of numbers within the specified range.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @param step - The step between each number in the range. Default is 1.
 * @returns An array of numbers within the specified range.
 */
export function range(start: number, end: number, step = 1) {
  'worklet';

  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }

  return result;
}

/**
 * Groups an array of objects by a specified iteratee function.
 * @param arr The array to group.
 * @param iteratee The function to determine the grouping key for each element.
 * @returns An object with keys as the grouping key and values as arrays of elements that share the same key.
 */
export function groupBy<T>(arr: Array<T>, iteratee: (v: T) => any): Record<keyof T[], T[]> {
  'worklet';

  if (isNil(arr)) {
    return {} as Record<keyof T[], T[]>;
  }

  const result = {} as Record<keyof T[], T[]>;
  for (let i = 0; i < arr.length; i++) {
    const key = iteratee(arr[i]);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(arr[i]);
  }
  return result;
}

/**
 * Calls the iteratee function n times and returns an array of the results.
 * @param n - The number of times to call the iteratee function.
 * @param iteratee - The function to be called n times.
 * @returns An array of the results of each call to the iteratee function.
 */
export function times<T>(n: number, iteratee: (index: number) => T) {
  'worklet';

  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(iteratee(i));
  }

  return result;
}

/**
 * Finds the first element in an array that satisfies a predicate function.
 * @template T The type of the elements in the array.
 * @param {T[]} arr The array to search in.
 * @param {(v: T) => boolean} predicate The function to test each element of the array.
 * @returns {T | undefined} The first element in the array that satisfies the predicate, or undefined if no such element is found.
 */
export function find<T>(arr: T[], predicate: (v: T) => boolean) {
  'worklet';

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
}

/**
 * Finds the index of the first element in an array that satisfies the provided testing function.
 * @template T The type of the elements in the array.
 * @param {T[]} arr The array to search in.
 * @param {(v: T) => boolean} predicate The function to execute on each value in the array.
 * @returns {number} The index of the first element in the array that satisfies the provided testing function, or -1 if none is found.
 */
export function findIndex<T>(arr: T[], predicate: (v: T) => boolean) {
  'worklet';

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return i;
    }
  }

  return -1;
}

/**
 * Concatenates arrays into a single array.
 * @param args Arrays to concatenate.
 * @returns A new array that is the result of concatenating all the input arrays.
 */
export function concat(...args: any[][]) {
  'worklet';

  return args.flat();
}

/**
 * Returns the number of elements in an array.
 * @param arr - The input array.
 * @returns The number of elements in the array.
 */
export function count(arr: any[]) {
  'worklet';

  return arr.length;
}

/**
 * Checks if an array is empty.
 * @param arr - The array to check.
 * @returns True if the array is empty, false otherwise.
 */
export function isEmpty(arr: any[]) {
  'worklet';

  return arr.length === 0;
}

/**
 * Returns an array of the keys of an object.
 * @param obj - The object to retrieve the keys from.
 * @returns An array of the keys of the object.
 */
export function keys<T extends Record<string, any>>(obj: T) {
  'worklet';

  return Object.keys(obj) as (keyof T)[];
}

/**
 * Returns an array of the values of an object.
 * @param obj - The object to extract the values from.
 * @returns An array of the values of the object.
 */
export function values<T extends Record<string, any>>(obj: T) {
  'worklet';

  return Object.values(obj) as T[keyof T][];
}

/**
 * Creates a one-dimensional array of the specified length. The elements of the array are the numbers from 0 to length - 1.
 * @param length The length of the array.
 * @returns The one-dimensional array.
 */
export function array1d(length: number) {
  'worklet';

  return Array.from({ length }, (_, i) => i);
}
