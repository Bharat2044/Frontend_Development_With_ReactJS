let age = 20;
console.log("My age = " + age);
console.log("My age = ", age);
console.log(`My age = ${age}`);

console.log();

let obj1 = {x: 10, y: 20};
console.log(obj1);
console.log(`${obj1}`);
console.log("Object1 = " + obj1);
console.log("Object1 = ", obj1);
console.log(`Object1 = ${obj1}`);

console.log("Object1 x value = " + obj1.x);
console.log("Object1 x value = ", obj1.x);
console.log(`Object1 x value = ${obj1.x}`);

console.log();

let obj2 = {x: 10, toString() {return 44;}};
console.log(obj2);
console.log(`${obj2}`);
console.log("Object2 = " + obj2);
console.log("Object2 = ", obj2);
console.log(`Object2 = ${obj2}`);
console.log("Object2 x value = " + obj2.x);
console.log("Object2 x value = ", obj2.x);
console.log(`Object2 x value = ${obj2.x}`);