let x = document.getElementById("header-image").innerHTML;
console.log(x);
console.log(typeof x);

let y = document.getElementById("header-image").innerText;
console.log(y);
console.log(typeof y);


// document.getElementById("header-image").innerText = "I am an H1";
document.getElementById("header-image").innerHTML = "<h1>I am an H1</h1>";