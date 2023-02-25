function sum(a, b) {
    return +a + +b;
}

const a = sum(1, 4);
const b = sum(1, '4');
const c = sum('1', '4');

console.log({ a, b, c });
