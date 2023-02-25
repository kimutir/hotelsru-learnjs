let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date));

function getWeekDay(date) {
    const weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return weekDays[date.getDay()];
}
