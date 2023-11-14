// Prompt for an odd number
let userNumber;
while (true) {
    userNumber = parseInt(prompt("Please enter an odd number between 1 and 50:"));
    if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 === 1) {
        break; // Valid input, exit the loop
    } else {
        alert("Invalid input! Please enter an odd number between 1 and 50.");
    }
}

// Output odd numbers (except user's input)
console.log("Odd numbers between 1 and 50 (excluding " + userNumber + "):");
for (let i = 1; i <= 50; i++) {
    if (i !== userNumber && i % 2 === 1) {
        console.log(i);
    }
}