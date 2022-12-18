// alert("hello world1")


const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')


const validateForm = () => {
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 15);
    checkEmail(email)
    checkPassword(password2, password)
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
})

const showError = (input, msg) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.textContent = msg;
    formControl.classList.add('error');
}

const showSuccesss = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add('error');
}


const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input)) {
        showSuccesss(input);
    } else {
        showError(input, 'A valid email address must be unique.');
    }
}

const checkPassword = (input1, input2) => {
    if (input1 !== input2) {
        showError(input1, 'Must match the password field value.');
    } else (
        showSuccesss(input1),
    )
}

const checkLength = (input, min, max) => {
    if (input.value.length < min || input.value.length > max) {
        showError(input, `between ${min} and ${max} characters.`);
    } else {
        showSuccesss(input);
    }
}

const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `fields are required`);
        } else {
            showSuccess(input);
        }
    });
}