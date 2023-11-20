// console.log(a);  // ReferenceError: Cannot access 'a' before initialization
// console.log(b);  // ReferenceError: b is not defined

let a = 1;

{
    let b = 2;
    console.log(a);
    console.log(b); 
}

function fun1() {
    let a = 5;
    let c = 33;

    console.log(a);
    // console.log(b); // ReferenceError: b is not defined
    console.log(c);
}

fun1();

console.log(a);
// console.log(b); // ReferenceError: b is not defined
// console.log(c);  // ReferenceError: c is not defined

{
    let a = 222;
    let b = 333;
}

console.log(a);
// console.log(b);  // ReferenceError: b is not defined

function fun2() {
    let x = 100;
    console.log(x);
    // console.log(y);  // ReferenceError: y is not defined
    
    function fun3() {
        let y = 200;

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


a = 10001;
console.log(a);