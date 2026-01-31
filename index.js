import"./assets/styles-BKtNv1d4.js";import{a as r,i as n}from"./assets/vendor-BKxigkTP.js";const e={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found"),divModal:document.querySelector(".modal"),divModalProduct:document.querySelector(".modal-product"),btnCloseDivModal:document.querySelector(".modal__close-btn")};function p(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}function m(){e.categoriesList.addEventListener("click",t=>{if(t.target.nodeName!=="BUTTON")return;const s=t.target.textContent;s==="All"?l():T(s),document.querySelectorAll(".categories__btn").forEach(c=>{c.classList.remove("categories__btn--active")}),t.target.classList.add("categories__btn--active")})}const _="https://dummyjson.com",i=1,d={CATEGORIES:"/products/category-list",PRODUCTS:"/products"};r.defaults.baseURL=_;async function g(){const{data:t}=await r(`${d.CATEGORIES}`);return t}async function y(){const t={limit:12,skip:(i-1)*12},{data:s}=await r.get(`${d.PRODUCTS}`,{params:t});return s}async function v(t){const s={limit:12,skip:(i-1)*12},{data:o}=await r.get(`/products/category/${t}`,{params:s});return o}async function f(t){const{data:s}=await r.get(`/products/${t}`);return s}function L(t){const s=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("");e.categoriesList.innerHTML=s}function b(t){const s=t.map(o=>`<li class="products__item" data-id="${o.id}">
    <img class="products__image" src="${o.images[0]}" alt="${o.description}"/>
    <p class="products__title">${o.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${o.brand}</span></p>
    <p class="products__category">Category: ${o.category}</p>
    <p class="products__price">Price: ${o.price}$</p>
 </li>
`).join("");e.productsList.innerHTML=s}function $(t){const s=t.map(o=>`<li class="products__item" data-id="${o.id}">
    <img class="products__image" src="${o.images[0]}" alt="${o.description}"/>
    <p class="products__title">${o.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${o.brand}</span></p>
    <p class="products__category">Category: ${o.category}</p>
    <p class="products__price">Price: ${o.price}$</p>
 </li>
`).join("");e.productsList.innerHTML=s}function E(t){var c;const s=Array.isArray(t.tags)?t.tags.map(u=>`<li class="modal-product__tag">${u}</li>`).join(""):"",o=`
    <img class="modal-product__img" src="${((c=t.images)==null?void 0:c[0])||""}" alt="${t.description}" />
    <div class="modal-product__content">
      <p class="modal-product__title">${t.title}</p>
      <ul class="modal-product__tags">${s}</ul>
      <p class="modal-product__description">${t.description}</p>
      <p class="modal-product__shipping-information">Shipping: In stock</p>
      <p class="modal-product__return-policy">Return Policy: 30 days</p>
      <p class="modal-product__price">Price: ${t.price} $</p>
      <button class="modal-product__buy-btn" type="button">Buy</button>
    </div>
  `;e.divModalProduct.innerHTML=o}async function M(){try{const t=await g();L(["All",...t]),p()}catch(t){console.log(t),n.error({message:"Try again later!"})}}async function l(t){try{const s=await y();e.divNotFound.classList.remove("not-found--visible"),b(s.products)}catch(s){console.log(s),n.error({message:"Try again later!"})}}async function T(t){try{const s=await v(t);if(s.products.length===0){e.divNotFound.classList.add("not-found--visible"),e.productsList.innerHTML="";return}e.divNotFound.classList.remove("not-found--visible"),$(s.products)}catch(s){console.log(s),n.error({message:"Try again later!"})}}async function k(t){try{const s=await f(t);E(s)}catch(s){console.log(s),n.error({message:"Try again later!"})}}function C(){e.productsList.addEventListener("click",t=>{const s=t.target.closest(".products__item");if(!s)return;const o=s.dataset.id;k(o),e.divModal.classList.add("modal--is-open"),e.btnCloseDivModal.addEventListener("click",a),e.divModal.addEventListener("click",a),document.addEventListener("keydown",c=>{c.code==="Escape"&&a()})})}function a(){e.divModal.classList.remove("modal--is-open"),e.btnCloseDivModal.removeEventListener("click",a),document.removeEventListener("keydown",a),e.divModal.removeEventListener("click",a)}M();l();m();C();a();
//# sourceMappingURL=index.js.map
