function sevenAte9([...str]) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "7" && str[i + 1] === "9" && str[i + 2] === "7") {
            str.splice(i + 1, 1);
        }
    }
    return str.join("");
}

// test
console.log(sevenAte9("165561786121789797") /*,'16556178612178977'*/);
console.log(sevenAte9("797") /*,'77'*/);
console.log(sevenAte9("7979797") /*,'7777'*/);
