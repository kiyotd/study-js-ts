const _ = require("lodash");

const users = [
  { user: "b", age: 20 },
  { user: "a", age: 10 },
  { user: "c", age: 30 },
];

const youngestUser = _.chain(users).sortBy("age").head().value();
console.log(youngestUser);

/*
[Output]:

{ user: 'a', age: 10 }

 */
