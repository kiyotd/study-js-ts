const _ = require("lodash");

/*
keyの順序が同じなのでtrue
 */
const a = { a: "a" };
const b = { a: "a" };

const aJSON = JSON.stringify(a);
const bJSON = JSON.stringify(b);

console.log("1", aJSON === bJSON); // true

console.log("--------");

/*
keyの順序が違うとfalse
JSON.stringifyは順序を保証していない
 */
const ab = { a: "a", b: "b" };
const ba = { b: "b", a: "a" };

const abJSON = JSON.stringify(ab);
const baJSON = JSON.stringify(ba);

console.log(
  "2",
  JSON.stringify(Object.keys(ab).sort()) ===
    JSON.stringify(Object.keys(ba).sort())
); // true
console.log("3", abJSON === baJSON); // false

console.log("--------");

/*
lodashで比較する
 */

// _.isEqual
console.log("4", _.isEqual(a, b)); // true
console.log("5", _.isEqual(ab, ba)); // true
