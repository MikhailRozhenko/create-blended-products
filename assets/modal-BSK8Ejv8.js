import{a as d,i as g}from"./vendor-CYhTztQS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const s={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found"),divModal:document.querySelector(".modal"),divModalProduct:document.querySelector(".modal-product"),btnCloseDivModal:document.querySelector(".modal__close-btn"),formHeader:document.querySelector(".search-form"),buttonClearInputForm:document.querySelector(".search-form__btn-clear"),buttonWishList:document.querySelector(".modal-product__btn--wishlist"),spanCart:document.querySelector(".nav__count-cart"),spanWishlist:document.querySelector(".nav__count-wishlist"),buttonCart:document.querySelector(".modal-product__btn--cart"),spanCartItems:document.querySelector(".cart-summary__value"),spanCartTotalPrice:document.querySelector(".cart-summary__price"),buttonBuyProducts:document.querySelector(".cart-summary__btn")};function C(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}function F(){s.categoriesList.addEventListener("click",t=>{if(t.target.nodeName!=="BUTTON")return;const e=t.target.textContent;e==="All"?y():T(e),document.querySelectorAll(".categories__btn").forEach(a=>{a.classList.remove("categories__btn--active")}),t.target.classList.add("categories__btn--active")})}function B(){s.formHeader.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.searchValue.value.trim();if(e===""){i("Пожалуйста, заполните поле формы для поиска");return}W(e)})}function N(){s.buttonClearInputForm.addEventListener("click",t=>{t.preventDefault(),s.formHeader.elements.searchValue.value="",y()})}const v="https://dummyjson.com",f=1,_={CATEGORIES:"/products/category-list",PRODUCTS:"/products"};d.defaults.baseURL=v;async function L(){const{data:t}=await d(`${_.CATEGORIES}`);return t}async function I(){const t={limit:12,skip:(f-1)*12},{data:e}=await d.get(`${_.PRODUCTS}`,{params:t});return e}async function $(t){const e={limit:12,skip:(f-1)*12},{data:o}=await d.get(`/products/category/${t}`,{params:e});return o}async function S(t){const{data:e}=await d.get(`/products/${t}`);return e}async function P(t){const e={q:t,limit:12,skip:(f-1)*12},{data:o}=await d.get("/products/search",{params:e});return o}function E(t){const e=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("");s.categoriesList.innerHTML=e}function M(t){const e=t.map(o=>`<li class="products__item" data-id="${o.id}">
    <img class="products__image" src="${o.images[0]}" alt="${o.description}"/>
    <p class="products__title">${o.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${o.brand}</span></p>
    <p class="products__category">Category: ${o.category}</p>
    <p class="products__price">Price: ${o.price}$</p>
 </li>
`).join("");s.productsList.innerHTML=e}function w(t){const e=t.map(o=>`<li class="products__item" data-id="${o.id}">
    <img class="products__image" src="${o.images[0]}" alt="${o.description}"/>
    <p class="products__title">${o.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${o.brand||"No results"}</span></p>
    <p class="products__category">Category: ${o.category}</p>
    <p class="products__price">Price: ${o.price}$</p>
 </li>
`).join("");s.productsList.innerHTML=e}function k(t){var a;const e=Array.isArray(t.tags)?t.tags.map(r=>`<li class="modal-product__tag">${r}</li>`).join(""):"",o=`
    <img class="modal-product__img" src="${((a=t.images)==null?void 0:a[0])||""}" alt="${t.description}" />
    <div class="modal-product__content">
      <p class="modal-product__title">${t.title}</p>
      <ul class="modal-product__tags">${e}</ul>
      <p class="modal-product__description">${t.description}</p>
      <p class="modal-product__shipping-information">Shipping: In stock</p>
      <p class="modal-product__return-policy">Return Policy: 30 days</p>
      <p class="modal-product__price">Price: ${t.price} $</p>
      <button class="modal-product__buy-btn" type="button">Buy</button>
    </div>
  `;s.divModalProduct.innerHTML=o}function D(t){const e=t.products.map(o=>`<li class="products__item" data-id="${o.id}">
        <img
          class="products__image"
          src="${o.thumbnail}"
          alt="${o.description}"
        />
        <p class="products__title">${o.title}</p>
        <p class="products__brand">
          <span class="products__brand--bold">
            Brand: ${o.brand}
          </span>
        </p>
        <p class="products__category">
          Category: ${o.category}
        </p>
        <p class="products__price">
          Price: ${o.price}$
        </p>
      </li>`).join("");s.productsList.innerHTML=e}function i(t){g.error({message:t,position:"topRight",timeout:1500,pauseOnHover:!0,close:!0})}async function A(){try{const t=await L();E(["All",...t]),C()}catch(t){console.log(t),i("try again later!")}}async function y(t){try{const e=await I();s.divNotFound.classList.remove("not-found--visible"),M(e.products)}catch(e){console.log(e),i("try again later!")}}async function T(t){try{const e=await $(t);if(e.products.length===0){s.divNotFound.classList.add("not-found--visible"),s.productsList.innerHTML="";return}s.divNotFound.classList.remove("not-found--visible"),w(e.products)}catch(e){console.log(e),i("try again later!")}}async function q(t){try{const e=await S(t);k(e)}catch(e){console.log(e),i("try again later!")}}async function W(t){try{const e=await P(t);if(!e||e.products.length===0){s.divNotFound.classList.add("not-found--visible"),s.productsList.innerHTML="",i("К сожалению, по вашему запросу не было найдено результатов");return}s.divNotFound.classList.remove("not-found--visible"),D(e)}catch(e){console.log(e),i("К сожалению, по вашему запросу не было найдено результатов")}}function u(t,e){const o=JSON.stringify(e);localStorage.setItem(t,o)}function p(t,e){const o=localStorage.getItem(t);try{return JSON.parse(o)}catch{return o}}function O(t){g.show({title:"🛍 Покупка успешна",message:t,position:"topRight",timeout:4e3,progressBar:!0,close:!0,pauseOnHover:!0,animateInside:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",backgroundColor:"#FFD54F",titleColor:"#1a1a1a",messageColor:"#1a1a1a",progressBarColor:"#FFB300"})}function h(t){t.target===t.currentTarget&&m()}function b(t){t.code==="Escape"&&m()}function R(){s.productsList.addEventListener("click",t=>{const e=t.target.closest(".products__item");if(!e)return;const o=e.dataset.id;s.divModal.dataset.productId=o,q(o),s.divModal.classList.add("modal--is-open"),s.divModalProduct.addEventListener("click",l=>{l.target.closest(".modal-product__buy-btn")&&O("Поздравляем🔥, вы успешно приобрели этот товар✅")}),s.divModal.addEventListener("click",h),s.btnCloseDivModal.addEventListener("click",m),document.addEventListener("keydown",b);const a=p("wishlist");if(a===null){s.buttonWishList.textContent="Add to Wishlist";return}a.some(l=>l===o)?s.buttonWishList.textContent="Remove from Wishlist":s.buttonWishList.textContent="Add to Wishlist";const n=p("cart");if(n===null){s.buttonCart.textContent="Add to Cart";return}n.some(l=>l===o)?s.buttonCart.textContent="Remove from Cart":s.buttonCart.textContent="Add to Cart"})}function H(){s.buttonWishList.addEventListener("click",()=>{const t=s.divModal.dataset.productId;let e=p("wishlist");if(e===null&&(e=[]),e.includes(t)){const a=e.filter(c=>c!==t);u("wishlist",a);const r=document.querySelector(`.products__item[data-id="${t}"`);r&&r.remove(),s.buttonWishList.textContent="Add to Wishlist";const n=a.length;s.spanWishlist.textContent=n}else{e.push(t),u("wishlist",e),s.buttonWishList.textContent="Remove from Wishlist";const a=e.length;s.spanWishlist.textContent=a}})}function V(){s.buttonCart.addEventListener("click",()=>{const t=s.divModal.dataset.productId;let e=p("cart");if(e===null&&(e=[]),e.includes(t)){const a=e.filter(c=>c!==t);u("cart",a);const r=document.querySelector(`.products__item[data-id="${t}"`);r&&r.remove(),s.buttonCart.textContent="Add to Cart";const n=a.length;s.spanCart.textContent=n}else{e.push(t),u("cart",e),s.buttonCart.textContent="Remove from Cart";const a=e.length;s.spanCart.textContent=a}})}function m(){s.divModal.classList.remove("modal--is-open"),s.btnCloseDivModal.removeEventListener("click",m),s.divModal.removeEventListener("click",h),document.removeEventListener("keydown",b)}export{H as a,V as b,m as c,w as d,A as e,S as f,p as g,y as h,F as i,B as j,N as k,R as o,s as r};
//# sourceMappingURL=modal-BSK8Ejv8.js.map
