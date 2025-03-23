const people = [
	{ id: 1, name: "Alice", age: 25 },
	{ id: 2, name: "Bob", age: 30 },
	{ id: 3, name: "Charlie", age: 35 }
  ];
  
  // Expected Output:
//   {
// 	1: { id: 1, name: "Alice", age: 25 },
// 	2: { id: 2, name: "Bob", age: 30 },
// 	3: { id: 3, name: "Charlie", age: 35 }
//   }
  

// solution
function transformArrayToObject(arr) {
	return arr.reduce((acc, person) => {
	  acc[person.id] = person;
	  return acc;
	}, {});
  }
  
  console.log(transformArrayToObject(people));
  