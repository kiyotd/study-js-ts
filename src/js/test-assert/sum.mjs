import assert from "assert";

const sum = (a, b) => {
  return a + b;
};

assert(sum(1, 2) === 3);
assert.equal(sum(1, 2), 3); // deprecated
assert.strictEqual(sum(1, 2), 3);
assert.notStrictEqual(sum(1, 2), 4);

export default sum;
