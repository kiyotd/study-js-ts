let a = 0; // Script Scope
console.log(a); // 0

var b = 0; // Global Scope, window.b
console.log(b); // 0
console.log(window.b); // 0

// Global Scope, window.c()
function c() {
  console.log("c"); // c
}

c(); // c
window.c(); // c

window.d = 1;
//console.log(d); // 1

window.f = "window.f";
let f = "let f";
console.log(f); // let f

debugger; // Processing pauses here
