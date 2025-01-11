// const numbers = [1, 2, 3, 4];
// const allPositive = numbers.every(num => num > 0);
// console.log(allPositive); // Output: true
// const numbers = [1, 2, 3, 4];
// const allPositive = numbers.every(num => num > 0);
// console.log(allPositive);
const largestNumber = (arr) => {
	return [...new Set(arr)]
}
console.log(largestNumber([4,4,4,4,4, 55, 555, 3333, 23, 55343, 43]));
