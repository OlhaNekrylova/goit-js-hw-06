const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');
console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener('input', onInputChange);
function onInputChange (event) {
    spanEl.textContent = event.currentTarget.value;
    if (inputEl.value.trim() === '') {
        spanEl.textContent = 'Anonymous';
    }
    console.log(spanEl.textContent);
}
