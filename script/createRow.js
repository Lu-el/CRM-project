'use strict';

const createRow = (product) => {
  const values = Object.values(product);
  const newRow = values.map(elem => `<td class="table__cell">${elem}</td>`);
  return `<tr class="table__row">${newRow.join(' ')}</tr>`;
};

const renderGoods = (arr) => {
  const goodsList = arr.map(elem => createRow(elem));
  return goodsList.join('');
};

const data = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 3,
    'price': 27000,
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'category': 'toys',
    'units': 'шт',
    'count': 1,
    'price': 4000,
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'category': 'tv-box',
    'units': 'шт',
    'count': 4,
    'price': 12400,
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'category': 'cables',
    'units': 'v',
    'count': 420,
    'price': 22,
  },
];

const tbody = document.querySelector('.table__body');
tbody.innerHTML = renderGoods(data);
