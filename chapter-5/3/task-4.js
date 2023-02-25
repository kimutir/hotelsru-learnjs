function extractCurrencyValue(value) {
    if (!value || !value.length) return;

    return Number(value.slice(1));
}

console.log(extractCurrencyValue('$120') === 120);
console.log(extractCurrencyValue('') === 120);
