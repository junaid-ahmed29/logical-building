let binaryInput = prompt("Enter a binary number:");
let decimal = 0;
let power = 0;

for (let i = binaryInput.length - 1; i >= 0; i--) {
    let digit = parseInt(binaryInput[i]);
    
    decimal += digit * Math.pow(2, power);
    
    power++;
}

document.write("Decimal equivalent:", decimal);
