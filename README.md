# react-native-worklet-functions

Util functions available on UI thread in React Native

## Installation

Install the library using yarn:

```sh
yarn add react-native-worklet-functions
```

Or using npm:

```sh
npm install react-native-worklet-functions
```

## Motivation

One of the keys to make smooth animations in React Native is to run animation logic on UI thread. <br/>
But when you make animation with utils like lodash, you have to make them "workletized function" to run on UI thread. <br/>
With this library, you can use useful util functions on UI thread directly.

## Usage

Use workletized functions on UI thread directly.

```TypeScript
import { random } from 'react-native-worklet-functions';

const tap = Gesture.Tap()
  .onEnd(() => {
    // You can use util functions on UI thread
    width.value = withTiming(random(100, 300));
    height.value = withTiming(random(100, 300));
  });
```

### Methods

#### String

| Name                     | Description                      |
| ------------------------ | -------------------------------- |
| `camelCase(str:string)`  | Converts a string to camel case  |
| `snakeCase(str:string)`  | Converts a string to snake case  |
| `kebabCase(str:string)`  | Converts a string to kebab case  |
| `pascalCase(str:string)` | Converts a string to Pascal case |

#### Color

| Name                                           | Description                                                                                    |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `rgb(r:number, g:number, b:number)`            | Converts the given RGB values to a CSS RGB string.                                             |
| `rgba(r:number, g:number, b:number, a:number)` | Returns the RGBA color value as a string.                                                      |
| `hslToRgb(h:number, s:number, l:number)`       | Converts HSL (Hue, Saturation, Lightness) color values to RGB (Red, Green, Blue) color values. |
| `hexToRgb(hex:string)`                         | Converts a hexadecimal color code to an RGB color array.                                       |
| `hexToHsl(hex:string)`                         | Converts a hexadecimal color code to HSL (Hue, Saturation, Lightness) format.                  |

#### Util

| Name                                                 | Description                                                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `array1d(length: number)`                            | Creates a one-dimensional array of the specified length. The elements of the array are the numbers from 0 to length - 1. |
| `chunk(arr: T[], size: number)`                      | Divide array into chunks of size                                                                                         |
| `clamp(value: number, lower: number, upper: number)` | Clamp a number between lower and upper limits                                                                            |
| `concat(...args: any[][])`                           | Concatenate multiple arrays                                                                                              |
| `count(arr: any[])`                                  | Get the length of the array                                                                                              |
| `debounce(func: T, wait = 0)`                        | Debounce function calls                                                                                                  |
| `find(arr: T[], predicate: (v: T) => boolean)`       | Find first element that satisfies the predicate                                                                          |
| `findIndex(arr: T[], predicate: (v: T) => boolean)`  | Find index of the first element that satisfies the predicate                                                             |
| `groupBy(arr: Array<T>, iteratee: (v: T) => any)`    | Group elements in array based on iteratee                                                                                |
| `head(arr: T[])`                                     | Get the first element of an array                                                                                        |
| `isEmpty(arr: any[])`                                | Check if array is empty                                                                                                  |
| `isEqual(a: any, b: any)`                            | Check if two values are equal                                                                                            |
| `isNil(value: T)`                                    | Check if value is null or undefined                                                                                      |
| `isNull(value: any)`                                 | Check if value is null                                                                                                   |
| `isUndefined(value: any)`                            | Check if value is undefined                                                                                              |
| `keys(obj: T)`                                       | Get keys of an object                                                                                                    |
| `nth(arr: T[], index: number)`                       | Get the nth element of an array                                                                                          |
| `random(min: number, max: number)`                   | Generate a random number between min and max                                                                             |
| `range(start: number, end: number, step = 1)`        | Generate an array of numbers between start and end, stepping by step                                                     |
| `sample(arr: T[])`                                   | Pick a random element from an array                                                                                      |
| `sampleSize(arr: T[], n: number)`                    | Pick n random elements from an array                                                                                     |
| `shuffle(arr: T[])`                                  | Shuffle an array                                                                                                         |
| `tail(arr: T[])`                                     | Get the last element of an array                                                                                         |
| `take(arr: T[], n: number)`                          | Take first n elements of an array                                                                                        |
| `throttle(func: T, wait = 0)`                        | Throttle function calls                                                                                                  |
| `times(n: number, iteratee: (index: number) => T)`   | Repeat an action n times and collect results                                                                             |
| `values(obj: T)`                                     | Get values of an object                                                                                                  |
| `without(arr: T[], ...values: T[])`                  | Remove specified values from an array                                                                                    |
| `zip(arr1: T[], arr2: U[])`                          | Zip two arrays together                                                                                                  |
| `zipObject(props: T[], values: U[])`                 | Create an object from arrays of keys and values                                                                          |

#### Math

| Name                                                   | Description                                                                      |
| ------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `abs(value: number)`                                   | Return the absolute value of the number                                          |
| `acos(value: number)`                                  | Calculates the arccosine of a number in radians                                  |
| `add(a: number, b: number)`                            | Add a, b                                                                         |
| `asin(value: number)`                                  | Calculates the arcsine of a number in radians                                    |
| `atan(value: number)`                                  | Calculates the arctangent of a number in radians                                 |
| `atan2(y: number, x: number)`                          | Calculates the arctangent of the quotient of its arguments (y, x) in radians     |
| `between(value: number, lower: number, upper: number)` | Check if the value is between lower and upper, inclusive                         |
| `ceil(value: number, precision = 0)`                   | Round the value up to the nearest integer or to the specified decimal places     |
| `cos(radian: number)`                                  | Calculates the cosine of a given angle in radians                                |
| `divide(a: number, b: number)`                         | Divide a, b                                                                      |
| `floor(value: number, precision = 0)`                  | Round the value down to the nearest integer or to the specified decimal places   |
| `max(...args: number[])`                               | Return the largest number among the arguments                                    |
| `median(...args: number[])`                            | Return the median of an array of numbers                                         |
| `min(...args: number[])`                               | Return the smallest number among the arguments                                   |
| `multiply(a: number, b: number)`                       | Multiply a, b                                                                    |
| `round(value: number, precision = 0)`                  | Round the value to the nearest integer or to the specified decimal places        |
| `sin(radian: number)`                                  | Calculates the sine of a given angle in radians                                  |
| `sqrt(value: number)`                                  | Return the square root of the number                                             |
| `subtract(a: number, b: number)`                       | Subtract a, b                                                                    |
| `tan(radian: number)`                                  | Calculates the tangent of a given angle in radians                               |
| `toDeg(rad: number)`                                   | Convert radians to degrees                                                       |
| `toRad(deg: number)`                                   | Convert degrees to radians                                                       |
| `isOdd(v: number)`                                     | Checks if a number is odd. Returns true if the number is odd, false otherwise.   |
| `isEven(v: number)`                                    | Checks if a number is even. Returns true if the number is even, false otherwise. |

#### Vector

| Name                                                  | Description                                 |
| ----------------------------------------------------- | ------------------------------------------- |
| `vec(x: number, y?: number)`                          | Create a vector                             |
| `vector.add(v1: Vector, v2: Vector \| number)`        | Add two vectors or add a scalar to a vector |
| `vector.subtract(v1: Vector, v2: Vector \| number)`   | Subtract a vector or scalar from a vector   |
| `vector.divide(v1: Vector, v2: Vector \| number)`     | Divide a vector or scalar by a vector       |
| `vector.multiply(v1: Vector, v2: Vector \| number)`   | Multiply a vector or scalar by a vector     |
| `vector.distance(v1: Vector, v2: Vector)`             | Calculate distance between two vectors      |
| `vector.angleBetween(v1: Vector, v2: Vector)`         | Calculate angle between two vectors         |
| `vector.normalize(v: Vector)`                         | Normalize a vector                          |
| `vector.dot(v1: Vector, v2: Vector)`                  | Dot product of two vectors                  |
| `vector.cross(v1: Vector, v2: Vector)`                | Cross product of two vectors                |
| `vector.magnitude(v: Vector)`                         | Calculate the magnitude of a vector         |
| `vector.rotate(v: Vector, radian: number)`            | Rotate a vector by a given radian           |
| `vector.lerp(v1: Vector, v2: Vector, amount: number)` | Linearly interpolate between two vectors    |
| `vector.clone(v: Vector)`                             | Clone a vector                              |
