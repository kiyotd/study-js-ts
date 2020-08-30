// finally のコールバック関数に引数は渡せない

new Promise(function (resolve, reject) {
  console.log("promise");
  // resolve("hello");
  // reject("bye");

  setTimeout(function () {
    resolve("hello");
  }, 1000);
})
  .then(function (data) {
    console.log(`then: ${data}`);
    return data;
    // throw new Error(); // then の中で catch に飛ばす
  })
  .then(function (data) {
    console.log(`then2: ${data}`);
  })
  .catch(function (data) {
    console.log(`catch: ${data}`);
  })
  .finally(function () {
    console.log("finally");
  });
console.log("global end");

// promise
// global end
// then: hello
// then2: hello
// finally
