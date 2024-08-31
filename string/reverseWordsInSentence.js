function reverseWordsInSentence(sentence) {
	return sentence
	  .split(' ')
	  .map(word => [...word].reverse().join(''))
	  .join(' ');
  }
  
  // Test the function
  let input = "Hello World!";
  let output = reverseWordsInSentence(input);
  
  console.log(output); // "olleH !dlroW"
  