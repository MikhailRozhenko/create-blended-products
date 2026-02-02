//Логіка сторінки Wishlist

import {
  addToCart,
  addToWishList,
  closeDivModal,
  openClickDivModalOpen,
} from './js/modal';
import { fetchItemEndPoint } from './js/products-api';
import { refs } from './js/refs';
import { renderEndpoints } from './js/render-function';
import { getFromLS } from './js/storage';
import { applySavedTheme, themeSwitch } from './js/theme-switcher';

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

function addToCartWishList() {
  document.addEventListener('DOMContentLoaded', async () => {
    const Wishlist = getFromLS('wishlist');
    if (!Wishlist || Wishlist.length === 0) {
      refs.productsList.innerHTML = '';
      return;
    }
    const promises = Wishlist.map(id => fetchItemEndPoint(id));
    const products = await Promise.all(promises);
    renderEndpoints(products);
  });
}

addToCartWishList();

openClickDivModalOpen();

addToWishList();

addToCart();

closeDivModal();

themeSwitch();

applySavedTheme();
