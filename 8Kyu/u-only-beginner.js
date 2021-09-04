// const check = (a, x) => {
//    for (let i = 0; i < a.length; i++) {
//       if (a[i] === x) return true;
//    }
//    return false;
// };

const checkSome = (a, x) => a.some((b) => b == x);
const checkInclude = (a, x) => a.includes(x);

// test
console.log(checkInclude(["adad", "232", 21, "121"], 21));
