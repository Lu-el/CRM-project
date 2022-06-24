'use strict';

const addGoods = document.querySelector('.add-good');

const title = addGoods.querySelectorAll('.add-good__caption');
const btnChangeGood = addGoods.querySelector('.add-good__pencil');
const goodId = addGoods.querySelector('.add-good__text');
const addGoodForm = addGoods.querySelector('.add-good__form');
const fieldCheckbox = addGoods.querySelector('.field__checkbox');
const checkboxfieldset = fieldCheckbox.closest('.form__field');
const discount = checkboxfieldset.querySelector('.field__input');
const totalPrice = addGoods.querySelector('.price__number');

console.log(title);
console.log(btnChangeGood);
console.log(goodId);
console.log(addGoodForm);
console.log(discount);
console.log(totalPrice);
