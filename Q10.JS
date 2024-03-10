let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

let found = false;

if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
    found = true;
}

if (found) {
    document.write("One number is positive and the other is negative.");
} else {
    document.write("Both numbers are either positive or negative.");
}
