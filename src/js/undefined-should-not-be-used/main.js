let a; // undefined

// true
if (a === undefined) {
  console.log(`a is ${a}`); // a is undefined
}

// undefined は global変数なので書き換え可能
var undefined = "hoge"; // hoge

// false
if (a === undefined) {
  //
} else {
  console.log(`undefined is ${undefined}`); // undefined is hoge
}

// undefined の代わりに void 0 (undefined が保証されている)
if (a === void 0) {
  console.log(`void 0 is ${void 0}`); // void 0 is undefined
}
