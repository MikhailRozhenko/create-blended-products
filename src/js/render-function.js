import { refs } from './refs';

export function renderCategories(data) {
  const markup = data
    .map(
      el => `<li class="categories__item">
   <button class="categories__btn" type="button">${el}</button>
 </li>
`
    )
    .join('');
  refs.categoriesList.innerHTML = markup;
}

export function renderProducts(product, append = false) {
  const markup = product
    .map(
      product => `<li class="products__item" data-id="${product.id}">
    <img class="products__image" src="${product.images[0]}" alt="${product.description}"/>
    <p class="products__title">${product.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${product.brand}</span></p>
    <p class="products__category">Category: ${product.category}</p>
    <p class="products__price">Price: ${product.price}$</p>
 </li>
`
    )
    .join('');

  if (append) {
    refs.productsList.insertAdjacentHTML('beforeend', markup);
  } else {
    refs.productsList.innerHTML = markup;
  }
}

export function renderEndpoints(endpoint) {
  const markup = endpoint
    .map(
      endpoint => `<li class="products__item" data-id="${endpoint.id}">
    <img class="products__image" src="${endpoint.images[0]}" alt="${endpoint.description}"/>
    <p class="products__title">${endpoint.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${endpoint.brand || 'No results'}</span></p>
    <p class="products__category">Category: ${endpoint.category}</p>
    <p class="products__price">Price: ${endpoint.price}$</p>
 </li>
`
    )
    .join('');
  refs.productsList.innerHTML = markup;
}

export function renderDivModalItem(id) {
  const tagsMarkup = Array.isArray(id.tags)
    ? id.tags.map(tag => `<li class="modal-product__tag">${tag}</li>`).join('')
    : '';

  const markup = `
    <img class="modal-product__img" src="${id.images?.[0] || ''}" alt="${id.description}" />
    <div class="modal-product__content">
      <p class="modal-product__title">${id.title}</p>
      <ul class="modal-product__tags">${tagsMarkup}</ul>
      <p class="modal-product__description">${id.description}</p>
      <p class="modal-product__shipping-information">Shipping: In stock</p>
      <p class="modal-product__return-policy">Return Policy: 30 days</p>
      <p class="modal-product__price">Price: ${id.price} $</p>
      <button class="modal-product__buy-btn" type="button">Buy</button>
    </div>
  `;

  refs.divModalProduct.innerHTML = markup;
}

export function renderInputItemValueProduct(value) {
  const markup = value.products
    .map(
      value => `<li class="products__item" data-id="${value.id}">
        <img
          class="products__image"
          src="${value.thumbnail}"
          alt="${value.description}"
        />
        <p class="products__title">${value.title}</p>
        <p class="products__brand">
          <span class="products__brand--bold">
            Brand: ${value.brand}
          </span>
        </p>
        <p class="products__category">
          Category: ${value.category}
        </p>
        <p class="products__price">
          Price: ${value.price}$
        </p>
      </li>`
    )
    .join('');

  refs.productsList.innerHTML = markup;
}
