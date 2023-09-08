'use strict';
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const firstItem = document.createElement('li');
firstItem.textContent = ingredients[0];
firstItem.classList.add('item');

const secondItem = document.createElement('li');
firstItem.textContent = ingredients[1];
firstItem.classList.add('item');

const thirdItem = document.createElement('li');
firstItem.textContent = ingredients[2];
firstItem.classList.add('item');

const fourthItem = document.createElement('li');
firstItem.textContent = ingredients[3];
firstItem.classList.add('item');

const fifthItem = document.createElement('li');
firstItem.textContent = ingredients[4];
firstItem.classList.add('item');

const sixthItem = document.createElement('li');
firstItem.textContent = ingredients[5];
firstItem.classList.add('item');

listIngredients.append(
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
  fifthItem,
  sixthItem
);
