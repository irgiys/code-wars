// Failed
// Josephus permutataion

const josephus = (item, k) => {
    if (!item.length) return [];
    let n = item.length
    return (josephus(n - 1, k) + k -1) % n + 1
};

// test
// prettier-ignore
console.log(josephus([1,2,3,4,5,6,7,8,9,10],1)/*,[1,2,3,4,5,6,7,8,9,10]*/)
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)    /*,[2, 4, 6, 8, 10, 3, 7, 1, 9, 5]*/);
console.log(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4) /*["e","s","W","o","C","d","r","a",]*/);
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3)/*, [3, 6, 2, 7, 5, 1, 4]*/);
console.log(josephus([], 3) /*[]*/);
