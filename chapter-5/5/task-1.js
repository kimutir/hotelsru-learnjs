function camelize(str) {
    const arr = str.split('-').map((i, index) => {
        if (index === 0) return i;
        return i[0].toUpperCase() + i.slice(1);
    });

    return arr.join('');
}

console.log(camelize('background-color') == 'backgroundColor');
console.log(camelize('list-style-image') == 'listStyleImage');
console.log(camelize('-webkit-transition') == 'WebkitTransition');
