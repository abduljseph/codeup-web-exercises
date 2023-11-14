function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}

// Example usage:
showMultiplicationTable(7);

function getRandomInt(min, max) {
    // Generates a random integer between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
    // Returns true if the number is even, false otherwise
    return number % 2 === 0;
}

function generateRandomNumbersAndCheckOddEven() {
    for (let i = 0; i < 10; i++) {
        const randomNum = getRandomInt(20, 200);
        const isNumEven = isEven(randomNum);

        console.log(`${randomNum} is ${isNumEven ? 'even' : 'odd'}.`);
    }
}

// Call the function to generate and check random numbers
generateRandomNumbersAndCheckOddEven();

for (let i = 1; i <= 9; i++) {
    const repeatedNumber = String(i).repeat(i);
    console.log(repeatedNumber);
}

for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}

