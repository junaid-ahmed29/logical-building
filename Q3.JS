let number = parseInt(prompt("Enter a number to calculate its factorial:"));
let factorial = 1;

if (number < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else if (number === 0) {
    console.log("The factorial of 0 is 1.");
} else {
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.write("The factorial of ", number, " is ", factorial);
}
