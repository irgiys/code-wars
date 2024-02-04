function allNonConsecutive(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 < arr[i + 1]) result.push({ i: arr.indexOf(arr[i + 1]), n: arr[i + 1] });
    }
    return result;
}

console.log(allNonConsecutive([0, 2, 3, 4, 5, 6, 7, 8, 9])); // [{ i: 1, n: 2 }]
// console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10])); // [{i: 4, n:6}, {i: 7, n:10}]
