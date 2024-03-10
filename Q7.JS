let smallestNumber = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 10; i++) {
    let input = parseInt(prompt("Enter a number:"));
    if (!isNaN(input)) {
        if (input < smallestNumber) {
            smallestNumber = input;
        }
    } else {
        console.log("Invalid input. Please enter a valid number.");
        i--; // Decrement i to ensure 10 iterations are completed
    }
}

document.write("The smallest number among the inputs is: ", smallestNumber);
