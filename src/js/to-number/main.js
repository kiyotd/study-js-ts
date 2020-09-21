//
// https://tsofthome.appspot.com/ecmascript/jp_ecma-262.5_09.html
// 9.3 ToNumber

// string to number
console.log(parseFloat("10")); // 10
console.log(Number("10")); //10
console.log("10" - 0); // 10
console.log(+"10"); // 10
console.log(-"10"); // -10

// undefined to number
console.log(Number(undefined)); // NaN

// null to number
console.log(Number(null)); // 0

// true to number
console.log(Number(true)); // 1

// false to number
console.log(Number(false)); // 0

// number to number
console.log(Number(10)); // 10

// Object to number
console.log(Number({})); // NaN
