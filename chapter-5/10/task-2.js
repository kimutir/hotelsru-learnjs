let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

function topSalary(obj) {
    const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    const [nameTop, salary] = arr[0];
    return nameTop;
}

console.log(topSalary(salaries));
