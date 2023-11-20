var teacher = "Sanket";

function fun() {
    console.log(teacher);
    // console.log(content);    // ReferenceError: Cannot access 'content' before initialization  -> Tempral Dead Zone Problem

    var teacher = "Pulkit";
    let content = "JS";

    if(content == "JS") {
        let hours = "120+";
        console.log(content, hours);
    }

    console.log(teacher, content);
}

fun();

console.log(teacher);
// console.log(content);    // ReferenceError: content is not defined