function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const counter = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const collectionEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', renderBoxes);

const makeBoxesMarkup = () => {
  let width = 30;
  let height = 30;
  const markup = [];

  for (let i = 0; i < counter.value; i += 1) {
    markup.push(`<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px;"></div>`);
    width += 10;
    height += 10;
  }
  return markup.join('');
};

function renderBoxes () {
  collectionEl.insertAdjacentHTML('afterbegin', makeBoxesMarkup());
}

btnDestroyEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    collectionEl.innerHTML = '';
}