// ini bukan 7 kyu tapi beta
// code saya udah bener tapi pas di attempt ada satu failed
// Expected: 'The recipe at index 4 is the tastiest!!!', instead got: 'The recipe at index 0 is the tastiest!!!
// mmmmm
const tastiest = (recipes) => {
   // mmmm... lasagne
   let arr = [];

   for (let i = 0; i < recipes.length; i++) {
      arr.push(recipes[i].veg);
   }
   let res;
   if (arr.length === 6) {
      let [one, two, three, four, five, six] = [...arr];
      res = Math.max(one.length, two.length, three.length, four.length, five.length, six.length);
   } else if (arr.length === 5) {
      let [one, two, three, four, five] = [...arr];
      res = Math.max(one.length, two.length, three.length, four.length, five.length);
   } else if (arr.length === 4) {
      let [one, two, three, four] = [...arr];
      res = Math.max(one.length, two.length, three.length, four.length);
   } else {
      let [one, two, three] = [...arr];
      res = Math.max(one.length, two.length, three.length);
   }

   for (let j = 0; j <= res; j++) {
      if (arr[j].length == res) {
         return `The recipe at index ${arr.indexOf(arr[j])} is the tastiest!!!`;
      }
   }
};

console.log(
   JSON.stringify(
      tastiest([
         { veg: ["carrots", "buttnut squash", "courgette", "sweet potato"] },
         { veg: ["carrots", "butternut squash", "courgette"] },
         { veg: ["carrots", "butternut squash"] },
         { veg: ["carrots", "butternut squash"] },
         { veg: ["carrots", "butternut squash", "adadad"] },
      ])
   )
); //,`The recipe at index 0 is the tastiest!!!`);
//,`The recipe at index 0 is the tastiest!!!`);
console.log(tastiest([{ veg: ["carrots", "butternut squash", "sweet potato"] }, { veg: ["carrots", "butternut squash", "courgette", "sweet potato"] }, { veg: ["carrots", "butternut squash"] }])); //,`The recipe at index 1 is the tastiest!!!`);
console.log(tastiest([{ veg: ["carrots", "butternut squash", "sweet potato"] }, { veg: ["carrots", "butternut squash"] }, { veg: ["carrots", "butternut squash", "courgette", "sweet potato"] }])); //,`The recipe at index 2 is the tastiest!!!`);
console.log(
   JSON.stringify(
      tastiest([
         { veg: ["carrots", "buttnut squash", "courgette", "sweet potato"] },
         { veg: ["carrots", "butternut squash", "courgette"] },
         { veg: ["carrots", "butternut squash"] },
         { veg: ["carrots", "butternut squash", "adada", "adad", "dadear"] },
         { veg: ["carrots", "butternut squash", "adada", "adad", "dadear", "adadad"] },
      ])
   )
);
