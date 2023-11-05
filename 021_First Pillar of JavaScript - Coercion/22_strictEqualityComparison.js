console.log(10 === 10);
console.log(0 === -0);
console.log(10 === "10");
console.log("10" === "10");
console.log(10 === "Hi");
console.log("Hello" === "Hello");

console.log();

console.log(null === undefined);
console.log(null === NaN);
console.log(undefined === NaN);
console.log(undefined === undefined);
console.log(null === null);
console.log(NaN === NaN);
console.log("null" === undefined);

console.log();

console.log(0 === undefined);
console.log(0 === null);
console.log(0 === NaN);
console.log(5 === undefined);
console.log(5 === null);
console.log(5 === NaN);

console.log();

console.log(1 === true);
console.log(5 === true);
console.log(0 === true);
console.log(true === "1");
console.log(true === "5");
console.log(0 === false);

console.log();

let obj1 = {x: 10};
let obj2 = {x: 10, valueOf() {return 100;}};
let obj3 = {x: 10, toString() {return 100;}};

console.log(99 === obj1);
console.log(100 === obj1);
console.log(99 === obj2);
console.log(100 === obj2);
console.log(99 === obj3);
console.log(100 === obj3);
console.log(obj1 === obj2);
console.log(obj2 === obj3);

console.log();

let obj4 = {x: 10};
let obj5 = {x: 10};
let obj6 = {y: 10};

console.log(obj1 === obj1);
console.log(obj1 === obj2);
console.log(obj1 === obj3);
// console.log({x: 10} === {x: 10});