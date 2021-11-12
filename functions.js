// function // <-- always the start of every function declaration 
// function name // <-- name it like a variable 
// function name () //<-- parameters would go there
// function name () {} //<-- within the curly braces is the logic of the funcion

let x = oneParameter(10); // the number '10' is an argument
console.log(x / 5);

function noParameters() {
    return 5 + 5;
}

function noReturnStatement() {
    console.log(5 + 15);
}

function oneParameter(val) { // val is an empty variable
    return val;
}

function callingAnother(val) {
    return val * 10;
}

function twoParameters(a, b) {
    if (a > b) {
        return 1;
    } else if ( a < b) {
        return -1;
    } else {
        console.log("I'm not returning anything");
    }
}