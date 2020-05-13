"use strict";
//mountain is an object which is in an array []
//mountain couldve been any[] to say any array, but we are saying it must match interface mountain structure for every object in the array
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
//is undefined not needed since we know the interface requires a height
const findNameOfTallestMountain = (mountains) => {
    let tallestMountain = mountains[0];
    mountains.forEach((mountain) => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    });
    return tallestMountain.name;
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    { name: "shoes", price: 75 },
    { name: "cheeseburger", price: 5 },
    { name: "strawberry daquiry", price: 12 },
    { name: "toilet paper", price: 100 },
];
const calcAverageProductPrice = (array) => {
    let totalPrice = 0;
    array.forEach((element) => {
        totalPrice += element.price;
    });
    let averagePrice = totalPrice / array.length;
    return averagePrice;
};
console.log(calcAverageProductPrice(products));
let inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 },
];
const calcInventoryValue = (array) => {
    let totalPrice = 0;
    array.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
};
console.log(calcInventoryValue(inventory));
let inventoryValue = calcInventoryValue(inventory);
