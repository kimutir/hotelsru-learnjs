let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

console.log(sumSalaries(salaries));

function sumSalaries(obj) {
    if (!Object.keys(obj).length) return 0;

    return Object.values(obj).reduce((a, b) => a + b);
}
