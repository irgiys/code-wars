const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);

//test
console.log(binaryArrayToNumber([0, 0, 0, 1])); //, 1);
console.log(binaryArrayToNumber([0, 0, 1, 0])); //, 2);
console.log(binaryArrayToNumber([1, 1, 1, 1])); //, 15);
console.log(binaryArrayToNumber([0, 1, 1, 0])); //, 6);
