function isMerge(s, part1, part2) {
    console.log(s[0]);

    console.log(s);
    console.log(part1);
    console.log(part2);

    return !s
        ? !(part1 || part2)
        : (s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2)) ||
              (s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1)));
}

// true
// console.log(isMerge("codewars", "code", "wars"));
console.log(isMerge("codewars", "cdwr", "oeas"));
// console.log(isMerge("xcyc", "xc", "yc"));
// console.log(isMerge("Making progress", "Mak pross", "inggre"));

// false
// console.log(isMerge("codewars", "code", "code"));
// console.log(isMerge("More progress", "More gess", "pror"));
// console.log(isMerge("codewars", "code", "wasr")); // it should be false because wrong order
