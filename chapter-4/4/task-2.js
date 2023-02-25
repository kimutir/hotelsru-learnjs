const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read(4, 7);
const sum = calculator.sum();
const mul = calculator.mul();

console.log(sum, mul);
