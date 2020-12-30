alert ( "Hi! Javier's JS Page." );

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();

/** / ENCAPSULATION : encapsulation example / **/

let employee = {

    baseSalary: 30_000;
    overtime: 10;
    rate: 20;

    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

