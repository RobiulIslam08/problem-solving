function findSecondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted[1];
}
console.log(findSecondLargest([1, 5, 3, 9, 2])); // Output: 5
