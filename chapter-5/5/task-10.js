let arr = [1, 2, 3];

function shuffle(arr) {
    const usedIndexes = [];

    while (usedIndexes.length < arr.length) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!usedIndexes.includes(randomIndex)) usedIndexes.push(randomIndex);
    }

    return usedIndexes.map((i) => arr[i]);
}

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
