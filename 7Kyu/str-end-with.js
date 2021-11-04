function solution(str, ending) {
    // TODO: complete
    let newStr = [...str].reverse();
    let newEnd = [...ending].reverse();
    return newEnd.map((e, i) => e === newStr[i]).every((e) => e === true);
}

// with built in function, LoL
const solution2 = (str, end) => str.endsWith(end);

// test
console.log(solution("abcde", "cde") /*, true*/);
console.log(solution("abcde", "abc") /*, false*/);
console.log(solution("sumo", "omo") /*, false*/);

console.log("-".repeat(10));

console.log(solution2("abcde", "cde") /*, true*/);
console.log(solution2("abcde", "abc") /*, false*/);
console.log(solution2("sumo", "omo") /*, false*/);
