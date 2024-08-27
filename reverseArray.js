function reverseArray(arr) {
    let reversed = []; // Step 1: Create an empty array to store the reversed elements
    for (let i = arr.length - 1; i >= 0; i--) { // Step 2: Loop from end to start of the array
        reversed.push(arr[i]); // Step 3: Add each element to the reversed array
    }
    return reversed; // Step 4: Return the reversed array
}

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
