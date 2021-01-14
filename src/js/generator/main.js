{
  function* gen() {
    yield 1;
    yield 2;
    return 3;
  }

  const it = gen();
  console.log(it.next()); //{ value: 1, done: false }
  console.log(it.next()); //{ value: 2, done: false }
  console.log(it.next()); //{ value: 3, done: true }
}
