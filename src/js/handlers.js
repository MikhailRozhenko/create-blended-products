import iziToast from 'izitoast';
import { activeFirstBtn } from './helpers';
import {
  fetchCategories,
  fetchEndpoint,
  fetchItemEndPoint,
  fetchProducts,
} from './products-api';
import { refs } from './refs';
import {
  renderCategories,
  renderDivModalItem,
  renderEndpoints,
  renderProducts,
} from './render-function';

export async function getCategories() {
  try {
    const data = await fetchCategories();
    renderCategories(['All', ...data]);
    activeFirstBtn();
  } catch (error) {
    console.log(error);
    iziToast.error({ message: 'Try again later!' });
  }
}

export async function getProducts(data) {
  try {
    const data = await fetchProducts();
    refs.divNotFound.classList.remove('not-found--visible');
    renderProducts(data.products);
  } catch (error) {
    console.log(error);
    iziToast.error({ message: 'Try again later!' });
  }
}

export async function getEndpoints(btnTextcontent) {
  try {
    const data = await fetchEndpoint(btnTextcontent);
    if (data.products.length === 0) {
      refs.divNotFound.classList.add('not-found--visible');
      refs.productsList.innerHTML = '';
      return;
    }
    refs.divNotFound.classList.remove('not-found--visible');
    renderEndpoints(data.products);
  } catch (error) {
    console.log(error);
    iziToast.error({ message: 'Try again later!' });
  }
}

export async function getDivModalProductId(id) {
  try {
    const data = await fetchItemEndPoint(id);
    renderDivModalItem(data);
  } catch (error) {
    console.log(error);
    iziToast.error({ message: 'Try again later!' });
  }
}
