let div = document.getElementById("outer");
let img = document.getElementById("img");
let btn = document.getElementById("btn");

// console.log(img.getAttribute("data-toggle"));

img.addEventListener("click", (e) => {
    let toggle = img.getAttribute("data-toggle");
    
    if(toggle === "0") {
        img.src = "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D";
        img.setAttribute("data-toggle", "1");
    }
    else {
        img.src = "https://i.pinimg.com/564x/fe/cc/e2/fecce21a45182a1d0299de9e10e1b84d.jpg";
        img.setAttribute("data-toggle", "0");
    }

    console.log("image clicked");
    console.log(img.getAttribute("data-toggle"));
});

btn.addEventListener("click", () => {
    if(div.style.display != 'none') {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
    }
});

div.addEventListener("click", () => {
    console.log("div clicked");
    
    if(div.style.padding == '20px') {
        div.style.padding = '40px';
    } else {
        div.style.padding = '20px';
    }
}, {capture: true});