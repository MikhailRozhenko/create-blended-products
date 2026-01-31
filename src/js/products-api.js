// API ендпоінти:

import axios from 'axios';
import { BASE_URL, currentPage, END_POINTS } from './constants';
axios.defaults.baseURL = BASE_URL;

// https://dummyjson.com/docs/products - документація бекенду, розділ продукти
// https://dummyjson.com/products?limit=10&skip=10 - отримати всі продукти з пагінацією
// https://dummyjson.com/products/1 - отримати один продукт по ID
// https://dummyjson.com/products/search?q=nail - пошук продукту по ключовому слову
// https://dummyjson.com/products/category-list - отримати список категорій продуктів
// https://dummyjson.com/products/category/smartphones - отримати продукти по категорії

export async function fetchCategories() {
  const { data } = await axios(`${END_POINTS.CATEGORIES}`);
  return data;
}

export async function fetchProducts() {
  const params = {
    limit: 12,
    skip: (currentPage - 1) * 12,
  };

  const { data } = await axios.get(`${END_POINTS.PRODUCTS}`, { params });

  return data;
}

export async function fetchEndpoint(btnTextcontent) {
  const params = {
    limit: 12,
    skip: (currentPage - 1) * 12,
  };

  const { data } = await axios.get(`/products/category/${btnTextcontent}`, {
    params,
  });

  return data;
}

export async function fetchItemEndPoint(id) {
  const { data } = await axios.get(`/products/${id}`);

  return data;
}
