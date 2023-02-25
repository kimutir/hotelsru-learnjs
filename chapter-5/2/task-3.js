const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(massage) {
    rl.question(massage, (answer) => {
        if (answer.length == 0) {
            rl.close();
            return;
        }

        rl.write(`Введенное число:  ${answer}\n`);

        if (!isFinite(answer)) {
            ask(massage);
        } else {
            rl.close();
        }
    });
}

ask('Введите число: ');
