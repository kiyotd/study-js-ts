const a = { name: "A" };

// const なので a は代入不可
a = {}; // NG

// しかし、値の中身は変更可能
a.name = "A2"; // OK

// 値の中身も変更したくない場合は Object.freeze
const b = Object.freeze({ name: "B" });

b.name = "B2"; // NG

console.log(b); // B
