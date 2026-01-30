//Логіка сторінки Home

import { getCategories, getProducts } from './js/handlers';
import { renderBtnListCategories } from './js/helpers';
import { fetchItemEndPoint } from './js/products-api';

getCategories();

getProducts();

renderBtnListCategories();

fetchItemEndPoint().then(data => console.log(data));
