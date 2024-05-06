// 1. Deposit money
// 2. Determine number of lines to bet on.
// 3. Collect a bet amount (how much they use to bet)
// 4. Spin the slot machine
// 6. Check if they won or lost
// 7. If they won, add the winnings to their account
// 8. Play again


const prompt = require('prompt-sync')();

// ES6 way to create a function - Newer way.
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

const depositAmount = deposit();
console.log(depositAmount)