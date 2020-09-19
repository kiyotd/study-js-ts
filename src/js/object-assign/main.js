// Object.assign() method
const obj = Object.assign({}, { a: 1 }, { b: 2, c: 3 });
console.log(obj); // { a: 1, b: 2, c: 3 }

// Spread syntax
const obj2 = { ...{}, ...{ a: 1 }, ...{ b: 2, c: 3 } };
console.log(obj2); // { a: 1, b: 2, c: 3 }
