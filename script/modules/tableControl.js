import {createRow} from './renderTable.js';

const getTableElements = () => {
  const page = document.querySelector('.page');
  const tbody = document.querySelector('.table__body');
  const addProductButton = document.querySelector('.page__btn-add');
  const addGood = document.querySelector('.add-good');
  const addProdactForm = addGood.querySelector('.add-good__form');
  const totalCost = addProdactForm.querySelector('.price__number');
  const idNewProduct = addGood.querySelector('.add-good__number');

  return {
    page,
    tbody,
    addProductButton,
    addGood,
    addProdactForm,
    totalCost,
    idNewProduct,
  };
};

const addProdactData = (newProduct, data) => {
  data.push(newProduct);
};

const totalPriceTable = (data, page) => {
  const totalPriceAll = page.querySelector('.price__number');
  let total = 0;
  for (const name of data) {
    total += name.price * name.count;
  }
  totalPriceAll.innerHTML = `$&nbsp;${total}`;
};

const deleteRow = (page, tbody, data) => {
  tbody.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.table__btn_delete')) {
      const row = target.closest('.table__row');

      data.forEach((elem, index) => {
        if (+elem.id === +row.dataset.id) {
          row.remove();
          data.splice(index, 1);
          totalPriceTable(data, page);
        }
      });
      console.log(data);
    }
  });
};

const addProdactPage = (newProduct, tablebody) => {
  tablebody.innerHTML += createRow(newProduct);
};

export default {
  getTableElements,
  addProdactData,
  totalPriceTable,
  deleteRow,
  addProdactPage,
};
