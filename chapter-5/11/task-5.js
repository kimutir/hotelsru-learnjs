function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);

    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0));
console.log(getLastDayOfMonth(2012, 1));
