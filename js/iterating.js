(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Micheal', 'James','Chris', 'Rose'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("There are" + names.length + "names in the names array.");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("The first name is " + names[0]);
    console.log("The first name is " + names[1]);
    console.log("The first name is " + names[2]);
    console.log("The first name is " + names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    const names = ["Micheal", "James", "Chris", "Rose"];

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    const name = ["Micheal", "James", "Chris", "Rose"];

    names.forEach(name => console.log(name));

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array

     const numbers = [1, 2, 3, 4, 5];

     console.log(first(numbers));
     console.log(second(numbers));
     console.log(last(numbers));

     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

})();
