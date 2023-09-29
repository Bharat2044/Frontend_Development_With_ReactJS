// 1. Assignment operator (=)
let a = 20;
console.log(a);

// 2. Addition assignment operator (+=)
let b = 20;
b += 10;
console.log(b);

// 3. Subtraction assignment operator (-=)
let c = 20;
c -= 10;
console.log(c);

// 4. Multiplication assignment operator (*=)
let d = 20;
d *= 10;
console.log(d);

// 5. Division assignment operator (/=)
let e = 20;
e /= 10;
console.log(e);

// 6. Remainder assignment operator (%=)
let f = 20;
f %= 10;
console.log(f);

// 7. Exponentiation assignment operator (**=)
let g = 3;
g **= 3;
console.log(g);

// 8. Logical AND assignment operator (&&=)
let h = true;
h &&= false;
console.log(h);

// 9. Logical OR assignment operator (||=)
let i = true;
i ||= false;
console.log(i);

// 10. Logical NOT assignment operator (!=)
let j = true;
j != false;
console.log(j);

// 11. Bitwise AND assignment operator (&=)
let k = 2;
k &= 2;
console.log(k);

// 12. Bitwise OR assignment operator (|=)
let l = 2;
l |= 2;
console.log(l);

// 13. Bitwise XOR assignment operator (^=)
let m = 2;
m ^= 2;
console.log(m);

// 14. Left shift assignment operator (<<=)
let n = 2;
n <<= 2;
console.log(n);

// 15. Right shift assignment operator (>>=)
let o = 2;
o >>= 2;
console.log(o);

//16. Unsigned right shift assignment operator (>>>=)
let p = 2;
o >>>= 2;
console.log(p);

// 17. Nullish coalescing assignment operator (??=)  =>  only assigns if x is nullish
let q = 1;
q ??= console.log("y evaluated");
console.log(q);