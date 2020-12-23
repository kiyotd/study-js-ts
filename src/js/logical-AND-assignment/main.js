// 論理積代入 (x &&= y) 演算子は、x が truthy である場合にのみ代入します。

let a = 1; // true
let b = 0; // false

a &&= 2; // a が true なので代入する
console.log(a); // 2

b &&= 2; // b が false なので代入しない
console.log(b); // 0
