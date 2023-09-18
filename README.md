# react-native-worklet-functions
Util functions available on UI thread in React Native

## Motivation
One of the keys to make smooth animations in React Native is to run animation logic on UI thread. <br/>
But when you make animation with utils like lodash, you have to make them "worklet" to run it on UI thread. <br/>
With these utils, you can use lodash functions on UI thread.

## Usage
You can use these functions on UI thread.
```TypeScript
import { random } from 'react-native-worklet-functions';

const tap = Gesture.Tap()
  .runOnJS(false)
  .onEnd(() => {
    // This callback func runs on UI thread
    width.value = withTiming(random(100, 300));
    height.value = withTiming(random(100, 300));
  });
```
### Methods
| Name                          | Description                                                                                                                                                                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `add(a:number, b:number)`      | Add a, b |
| `subtract(a:number, b:number)` | Subtract a, b  |
| `multiply(a:number, b:number)` | Multiply a, b |
| `divide(a:number, b:number)`   | Divide a, b  |
| `min(...args:number[])`        | Return the smallest number among the arguments |
| `max(...args:number[])`        | Return the largest number among the arguments  |
| `round(value:number, precision:number)` | Round the value to the nearest integer or to the specified decimal places  |
| `floor(value:number, precision:number)` | Round the value down to the nearest integer or to the specified decimal places  |
| `ceil(value:number, precision:number)`  | Round the value up to the nearest integer or to the specified decimal places  |
| `abs(value:number)`            | Return the absolute value of the number  |
| `sqrt(value:number)`           | Return the square root of the number  |
| `toDeg(rad:number)`            | Convert radians to degrees  |
| `toRad(deg:number)`            | Convert degrees to radians  |
| `between(value:number, lower:number, upper:number)` | Check if the value is between lower and upper, inclusive  |
| `sample(arr:T[])`                       | Return a random element from an array |
| `sampleSize(arr:T[], n:number)`         | Return n random unique elements from an array |
| `random(min:number, max:number)`        | Generate a random integer between min and max, inclusive |
| `clamp(value:number, lower:number, upper:number)` | Clamp a number between lower and upper bounds |
| `nth(arr:T[], index:number)`            | Return the nth element from an array |
| `head(arr:T[])`                         | Return the first element from an array |
| `tail(arr:T[])`                         | Return the last element from an array |
| `zipObject(props:T[], values:U[])`      | Create an object from arrays of keys and values |
| `chunk(arr:T[], size:number)`           | Split array into chunks of length size |
| `take(arr:T[], n:number)`               | Take the first n elements from an array |
| `without(arr:T[], ...values:T[])`       | Remove all instances of values from an array |
| `shuffle(arr:T[])`                      | Shuffle the elements of an array |
| `debounce(func:T, wait:number)`         | Debounce a function by wait milliseconds |
| `throttle(func:T, wait:number)`         | Throttle a function by wait milliseconds |
| `isNull(value:any)`                     | Check if a value is null |
| `isUndefined(value:any)`                | Check if a value is undefined |
| `isEqual(a:any, b:any)`                 | Check if two values are equal |
| `isNil(value: any)`     | Check if a value is null or undefined |
| `range(start:number, end:number, step:number)` | Generate an array of numbers from start to end, incrementing by step |
