{
  // キーからユニオン型の型を作成
  // "name" | "age"
  type K = keyof { name: string; age: number };

  function a(value: K): void {
    console.log("a");
  }

  // "name" | "age" のみ引数にとれる
  a("name");

  //----------------

  // U は "foo" | "bar" になる
  function copy<T, U extends keyof T>(value: T, key: U): T {
    return value;
  }

  console.log(copy({ foo: "fooooo", bar: "barrrr" }, "bar"));
}
