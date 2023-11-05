// ToNumber
console.log(0 - "10");
console.log(0 - "010");
console.log(0 - "b10");
console.log(0 - "o10");
console.log(0 - "x10");

console.log(0 - "0b10");
console.log(0 - "0o10");
console.log(0 - "0x10");

console.log();

console.log(0 - 10);
// console.log(0 - 010);
console.log(0 - 0b10);
console.log(0 - 0o12);
console.log(0 - 0xb);

console.log();

console.log(0 - []);
console.log(5 - []);
console.log([] - 1);
console.log([""] - 1);
console.log(["0"] - 1);
console.log(5 - [1, 5]);