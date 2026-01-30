import"./assets/styles-JE8YjOlG.js";import{a as r,i as o}from"./assets/vendor-BKxigkTP.js";const e={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found")};function l(){const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")}function u(){e.categoriesList.addEventListener("click",t=>{if(t.target.nodeName!=="BUTTON")return;const s=t.target.textContent;s==="All"?i():T(s),document.querySelectorAll(".categories__btn").forEach(d=>{d.classList.remove("categories__btn--active")}),t.target.classList.add("categories__btn--active")})}const p="https://dummyjson.com",c=1,n={CATEGORIES:"/products/category-list",PRODUCTS:"/products"};r.defaults.baseURL=p;async function g(){const{data:t}=await r(`${n.CATEGORIES}`);return t}async function _(){const t={limit:12,skip:(c-1)*12},{data:s}=await r.get(`${n.PRODUCTS}`,{params:t});return s}async function m(t){const s={limit:12,skip:(c-1)*12},{data:a}=await r.get(`/products/category/${t}`,{params:s});return a}async function f(t){const s={limit:12,skip:(c-1)*12},{data:a}=await r.get("/products/1",{params:s});return a}function y(t){const s=t.map(a=>`<li class="categories__item">
   <button class="categories__btn" type="button">${a}</button>
 </li>
`).join("");e.categoriesList.innerHTML=s}function b(t){const s=t.map(a=>`<li class="products__item" data-id="${a.id}">
    <img class="products__image" src="${a.images[0]}" alt="${a.description}"/>
    <p class="products__title">${a.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${a.brand}</span></p>
    <p class="products__category">Category: ${a.category}</p>
    <p class="products__price">Price: ${a.price}$</p>
 </li>
`).join("");e.productsList.innerHTML=s}function L(t){const s=t.map(a=>`<li class="products__item" data-id="">
    <img class="products__image" src="${a.images[0]}" alt="${a.description}"/>
    <p class="products__title">${a.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${a.brand}</span></p>
    <p class="products__category">Category: ${a.category}</p>
    <p class="products__price">Price: ${a.price}$</p>
 </li>
`).join("");e.productsList.innerHTML=s}async function $(){try{const t=await g();y(["All",...t]),l()}catch(t){console.log(t),o.error({message:"Try again later!"})}}async function i(t){try{const s=await _();e.divNotFound.classList.remove("not-found--visible"),b(s.products)}catch(s){console.log(s),o.error({message:"Try again later!"})}}async function T(t){try{const s=await m(t);if(s.products.length===0){e.divNotFound.classList.add("not-found--visible"),e.productsList.innerHTML="";return}e.divNotFound.classList.remove("not-found--visible"),L(s.products)}catch(s){console.log(s),o.error({message:"Try again later!"})}}$();i();u();f().then(t=>console.log(t));
//# sourceMappingURL=index.js.map
