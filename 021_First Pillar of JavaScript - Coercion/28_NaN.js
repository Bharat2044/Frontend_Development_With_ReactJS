console.log(Number('123'));
console.log(Number('abcd'));
console.log(0xA);

console.log();

let x = NaN;
console.log(x == NaN);
console.log(isNaN(x));
console.log(Number.isNaN(x));

console.log();

console.log(isNaN("10"));
console.log(Number.isNaN("10"));
console.log(isNaN("Hello"));
console.log(Number.isNaN("Hello"));

console.log();

if((typeof(x) === 'number') && (x != x)) {
    console.log(true);
} else {
    console.log(false);
}