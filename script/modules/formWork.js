import tableControl from './tableControl.js';
const {
  addProdactData,
  totalPriceTable,
  addProdactPage,
} = tableControl;

export const formControl =
  (form, tablebody, page, idNewProduct, data, closeModal) => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const newProduct = Object.fromEntries(formData);
      newProduct.id = idNewProduct.innerHTML;
      addProdactPage(newProduct, tablebody);
      addProdactData(newProduct, data);
      form.reset();
      closeModal();
      totalPriceTable(data, page);
    });
  };
