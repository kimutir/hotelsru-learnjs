let date = new Date(2015, 0, 2);

function getDateAgo(date, number) {
    const copiedDay = new Date(date);

    copiedDay.setDate(date.getDate() - number);

    return copiedDay.getDate();
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 3));
