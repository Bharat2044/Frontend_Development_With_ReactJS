console.log("Welcome to my todo app");

let btn = document.getElementById("btn");

// registration of event listener
btn.addEventListener("click", () => {
    console.log("Clicked");
});

btn.addEventListener("mouseover", handler);
function handler() {
    console.log("On Button");
}

btn.addEventListener("mouseout", () => {
    console.log("Out of Button");
});


btn.onclick = () => {
    console.log("Clicked");
}