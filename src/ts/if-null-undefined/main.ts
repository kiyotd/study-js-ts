// false
if (undefined != null) {
  console.log(`1`);
}

// true 明示的に比較
if (undefined !== null) {
  console.log(`2`);
}

// false
if (null != undefined) {
  console.log(`3`);
}

// true 明示的に比較
if (null !== undefined) {
  console.log(`4`);
}
