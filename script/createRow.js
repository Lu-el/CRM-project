'use strict';

const createRow = (product) => {
  const values = Object.values(product);
  const newRow = values.map(elem => {
    if (elem === Object(elem)) {
      return `<td>${elem.small}</td>`;
    } return `<td>${elem}</td>`;
  });
  return `<tr>${newRow.join(' ')}</tr>`;
};

const renderGoods = (arr) => {
  const goodsList = arr.map(elem => createRow(elem));
  return goodsList;
};
