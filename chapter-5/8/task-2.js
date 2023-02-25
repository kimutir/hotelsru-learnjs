let messages = [
    { text: 'Hello', from: 'John' },
    { text: 'How goes?', from: 'John' },
    { text: 'See you soon', from: 'Alice' },
];

const readMess = new WeakMap();

for (const mes of messages) {
    readMess.set(mes, Date.now());
}

console.log(readMess.get(messages[1]));
