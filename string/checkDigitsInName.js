function checkDigitsInName(name) {
    // Check if the input is a string
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    // Use a regular expression to check if the string contains any digit
    const hasDigits = /\d/.test(name);

    // Return true if digits are found, otherwise false
    return hasDigits;
}

// Sample Input and Output
console.log(checkDigitsInName("Raj123"));  // Output: true
console.log(checkDigitsInName("Suman"));   // Output: false
console.log(checkDigitsInName("n9ayeem")); // Output: true
console.log(checkDigitsInName("!@#"));     // Output: false
console.log(checkDigitsInName(["Raj"]));   // Output: Invalid Input
