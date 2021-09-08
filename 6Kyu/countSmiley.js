let countSmileys = (arr) => {
   let regex = /^[:;][-~]?[)D]$/;
   let temp = [];
   for (let i = 0; i < arr.length; i++) {
      if (regex.test(arr[i])) temp.push(arr[i]);
   }
   return temp;
};

// this is nice
// let countSmileys = (arr) => arr.filter((e) => /^[:;][-~]?[)D]$/.test(e));

// test
console.log(countSmileys([])); //, 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); //, 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); //, 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D", ":D"])); //, 1);
