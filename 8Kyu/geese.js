function gooseFilter(birds) {
    // var geese = [
    //     "African",
    //     "Roman Tufted",
    //     "Toulouse",
    //     "Pilgrim",
    //     "Steinbacher",
    // ];
    const geese = new Set([
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ]);

    return birds.filter((bird) => !geese.has(bird));
    // return an array containing all of the strings in the input array except those that match strings in geese
}

// test
console.log(
    gooseFilter([
        "Mallard",
        "Hook Bill",
        "African",
        "Crested",
        "Pilgrim",
        "Toulouse",
        "Blue Swedish",
    ])
    /*["Mallard", "Hook Bill", "Crested", "Blue Swedish"]*/
);

console.log(
    gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
    /*["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]*/
);

console.log(
    gooseFilter([
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ])
    /*[]*/
);
