const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let summ = 0;
for (const key in salaries) {
    summ += salaries[key];
}
console.log(summ);
