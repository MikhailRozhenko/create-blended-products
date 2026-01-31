import { getDivModalProductId } from './handlers';
import { refs } from './refs';

export function openClickDivModalOpen() {
  refs.productsList.addEventListener('click', event => {
    const productItem = event.target.closest('.products__item');
    if (!productItem) {
      return;
    }

    const productId = productItem.dataset.id;
    getDivModalProductId(productId);
    refs.divModal.classList.add('modal--is-open');
    refs.btnCloseDivModal.addEventListener('click', closeDivModal);
    refs.divModal.addEventListener('click', closeDivModal);

    document.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        closeDivModal();
      }
    });
  });
}

export function closeDivModal() {
  refs.divModal.classList.remove('modal--is-open');
  refs.btnCloseDivModal.removeEventListener('click', closeDivModal);
  document.removeEventListener('keydown', closeDivModal);
  refs.divModal.removeEventListener('click', closeDivModal);
}
