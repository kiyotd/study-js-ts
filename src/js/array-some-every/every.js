const arr = [1, 2, 3, 4, 5];

// 全て満たすかどうか

// 配列の全ての要素が0より大きいならtrue
console.log(
  arr.every((value) => {
    return value > 0;
  })
); //true

// 配列の全ての要素が1より大きいならtrue
console.log(
  arr.every((value) => {
    return value > 1;
  })
); //false
