
// const inputRef = document.querySelector('#validation-input');

// inputRef.addEventListener('blur', isVInputInBlur);
// inputRef.addEventListener('focus', isVInputInFocus);
// inputRef.addEventListener('input', inputValue);


// function isVInputInFocus() {
//     console.log('Input in focus');
// };

// function isVInputInBlur() {
//     console.log('Input lost focus');
// };
// function inputValue (event) {
//         console.log(event.currentTarget.value);

// }

const inputRef = document.querySelector('#validation-input');
console.log(inputRef.dataset.length);

inputRef.addEventListener('blur', isValidNumber);

function isValidNumber(event) {
if (event.currentTarget.value.length <= inputRef.dataset.length) {
    inputRef.classList.add('valid'); 
} else {
    inputRef.classList.remove('valid'); 
    inputRef.classList.add('invalid'); 
    }
};


