'use strict';

const createRow = product =>
  `<tr class='table__row'>
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


const renderGoods = (arr) => {
  const goodsList = arr.map(elem => createRow(elem));
  return goodsList.join('');
};

const data = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': 'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'v',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const tbody = document.querySelector('.table__body');
tbody.innerHTML = renderGoods(data);
