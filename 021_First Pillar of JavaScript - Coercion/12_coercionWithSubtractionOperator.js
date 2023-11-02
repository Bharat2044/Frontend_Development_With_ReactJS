console.log(10 - 5);
console.log("10" - 5);
console.log(10 - "5");
console.log("10" - "5");

console.log();

console.log(10 - {});
console.log(10 - {a: 10, b: 20});
console.log(10 - {a: 10, valueOf() {return 8}});
console.log(10 - {a: 10, valueOf() {return "8"}});
console.log(10 - {a: 10, valueOf() {return "Hi"}});
console.log(10 - {a: 10, toString() {return 8}});
console.log(10 - {a: 10, toString() {return "8"}});
console.log(10 - {a: 10, toString() {return "Hi"}});