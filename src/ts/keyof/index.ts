//keyof
type KEYS = {
  primary: string;
  secondary: string;
};

// key は "primary" か "secondary" の型しか受け付けない union type

let key: keyof KEYS;

key = "primary";
console.log(key);

key = "secondary";
console.log(key);

// typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball"
};

// SPORTS の型 を keyof している
// keySports は "soccer" か "baseball" の型しか受け付けない union type
let keySports: keyof typeof SPORTS;

keySports = "soccer";
console.log(keySports);

keySports = "baseball";
console.log(keySports);
