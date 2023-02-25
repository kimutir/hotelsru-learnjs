function formatDate(date) {
    const now = new Date();

    const dif = Math.round((now - date) / 1000);

    if (dif < 1) return 'прямо сейчас';
    if (dif < 60) return `${dif} сек назад`;

    const difMin = Math.floor(dif / 60);
    if (difMin < 60) return `${difMin} мин назад`;

    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${day}.${month + 1}.${String(year).slice(-2)}, ${hour}:${minutes}`;
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
