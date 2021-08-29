const ensureQuestion = (s) => (s.charAt(s.length - 1) != "?" ? `${s}?` : s);

// test
console.log(ensureQuestion("")); //, "?", "Expected: '?'"));
console.log(ensureQuestion("No")); //, "No?", "Expected: '?'"));
console.log(ensureQuestion("Yes")); //, "Yes?", "Expected: '?'"));
console.log(ensureQuestion("No?")); //, "No?", "Expected: '?'"));
