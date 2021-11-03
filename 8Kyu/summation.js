const summation = (num) => (num === 0 ? 0 : num + summation(num - 1));

//test
console.log(summation(1) /*, 1*/);
console.log(summation(8) /*, 36*/);
