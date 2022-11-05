const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('span#text');

inputEl.addEventListener('input', onInputChange);

function onInputChange (event) {
    console.log(event);
    spanEl.style.fontSize = `${inputEl.value}px`;
    console.log(inputEl.value);
}