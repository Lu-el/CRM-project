'use strict';

const addProductButton = document.querySelector('.page__btn-add');
const addGood = document.querySelector('.add-good');
const closeModulWindow = document.querySelector('.add-good__btn');
const modalArea = addGood.querySelector('.add-good__form');

addProductButton.addEventListener('click', () => {
  addGood.classList.add('add-good_show');
});

modalArea.addEventListener('click', event => {
  event.stopPropagation();
});

closeModulWindow.addEventListener('click', () => {
  addGood.classList.remove('add-good_show');
});

addGood.addEventListener('click', () => {
  addGood.classList.remove('add-good_show');
});
