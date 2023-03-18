const inputSliderRef = document.querySelector('#font-size-control'); 
console.log(inputSliderRef);
const abracadabraRef = document.querySelector('#text');
console.log(abracadabraRef);


inputSliderRef.addEventListener('input', isInputChangeValue);

function isInputChangeValue() {
    abracadabraRef.style.fontSize = inputSliderRef.value + 'px';
}