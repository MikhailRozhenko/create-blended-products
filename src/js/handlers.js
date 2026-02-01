import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { activeFirstBtn } from './helpers';
import {
  fetchCategories,
  fetchEndpoint,
  fetchItemEndPoint,
  fetchItemInputValue,
  fetchProducts,
} from './products-api';
import { refs } from './refs';
import {
  renderCategories,
  renderDivModalItem,
  renderEndpoints,
  renderInputItemValueProduct,
  renderProducts,
} from './render-function';

export function showError(message) {
  iziToast.error({
    message: message,
    position: 'topRight',
    timeout: 1500,
    pauseOnHover: true,
    close: true,
  });
}

export async function getCategories() {
  try {
    const data = await fetchCategories();
    renderCategories(['All', ...data]);
    activeFirstBtn();
  } catch (error) {
    console.log(error);
    showError('try again later!');
  }
}

export async function getProducts(data) {
  try {
    const data = await fetchProducts();
    refs.divNotFound.classList.remove('not-found--visible');
    renderProducts(data.products);
  } catch (error) {
    console.log(error);
    showError('try again later!');
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
    showError('try again later!');
  }
}

export async function getDivModalProductId(id) {
  try {
    const data = await fetchItemEndPoint(id);
    renderDivModalItem(data);
  } catch (error) {
    console.log(error);
    showError('try again later!');
  }
}

export async function getInputsearchValue(value) {
  try {
    const data = await fetchItemInputValue(value);

    if (!data || data.products.length === 0) {
      refs.divNotFound.classList.add('not-found--visible');
      refs.productsList.innerHTML = '';
      showError('К сожалению, по вашему запросу не было найдено результатов');
      return;
    }

    refs.divNotFound.classList.remove('not-found--visible');
    renderInputItemValueProduct(data);
  } catch (error) {
    console.log(error);
    showError('К сожалению, по вашему запросу не было найдено результатов');
  }
}
