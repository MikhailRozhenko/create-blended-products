//Логіка сторінки Home

import { getCategories, getProducts } from './js/handlers';
import {
  clearInputSearchForm,
  renderBtnListCategories,
  renderInputValueProductsItem,
} from './js/helpers';
import {
  addToCart,
  addToWishList,
  closeDivModal,
  openClickDivModalOpen,
} from './js/modal';
import { fetchProducts } from './js/products-api';
import { refs } from './js/refs';
import { getFromLS } from './js/storage';
import { applySavedTheme, themeSwitch } from './js/theme-switcher';

let currentPage = 1;
const limit = 12;

document.addEventListener('DOMContentLoaded', () => {
  const getWishlist = getFromLS('wishlist');
  let countWishlist;
  if (!getWishlist) {
    countWishlist = 0;
  } else {
    countWishlist = getWishlist.length;
  }
  refs.spanWishlist.textContent = countWishlist;

  const getWishlistCart = getFromLS('cart');
  let countWishlistCart;
  if (!getWishlistCart) {
    countWishlistCart = 0;
  } else {
    countWishlistCart = getWishlistCart.length;
  }
  refs.spanCart.textContent = countWishlistCart;
});

getCategories();

getProducts(currentPage);
currentPage++;

renderBtnListCategories();

openClickDivModalOpen();

closeDivModal();

renderInputValueProductsItem();

clearInputSearchForm();

addToWishList();

addToCart();

themeSwitch();

applySavedTheme();

refs.loadMoreButton.addEventListener('click', () => {
  getProducts(currentPage, true);
  currentPage++;
});
