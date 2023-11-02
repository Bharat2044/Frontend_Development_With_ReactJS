let obj1 = {};
console.log(obj1.toString());
console.log(obj1.valueOf());

console.log();

let obj2 = {
    name: "Bharat",
    id: 101
};
console.log(obj2.toString());
console.log(obj2.valueOf());

console.log();

let obj3 = {
    toString() {
        // by default gives [object Object]
        return "Let's Learn JavaScript";
    }
};
console.log(obj3.toString());
console.log(typeof(obj3.toString()));
console.log(obj3.valueOf());
console.log(typeof obj3.valueOf());

console.log();

let obj4 = {
    x: 10,
    valueOf() {
        return 15;
    }
};
console.log(obj4.toString());
console.log(typeof(obj4.toString()));
console.log(obj4.valueOf());
console.log(typeof obj4.valueOf());

console.log();

let arr1 = [];
console.log(arr1.toString());
console.log(arr1.valueOf());

console.log();

let arr2 = [1, 'Bharat', true];
console.log(arr2.toString());
console.log(arr2.valueOf());

console.log();