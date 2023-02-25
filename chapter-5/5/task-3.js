function filterRangeInPlace(arr, min, max) {
    for (const num of arr) {
        if (num < min || num > max) {
            arr.splice(arr.indexOf(num), 1);
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr);
