function a() {
  setTimeout(() => {
    console.log("task1 done");
  });

  console.log("fn a done");
}

function b() {
  console.log("fn b done");
}

a();

b();

// fn a done
// fn b done
// task1 done
