const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);

const ingredientsEl = document.querySelector('#ingredients');
const newIngredients = [];

ingredients.forEach(ingredient => {
  const liIngredient = document.createElement('li');
  liIngredient.textContent = ingredient;
  liIngredient.classList.add('item');
  newIngredients.push(liIngredient);
});

ingredientsEl.append(...newIngredients); 




