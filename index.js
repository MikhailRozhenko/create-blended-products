import{r as e,g as c,s as u}from"./assets/storage-C5mwrqgF.js";import{a as d,i as C}from"./assets/vendor-CYhTztQS.js";function v(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}function L(){e.categoriesList.addEventListener("click",t=>{if(t.target.nodeName!=="BUTTON")return;const s=t.target.textContent;s==="All"?g():B(s),document.querySelectorAll(".categories__btn").forEach(a=>{a.classList.remove("categories__btn--active")}),t.target.classList.add("categories__btn--active")})}function b(){e.formHeader.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.searchValue.value.trim();if(s===""){o("Пожалуйста, заполните поле формы для поиска");return}S(s)})}function y(){e.buttonClearInputForm.addEventListener("click",t=>{t.preventDefault(),e.formHeader.elements.searchValue.value="",g()})}const $="https://dummyjson.com",m=1,_={CATEGORIES:"/products/category-list",PRODUCTS:"/products"};d.defaults.baseURL=$;async function I(){const{data:t}=await d(`${_.CATEGORIES}`);return t}async function E(){const t={limit:12,skip:(m-1)*12},{data:s}=await d.get(`${_.PRODUCTS}`,{params:t});return s}async function k(t){const s={limit:12,skip:(m-1)*12},{data:n}=await d.get(`/products/category/${t}`,{params:s});return n}async function M(t){const{data:s}=await d.get(`/products/${t}`);return s}async function W(t){const s={q:t,limit:12,skip:(m-1)*12},{data:n}=await d.get("/products/search",{params:s});return n}function T(t){const s=t.map(n=>`<li class="categories__item">
   <button class="categories__btn" type="button">${n}</button>
 </li>
`).join("");e.categoriesList.innerHTML=s}function x(t){const s=t.map(n=>`<li class="products__item" data-id="${n.id}">
    <img class="products__image" src="${n.images[0]}" alt="${n.description}"/>
    <p class="products__title">${n.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${n.brand}</span></p>
    <p class="products__category">Category: ${n.category}</p>
    <p class="products__price">Price: ${n.price}$</p>
 </li>
`).join("");e.productsList.innerHTML=s}function w(t){const s=t.map(n=>`<li class="products__item" data-id="${n.id}">
    <img class="products__image" src="${n.images[0]}" alt="${n.description}"/>
    <p class="products__title">${n.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${n.brand||"No results"}</span></p>
    <p class="products__category">Category: ${n.category}</p>
    <p class="products__price">Price: ${n.price}$</p>
 </li>
`).join("");e.productsList.innerHTML=s}function D(t){var a;const s=Array.isArray(t.tags)?t.tags.map(i=>`<li class="modal-product__tag">${i}</li>`).join(""):"",n=`
    <img class="modal-product__img" src="${((a=t.images)==null?void 0:a[0])||""}" alt="${t.description}" />
    <div class="modal-product__content">
      <p class="modal-product__title">${t.title}</p>
      <ul class="modal-product__tags">${s}</ul>
      <p class="modal-product__description">${t.description}</p>
      <p class="modal-product__shipping-information">Shipping: In stock</p>
      <p class="modal-product__return-policy">Return Policy: 30 days</p>
      <p class="modal-product__price">Price: ${t.price} $</p>
      <button class="modal-product__buy-btn" type="button">Buy</button>
    </div>
  `;e.divModalProduct.innerHTML=n}function P(t){const s=t.products.map(n=>`<li class="products__item" data-id="${n.id}">
        <img
          class="products__image"
          src="${n.thumbnail}"
          alt="${n.description}"
        />
        <p class="products__title">${n.title}</p>
        <p class="products__brand">
          <span class="products__brand--bold">
            Brand: ${n.brand}
          </span>
        </p>
        <p class="products__category">
          Category: ${n.category}
        </p>
        <p class="products__price">
          Price: ${n.price}$
        </p>
      </li>`).join("");e.productsList.innerHTML=s}function o(t){C.error({message:t,position:"topRight",timeout:1500,pauseOnHover:!0,close:!0})}async function A(){try{const t=await I();T(["All",...t]),v()}catch(t){console.log(t),o("try again later!")}}async function g(t){try{const s=await E();e.divNotFound.classList.remove("not-found--visible"),x(s.products)}catch(s){console.log(s),o("try again later!")}}async function B(t){try{const s=await k(t);if(s.products.length===0){e.divNotFound.classList.add("not-found--visible"),e.productsList.innerHTML="";return}e.divNotFound.classList.remove("not-found--visible"),w(s.products)}catch(s){console.log(s),o("try again later!")}}async function R(t){try{const s=await M(t);D(s)}catch(s){console.log(s),o("try again later!")}}async function S(t){try{const s=await W(t);if(!s||s.products.length===0){e.divNotFound.classList.add("not-found--visible"),e.productsList.innerHTML="",o("К сожалению, по вашему запросу не было найдено результатов");return}e.divNotFound.classList.remove("not-found--visible"),P(s)}catch(s){console.log(s),o("К сожалению, по вашему запросу не было найдено результатов")}}function f(t){t.target===t.currentTarget&&l()}function h(t){t.code==="Escape"&&l()}function V(){e.productsList.addEventListener("click",t=>{const s=t.target.closest(".products__item");if(!s)return;const n=s.dataset.id;e.divModal.dataset.productId=n,R(n),e.divModal.classList.add("modal--is-open"),e.divModal.addEventListener("click",f),e.btnCloseDivModal.addEventListener("click",l),document.addEventListener("keydown",h);const a=c("wishlist");if(a===null){e.buttonWishList.textContent="Add to Wishlist";return}a.some(p=>p===n)?e.buttonWishList.textContent="Remove from Wishlist":e.buttonWishList.textContent="Add to Wishlist";const r=c("cart");if(r===null){e.buttonCart.textContent="Add to Cart";return}r.some(p=>p===n)?e.buttonCart.textContent="Remove from Cart":e.buttonCart.textContent="Add to Cart"})}function H(){e.buttonWishList.addEventListener("click",()=>{const t=e.divModal.dataset.productId;let s=c("wishlist");if(s===null&&(s=[]),s.includes(t)){const a=s.filter(r=>r!==t);u("wishlist",a),e.buttonWishList.textContent="Add to Wishlist";const i=a.length;e.spanWishlist.textContent=i}else{s.push(t),u("wishlist",s),e.buttonWishList.textContent="Remove from Wishlist";const a=s.length;e.spanWishlist.textContent=a}})}function N(){e.buttonCart.addEventListener("click",()=>{const t=e.divModal.dataset.productId;let s=c("cart");if(s===null&&(s=[]),s.includes(t)){const a=s.filter(r=>r!==t);u("cart",a),e.buttonCart.textContent="Add to Cart";const i=a.length;e.spanCart.textContent=i}else{s.push(t),u("cart",s),e.buttonCart.textContent="Remove from Cart";const a=s.length;e.spanCart.textContent=a}})}function l(){e.divModal.classList.remove("modal--is-open"),e.btnCloseDivModal.removeEventListener("click",l),e.divModal.removeEventListener("click",f),document.removeEventListener("keydown",h)}document.addEventListener("DOMContentLoaded",()=>{const t=c("wishlist");let s;t?s=t.length:s=0,e.spanWishlist.textContent=s;const n=c("cart");let a;n?a=n.length:a=0,e.spanCart.textContent=a});A();g();L();V();l();b();y();H();N();
//# sourceMappingURL=index.js.map
