import {
  getEndpoints,
  getInputsearchValue,
  getProducts,
  showError,
} from './handlers';
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

export function renderInputValueProductsItem() {
  refs.formHeader.addEventListener('submit', event => {
    event.preventDefault();

    const InputValue = event.target.elements.searchValue.value.trim();
    if (InputValue === '') {
      showError('Пожалуйста, заполните поле формы для поиска');
      return;
    }
    getInputsearchValue(InputValue);
  });
}

export function clearInputSearchForm() {
  refs.buttonClearInputForm.addEventListener('click', event => {
    event.preventDefault();
    refs.formHeader.elements.searchValue.value = '';
    getProducts();
  });
}
