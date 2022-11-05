function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

refs.button.addEventListener('click', onButtonClick);

function onButtonClick (event) {
    document.body.style.backgroundColor = getRandomHexColor();
    refs.span.textContent = getRandomHexColor();
    console.log(refs.span);
}
