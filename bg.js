const body = document.querySelector("body");

const IMG_NUMBER = 5;

function getRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function paintImg(imgNumber) {
  const img = new Image();
  img.src = `images/${imgNumber}.jpg`;
  img.classList.add("bgImage");
  body.appendChild(img);
}
function init() {
  const randomNumber = getRandom();
  paintImg(randomNumber);
}

init();
