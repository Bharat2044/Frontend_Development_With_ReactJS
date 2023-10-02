let a = 5;
let b = 12;
let c = 5;

if((a == b) && (b == c) && (a == c)) {
    console.log("Equilateral Triangle");
}
else if((a == b) || (b == c) || (a == c)) {
    console.log("Isosceles Triangle");
}
else{
    console.log("Scalene Triangle");
}