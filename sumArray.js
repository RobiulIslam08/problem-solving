const sumArray = (arr)=>{
	return arr.reduce((sum, num)=> sum +num,0)
}
console.log(sumArray([1,4,5,5]))