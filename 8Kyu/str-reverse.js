function solution(str) {
    return str.split("").reverse().join("");
}

// test

console.log(solution("world"), "dlrow");
console.log(solution("hello"), "olleh");
console.log(solution(""), "");
