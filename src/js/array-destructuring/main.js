const arr = [1, 2, 3, 4, 5];

const [n1, n2, ...n] = arr;

console.log(n1); // 1
console.log(n2); // 2
console.log(n); // [3, 4, 5]

//--------------------------------

const obj = { a: "A", b: "B", c: "C" };

const { a, ...b } = obj;

console.log(a); // A
console.log(b); // { b: 'B', c: 'C' }

// make c2 from c
const { c: c2 } = obj;

console.log(c2); // C

//--------------------------------

const arr2 = { d: "D", e: "E", f: "F" };

let { d, e } = arr2;

// Assignment without declaration
// Without (), the left side is treated as a block
// Requires a semicolon before (
({ d, e } = { d: "D2", e: "E2" });

console.log(d); // D2
