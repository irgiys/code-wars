function drawSpider(legSize, bodySize, mouth, eye) {
    let arr = [];
    let eyeSize = Math.pow(2, bodySize) / 2;
    arr.push(mouth);
    for (let i = 0; i < eyeSize; i++) {
        arr.push(eye);
        arr.unshift(eye);
    }
    for (let i = 0; i < bodySize; i++) {
        arr.push(")");
        arr.unshift("(");
    }
    if (legSize === 1) {
        arr.push("^");
        arr.unshift("^");
    }
    if (legSize === 2) {
        arr.push(`/\\`);
        arr.unshift(`/\\`);
    }
    if (legSize === 3) {
        arr.push(`╱\\`);
        arr.unshift(`/╲`);
    }
    if (legSize === 4) {
        arr.push(`╱╲`);
        arr.unshift(`╱╲`);
    }
    return arr.join("");
}

console.log(drawSpider(1, 1, "W", "o")); // , "^(oWo)^")    ;
console.log(drawSpider(2, 2, "w", "O")); // , "/\\((OOwOO))/\\");
console.log(drawSpider(3, 3, "w", "0")); // , "/╲(((0000w0000)))╱\\");

// leg size where each value stands for its own leg type: 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
// body size where each value stands for its own body type: 1 for "( )", 2 for "(( ))", 3 for "((( )))"
