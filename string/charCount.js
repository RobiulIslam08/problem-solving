function charCount(str) {
	const count = {};
	for (let char of str) {
	  count[char] = (count[char] || 0) + 1;
	}
	return count;
  }
  
  // Example:
  const input = "javascript";
  const result = charCount(input);
  console.log(result); 
  // Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
  