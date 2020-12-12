// js file
"use strict";



// first problem
console.log( "Hello from external JavaScript" );
alert('Welcome to my Website!');


// second problem
let userResponce = prompt("What is your favorite color? ");
alert("Great, the color " + userResponce + " is my favorite color too!");

// third problem
let userAge = prompt("What is yor age:")
alert("Your age is: " + userAge);


// movie rental problem
const littleMermaid  = "Little Mermaid";
const brotherBear    = "Brother Bear";
const hercules       = "Hercules";
const pricePerDay    = 3.00;
const tax            = 0.0625;

let daysRentedLittleMermaid = prompt("How many days did you rent Little Mermaid for?");
console.log("You rented: " + littleMermaid + " for: " + daysRentedLittleMermaid + " days");
alert("You rented " + littleMermaid + " for "+ daysRentedLittleMermaid + " days. So your total cost  for your rental is: $" + (daysRentedLittleMermaid * pricePerDay));
let costNumber1 = daysRentedLittleMermaid * pricePerDay;
console.log(daysRentedLittleMermaid * pricePerDay);

let daysRentedBrotherBear = prompt("How many days did you rent Brother Bear?");
console.log("You rented: " + brotherBear + " for: " + daysRentedBrotherBear + " days");
let costNumber2 = daysRentedLittleMermaid * pricePerDay;
alert("You rented " + brotherBear + " for "+ daysRentedBrotherBear + " days. So your total cost  for your rental is: $" + (daysRentedBrotherBear * pricePerDay));


let daysRentedHercules = prompt("How many days did you rent Hercules for?");
console.log("You rented: " + hercules + " for: " + daysRentedHercules + " days");
let costNumber3 = daysRentedLittleMermaid * pricePerDay;
alert("You rented " + hercules + " for "+ daysRentedHercules + " days. So your total cost  for your rental is: $" + (daysRentedHercules * pricePerDay));

let finalCost = (costNumber1 + costNumber2 + costNumber3);

alert("The total cost for everything with taxes is: $ " + (finalCost + (finalCost * tax).toFixed(2)));
console.log("The total cost for everything with taxes is: $" + (finalCost + (finalCost * tax).toFixed(2)));

// big bucks problem  (google, facebook, amazon)
let googleHours = prompt("How many hours did you work for google?");
let googlePay   = prompt("What was the pay rate per hour at google?");

let amazonHours = prompt("How many hours did you work for amazon?");
let amazonPay   = prompt("What was the pay rate per hour at amazon?");

let facebookHours = prompt("How many hours did you work for facebook?");
let facebookPay   = prompt("What was the pay rate per hour at facebook?");

let totalHours = Number(googleHours) + Number(amazonHours) + Number(facebookHours);
let totalPay = (Number(googleHours)  *  Number(googlePay)) + (Number(amazonHours)  *  Number(amazonPay)) + (Number(facebookHours)  *  Number(facebookPay));

alert("Your total hours worked: " + totalHours);
alert("Your total pay is: $" + totalPay);

// student enrollment problem
//   A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

confirm("Click OK if you are enrolled in CODEUP?");

let classSize    = prompt("What is the class size?");
let classConflict = confirm('Click OK if there are any class conflicts?');
let classConfirm  = (classSize < 17) && (classConflict === true);

console.log("classConfirm");
alert("Welcome to Luna. You are all set. Good luck, and remember to push up everyday!");

// product offer problem
//   A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
//   Premium members do not need to buy a specific amount of products.

let numberOfItems     = prompt("How many items will you be purchasing?");
    numberOfItems     = parseInt(numberOfItems);
let offerIsExpired    = false;
let isCustomerPremium = false;

let isOfferValid = (isCustomerPremium && !offerIsExpired) || ((numberOfItems >= 2) && (!offerIsExpired));
alert("Offer is indeed valid! :" + isOfferValid);



// Boolean problem
//  Use the following code to follow the instructions below:
let username = 'codeup';
let password = 'notastrongpassword';


//Create a variable that holds a boolean value for each of the following conditions:
// the password must be at least 5 characters
let isPasswordLenght = true;

// the password must not include the username
let nustNotIncludeUsername = true;

// the username must be no more than 20 characters
let userNameisLessThanTwentyCharacters = true;

// neither the username or password can start or end with whitespace
let userNameContainWhitespace = false;
let passwordContainWhitespace = false;


