function reverseWords(str) {
    return str.split(" ").reverse().join(" "); // reverse those words
}

console.log(reverseWords("foobar")); //, "foobar");
console.log(reverseWords("kata editor")); //, "editor kata");
console.log(reverseWords("row row row your boat")); //, "boat your row row row");

const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed); // Examples

console.log(toFixed(25.198726354, 0)); // 25.1
console.log(toFixed(25.198726354, 2)); // 25.19
console.log(toFixed(25.198726354, 3)); // 25.198
console.log(toFixed(25.198726354, 4)); // 25.1987
console.log(toFixed(25.198726354, 5)); // 25.19872
console.log(toFixed(25.198726354, 6)); // 25.198726
