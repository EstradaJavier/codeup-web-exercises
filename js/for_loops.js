// js file
"use strict";
alert ( "Hi! Javier's for_loops.js Page." );

// For Loops
// Create a file named for_loops.js inside the js directory and link it to your loops.html file.
//
// Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)

    // (just multiply by the numbers 1 through 10)
    // 7 x 1 = 7
    // 7 x 2 = 14
    // 7 x 3 = 21
    // 7 x 4 = 28
    // 7 x 5 = 35
    // 7 x 6 = 42
    // 7 x 7 = 49
    // 7 x 8 = 56
    // 7 x 9 = 63
    // 7 x 10 = 70


    // Use a for loop and the code from the previous lessons to generate 10 random numbers
    // between 20 and 200 and output to the console whether each number is odd or even. For example:
        // 123 is odd
        // 80 is even
        // 24 is even
        // 199 is odd
        // ...

        for (let i = 0; i < 10; i++) {
             let mathRandomNumber = Math.floor(Math.random() * 180) + 20;
                let i = 1;
                while (i <= 1) {
                    if (mathRandomNumber % 2 == 0) {
                        console.log ( mathRandomNumber + " EVEN" );
                    } else {
                        console.log ( mathRandomNumber + " ODD" );
                    }i++;

                }i++;
        };
// console.log ( mathRandomNumber + " * " + i + " = " + (mathRandomNumber * i) );
        //
        // let mathRandomNumber = Math.floor(Math.random() * 180) + 20;
        // // console.log(mathRandomNumber);
        // console.log("Here is an even number: "+ mathRandomNumber);



    // Create a for loop that uses console.log to create the output shown below.
        // 1
        // 22
        // 333
        // 4444
        // 55555
        // 666666
        // 7777777
        // 88888888
        // 999999999

            // for (let i = 1; i < 55555; i++) {
            //
            //     console.log("This NUMBER: " + i);
            //     if i < (55555) + (1) break;
            // };


    // Create a for loop that uses console.log to create the output shown below.
        // 100
        // 95
        // 90
        // 85
        // 80
        // 75
        // 70
        // 65
        // 60
        // 55
        // 50
        // 45
        // 40
        // 35
        // 30
        // 25
        // 20
        // 15
        // 10
        // 5
            let x = 105;
            while (x > 0) {
                x = x - 5;
                if (x === 5) continue;
                console.log("Decrementing from 100 to 0 by 5 each time! ==> " + x);
            };



