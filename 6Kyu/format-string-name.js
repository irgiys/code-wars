// delete below
function list(names) {
   let arr = names.map((e) => e.name);
   if (arr.length <= 1) return arr.join(" ");

   let result = arr.join(", ").split(" ");
   let lisa = result[result.length - 2].replace(",", "");

   result.splice(-1, 0, "&");
   return result.join(" ").replace(lisa + ",", lisa);
}

//  test
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }, { name: "Homer" }, { name: "Marge" }])); //, 'Bart, Lisa, Maggie, Homer & Marge',"Must work with many names")
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])); //, 'Bart, Lisa & Maggie',"Must work with many names")
console.log(list([{ name: "Bart" }, { name: "Lisa" }])); //, 'Bart & Lisa', "Must work with two names")
console.log(list([{ name: "Bart" }])); //, 'Bart', "Wrong output for a single name")
console.log(typeof list([])); //, '', "Must work with no names")
