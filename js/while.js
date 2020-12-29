// js file
"use strict"
alert ( "Hi! Javier's while.js Page." );

    // While Loops
    // Create a file named while.js in the js directory.
    //
    //     Create a while loop that uses console.log() to create the output shown below.
        // 2
        // 4
        // 8
        // 16
        // 32
        // 64
        // 128
        // 256
        // 512
        // 1024
        // 2048
        // 4096
        // 8192
        // 16384
        // 32768
        // 65536

        let num = 2;
        while(num <=  65536) {
                console.log(num);
                num = num * 2;
        };



    // Do While Loop
    // An ice cream seller can't go home until she sells all of her cones. First write enough ' +
    // 'code that generates a random number between 50 and 100 representing the amount of cones ' +
    // 'to sell before you start your loop. Inside of the loop your code should generate another ' +
    // 'random number between 1 and 5, simulating the amount of cones being bought by her clients. ' +
    // 'Use a do-while loop to log to the console the amount of cones sold to each person. ' +
    // 'This is a way get the random numbers for this exercise.



        // This expression will generate a random number between 1 and 5
        // Math.floor(Math.random() * 5) + 1;

    // The output should be similar to the following:
        // 5 cones sold...  // if there are enough cones
        // Cannot sell you 6 cones I only have 3...  // If there are not enough cones
        // Yay! I sold them all! // If there are no more cones

        // ============= Ice Cream Sold Exercise ===============

        // This is how you get a random number between 50 and 100

                        let allCones = Math.floor(Math.random() * 50) + 50;
                        let conesToSell;
                        console.log("We have " + allCones + " cones to be sold by the end of my shift!. Wish me luck...")

                        do {
                                conesToSell = Math.floor(Math.random() * 5) + 1;

                                //If cones to sell is less than or equal to cones left decrease allCones by cones To Sell
                                if (conesToSell <= allCones) {
                                        console.log(conesToSell + " cones sold... ");
                                        allCones -= conesToSell;
                                } else {
                                        console.log("Cannot sell you " + conesToSell + " I only have " + allCones + " cones left!");
                                }
                        } while (allCones > 0);
                        console.log("All of my cones are sold. Hurray!")


