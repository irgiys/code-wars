// sy
function twoSort(arr) {
   let result = arr.sort();
   let res = [];
   for (let i = 0; i < result[0].length; i++) {
      res.push(result[0].charAt(i));
      res[i - 1] += "***";
   }
   return res.join("");
}

// punya orang
function duaSort(arr) {
   return arr.sort()[0].split("").join("^^^");
}

// test
console.log(twoSort(["bitcoin", "take", "array", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log("-----");
console.log(duaSort(["bitcoin", "take", "array", "the", "world", "maybe", "who", "knows", "perhaps"]));
