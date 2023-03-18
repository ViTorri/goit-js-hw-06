const formRef = document.querySelector('.login-form');
console.log(formRef);


formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('submit', isInputEmpty);

function onFormSubmit(event) {
    event.preventDefault();
}

const inputsRef = document.querySelectorAll('input');
    console.log(inputsRef);

function isInputEmpty() {
    Array.from(inputsRef).every(input => {
        if (input.value === "") {
         alert("Все поля должны быть заполнены.");
        }
    })
}

    // const getElementEmail = event.currentTarget.elements.email.value;
    // const getElementPassword = event.currentTarget.elements.password.value;

    // console.log(getElementEmail);
    // console.log(getElementPassword);

