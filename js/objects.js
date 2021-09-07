alert ( "Hi! Javier's JS Page." );

function firstName() {

}

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

                // const person = {
                //     firstName: 'Javier',
                //     lastName: 'Estrada',
                //     age: 57,
                //     gender: 'male',
                //     interests: ['tennis', 'sand volleyball','coding'],
                //     bio: function () {
                //         alert ( this.firstName[0] + ' ' + this.lastName[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.' );
                //     },
                //     greeting: function () {
                //         alert ( 'Hi! I\'m ' + this.name[0] + '.' );
                //     },
                //     sayHello: function () {
                //         alert("Hellooo from " + this.firstName + " " + this.lastName + "!");
                //
                //     }
                // };
                // console.log(person.sayHello());
                //
                // console.log(person);
    // console.log(person.firstName);
    // console.log(person.lastName);
    // console.log(person.name[0]);
    // console.log(person.age);
    // console.log(person.interests[1]);
    // console.log(person.bio);
    // console.log(person.greeting);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

        // console.log(person.sayHello());
        // console.log(person.firstName);
        // console.log(person.lastName);


        // log the make/model


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200.
     * If a shopper spends more than $200, they get a 12% discount. Write a JS program,
     *      using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        // var shoppers = [
        //     {name: 'Tristan', amount: 180},
        //     {name: 'Ryan', amount: 250},
        //     {name: 'David', amount: 320}
        // ];

        // higher order function
        // shoppers.forEach(function(shopper) {
        //     if(shopper.amount > 200) {
        //         amoutOff = shopper.amount * .12;
        //     } else {
        //         amountOff = 0;
        //     }

            // var totalCost = amountPrioToDiscount - amountOff;
            // var message = shpperName + ' '
            // console.log(shopper.name + " You get the discount!");



            // console.log(element);›
            // console.log(index);
            // console.log(array);
        // });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     */


            //
            //  console.log(books[0].title) // "The Salmon of Doubt"
            //  console.log(books[0].author.firstName) // "Douglas"
            //  console.log(books[0].author.lastName) // "Adams"

           //

            let books = [
                {
                    title: "The Salmon of Doubt",
                    author: {
                        firstName: "Douglas",
                        lastName: "Adams"
                    }
                },

                {
                    title: "Walkaway",
                    author: {
                        firstName: "Cory",
                        lastName: "Doctorow"
                    }
                },

                {
                    title: "A Brief History of Time",
                    author: {
                        firstName: "Stephen",
                        lastName: "Hawking"
                    }
                },

                {
                    title: "The Clean Coder",
                    author: {
                        firstName: "Robert",
                        lastName: "Martin"
                    }
                },

                {
                    title: "The Pragmatic Programmer",
                    author: {
                        firstName: "David",
                        lastName: "Thomas"
                    }
                //  },
                //     createBook: function () {
                //         alert("Hellooo from " + this.firstName + " " + this.lastName + "!");
                //
                //  },
                //     showBookInfo: function () {
                //         alert ( "Hellooo from " + this.firstName + " " + this.lastName + "!" );
                 }
            ];
            console.log(books);
            // console.log(books.createBook());
            // console.log(books.createBook());


    // > ////  "Output produce by forEach loop"  ////
    // > // "a"
    // > // "b"
    // > // "c"
    // > // "d"
    // > // Array [2, 3, 45, 7]

            // shoppers.forEach(function(shopper) {
            //         if(shopper.amount <= 200) {
            //             console.log(shopper.name + " You get the discount!");
            //         }
            //     });

     /* TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     */

        for( let i = 0; i < books.length; i++ ) {
            console.log("=====================================================================");
            console.log("The Book # " + [i] + "\n Title: " + books[i].title + " Author: " + books[i].author.firstName + " " + books[i].author.lastName + ".");
            console.log("=====================================================================");
        };

        books.forEach(function (book, index) {
            console.log(book);
        });




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

                // function createBook (title, author) {
                //     let nameArr = author.split(" ");
                //     let firstName = nameArr[0];
                //     let lastName =
                // }

    // var person = {
    //     firstName: "Javier",
    //     lastName: "Rich"
    // };
    //
    // console.log(person.firstName);
    // console.log(person.lastName);


            // person.sayHello = function() {
            //     return'Hello from ' + firstName + '' + lastName;
            // }
            //
            // console.log(person.firstName);
            // console.log(person.lastName);


})();
