if(true) {
    var x = 10;
}

console.log(x);

if(false) {
    var y = 20;
}

console.log(y);

function fun1() {
    var a = 111;
}
// console.log(a);  // ReferenceError: a is not defined

function fun2() {
    console.log(b);
    var b = 222;
}

fun2();