// third-party payment library - stripe (function declaration can't be modified)
function stripePayment() {
    return new Promise((resolve, reject) => {
        console.log("2. Payment processed!");
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}

module.exports = stripePayment;