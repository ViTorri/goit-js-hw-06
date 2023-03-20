const refs = {
  control: document.querySelector('#controls'),
  myInput: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  myBoxes: document.querySelector('#boxes'),
};

console.log(refs)

refs.control.addEventListener('click', getAmount);
refs.control.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getAmount(event) {
  if (event.target === refs.createBtn) {
    const amount = Number(refs.myInput.value);
    createBoxes(amount);
  }
}

function destroyBoxes(event) {
  if (event.target === refs.destroyBtn) {
    refs.myBoxes.innerHTML = "";
  }
}

function createBoxes(amount) {
  let BoxSize = 30;
  for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    box.style.width = BoxSize + 'px';
    box.style.height = BoxSize + 'px';
    box.style.backgroundColor = getRandomHexColor();
    refs.myBoxes.appendChild(box);
    BoxSize += 10;
  }
}

// ======================???????Почему не работает через insertAdjacentHTML???????===========================================


// function createBoxes(amount) {
//   let BoxSize = 30;
//   let box = "";
//   for (let i = 0; i < amount; i++) {
//     const color = getRandomHexColor();
//     box = `<div style = 'width: ${BoxSize}px; height: ${BoxSize}px; background-color: ${color}'></div>`
//     BoxSize += 10;
//   }
//   refs.myBoxes.insertAdjacentHTML('beforeend', box);
// }



