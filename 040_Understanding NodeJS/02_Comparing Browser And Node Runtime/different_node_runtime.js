// const x = setTimeout(() => {
//     console.log("Completed Timer");
// }, 1000);


const x = setTimeout(function exec() {
    console.log("Completed Timer");
}, 1000);

console.log(x);
clearTimeout(x);