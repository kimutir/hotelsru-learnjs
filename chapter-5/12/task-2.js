let room = {
    number: 23,
};

let meetup = {
    title: 'Совещание',
    occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
    place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

const meetupJSON = JSON.stringify(meetup, function replace(key, value) {
    return value == meetup && key.length ? undefined : value;
});

console.log(meetupJSON);
