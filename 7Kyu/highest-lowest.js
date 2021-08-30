function highAndLow(numbers) {
   let temp = numbers.split(" ");
   let high = temp.reduce((acc, curr) => (Number(acc) > Number(curr) ? Number(acc) : Number(curr)));
   let low = temp.reduce((acc, curr) => (Number(acc) < Number(curr) ? Number(acc) : Number(curr)));
   return high + " " + low;
}
// test

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); //, "542 -214")
