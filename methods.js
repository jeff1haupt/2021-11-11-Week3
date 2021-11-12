//Filter method

// let arrFilter = [91, 1048, -14000, 315, 44331];
// let resultsFilter = arrFilter.filter( num => num > 100); //What is this? 

// console.log(resultsFilter);
// console.log(arrFilter);

// Map method
// let employeeAges = [55, 32, 67, 59, 20, 70];
// let retirementEligible = employeeAges.map( function (emp) {
//     return emp * emp;
// });

// console.log(employeeAges);
// console.log(retirementEligible);


// // // Reduce method
// let itemPrices = [1, 2, 3, 4, 5]; 
let subTotal = itemPrices.reduce( function (a, c) {
    console.log("Accumulator value is currently " + a +". Current value is set at " + c);
    return a + c; 
});

// console.log(itemPrices);
// console.log(subTotal);


// Sort method
// let stringArray = ["here", "are", "five", "different", "words"];
// console.log(stringArray);

// stringArray.sort(); 
// console.log(stringArray);


// let numArrays = [499, -12, 0, 88, 3.14];
// numArrays.sort();
// console.log(numArrays);

// numArrays.sort( function(a, b) {
//     return a - b;
// })
// console.log(numArrays);


// Splice method
let array = [1, 4, "Hello", "C++", "Java", 1.07];

console.log(array);

let returned = array.splice(0, 2); // index '4', 2nd number is how many items to remove
// negative index will start at the end of the array
console.log(returned);
console.log(array);
