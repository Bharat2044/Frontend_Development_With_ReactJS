function fun() {
    var x = 10;

    function gun() {
        var y = 20;

        console.log(x);
        console.log(y);
    }

    gun();
    console.log(x);
    // console.log(y);  // ReferenceError: y is not defined
}

fun();