let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

let maxNumber = Math.max(num1, num2, num3);
let lcm = maxNumber;

while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0 && lcm % num3 === 0) {
        document.write("The least common multiple of ", num1 + ", ", num2 + ", and ", num3 + " is: ", lcm);
        break;
    }
    lcm += maxNumber;
}
