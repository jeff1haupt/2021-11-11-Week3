function subTotal(prod1, prod2, prod3) {
    return prod1 + prod2 + prod3;
}

function totalPrice(sub) { // the value stored in customerSubTotal
    let taxRate = 1.08;
    return sub * taxRate; 
}

let customerSubTotal = subTotal(3.99, 10, 1.50);
console.log(customerSubTotal)
let customerTotal = totalPrice(customerSubTotal); //subtotal will happen first, then totalPrice will happen next

console.log(customerTotal); // the value returned from subtotal * tax rate