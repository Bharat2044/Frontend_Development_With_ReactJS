// set the properties
// document.getElementById("top-main-text").style.fontSize = "80px";
// document.getElementById("top-main-text").style.color = "yellow";
document.getElementById("top-main-text").style.cssText = ("color: yellow; font-size: 80px; letter-spacing: 10px;");

// find the properties
const x = document.getElementById("top-main-text").style.color;
console.log(x);

// remove letter-spacing properties
// document.getElementById("top-main-text").style.letterSpacing = "";

// add class
// console.log(document.getElementById("top-main-text"));
// console.log(document.getElementById("top-main-text").classList);
document.getElementById("top-main-text").classList.add("custom");

// remove class
document.getElementById("top-main-text").classList.remove("custom");

 