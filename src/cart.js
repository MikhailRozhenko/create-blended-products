//Логіка сторінки Cart

import iziToast from 'izitoast';
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

export function showSuccessPurchaseToast(totalPrice) {
  iziToast.show({
    title: '🛒 Покупка оформлена',
    message: `Поздравляем! Вы приобрели товаров на сумму <b>${totalPrice}$</b>.<br>🚚 Доставка будет в течение <b>2 дней</b>.`,
    position: 'topRight',
    timeout: 4500,
    progressBar: true,
    close: true,
    pauseOnHover: true,
    animateInside: true,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',

    backgroundColor: '#FFD54F',

    titleColor: '#1a1a1a',
    messageColor: '#1a1a1a',
    progressBarColor: '#FFB300',
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
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

export async function updateCartUI() {
  const cart = getFromLS('cart');
  if (!cart || cart.length === 0) {
    refs.productsList.innerHTML = '';
    refs.spanCartItems.textContent = 0;
    refs.spanCartTotalPrice.textContent = '0$';

    return;
  }
  const promises = cart.map(id => fetchItemEndPoint(id));
  const products = await Promise.all(promises);
  renderEndpoints(products);
  const productsLength = products.length;
  refs.spanCartItems.textContent = productsLength;
  const sum = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  const sumTotal = Number(sum.toFixed(2));
  refs.spanCartTotalPrice.textContent = `${sumTotal}$`;

  refs.buttonBuyProducts.addEventListener('click', () => {
    showSuccessPurchaseToast(`${sumTotal}`);
  });
}

addToWishList();

openClickDivModalOpen();

addToCart();

closeDivModal();

document.addEventListener('cart-updated', () => {
  updateCartUI();
});

themeSwitch();

applySavedTheme();
