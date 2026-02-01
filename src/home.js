//Логіка сторінки Home

import { getCategories, getProducts } from './js/handlers';
import {
  clearInputSearchForm,
  renderBtnListCategories,
  renderInputValueProductsItem,
} from './js/helpers';
import { closeDivModal, openClickDivModalOpen } from './js/modal';

getCategories();

getProducts();

renderBtnListCategories();

openClickDivModalOpen();

closeDivModal();

renderInputValueProductsItem();

clearInputSearchForm();
