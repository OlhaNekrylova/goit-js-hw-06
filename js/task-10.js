function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const collectionEl = document.querySelector('#controls');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');
console.log(collectionEl);

const createBoxes (amount) {

}