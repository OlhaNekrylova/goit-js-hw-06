function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('#controls');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const collectionEl = document.querySelector('#boxes');
console.log(collectionEl);

btnCreateEl.addEventListener('click', onbtnCreateElClick);
function onbtnCreateElClick (event) {

};

btnDestroyEl.addEventListener('click', onbtnDestroyElClick);
function onbtnDestroyElClick (event) {
  
};

const amount = 0; 

function createBoxes (amount) {
  const newEl = document.createElement('div');
  return newEl;
  console.log(newEl);
}
  const newElements = createBoxes (amount);
  console.log(newElements);

  collectionEl.append(...newElements);
  console.log(collectionEl);
