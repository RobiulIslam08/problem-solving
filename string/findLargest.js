// first way
// function findLargest(a, b) {
// 	return a > b ? a : b;
//   }
//   console.log(findLargest(10, 20));

// second way
const findLargest = (...num)=>{
  return Math.max(...num)

}
console.log(findLargest(1,35,64,66,5,343))



