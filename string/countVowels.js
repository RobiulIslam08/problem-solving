const countVowels = (str) => {
	const vowel = 'aeiouAEIOU';
	let count = 0;
	for (let char of str) {
	  if (vowel.includes(char)) {
		count++;
	  }
	}
	return count;
  }
console.log(countVowels('robi'))