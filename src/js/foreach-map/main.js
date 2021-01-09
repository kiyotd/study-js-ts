{
  const numbers = [0, 1, 2, 3, 4, 5];

  //forEach
  const resultA = numbers.forEach((item) => console.log(item * 2));
  console.log(resultA); //undefined

  console.log("--------");

  // map
  const resultB = numbers.map((item) => item * 2);
  console.log(resultB); //[ 0, 2, 4, 6, 8, 10 ]
}
