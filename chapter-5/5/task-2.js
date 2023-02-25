let arr = [5, 3, 8, 1];

function filterRange(arr, min, max) {
    const res = [];

    for (const num of arr) {
        if (num <= max && num >= min) {
            res.push(num);
        }
    }

    return res;
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);
