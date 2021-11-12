var arr1 = [1, 2, 3, 4, 5, 6, 7]; // 0 index 
           //0., 1, 2, 3, 4, 5, 6
// console.log(arr1);
var number = 35;

let declareArray = [];
// console.log(declareArray);

let arr2 = [41, "Goodbye", 4.77, (55/5), true, number, arr1]; //Bracket notation
// console.log(arr2[6][6]); //first [] is for the slot where the array is located
                        // second [] allows you to get into that second array

arr2[6].push(8);
// console.log(arr2);

const arr3 = ["Hello World", true, 3.14, (55/5), null, 10];

// console.log(arr1[arr1.length-1]);
// console.log(arr1[arr1.length]);
// for(let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }


// arr1.push("We just added this");
// console.log(arr1);

// let x = 100;
// arr1.push(x);
// console.log(arr1);
arr1.push(['a', 'b', 'c']);
console.log(arr1);

let removedItem = arr1.pop();
console.log(removedItem);
console.log(arr1);

let firstItem = arr1.shift();
console.log(firstItem);

console.log(arr1);
arr1.unshift(removedItem);
console.log(arr1);