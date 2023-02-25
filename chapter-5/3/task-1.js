function toUp(value) {
    if (!value.length || !value) return;
    return value[0].toUpperCase() + value.slice(1);
}

const a = toUp('');
console.log(a);
