type ObjType = {
  a: string;
  b: string;
  c: string;
};

const obj: ObjType = { a: "A", b: "B", c: "C" };

let { a, b } = obj;

console.log(a); // A
console.log(b); // B

({ a, b } = { a: "A2", b: "B2" });

console.log(a); // A2
console.log(b); // B2

// make aa from a
const { a: aa } = obj;

// make bb from b with Type Annotation
const { b: bb }: { b: string } = obj;

// make cc from c with Type Alias
const { c: cc }: ObjType = obj;

console.log(aa); // A
console.log(bb); // B
console.log(cc); // C
