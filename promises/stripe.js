// third-party payment library - stripe (function declaration can't be modified)
function stripePayment(){
    setTimeout(() => {
        //async func
        console.log("2. Payment processed!");
    }, 2000)
}

module.exports = stripePayment;