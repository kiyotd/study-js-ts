{
  const adventurer = {
    name: "Alice",
    cat: {
      name: "Dinah",
    },
  };

  // TODO: not working
  const dogName = adventurer.dog?.name;
  console.log(dogName);
}
