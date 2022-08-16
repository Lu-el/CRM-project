import tableControl from './tableControl.js';
import {httpRequest} from './serverData.js';

const {
  addProdactPage,
  totalPriceChange,
} = tableControl;

// export const formControl =
//   (form, tablebody, totalPriceAll, idNewProduct, data, closeModal) => {
//     form.addEventListener('submit', e => {
//       e.preventDefault();

//       const formData = new FormData(e.target);

//       const newProduct = Object.fromEntries(formData);
//       newProduct.id = idNewProduct.innerHTML;
//       addProdactPage(newProduct, tablebody);
//       addProdactData(newProduct, data);
//       form.reset();
//       closeModal();
//       totalPriceTable(data, totalPriceAll);
//     });
//   };

const formPost =
  (err, newProduct, form, tablebody, closeModal, totalPriceAll) => {
    if (err) {
      const errStatus = +err.message;
      if (errStatus >= 404 && newProduct) {
        console.warn(err.message, newProduct);
        const errorMessage = document.querySelector('.add-good__error');
        errorMessage.textContent = `${err.message} ${newProduct}`;
        errorMessage.classList.remove('visually-hidden');
      } else {
        const errorBlock = document.querySelector('.error');
        errorBlock.classList.remove('visually-hidden');
      }
      return;
    }
    form.reset();
    addProdactPage(newProduct, tablebody);
    closeModal();
    totalPriceChange(newProduct, totalPriceAll);
  };

export const formEvent = (URL, form, tablebody, closeModal, totalPriceAll) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);

    httpRequest(URL, {
      method: 'POST',
      body: newProduct,
      callback: formPost,
      elements: {
        form,
        tablebody,
        closeModal,
        totalPriceAll,
      },
    });
  });
};

