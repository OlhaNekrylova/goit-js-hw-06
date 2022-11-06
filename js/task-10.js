function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('#controls');
const counter = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const collectionEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);
function getAmount () {
  counter.value === amount;
  createBoxes (amount);
}

const items = {backgroundColor: getRandomHexColor(), width: 30, height: 30};
const makeBoxesMarkup = items => {
  const {backgroundColor, width, height} = items;
  for (const i = 0; i >= 1 && i <= 100; i +=1) {
    const div = document.createElement('div');
    return `
    <div style="backgroundColor: ${getRandomHexColor()}; width: ${width}px; height: ${height}px;"></div>
    `;
  }
};

function createBoxes (amount) {
  counter.value === amount;
  items.map(makeBoxesMarkup).join(''); 
}

collectionEl.insertAdjacentHTML('afterbegin', createBoxes);
console.log(collectionEl);

btnDestroyEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    collectionEl.innerHTML = '';
    console.log(collectionEl);
  }