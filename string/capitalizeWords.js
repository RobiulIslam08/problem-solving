// function capitalizeWords(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// // উদাহরণ:
// console.log(capitalizeWords("javaScript is awesome")); // "JavaScript Is Awesome"
// console.log(capitalizeWords("hello world")); // "Hello World"

// practise
// const capitalizeWords = (str) =>{
// 	return str.split(' ').map((word)=> word.charAt(0).toUppercase())
// }
// console.log(capitalizeWords('Robi'))
const capitalizeWords = (str) => {
	return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }
  
  console.log(capitalizeWords('robi'));
  
