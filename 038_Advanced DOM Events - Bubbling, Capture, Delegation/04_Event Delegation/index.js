document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer");

    outer.addEventListener("click", (e) => {        
        console.log(e.target);
    });
});