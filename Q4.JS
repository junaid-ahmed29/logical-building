let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

let smallest = Math.min(num1, num2, num3);
let gcd = 1;

for (let i = 2; i <= smallest; i++) {
    if (num1 % i === 0 && num2 % i === 0 && num3 % i === 0) {
        gcd = i;
    }
}

document.write("The greatest common divisor of ", num1 + ", ", num2 + ", and ", num3 + " is: ", gcd);
