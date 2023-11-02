let obj1 = {};
console.log(10 - obj1);
console.log(10 + obj1);

console.log();

let obj2 = {x: 10, y: 20};
console.log(10 - obj2);
console.log(10 + obj2);

console.log();

let obj3 = {x: 10, valueOf() {return 99}};
console.log(10 - obj3);
console.log(10 + obj3);

console.log();

let obj4 = {x: 10, toString() {return "2"}};
console.log(10 - obj4);
console.log(10 + obj4);

console.log();

let obj5 = {x: 10, valueOf() {return {}}};
console.log(10 - obj5);
console.log(10 + obj5);

console.log();

let obj6 = {x: 10, toString() {return {}}};
// console.log(10 - obj6);  // TypeError: Cannot convert object to primitive value
// console.log(10 + obj6);  // TypeError: Cannot convert object to primitive value