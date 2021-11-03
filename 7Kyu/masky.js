const maskify = (cc) => cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);

// test
console.log(maskify("4556364607935616") /*, "############5616"*/);
console.log(maskify("1") /*, "1"*/);
console.log(maskify("11111") /*, "#1111"*/);
