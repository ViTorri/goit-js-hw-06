// // Создай переменную counterValue в которой будет храниться 
// текущее значение счетчика и инициализируй её значением 0.
// // Добавь слушатели кликов на кнопки, внутри которых 
// увеличивай или уменьшай значение счтетчика.
// // Обновляй интерфейс новым значением переменной counterValue.

// const counterValue = {
//     value: 0,
//     decrement() {
//         this.value -= 1;
//     },
//     increment() {
//         this.value += 1;
//     },
// }

// const valueRef = document.querySelector('#value');
// console.log(valueRef);
// const decrementRef = document.querySelector('button[data-action="decrement"]');
// console.log(decrementRef);
// const incrementRef = document.querySelector('button[data-action="increment"]');
// console.log(incrementRef);

// decrementRef.addEventListener('click', () => {
//     counterValue.decrement();
//     valueRef.textContent = counterValue.value;
// });
// incrementRef.addEventListener('click', () => {
//     counterValue.increment();
//     valueRef.textContent = counterValue.value;
// });

// ================================c переменной===========================================

const valueRef = document.querySelector('#value');
console.log(valueRef);
const decrementRef = document.querySelector('button[data-action="decrement"]');
console.log(decrementRef);
const incrementRef = document.querySelector('button[data-action="increment"]');
console.log(incrementRef);

let counterValue = 0;

decrementRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});
incrementRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
})
