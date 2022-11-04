const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('span#text');
inputEl.addEventListener('input', onInputChange);
// spanEl.addEventListener('input', onInputChange);
// const fontSize  = 0;
function onInputChange (event) {
    console.log(event);
    spanEl.style.fontSize = inputEl.value;
    console.log(inputEl.value);
}