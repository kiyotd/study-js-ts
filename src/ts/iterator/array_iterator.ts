interface IIterator<T> {
  hasNext: () => boolean;
  next: () => T;
}

class ArrayIterator<T> implements IIterator<T> {
  private readonly _array: T[];
  private _cursor: number;

  constructor(array: T[]) {
    this._array = array;
    this._cursor = 0;
  }

  hasNext(): boolean {
    return this._cursor < this._array.length;
  }

  next(): T {
    return this._array[this._cursor++];
  }
}

const elements: string[] = ["a", "b", "c"];
// type ElementType = typeof elements[0]; // string

const iterator: ArrayIterator<typeof elements[0]> = new ArrayIterator(elements);

while (iterator.hasNext()) {
  console.log(iterator.next());
}

/*
Output:
a
b
c
 */
