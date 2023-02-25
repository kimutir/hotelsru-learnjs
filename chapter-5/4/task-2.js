const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

const middle = Math.floor(styles.length / 2);

styles[middle] = 'Классика';

const first = styles.shift();

console.log(first);

styles.unshift('Рэп', 'Регги');

console.log(styles);
