(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
        let names = ["Colin", "Sergio", "Jacob", "Javier"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
        console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
        // for (let i = 0; i < names.length; i++) {
        //     console.log("Hello to my group cohort: " + names[i]);
        // };
        console.log(names[0]);
        console.log(names[1]);
        console.log(names[2]);
        console.log(names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
        for (let i = 0; i < names.length; i++) {
            console.log("Hello to my group cohort: " + names[i]);
        };

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(friend => console.log (friend));


    // const array1 = ['a', 'b', 'c', "d", [2, 3, 45, 7]];
    //
    // array1.forEach ( element => console.log ( element ) );

// > ////  "Output produce by forEach loop"  ////
// > // "a"
// > // "b"
// > // "c"
// > // "d"
// > // Array [2, 3, 45, 7]

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(x) {
            console.log(x[0]);
    };
    first(names);
    // console.log(first(names));

    function second(x) {
          console.log(x[1]);
    };
      second(names);

    function last(x) {
          console.log(x[x.length-1]);
    };
    last(names);


})();
