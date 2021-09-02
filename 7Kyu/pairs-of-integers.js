const generatePairs = (m, n) => {
   let result = [];
   for (let i = m; i <= n; i++) {
      for (let j = i; j <= n; j++) result.push([i, j]);
   }

   //  result.push("-".repeat(100));
   //  let i = m;
   //  while (i <= n) {
   //     let j = i;
   //     while (j <= n) {
   //        result.push([i, j]);
   //        j++;
   //     }
   //     i++;
   //  }

   return result;
};

// test
console.log(JSON.stringify(generatePairs(2, 4))); //, [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]);
// pelajaran yang didapat, jadi sebelum melakukan increment loop pembungkus{increment dulu yang dibungkus} jika kondisi keduanya true
