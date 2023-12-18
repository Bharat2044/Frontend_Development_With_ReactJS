// const searchingFunctions = require("./searching");
// console.log(searchingFunctions);

// console.log(searchingFunctions.linearSearch([1, 5, 3, 12, 2, 8, 4], 12));
// console.log(searchingFunctions.binarySearch([1, 2, 3, 4, 6, 7, 8, 9, 12], 7));


// destructuring
// const {linearSearch, binarySearch} = require("./searching");

// console.log(linearSearch([1, 5, 3, 12, 2, 8, 4], 12));
// console.log(binarySearch([1, 2, 3, 4, 6, 7, 8, 9, 12], 7));


// destructuring with alias
const {linearSearch: ls, binarySearch: bs} = require("./searching");    // named export

console.log(ls([1, 5, 3, 12, 2, 8, 4], 12));
console.log(bs([1, 2, 3, 4, 6, 7, 8, 9, 12], 7));


const basicSorting = require("./sorting");
let arr = [1, 11, 2, 45, 23, 22, 67, 8];

basicSorting.bubbleSort(arr);
console.log(arr);


const QuickSort = require("./quickSort");   // default export
let arr2 = [1, 11, 2, 45, 23, 22, 67, 8];

QuickSort(arr2);

console.log(arr2);