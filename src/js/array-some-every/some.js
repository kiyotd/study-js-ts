const arr = [1, 2, 3, 4, 5];

// 1つでも満たせばOK

// 配列の1つの要素が4より大きいならtrue
// [log] true
console.log(
  arr.some((value) => {
    return value > 4;
  })
); //true

// 配列の1つの要素が10より大きいならtrue
// [log] false
console.log(
  arr.some((value) => {
    return value > 10;
  })
); //false
