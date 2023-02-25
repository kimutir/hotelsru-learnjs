function unique(arr) {
    const result = [];

    for (const item of arr) {
        if (!result.includes(item)) result.push(item);
    }

    return result;
}

let strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O'];

console.log(unique(strings));
