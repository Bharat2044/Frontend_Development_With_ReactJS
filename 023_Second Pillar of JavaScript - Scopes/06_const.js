// console.log(a);  // ReferenceError: Cannot access 'a' before initialization
// console.log(b);  // ReferenceError: b is not defined

const a = 1;

{
    const b = 2;
    console.log(a);
    console.log(b); 
}

function fun1() {
    const a = 5;
    const c = 33;

    console.log(a);
    // console.log(b); // ReferenceError: b is not defined
    console.log(c);
}

fun1();

console.log(a);
// console.log(b); // ReferenceError: b is not defined
// console.log(c);  // ReferenceError: c is not defined

{
    const a = 222;
    const b = 333;
}

console.log(a);
// console.log(b);  // ReferenceError: b is not defined

function fun2() {
    const x = 100;
    console.log(x);
    // console.log(y);  // ReferenceError: y is not defined
    
    function fun3() {
        const y = 200;

        console.log(x);
        console.log(y);
    }

    fun3();
    console.log(x);
    // console.log(y);  // ReferenceError: y is not defined
}

fun2();

// console.log(x); // ReferenceError: x is not defined
// console.log(y);  // ReferenceError: y is not defined


// a = 10001;   // TypeError: Assignment to constant variable.
console.log(a);