function positiveSum(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            num += arr[i];
        }
    }
    return num;
}

// prettier-ignore
const positifNum = (arr) => arr
    .filter((e) => e > 0)
    .reduce((curr, urr) => curr + urr);

console.log(positifNum([1, -4, 2, 12]));
