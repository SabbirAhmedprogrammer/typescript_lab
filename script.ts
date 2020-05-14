"use strict";

interface Mountain {
    name: string,
    height: number
}
//mountain is an object which is in an array []
//mountain couldve been any[] to say any array, but we are saying it must match interface mountain structure for every object in the array
let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];


//is undefined not needed since we know the interface requires a height
const findNameOfTallestMountain = (mountains: Mountain[]): string | undefined => {
    let tallestMountain = mountains[0];
    mountains.forEach((mountain) => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    })
    return tallestMountain.name
}
let theTallestMountain = findNameOfTallestMountain(mountains)
console.log(theTallestMountain);

//products

interface Product {
    name: string,
    price: number
}

let products: Product[] = [
    { name: "shoes", price: 75 },
    { name: "cheeseburger", price: 5 },
    { name: "strawberry daquiry", price: 12 },
    { name: "toilet paper", price: 100 },
];

//the array after this line, needs to be an array of objects where each object meets the criteria of the Product interface. 
const calcAverageProductPrice = (array: Product[]): number => {
    let totalPrice = 0;
    array.forEach((element) => {
        totalPrice += element.price
    });
    let averagePrice = totalPrice / array.length
    return averagePrice

};
let allProductAverage = calcAverageProductPrice(products);
console.log(allProductAverage);

//inventory

interface InventoryItem {
    product: Product,
    quantity: number
}

let inventory: InventoryItem[] = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 },
]


const calcInventoryValue = (array: InventoryItem[]): number => {
    let totalPrice = 0;
    array.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
    })
    return totalPrice;
}

let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);



