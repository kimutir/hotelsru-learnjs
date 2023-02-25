function checkSpam(value) {
    if (!value || !value.length) return false;

    const lowerCase = value.toLowerCase();

    if (lowerCase.includes('xxx') || lowerCase.includes('viagra')) {
        return true;
    }

    return false;
}

const a = checkSpam('asdasd xxx');
const b = checkSpam('asdasd xxx  viarga');
const c = checkSpam('');
const d = checkSpam('a');

console.log({ a, b, c, d });
