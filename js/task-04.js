const descrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counterValue = {
    value: 0,

    descrement () {
        this.value -= 1;
    },

    increment () {
        this.value += 1; 
    },
};

descrementBtnEl.addEventListener('click', onDescrementBtnElClick);

function onDescrementBtnElClick () {
    valueEl.textContent = counterValue.value;
    counterValue.descrement();
}

incrementBtnEl.addEventListener('click', onIncrementBtnElClick);

function onIncrementBtnElClick () {
    valueEl.textContent = counterValue.value;
    counterValue.increment();
}