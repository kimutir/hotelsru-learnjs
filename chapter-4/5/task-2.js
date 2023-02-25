function Calculator() {
    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read(3, 9);
const sum = calculator.sum();
const mul = calculator.mul();
console.log(sum, mul);
