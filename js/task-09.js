function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const myBody = document.body;
console.log(myBody);
const myColorBtn = document.querySelector('.change-color');
console.log(myColorBtn);
const spanColor = document.querySelector('.color');
console.log(spanColor);


myColorBtn.addEventListener('click', onColorBtnClick);


function onColorBtnClick() {
  myBody.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}