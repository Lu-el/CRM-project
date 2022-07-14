export const createRow = product =>
  `<tr class='table__row' data-id='${product.id}'
    data-pic=${product.images?.big || product.images?.small ?
      `https://i.cars.kg/preview/r/fvXdZJ4GHVycLRQGcyvh-g/1080x-/offers/6017/601785.jpg` :
      ``}>
  <td class='table__cell'>
    ${product.id}
  </td>
  <td class='table__cell'>
    ${product.title}
  </td>
  <td class='table__cell'>
    ${product.category}
  </td>
  <td class='table__cell table__cell_position_center'>
    ${product.units}
  </td>
  <td class='table__cell table__cell_position_center'>
    ${product.count}
  </td>
  <td class='table__cell table__cell_position_right'>
    $${product.price}
  </td>
  <td class='table__cell table__cell_position_right'>
    $${product.price * product.count}
  </td>
  <td class='table__cell table__cell_position_right'>
  ${product.images?.big || product.images?.small ?
      `<button class='table__btn table__btn_img'
        aria-label='Есть изображение'></button>` :
      `<button class='table__btn table__btn_img_absent'
        aria-label='Нет изображения'></button>`
}
    <button class='table__btn table__btn_change'
        aria-label='Изменить карточку товара'></button>
    <button class='table__btn table__btn_delete'
        aria-label='Удалить карточку товара'></button>
  </td>
  </tr>`;

export const renderGoods = (arr) => {
  const goodsList = arr.map(elem => createRow(elem));
  return goodsList.join('');
};


