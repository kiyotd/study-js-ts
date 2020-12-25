const assert = require("assert");

// 論理和代入演算子 (x ||= y) は、x が falsy である場合にのみ代入します。

const a = { duration: 50, title: "" };

a.duration ||= 10; // a.duration が falsy ではないので、代入しない
console.log(a.duration); // 50

a.title ||= "title is falsy"; // a.title が falsy なので代入
console.log(a.title); // title is falsy

// MEMO: false, 0, null, undefined, "" は falsy
