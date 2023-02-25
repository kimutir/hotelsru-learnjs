function truncate(value, max) {
    if (!value || max <= 0 || typeof max !== 'number') return;

    if (value.length <= max) return value;

    return value.slice(0, max) + '...';
}

console.log(truncate('123456', 3));
console.log(truncate('0', 3));
console.log(truncate('0', 0));
console.log(truncate('0', 'a'));
