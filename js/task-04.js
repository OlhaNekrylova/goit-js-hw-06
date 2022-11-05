const counterValue = {
    value = 0,

    descrement () {
        this.value -= 1;
    },

    increment () {
        this.value += 1; 
    },
};

const descrementBtnEl = document.querySelector('[descrement]');
const incrementBtnEl = document.querySelector('[increment]');
const valueEl = document.querySelector('span');

descrementBtnEl.addEventListener('click', function (event) {
    valueEl.textContent = counterValue.value;
    counterValue.descrement();
});

incrementBtnEl.addEventListener('click', function (event) {
    valueEl.textContent = counterValue.value;
    counterValue.increment();
});