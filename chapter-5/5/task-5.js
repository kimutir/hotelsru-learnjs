let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
    const res = [];
    for (const str of arr) {
        res.push(str);
    }

    res.sort();
    return res;
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr);
