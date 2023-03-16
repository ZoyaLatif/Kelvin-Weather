//creating kelvin tempearture 
const kelvin = 293;
//creating celsius  tempearture by subtracting from kelvin
const celsius = kelvin - 273;
//calculating fahrenheit tempearture 
let fahrenheit = celsius * (9/5)+32;
//using formula 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
