function Accumulator(initValue) {
    this.value = initValue;

    this.read = function (a) {
        this.value += a;
    };
}

let accumulator = new Accumulator(1);
accumulator.read(4);
accumulator.read(5);
console.log(accumulator.value);
