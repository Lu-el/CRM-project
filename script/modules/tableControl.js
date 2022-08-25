import {createRow} from './renderTable.js';

const getTableElements = () => {
  const page = document.querySelector('.page');
  const totalPriceAll = page.querySelector('.price__number_summ');
  const tbody = document.querySelector('.table__body');
  const addProductButton = document.querySelector('.page__btn-add');
  const addGood = document.querySelector('.add-good');
  const addProdactForm = addGood.querySelector('.add-good__form');
  const totalCost = addProdactForm.querySelector('.price__number');
  const idNewProduct = addGood.querySelector('.add-good__number');

  return {
    page,
    totalPriceAll,
    tbody,
    addProductButton,
    addGood,
    addProdactForm,
    totalCost,
    idNewProduct,
  };
};

// const addProdactData = (newProduct, data) => {
//   data.push(newProduct);
// };

const totalPriceData = (data) => {
  let total = 0;
  for (const name of data) {
    total += name.price * name.count;
  }
  return total;
};

const totalPriceTable = (data, totalPriceAll) => {
  const total = totalPriceData(data);
  totalPriceAll.innerHTML = total;
};

const totalPriceChange = (newProduct, totalPriceAll) => {
  const summ = +totalPriceAll.innerHTML;
  console.log(summ);
  totalPriceAll.innerHTML = summ + newProduct.price * newProduct.count;
};

const showPicture = (width, height) => {
  const x = width / 2 - 300;
  const y = height / 2 - 300;
  const win = window.open('about:blank', '', `width=600px,height=600px`);
  console.log(width, height, x, y);
  win.moveBy(-x, y);
  return win;
};

const createPicture = (url, alt) => {
  const img = document.createElement('img');
  img.alt = alt;
  img.src = url;
  img.style.width = '100%';
  return img;
};

const tbodyControl = (totalPriceAll, tbody, data) => {
  tbody.addEventListener('click', e => {
    const target = e.target;
    const row = target.closest('.table__row');
    if (target.closest('.table__btn_delete')) {
      data.forEach((elem, index) => {
        if (+elem.id === +row.dataset.id) {
          row.remove();
          data.splice(index, 1);
        }
        totalPriceTable(data, totalPriceAll);
      });

      return;
    }

    if (target.closest('.table__btn_img')) {
      const url = row.dataset.pic;
      const alt = row.dataset.picAlt;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const win = showPicture(width, height);
      win.document.body.append(createPicture(url, alt));
    }
  });
};

const addProdactPage = (newProduct, tablebody) => {
  tablebody.innerHTML += createRow(newProduct);
};

export default {
  getTableElements,
  // addProdactData,
  totalPriceTable,
  tbodyControl,
  addProdactPage,
  totalPriceChange,
};
