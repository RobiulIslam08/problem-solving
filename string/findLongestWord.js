const findLongestWord = (sentence) =>{
	let wordsArray = sentence.split(' ')
	let longestWord = ''
	wordsArray.map(word => {
		if(word.length> longestWord.length){
			longestWord = word
		}
	})
	return longestWord
}
console.log(findLongestWord('whatdsfds is your name brother?'))