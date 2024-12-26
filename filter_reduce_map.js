const numbers = [5, 8, 12, 20, 3, 15];

// Step 1: Filter out numbers less than 10
const filteredNumbers = numbers.filter(num => num >= 10);

// Step 2: Multiply each remaining number by 2
const multipliedNumbers = filteredNumbers.map(num => num * 2);

// Step 3: Find the sum of these transformed numbers
const sum = multipliedNumbers.reduce((total, num) => total + num, 0);

console.log("Filtered Numbers:", filteredNumbers); // [12, 20, 15]
console.log("Multiplied Numbers:", multipliedNumbers); // [24, 40, 30]
console.log("Sum:", sum); // 94
