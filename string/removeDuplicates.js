// function removeDuplicates(str){
// 	return [... new Set(str)].join('')
// }
// console.log(removeDuplicates('hello'))

const removeDuplicates = (str) => {
	return [... new Set(str)].join('')
}
console.log(removeDuplicates('helllo'))