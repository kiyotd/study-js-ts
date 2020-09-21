type User = {
  id: string;
  name: string;
};

const partialUser: Partial<User> = { id: "hoge" };
console.log(partialUser); // { id: 'hoge' }

type Optional<T> = { [P in keyof T]?: T[P] };
const optionalUser: Optional<User> = { id: "hoge" };
console.log(optionalUser); // { id: 'hoge' }

type OptionalNullable<T> = { [P in keyof T]?: T[P] | null };
const optionalNullableUser: OptionalNullable<User> = { id: null };
console.log(optionalNullableUser); // { id: null}
