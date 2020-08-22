function a() {
  let b = 0;
  console.log(b);
}

a(); // 0

//--------

{
  var c = 1; // Global Scope
}
console.log(c); // 1

//--------

{
  // Global Scope
  function d() {
    console.log("d is called");
  }

  d(); // d is called
}

//d(); // d is called

//--------

{
  // Block Scope
  const f = function () {
    console.log("f is called");
  };
  f(); // f is called
}

//f(); // f is not defined

//--------

debugger;
