let user = { name: 'John', years: 30 };

const { name, years, isAdmin = false } = user;
console.log('isAdmin:', isAdmin);
console.log('years:', years);
console.log('name:', name);
