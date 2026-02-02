import { getDivModalProductId } from './handlers';
import { refs } from './refs';
import { getFromLS, saveToLS } from './storage';

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeDivModal();
  }
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    closeDivModal();
  }
}

export function openClickDivModalOpen() {
  refs.productsList.addEventListener('click', event => {
    const productItem = event.target.closest('.products__item');
    if (!productItem) return;

    const productId = productItem.dataset.id;
    refs.divModal.dataset.productId = productId;

    getDivModalProductId(productId);

    refs.divModal.classList.add('modal--is-open');

    refs.divModal.addEventListener('click', onBackdropClick);
    refs.btnCloseDivModal.addEventListener('click', closeDivModal);
    document.addEventListener('keydown', onEscPress);

    const lsData = getFromLS('wishlist');
    if (lsData === null) {
      refs.buttonWishList.textContent = 'Add to Wishlist';
      return;
    }
    const isVallidId = lsData.some(lsData => lsData === productId);
    if (!isVallidId) {
      refs.buttonWishList.textContent = 'Add to Wishlist';
    } else {
      refs.buttonWishList.textContent = 'Remove from Wishlist';
    }

    const lsDataCart = getFromLS('cart');
    if (lsDataCart === null) {
      refs.buttonCart.textContent = 'Add to Cart';
      return;
    }
    const isVallidIdCart = lsDataCart.some(
      lsDataCart => lsDataCart === productId
    );
    if (!isVallidIdCart) {
      refs.buttonCart.textContent = 'Add to Cart';
    } else {
      refs.buttonCart.textContent = 'Remove from Cart';
    }
  });
}

export function addToWishList() {
  refs.buttonWishList.addEventListener('click', () => {
    const productId = refs.divModal.dataset.productId;

    let lsData = getFromLS('wishlist');
    if (lsData === null) {
      lsData = [];
    }

    const isInWishlist = lsData.includes(productId);

    if (isInWishlist) {
      const updatedWishlist = lsData.filter(id => id !== productId);
      saveToLS('wishlist', updatedWishlist);

      refs.buttonWishList.textContent = 'Add to Wishlist';
      const lengthWishlist = updatedWishlist.length;
      refs.spanWishlist.textContent = lengthWishlist;
    } else {
      lsData.push(productId);
      saveToLS('wishlist', lsData);

      refs.buttonWishList.textContent = 'Remove from Wishlist';
      const lsDatalength = lsData.length;
      refs.spanWishlist.textContent = lsDatalength;
    }
  });
}

export function addToCart() {
  refs.buttonCart.addEventListener('click', () => {
    const productId = refs.divModal.dataset.productId;

    let lsDataCart = getFromLS('cart');
    if (lsDataCart === null) {
      lsDataCart = [];
    }

    const isInCart = lsDataCart.includes(productId);

    if (isInCart) {
      const updatedCart = lsDataCart.filter(id => id !== productId);
      saveToLS('cart', updatedCart);

      refs.buttonCart.textContent = 'Add to Cart';
      const lengthCart = updatedCart.length;
      refs.spanCart.textContent = lengthCart;
    } else {
      lsDataCart.push(productId);
      saveToLS('cart', lsDataCart);

      refs.buttonCart.textContent = 'Remove from Cart';
      const lsDatalengthCart = lsDataCart.length;
      refs.spanCart.textContent = lsDatalengthCart;
    }
  });
}

export function closeDivModal() {
  refs.divModal.classList.remove('modal--is-open');

  refs.btnCloseDivModal.removeEventListener('click', closeDivModal);
  refs.divModal.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscPress);
}
