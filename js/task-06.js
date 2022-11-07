const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    console.log(Number(inputEl.dataset.length));
    console.log(inputEl.value.length);

    if (inputEl.value.trim().length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
    
    console.log(inputEl);
}