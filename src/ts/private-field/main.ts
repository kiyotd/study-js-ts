class Main {
  #a = 10; // recommendation
  private _b = 20;

  getA(): number {
    return this.#a;
  }

  getB(): number {
    return this._b;
  }
}

const main = new Main();
console.log(main.getA());
console.log(main.getB());
