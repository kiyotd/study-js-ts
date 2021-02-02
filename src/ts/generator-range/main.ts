{
  const range = function* (
    start: number,
    end: number
  ): Generator<number, void> {
    for (let i = start; i < end; i++) {
      yield i;
    }
  };

  const generatorObject = range(0, 5);
  const arr: number[] = [...generatorObject];

  console.log(arr); // [ 0, 1, 2, 3, 4 ]
}
