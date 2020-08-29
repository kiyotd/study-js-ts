// ES2015 以前の古い書き方

function sleep(callback, val) {
  setTimeout(function () {
    console.log(val++);
    callback(val);
  }, 1000);
}

sleep(function (val) {
  sleep(function (val) {
    sleep(function (val) {
      sleep(function (val) {
        sleep(function (val) {}, val);
      }, val);
    }, val);
  }, val);
}, 0);

// 0
// 1
// 2
// 3
// 4
