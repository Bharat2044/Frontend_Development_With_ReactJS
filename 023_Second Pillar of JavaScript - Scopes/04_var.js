console.log(a);
console.log(b);

var a = 1;

{
    var b = 2;
    console.log(a);
    console.log(b); 
}

function fun1() {
    var a = 5;
    var c = 33;

    console.log(a);
    console.log(b);
    console.log(c);
}

fun1();

console.log(a);
console.log(b);
// console.log(c);  // ReferenceError: c is not defined

{
    var a = 222;
    var b = 333;
}

console.log(a);
console.log(b);

function fun2() {
    var x = 100;
    console.log(x);
    // console.log(y);  // ReferenceError: y is not defined
    
    function fun3() {
        var y = 200;

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