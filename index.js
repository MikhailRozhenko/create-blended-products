import"./assets/styles-BKtNv1d4.js";import{a as n,i as p}from"./assets/vendor-CYhTztQS.js";const s={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found"),divModal:document.querySelector(".modal"),divModalProduct:document.querySelector(".modal-product"),btnCloseDivModal:document.querySelector(".modal__close-btn"),formHeader:document.querySelector(".search-form"),buttonClearInputForm:document.querySelector(".search-form__btn-clear")};function m(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}function _(){s.categoriesList.addEventListener("click",t=>{if(t.target.nodeName!=="BUTTON")return;const e=t.target.textContent;e==="All"?d():S(e),document.querySelectorAll(".categories__btn").forEach(c=>{c.classList.remove("categories__btn--active")}),t.target.classList.add("categories__btn--active")})}function g(){s.formHeader.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.searchValue.value.trim();if(e===""){a("Пожалуйста, заполните поле формы для поиска");return}w(e)})}function f(){s.buttonClearInputForm.addEventListener("click",t=>{t.preventDefault(),s.formHeader.elements.searchValue.value="",d()})}const y="https://dummyjson.com",i=1,l={CATEGORIES:"/products/category-list",PRODUCTS:"/products"};n.defaults.baseURL=y;async function v(){const{data:t}=await n(`${l.CATEGORIES}`);return t}async function b(){const t={limit:12,skip:(i-1)*12},{data:e}=await n.get(`${l.PRODUCTS}`,{params:t});return e}async function L(t){const e={limit:12,skip:(i-1)*12},{data:o}=await n.get(`/products/category/${t}`,{params:e});return o}async function $(t){const{data:e}=await n.get(`/products/${t}`);return e}async function h(t){const e={q:t,limit:12,skip:(i-1)*12},{data:o}=await n.get("/products/search",{params:e});return o}function E(t){const e=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("");s.categoriesList.innerHTML=e}function M(t){const e=t.map(o=>`<li class="products__item" data-id="${o.id}">
    <img class="products__image" src="${o.images[0]}" alt="${o.description}"/>
    <p class="products__title">${o.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${o.brand}</span></p>
    <p class="products__category">Category: ${o.category}</p>
    <p class="products__price">Price: ${o.price}$</p>
 </li>
`).join("");s.productsList.innerHTML=e}function k(t){const e=t.map(o=>`<li class="products__item" data-id="${o.id}">
    <img class="products__image" src="${o.images[0]}" alt="${o.description}"/>
    <p class="products__title">${o.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${o.brand||"No results"}</span></p>
    <p class="products__category">Category: ${o.category}</p>
    <p class="products__price">Price: ${o.price}$</p>
 </li>
`).join("");s.productsList.innerHTML=e}function C(t){var c;const e=Array.isArray(t.tags)?t.tags.map(u=>`<li class="modal-product__tag">${u}</li>`).join(""):"",o=`
    <img class="modal-product__img" src="${((c=t.images)==null?void 0:c[0])||""}" alt="${t.description}" />
    <div class="modal-product__content">
      <p class="modal-product__title">${t.title}</p>
      <ul class="modal-product__tags">${e}</ul>
      <p class="modal-product__description">${t.description}</p>
      <p class="modal-product__shipping-information">Shipping: In stock</p>
      <p class="modal-product__return-policy">Return Policy: 30 days</p>
      <p class="modal-product__price">Price: ${t.price} $</p>
      <button class="modal-product__buy-btn" type="button">Buy</button>
    </div>
  `;s.divModalProduct.innerHTML=o}function I(t){const e=t.products.map(o=>`<li class="products__item" data-id="${o.id}">
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
      </li>`).join("");s.productsList.innerHTML=e}function a(t){p.error({message:t,position:"topRight",timeout:1500,pauseOnHover:!0,close:!0})}async function P(){try{const t=await v();E(["All",...t]),m()}catch(t){console.log(t),a("try again later!")}}async function d(t){try{const e=await b();s.divNotFound.classList.remove("not-found--visible"),M(e.products)}catch(e){console.log(e),a("try again later!")}}async function S(t){try{const e=await L(t);if(e.products.length===0){s.divNotFound.classList.add("not-found--visible"),s.productsList.innerHTML="";return}s.divNotFound.classList.remove("not-found--visible"),k(e.products)}catch(e){console.log(e),a("try again later!")}}async function T(t){try{const e=await $(t);C(e)}catch(e){console.log(e),a("try again later!")}}async function w(t){try{const e=await h(t);if(!e||e.products.length===0){s.divNotFound.classList.add("not-found--visible"),s.productsList.innerHTML="",a("К сожалению, по вашему запросу не было найдено результатов");return}s.divNotFound.classList.remove("not-found--visible"),I(e)}catch(e){console.log(e),a("К сожалению, по вашему запросу не было найдено результатов")}}function D(){s.productsList.addEventListener("click",t=>{const e=t.target.closest(".products__item");if(!e)return;const o=e.dataset.id;T(o),s.divModal.classList.add("modal--is-open"),s.btnCloseDivModal.addEventListener("click",r),s.divModal.addEventListener("click",r),document.addEventListener("keydown",c=>{c.code==="Escape"&&r()})})}function r(){s.divModal.classList.remove("modal--is-open"),s.btnCloseDivModal.removeEventListener("click",r),document.removeEventListener("keydown",r),s.divModal.removeEventListener("click",r)}P();d();_();D();r();g();f();
//# sourceMappingURL=index.js.map
