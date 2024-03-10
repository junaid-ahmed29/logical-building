let temperatures = [
    { celsius: 60, unit: '°C' },
    { fahrenheit: 45, unit: '°F' }
];

for (let i = 0; i < temperatures.length; i++) {
    let temp = temperatures[i];
    if (temp.celsius !== undefined) {
        let fahrenheit = (temp.celsius * 9 / 5) + 32;
      document.write(temp.celsius + '°C is ' + fahrenheit.toFixed(2) + ' °F, ');
    } else if (temp.fahrenheit !== undefined) {
        let celsius = (temp.fahrenheit - 32) * 5 / 9;
        document.write(temp.fahrenheit + '°F is ' + celsius.toFixed(2) + ' °C');
    }
}
