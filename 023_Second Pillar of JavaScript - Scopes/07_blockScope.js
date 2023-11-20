{
    let x = 10;
}

// console.log(x);  // ReferenceError: x is not defined

function fun2() {
    // console.log(b);  // ReferenceError: Cannot access 'b' before initialization
    let b = 222;
}

fun2();