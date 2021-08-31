function reverseWords(str) {
   return str.split(" ").reverse().join(" "); // reverse those words
}

console.log(reverseWords("foobar")); //, "foobar");
console.log(reverseWords("kata editor")); //, "editor kata");
console.log(reverseWords("row row row your boat")); //, "boat your row row row");
