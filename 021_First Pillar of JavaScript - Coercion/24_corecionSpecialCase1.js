// ToString -> "" + value
console.log("" + 0);        // 0 -> "0"
console.log("" + (+0));     // +0 -> "0"
console.log("" + (-0));     // -0 -> "0"
console.log("" + (+5));     // -0 -> "0"
console.log("" + (-5));     // -0 -> "0"
console.log("" + NaN);
console.log("" + undefined);
console.log("" + null);

console.log();

console.log("" + []);       // [] -> ""
console.log("" + [1, "Ram", true]);       // [1, "Ram", true] -> "1,Ram,true"
console.log("" + [null, undefined]);      // [null, undefined] -> ","
console.log("" + [1, 2, null, 3, undefined, 4]);     // [1, 2, null, 3, undefined, 4] -> "1,2,,3,,4"

console.log();

console.log("" + {});               // {} -> "[object Object]"
console.log("" + {a: 10});          // {a: 10} -> "0"
console.log("" + {a: 10, toString() {return 10;}});      // {a: 10, toString() {return 10;}} -> "10"
console.log("" + {a: 10, toString() {return null;}});    // {a: 10, toString() {return null;}} -> "null"

console.log();

// ToNumber
console.log(0 - "10");
console.log(0 - "010");
console.log(0 - "b10");
console.log(0 - "o10");
console.log(0 - "x10");

console.log(0 - "0b10");
console.log(0 - "0o10");
console.log(0 - "0x10");