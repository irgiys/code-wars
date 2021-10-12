// var isSquare = function (arr) {
//   //Your code here
//   if (arr.length <= 0) return undefined;
//   let myArr = arr.map((a) => Math.sqrt(a)).filter((e) => e % 1 != 0);
//   return myArr.length == 0;
// };

var isSquare = function (arr) {
  return arr.length ? arr.every((x) => Math.sqrt(x) % 1 == 0) : undefined;
};
console.log(isSquare([9, 25]));
