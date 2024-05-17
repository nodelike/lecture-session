let stripePayment = require("./stripe.js");

// Solution with Promises
let items = ["Mobile", "Charger", "Screen Guard"];

function buyNow(items) {
    return new Promise((resolve) => {
        if (items.length != 0) {
            resolve();
            console.log("1. Buying the items, proceeding to payment");
        }
    });
}

function initiateDelivery() {
    console.log("3. Deliery Initiated");
}

buyNow(items).then(stripePayment).then(initiateDelivery);
