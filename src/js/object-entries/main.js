const obj = {
  a: "hello",
  b: 123,
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

/*

[Output]:

a: hello
b: 123

*/
