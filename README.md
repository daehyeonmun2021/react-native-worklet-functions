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
  .runOnJS(false)
  .onEnd(() => {
    // This callback function runs on UI thread
    width.value = withTiming(random(100, 300));
    height.value = withTiming(random(100, 300));
  });
```

### Methods

| Name                                                | Description                                                                                   |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `abs(value:number)`                                 | Return the absolute value of the number                                                       |
| `add(a:number, b:number)`                           | Add a, b                                                                                      |
| `between(value:number, lower:number, upper:number)` | Check if the value is between lower and upper, inclusive                                      |
| `ceil(value:number, precision:number)`              | Round the value up to the nearest integer or to the specified decimal places                  |
| `chunk(arr:T[], size:number)`                       | Split array into chunks of length size                                                        |
| `clamp(value:number, lower:number, upper:number)`   | Clamp a number between lower and upper bounds                                                 |
| `concat(...args:any[][])`                           | Concatenate arrays or values into a single array.                                             |
| `count(arr:any[])`                                  | Return the length of an array.                                                                |
| `debounce(func:T, wait:number)`                     | Debounce a function by wait milliseconds                                                      |
| `divide(a:number, b:number)`                        | Divide a, b                                                                                   |
| `find(arr:T[], predicate:Function)`                 | Return the first element that matches the predicate. Returns `undefined` if none found.       |
| `findIndex(arr:T[], predicate:Function)`            | Return the index of the first element that matches the predicate. Returns `-1` if none found. |
| `floor(value:number, precision:number)`             | Round the value down to the nearest integer or to the specified decimal places                |
| `groupBy(arr:T[], iteratee:Function)`               | Group an array into an object where the keys are produced by the iteratee function.           |
| `head(arr:T[])`                                     | Return the first element from an array                                                        |
| `isEmpty(arr:any[])`                                | Check if an array is empty. Returns `true` if empty, `false` otherwise.                       |
| `isEqual(a:any, b:any)`                             | Check if two values are equal                                                                 |
| `isNil(value: any)`                                 | Check if a value is null or undefined                                                         |
| `isNull(value:any)`                                 | Check if a value is null                                                                      |
| `isUndefined(value:any)`                            | Check if a value is undefined                                                                 |
| `keys(obj:T)`                                       | Return an array of the own enumerable properties of an object.                                |
| `max(...args:number[])`                             | Return the largest number among the arguments                                                 |
| `median(...args:number[])`                          | Return the median of an array of numbers.                                                     |
| `min(...args:number[])`                             | Return the smallest number among the arguments                                                |
| `multiply(a:number, b:number)`                      | Multiply a, b                                                                                 |
| `nth(arr:T[], index:number)`                        | Return the nth element from an array                                                          |
| `random(min:number, max:number)`                    | Generate a random integer between min and max, inclusive                                      |
| `range(start:number, end:number, step:number)`      | Generate an array of numbers from start to end, incrementing by step                          |
| `round(value:number, precision:number)`             | Round the value to the nearest integer or to the specified decimal places                     |
| `sample(arr:T[])`                                   | Return a random element from an array                                                         |
| `sampleSize(arr:T[], n:number)`                     | Return n random unique elements from an array                                                 |
| `shuffle(arr:T[])`                                  | Shuffle the elements of an array                                                              |
| `sqrt(value:number)`                                | Return the square root of the number                                                          |
| `subtract(a:number, b:number)`                      | Subtract a, b                                                                                 |
| `tail(arr:T[])`                                     | Return the last element from an array                                                         |
| `take(arr:T[], n:number)`                           | Take the first n elements from an array                                                       |
| `throttle(func:T, wait:number)`                     | Throttle a function by wait milliseconds                                                      |
| `times(n:number, iteratee:Function)`                | Calls the iteratee function n times and stores the results in an array.                       |
| `toDeg(rad:number)`                                 | Convert radians to degrees                                                                    |
| `toRad(deg:number)`                                 | Convert degrees to radians                                                                    |
| `values(obj:T)`                                     | Return an array of the own enumerable property values of an object.                           |
| `without(arr:T[], ...values:T[])`                   | Remove all instances of values from an array                                                  |
| `zip(arr1:T[], arr2:U[])`                           | Zip two arrays into an array of pairs. Shortest array length is used.                         |
| `zipObject(props:T[], values:U[])`                  | Create an object from arrays of keys and values                                               |
| `size(width: number, height?: number)`            | Create an object with following utility properties and methods. This object contains: <br><br> <ul><li> **width** (number): The width of the object. </li><li> **height** (number): The height of the object. If not provided, defaults to the value of `width`. </li><li> **styleObj** (Object): An object containing the width and height as properties. </li><li> **tuple** ([number, number]): A tuple representing the width and height. </li><li> **getCenter(x?: number, y?: number)** (Function): A method that returns the center of the object. <br><br> **Subfunctions**:<br> <table><tr><th>Method</th><th>Description</th><th>Example</th></tr><tr><td>`getCenter(x?: number, y?: number)`</td><td>Calculates and returns the center coordinates of the object, relative to optional x and y parameters.</td><td>```const mySize = size(10, 20);  const center = mySize.getCenter(10, 10);```</td></tr></table> </li></ul> |