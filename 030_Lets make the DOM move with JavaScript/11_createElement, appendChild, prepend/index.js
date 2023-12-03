let x = document.createElement("div");
x.textContent = "Hi There";
console.log(x);
console.log(typeof x);

// document.querySelector(".section-light").innerHTML = x;
document.querySelector(".section-light").appendChild(x);
document.querySelector(".section-light").prepend(x);
document.querySelector(".section-light").removeChild(x);