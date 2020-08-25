type Engineer2 = {
  name: string;
  role: string;
};
type Blogger2 = {
  name: string;
  follower: number;
};

//type of

const toUpperCase = (x: string | number): string => {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return "";
};

//in

type NomadWorker = Engineer2 | Blogger2;

const describeProfile = (nomadWorker: NomadWorker): void => {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role); // roleがあるのはEngineer2
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
};

//instance of
//classに対して使う。interfaceはコンパイルされると消えてしまうので要注意。

class Dog {
  speak(): void {
    console.log("bow-wow");
  }
}

class Bird {
  speak(): void {
    console.log("tweet-tweet");
  }

  fly(): void {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;

const havePet = (pet: Pet): void => {
  pet.speak(); // DogにもBirdにもあるので使える
  if (pet instanceof Bird) {
    pet.fly();
  }
};

havePet(new Bird());
