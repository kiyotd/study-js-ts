const obj = {
  a: "hello",
  b: 123,
};

// obj を配列に変換してから分割代入
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

/*

[Output]:

a: hello
b: 123

*/
