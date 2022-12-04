const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.getElementById('ingredients')
console.log(ulList)

const addName = ingredients.forEach(ingredient => {
  let items = document.createElement('li');
  items.textContent = ingredient;
  items.classList.add('item');
  ulList.append(items);
});

console.log(addName)