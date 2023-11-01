"use strict"

function calculateSubtotal(orders) {
    let sum = 0;
    let numOrders = orders.length;
    for (let i = 0; i < numOrders; i++) {
        sum += orders[i].price;
    }
    return sum;
}