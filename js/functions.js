"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.

 var greeting = (userName)=>{
 var userName = prompt("Enter Name");
 alert("Hello " + userName + "!" );
 }
 greeting();


 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
function sayHello(name) {
    return "Hello, " + name + "!";
}

// Call the function and store the result in a variable
var helloMessage = sayHello("Abdul");

// Print the message
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
function sayHello(name) {
    console.log('Hello', name);
}

let myName = 'Abdul';
sayHello(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);
console.log(random)
/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.

 function isTwo(num){
    return num === 2;//boolean value
 }

   console.log(isTwo(random));



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


const isTwo =(number) =>{

}



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *


 *
 * // Example usage:

 function calculateTip (totalBillAmount, tipPercent)
    const tipTotal= tip
    return tipPercent * totalBillAmount//amount to tip



 console.log(calculateTip(0.20, 20) // returns 4
 console.log(calculateTip(0.25, 25.50) // returns 6.375
 console.log(calculateTip(0.15, 33.42) // returns 5.013

 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
const billTotalPrompt = prompt('Please enter the total bill amount:');
const billTotal = parseFloat(billTotalPrompt);

const tipPercentagePrompt = prompt('Please enter the tip percentage:');
const tipPercentage = parseFloat(tipPercentagePrompt);

const tipAmount = calculateTip(tipPercentage, billTotal);
alert('Your tip amount is: $$' + tipAmount.toFixed(2));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.

const applyDiscount =(priceBeforeDiscount,discountPercent)=>{
    return priceBeforeDiscount - (priceBeforeDiscount * discountPercent);
 }
    
   let originalPrice = 100;                                            
   let discountPercent = .2; // 20%                                     
  console.log(applyDiscount(originalPrice, discountPercent) // 80    
                                                           





