interface GEN<T> {
  item: T;
}

const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello" }; //error: 型が必要
const gen2: GEN<number> = { item: 1 };

interface GEN1<T = string> {
  item: T;
}

//インターフェイスでデフォルトの型を設定したのでerrorにならない
const gen3: GEN1 = { item: "hello" };

//string or number しか指定できなくなる
interface GEN2<T extends string | number> {
  item: T;
}

const gen4: GEN2<string> = { item: "hello" };
const gen5: GEN2<number> = { item: 1 };

//error: string | number になっていない
// const gen6: GEN2<boolean> = { item: true };

function funcGen<T>(props: T): { item: T } {
  return { item: props };
}

//推論してくれるので funcGen<string> としなくてもよい
const gen7 = funcGen("hello");

const gen8 = funcGen<string | null>(null);

// extends で string | null に制限
function funcGen1<T extends string | null>(props: T): { value: T } {
  return { value: props };
}

const gen9 = funcGen1("hello");

//const gen10 = funcGen1(1); //error

interface Props {
  price: number;
}

function funcGen2<T extends Props>(props: T): { value: number } {
  return { value: props.price };
}

const gen11 = funcGen2({ price: 1000 });

// allow function
const funcGene3 = <T extends Props>(props: T): { value: number } => {
  return { value: props.price };
};

const gen12 = funcGene3({ price: 1000 });
