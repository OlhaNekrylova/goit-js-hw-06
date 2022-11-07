const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

const makeIngredientsOptions = options => {
  return options.map(option => {
    const itemEl = document.createElement('li');
    itemEl.textContent = option;
    itemEl.classList.add('item');
    return itemEl;
  });
};

const elements = makeIngredientsOptions(ingredients);

ingredientsEl.append(...elements);
// console.log(elements);
