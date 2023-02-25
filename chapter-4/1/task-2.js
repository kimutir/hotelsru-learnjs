function isEmpty(obj) {
    return Object.keys(obj).length ? false : true;
}
const a = {};
const empty = isEmpty(a);
a['8:30'] = 'get up';
const notEmpty = isEmpty(a);

console.log(empty, notEmpty);
