//Логіка сторінки Cart

import { refs } from './js/refs';
import { getFromLS } from './js/storage';

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
