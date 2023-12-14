let d = document.getElementById("div");

d.addEventListener("click", () => {
    console.log("Clicked");
})

let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Clicked Button");
})