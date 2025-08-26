"use strict";

// --- DO NOT EDIT THIS OBJECT ---
const product = {
    itemName: "Ergonomic Mouse",
    stock: 15,
    actions: {
        updateStock(amount) {
            this.stock -= amount;
            console.log(
                `Stock updated. New stock for ${this.itemName}: ${this.stock}`
            );
            return this.stock;
        },
        displayStock() {
            console.log(`${this.itemName} has ${this.stock} units in stock.`);
        },
    },
};

// --- This represents a user's shopping cart ---
const userCart = {
    owner: "Alice",
    items: [],
    // This cart needs a way to check stock, but we don't want to duplicate code.
};

// --- This simulates a DOM element for user interaction ---
const addToCartButton = {
    // This button needs to trigger the stock update when clicked.
    // A real implementation would use document.querySelector, but we simulate it here.
    addEventListener: function (eventName, callback) {
        if (eventName === "click") {
            console.log("Event listener attached to the button.");
            // Simulating a click event. In a real scenario, the browser calls this.
            callback();
        }
    },
};

// --- Part 1 ---
const getInventoryReport = product.actions.displayStock.bind(product);
getInventoryReport();

// --- Part 2 ---
const competitorProduct = {
    itemName: "Gaming Keyboard",
    stock: 32,
};

product.actions.displayStock.call(competitorProduct);

// --- Part 3 ---
addToCartButton.addEventListener(
    "click",
    product.actions.updateStock.bind(product, 1)
); // this works because bind return a function object with the parameter pre-set to 1
