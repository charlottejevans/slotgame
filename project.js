// 1. Deposit money
// 2. Determine number of lines to bet on.
// 3. Collect a bet amount (how much they use to bet)
// 4. Spin the slot machine
// 6. Check if they won or lost
// 7. If they won, add the winnings to their account
// 8. Play again
// Imports and libraries should be at the top of the script. Then global variables, classes functions, mainlines and other aspects of my program.

const prompt = require('prompt-sync')();

const ROWS = 3; // Number of rows in the slot machine. consts should always be in caps.
const COLS = 3; // Number of columns in the slot machine.

const SYMBOLS_COUNT = {
    A: 2, // only 2 A's. Key A mapped with the value of 2.
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5, // If i get a line of A's, I'll multiply the bet by 5.
    B: 4,
    C: 3,
    D: 2
}


// Task 1: Deposit & Check Money. ES6 way to create a function - Newer way.
const deposit = () => {
    // While loop will keep running as long as it is true - Infinite loop.
    while (true) {
        const depositAmount = prompt('How much would you like to deposit? ');
        // Takes the string and converts it to a number.
        const numberDepositAmount = parseInt(depositAmount);

        // If the number is not a number or the number is less than 0, then it will print out the message. Will continue asking until it gets a valid amount.
        if (isNaN(numberDepositAmount) || numberDepositAmount < 0) {
            console.log('Invalid Deposit Amount. Try Again.');
        } else {
            return numberDepositAmount;
        }
    }
};

// Task 2 - Determine number of lines to bet on.

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt('How many lines would you like to bet on? (1-3): ');
        const numberOfLines = parseInt(lines);
        // If the number doesn't meet the requirements, it will print out the message..
        if (isNaN(numberOfLines) || numberOfLines < 0 || numberOfLines > 3) {
            console.log('Invalid Number of Lines. Try Again.');
        } else {
            return numberOfLines;
        }
    }

}


// Task 3 - Collect a bet amount (how much they use to bet)
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt('How much would you like to bet per line? ')
        const numberBet = parseInt(bet);
        // Checks three conditions. If the number is not a number, if the number is less than 0, or if the number is greater than the balance divided by the number of lines.
        if (isNaN(numberBet) || numberBet < 0 || numberBet > balance / lines) {
            console.log('Invalid Bet Amount. Try Again.')
        } else {
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = []
    // Loops through all entries in our symbol count and provides key and value of each.
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for(let i = 0; i < count; i++) {
            // pushes symbols into the array
            symbols.push(symbol)
        }
    }
    // Each array represents a column inside the slot machine. Can generate what goes inside them by using the symbols array.
    const reels = [[], [], []] // Nested arrays.
    // Loops through each reel.
    for (let i = 0; i < COLS; i++) { // For every reel, we want to fill it with symbols.
        const reelSymbols = [...symbols] // Copies/Generates the available symbols from the array into another array.
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length) // Generates a random index. Rounding down to the nearest whole number.
            const selectedSymbol = reelSymbols[randomIndex] // Selects a random symbol from the reelSymbols array.
            reels[i].push(selectedSymbol) // i represents the current index of the reel. Pushes the selected symbol into the reel.
            reelSymbols.splice(randomIndex, 1) // Removes the selected symbol from the reelSymbols array. 1 means to remove 1 element. RI is the index of the element to remove.
        }
    }
    return reels // Returns the reels array.
}

const reels = spin()
console.log(reels)
let balance = deposit();
const numberOfLines = getNumberOfLines()
const bet = getBet(balance, numberOfLines)
