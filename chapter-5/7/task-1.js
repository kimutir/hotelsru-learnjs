function unique(arr) {
    const result = new Set();

    for (const item of arr) {
        result.add(item);
    }

    return Array.from(result);
}

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log(unique(values));
