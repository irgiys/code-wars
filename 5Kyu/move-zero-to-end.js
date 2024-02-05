// function moveZeros(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             count++;
//         }
//     }
//     let res = arr.filter((a) => a !== 0);
//     for (let i = 0; i < count; i++) {
//         res.push(0);
//     }
//     return res;
// }
function moveZeros(arr) {
    return arr.filter((a) => a !== 0).concat(arr.filter((a) => a === 0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // return[false,1,1,2,1,3,"a",0,0]
