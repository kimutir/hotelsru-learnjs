const ask = (question, yes, no) => {
    if (question === 'Yes') {
        yes();
    } else no();
};

ask(
    'Yes',
    () => console.log('Вы согласились.'),
    () => console.log('Вы отменили выполнение.')
);
ask(
    'No',
    () => console.log('Вы согласились.'),
    () => console.log('Вы отменили выполнение.')
);
