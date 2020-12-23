// 論理 Null 代入
// Null 合体代入 (x ??= y) 演算子は、x が nullish (null または undefined) である場合にのみ代入を行います。

const a = { duration: 50 };

a.duration ??= 10; // a.duration が null ではないので、a.duration は 50 のまま
console.log(a.duration); // 50

a.speed ??= 25; // a.speed が null なので a.speed に 25 が代入される
console.log(a.speed); // 25
