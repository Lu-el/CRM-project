const getIdNumber = () => {
  const id = new Date().getTime();
  return id.toString().slice(0, 9);
};

const changeId = (btnChangeId, idNewProduct) => {
  btnChangeId.addEventListener('click', (e) => {
    const id = +prompt('Введите новый id');
    if (!(Number.isNaN(id)) &&
      id.toString().length <= 9 &&
        !(id === 0)) {
      idNewProduct.innerHTML = id.toString().padStart(9, 0);
      return;
    } else {
      alert('Должны быть цифры, id не может превышать 9 знаков');
      return;
    }
  });
};

const modalControl = (addGood, addProductButton) => {
  const fieldCheckbox = addGood.querySelector('.field__checkbox');
  const idNewProduct = addGood.querySelector('.add-good__number');
  const addProdactForm = addGood.querySelector('.add-good__form');
  const totalCost = addProdactForm.querySelector('.price__number');
  const btnChangeId = addGood.querySelector('.add-good__pencil');
  const closeModal = () => {
    addGood.classList.remove('add-good_show');
  };

  const openModal = () => {
    addGood.classList.add('add-good_show');
    idNewProduct.innerHTML = getIdNumber();
    changeId(btnChangeId, idNewProduct);
  };

  addProductButton.addEventListener('click', () => {
    openModal();
    totalCost.innerHTML = `$&nbsp;0`;
  });

  addGood.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.add-good__form') ||
      target.closest('.add-good__caption')) {
      return;
    }
    document.querySelector('.add-good__form').reset();
    closeModal();
  });

  fieldCheckbox.addEventListener('change', () => {
    const input = fieldCheckbox.nextElementSibling;
    if (fieldCheckbox.checked) {
      input.disabled = false;
      input.focus();
    } else {
      input.disabled = true;
      input.value = '';
    }
  });

  return {
    closeModal,
  };
};

const changeTotalCost = (addProdactForm, totalCost) => {
  addProdactForm.addEventListener('focusout', (e) => {
    if (e.target.closest('.field__input')) {
      totalCost.innerHTML =
        `$&nbsp;${addProdactForm.price.value * addProdactForm.count.value}`;
    }
  });
};

export default {
  modalControl,
  changeTotalCost,
};
