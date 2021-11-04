const getCount = (str) =>
    str.match(/[aiueo]/g) ? str.match(/[aiueo]/g).length : 0;

// // test
console.log(getCount("abracadabra") /*, 5*/);
