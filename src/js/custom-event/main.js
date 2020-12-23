const helloEvent = new CustomEvent("helloEvent");

const elm = document.querySelector(".btn1");

const handleClick = () => {
  console.log("イベントの発行: helloEvent");
  elm.dispatchEvent(helloEvent);
};

const handleHello = () => {
  console.log("hello");
};

elm.addEventListener("click", handleClick);
elm.addEventListener("helloEvent", handleHello);
