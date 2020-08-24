let comp1 = "test"; // 型推論で string 型になる
let comp2: string = comp1; // OK

let comp3 = "test"; // 型推論で string 型になる
// let comp4: "test" = comp3; // [error] "test"型ではなくstring型を代入しようとしている

let funcComp1 = (x: number): number => x;
let funcComp2 = (x: string): string => x;

// funcComp1 = funcComp2; // [error] 引数の型が違う
// funcComp2 = funcComp1; // [error] 引数の型が違う
