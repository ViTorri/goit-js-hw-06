// Напиши скрипт который, при наборе текста в инпуте input#name-input
//(событие input), подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameInputRef = document.querySelector('#name-input');
console.log(nameInputRef);
const nameOutputRef = document.querySelector('#name-output');
console.log(nameOutputRef);

nameInputRef.addEventListener('input', addInput);

function addInput(event) {
    if (event.target.value === '') {
        nameOutputRef.textContent = "Anonymous";
    } else {
        nameOutputRef.textContent = event.target.value;
    }     
};

// ================================тернарный===========================================

// function addInput(event) {
//     event.target.value === '' ? nameOutputRef.textContent = "Anonymous" : nameOutputRef.textContent = event.target.value;
// }
