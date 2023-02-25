let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
    const amount = arr.length;
    let sum = 0;

    for (const person of arr) {
        sum += person.age;
    }

    return sum / amount;
}

console.log(getAverageAge(arr));
