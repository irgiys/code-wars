function elevatorDistance(array) {
    // your code here
    let temp = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            for (let j = array[i]; j > array[i + 1]; j--) {
                temp.push("wow");
            }
        }

        if (array[i] < array[i + 1]) {
            for (let j = array[i]; j < array[i + 1]; j++) {
                temp.push("kok");
            }
        }
    }

    return temp.length;
}

// test
console.log(elevatorDistance([5, 2, 8]) /*, 9*/);
console.log(elevatorDistance([1, 2, 3]) /*, 2*/);
console.log(elevatorDistance([7, 1, 7, 1]) /*, 18*/);
