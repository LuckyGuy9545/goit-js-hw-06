const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.getElementById('ingredients')
const ingredientsList = [];

ingredients.map(items => {
  const item = document.createElement('li');
  item.textContent = items;
  item.classList.add('item');
  ingredientsList.push(item);
});

ulList.append(...ingredientsList);
