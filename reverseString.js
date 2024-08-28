// const reverseString = (str)=>{
// 	return [...str].reverse()
// }
// console.log(reverseString('robi'))
// output = [ 'i', 'b', 'o', 'r' ]

const reverseString = str => [...str].reverse().join('')
console.log(reverseString('robi'))
// output = ibor