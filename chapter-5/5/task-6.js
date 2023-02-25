function Calculator() {
    this.signs = { '+': (a, b) => a + b, '-': (a, b) => a - b };

    this.calculate = function (str) {
        if (!srt || !str.length || typeof str !== 'string') return;

        const splitted = str.split(' ');
        const operator = splitted[1];
        const a = Number(splitted[0]);
        const b = Number(splitted[2]);

        if (isNaN(a) || isNaN(b)) return;

        return this.signs[operator](a, b);
    };

    this.addMethod = function (sing, action) {
        this.signs[sing] = action;
    };
}

let powerCalc = new Calculator();

powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

console.log(powerCalc.calculate('6 ** 2'));
console.log(powerCalc.calculate('6 * 2'));
