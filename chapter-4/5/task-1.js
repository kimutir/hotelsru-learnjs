const mainObj = { a: 1 };

function A() {
    return mainObj;
}
function B() {
    return mainObj;
}

let a = new A();
let b = new B();

console.log(a == b);
