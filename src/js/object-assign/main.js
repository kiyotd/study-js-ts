// Object.assign() method
const obj = Object.assign({}, { a: 1 }, { b: 2, c: 3 });
console.log(obj); // { a: 1, b: 2, c: 3 }

// Spread syntax
const obj2 = { ...{}, ...{ a: 1 }, ...{ b: 2, c: 3 } };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// 引数を破壊してしまう危険な方法

const a = { a: 1, b: 2 };
const b = { b: 3, c: 4 };

console.log(Object.assign(a, b)); // { a: 1, b: 3, c: 4 }
console.log(a); // { a: 1, b: 3, c: 4 } 破壊されている
console.log(b); // { b: 3, c: 4 }

// 解決方法：Object.assign の第1引数は {} とする
