const formRef = document.querySelector('.login-form');
console.log(formRef);

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('submit', isInputEmpty);
formRef.addEventListener('submit', isInputFilled);

let loginFormData = {};

function onFormSubmit(event) {
    event.preventDefault();

    const elementEmail = event.currentTarget.elements.email.value;
    const elementPassword = event.currentTarget.elements.password.value;

    loginFormData = {
        elementEmail,
        elementPassword,
    };
}

const inputsRef = document.querySelectorAll('input');
console.log(inputsRef);
    
function isInputEmpty() {
    const isEmpty = Array.from(inputsRef).some(input => !input.value);
    if (isEmpty) {
        alert("Все поля должны быть заполнены.");
    }
}

function isInputFilled() {
    const isFilled = Array.from(inputsRef).every(input => input.value);
    if (isFilled) {
        console.log(loginFormData);
    }
    formRef.reset();
}



