{
  type Foo = {
    bar: number;
    bas: number;
  };

  let foo: Readonly<Foo> = { bar: 1, bas: 2 };
  //foo.bar = 3; //TS2540: Cannot assign to 'bar' because it is a read-only property.

  type A = string | number;

  const a: readonly (string | number)[] = ["a", 1];
  const b: Readonly<(string | number)[]> = ["a", 1];
  const c: Readonly<Array<string | number>> = ["a", 1];
  const d: ReadonlyArray<string | number> = ["a", 1];
  const e: readonly A[] = ["a", 1];
  const f: Readonly<A[]> = ["a", 1];
  const g: Readonly<Array<A>> = ["a", 1];
  const h: ReadonlyArray<A> = ["a", 1];

  console.log(a, b, c, d, e, f, g, h);
}
