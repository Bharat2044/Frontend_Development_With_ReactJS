/**
 * 
 * Implement a function makeCounter that accepts an optional integer 
 * value and returns a function. When the returned function is called 
 * initially, it returns the initial value if provided, otherwise 0. 
 * The returned function can be called repeatedly to return 1 more than 
 * the return value of the previous invocation.
 * 
 * Examples:
 * const counter = makeCounter();
 * counter(); // 0
 * counter(); // 1
 * counter(); // 2
 * 
 * With a custom initial value:
 * const counter = makeCounter(5);
 * counter(); // 5
 * counter(); // 6
 * counter(); // 7
 */

export default function makeCounter(initialValue = 0) {
    throw 'Not implemented';
}
