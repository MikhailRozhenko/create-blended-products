import { getEndpoints, getProducts } from './handlers';
import { refs } from './refs';

export function activeFirstBtn() {
  const firstBtn = document.querySelector('.categories__btn');
  if (firstBtn) {
    firstBtn.classList.add('categories__btn--active');
  }
}

export function renderBtnListCategories() {
  refs.categoriesList.addEventListener('click', event => {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    const btnTextcontent = event.target.textContent;

    if (btnTextcontent === 'All') {
      getProducts();
    } else {
      getEndpoints(btnTextcontent);
    }

    const allBtnCategories = document.querySelectorAll('.categories__btn');

    allBtnCategories.forEach(btn => {
      btn.classList.remove('categories__btn--active');
    });

    event.target.classList.add('categories__btn--active');
  });
}

export function renderItemDivModalOpenClick() {
  refs.productsList.addEventListener('click', event => {
    const productItem = event.target.closest('.products__item');
    if (!productItem) {
      return;
    }

    const productId = productItem.dataset.id;
  });
}
