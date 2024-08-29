const filterEvenNumbers = (arry)=>{
	return arry.filter(num => num % 2 ===0)
}
const number = [1,22,52,51,2,33,10,15,18]
const result = filterEvenNumbers(number)
console.log(result)