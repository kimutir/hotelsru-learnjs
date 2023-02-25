const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const arr = [];

function ask(massage) {
    rl.question(massage, (answer) => {
        if (answer.length == 0) {
            rl.close();
            console.log(arr.reduce((acc, next) => acc + next));
            return;
        }

        if (isFinite(answer)) {
            ask(massage);
            arr.push(Number(answer));
        } else {
            rl.close();
        }
    });
}

ask('Введите число: ');
