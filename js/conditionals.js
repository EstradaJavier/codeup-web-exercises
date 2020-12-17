//alert("conditional.js")
"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

    // let color = prompt("Plese enter your favoire color").toLowerCase();
    // function analyzeColor(color) {
    //     if (color === "blue") {
    //         return "blue is the color of the sky.";
    //     } else if (color === "red") {
    //         return  "Strawberries are red";
    //     } else if (color === "cyan") {
    //         return "I dont know anythinbg about color cyan";
    //     } else {
    //         return ("I dont know anything about:  " + color.toUpperCase() + " Please select one of the following color: blue, red, or cyan");
    //     }
    // };


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    // analyzeColor(randomColor);
    // console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    var randomColor = prompt("Whart is your fav'st color?").toLowerCase();

    switch(randomColor) {
        case "blue":
            alert("What a coincidence, " + randomColor + " is my favorite color!");
            break;
        case "cyan":
            alert("I am colore blind, so " + randomColor + " kinda looks like pink to me!");
            break;
        case "red":
            alert("That reminds me, I need to eat more red meat!");
            break;
        default:
            alert(randomColor + "Is not my favorite, but doesn't sound bad.");
            break;
    };

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number"between 0 and 5.
 * If your lucky number is 0 you have no discount,
 * if your lucky number is 1 you'll get a 10% discount,
 * if it's 2, the discount is 25%,
 * if it's 3, 35%,
 * if it's 4, 50%,
 * and if it's 5 you'll get all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
    let discount;
    let totalBill;

    function calculateTotal(luckyNumber, totalAmount) {
        switch(luckyNumber) {
            case 0:
                totalBill = totalAmount;
                alert("No discount for you today. Your total amount is: $" + totalBill.toFixed(2));
                break;
            case 1:
                discount = .90;
                totalBill = totalAmount * discount;
                alert("You get a 10% discount today. Your total amount is: $" + totalBill.toFixed(2));
                break;
            case 2:
                discount = .80;
                totalBill = totalAmount * discount;
                alert("You get a 20% discount today. Your total amount is: $" + totalBill.toFixed(2));
                break;
            case 3:
                discount = .67;
                totalBill = totalAmount * discount;
                alert("You get a 33% discount today. Your total amount is: $" + totalBill.toFixed(2));
                break;
            case 4:
                discount = .50;
                totalBill = totalAmount * discount;
                alert("You get a 50% discount today. Your total amount is: $" + totalBill.toFixed(2));
                break;
            case 5:
                discount = 0;
                totalBill = totalAmount * discount;
                alert("You get a 100% discount today. Your total amount is: $" + totalBill.toFixed(2));
                break;
            default:
                alert("You get nothing today!");
                break;
            }
    };

    console.log(calculateTotal(0, 100)); // returns 100
    console.log(calculateTotal(4, 100)); // returns 50
    console.log(calculateTotal(5, 100)); // returns 0


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
   var luckyNumber = Math.floor(Math.random() * 6);





/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let numberEnteredByUser = confirm("Would you like enter a number?");
let numberEnteredByUser = 100;

if (numberEnteredByUser) {
    let numberEnteredByUser = + prompt("Enter a number: ");
    if (isNaN(numberEnteredByUser)) {
        alert("Please enter a number! You etered " + numberEnteredByUser + "and this is not a number. Please try again);
    } else {
        (numberEnteredByUser % 2 === 0) ? alert("The number you entered is an EVEN number") : alert("You entered an ODD number");
        (numberEnteredByUser >= 0) ? alert("You entered a POSITIVE number") : alert("You entered a NEGATIVE number");
        alert("The number you entered  plus " +  oneHundread " is equal " + confirm("") : alert(numberEnteredByUser " +  numberEnteredByUser));
    }
} esle {
    alert("You did not enter a number. You are such dissident!");
};
