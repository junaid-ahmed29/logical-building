let greatestNumber = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < 10; i++) {
    let input = parseInt(prompt("Enter a number:"));
    if (!isNaN(input)) {
        if (input > greatestNumber) {
            greatestNumber = input;
        }
    } else {
        console.log("Invalid input. Please enter a valid number.");
        i--; // Decrement i to ensure 10 iterations are completed
    }
}

document.write("The greatest number among the inputs is: ", greatestNumber);
