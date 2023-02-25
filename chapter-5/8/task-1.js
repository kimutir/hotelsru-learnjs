let messages = [
    { text: 'Hello', from: 'John' },
    { text: 'How goes?', from: 'John' },
    { text: 'See you soon', from: 'Alice' },
];

const readMes = new WeakSet();

for (const mes of messages) {
    readMes.add(mes);
}

console.log(readMes.has(messages[0]));

messages.shift();

console.log(readMes.has(messages[0]));
