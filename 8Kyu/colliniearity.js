// implement this function
// function collinearity(x1, y1, x2, y2) {
//     // Check for vertical line (infinite slope)
//     let p1 = x1 / x2;
//     let p2 = y1 / y2;
//     if ((y1 == 0 && y2 == 0) || (x1 == 0 && x2 == 0) || (x2 == 0 && y2 == 0)) {
//         return true;
//     }
//     return p1 == p2;
// }

function collinearity(x1, y1, x2, y2) {
    return x1 * y2 === y1 * x2;
}

console.log(collinearity(1, 1, 1, 1)); // ➞ true
console.log(collinearity(1, 2, 2, 4)); // ➞ true
console.log(collinearity(1, 1, 6, 1)); // ➞ false
console.log(collinearity(1, 2, -1, -2)); // ➞ true
console.log(collinearity(1, 2, 1, -2)); // ➞ false
console.log(collinearity(4, 0, 11, 0)); // ➞ true
console.log(collinearity(0, 1, 6, 0)); // ➞ false
console.log(collinearity(4, 4, 0, 4)); // ➞ false
console.log(collinearity(0, 0, 0, 0)); // ➞ true
console.log(collinearity(0, 0, 1, 0)); // ➞ true
console.log(collinearity(5, 7, 0, 0)); // ➞ true
console.log(collinearity(0, 1, 0, 1)); // ➞ true
console.log(collinearity(641, -178, 0, 0)); // ➞ true
