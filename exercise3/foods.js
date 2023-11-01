"use strict"

function calculateSubtotal(orders) {
    let sum = 0;
    let numOrders = orders.length;
    for (let i = 0; i < numOrders; i++) {
        sum += orders[i].price;
    }
    return sum;
}

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

let mealCost = calculateSubtotal(lunch);
let taxRate = 1.08
let tipRate = 1.12
let total = mealCost * tipRate * taxRate;
console.log("My meal costs " + total.toFixed(2))


let furnitureOrders = [
    { item: "Lazyboy Recliner, Blue", price: 788.95 },
    { item: "Fancy dinner table", price: 654.25 },
    { item: "Sectional, brown", price: 900.99 }
];
let furnitureSubtotal = calculateSubtotal(furnitureOrders)
console.log(furnitureSubtotal)