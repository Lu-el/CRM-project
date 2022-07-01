'use strict';

{
  const addProductButton = document.querySelector('.page__btn-add');
  const addGood = document.querySelector('.add-good');
  const fieldCheckbox = addGood.querySelector('.field__checkbox');

  addProductButton.addEventListener('click', () => {
    addGood.classList.add('add-good_show');
  });

  addGood.addEventListener('click', e => {
    const target = e.target;
    if (!(target.closest('.add-good__form'))) {
      addGood.classList.remove('add-good_show');
    }
  });

  fieldCheckbox.addEventListener('change', () => {
    const input = fieldCheckbox.nextElementSibling;
    if (fieldCheckbox.checked) {
      input.disabled = false;
    } else {
      input.disabled = true;
    }
  });
}
