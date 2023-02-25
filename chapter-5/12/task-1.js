let user = {
    name: 'Василий Иванович',
    age: 35,
};

const userJSON = JSON.stringify(user);

const userAnother = JSON.parse(userJSON);
