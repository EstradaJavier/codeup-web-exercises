alert('Welcome to my functions.js');

"use strict";
alert("Hello from functions.js")

        // example of using a IFFE
        // (function () {
        //     var iffeVar = "I'm local to the IIFE.";
        // })();

/**
 * TODO: 1
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

    function sayHello(name) {
        return("Hello, " + name);
    };

    sayHello("codeup");


/**
 * TODO: 2
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

    let helloMessage = sayHello("Javier");
    console.log(helloMessage);

/**
 * TODO: 3
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

    let myName = "Javier P Estrada";
    sayHello(myName);

    console.log("Hello again: " + myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO: 4
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
        // example of using a IFFE
        // (function () {
        //     var iffeVar = "I'm local to the IIFE.";
        // })();

    function isTwo(x) {
        if (x === 2) {
            return true;
        } else {
            return false;
        }
    };

    console.log(random);
    console.log(isTwo(random));

/**
 * TODO: 5
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

    function calculateTip( tipPercentage, totalBill ) {
        return (totalBill * tipPercentage);
    };

    calculateTip(0.25, 25.50);
    console.log(calculateTip(0.25, 25.50));


/**
 * TODO: 6
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

    let tipPercentage = prompt("How much do you want to tip?") / 100;
    let totalBill     = prompt("What is the total bill?");

    console.log("Total amount due: $" + calculateTip(tipPercentage, totalBill));


/**
 * TODO: 7
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

    // let originalPrice   = prompt("What is the original price of this item?");
    // let discountPercent = prompt("What is the discount percentage?");



    function applyDiscount(x, y) {
        let price = x;
        let pecentOff = y;
        let discountPrice = price - (price * pecentOff)

    };

    console.log(applyDiscount(45.99, .12));

    // console.log(applyDiscount(10, .1), "1");
    // console.log(applyDiscount(100, .5), "1");
    // console.log(applyDiscount(1000, .8), "80");
    // console.log(applyDiscount(123456, .3), "37036.799999999996");
