let obj1 = {};
console.log(obj1.toString());
console.log(typeof obj1.toString());
console.log();

let obj2 = {x: 10};
console.log(obj2.toString());
console.log(typeof obj2.toString());
console.log();

let obj3 = {
    x: 10,
    toString() {
        return 10;
    }
};
console.log(obj3.toString());
console.log(typeof obj3.toString());
console.log();

let obj4 = {
    x: 10,
    valueOf() {
        return "Hi";
    }
};
console.log(obj4.toString());
console.log(typeof obj4.toString());
console.log();

let obj5 = {
    x: 10,
    toString() {
        return "Hi";
    }
};
console.log(obj5.toString());
console.log(typeof obj5.toString());
console.log();

let obj6 = {
    x: 10,
    valueOf() {
        return "Hi";
    },
    toString() {
        return 10;
    }
};
console.log(obj6.toString());
console.log(typeof obj6.toString());
console.log();