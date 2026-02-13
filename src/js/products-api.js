// API ендпоінти:

import axios from 'axios';
import { BASE_URL, END_POINTS } from './constants';
axios.defaults.baseURL = BASE_URL;

// https://dummyjson.com/docs/products - документація бекенду, розділ продукти
// https://dummyjson.com/products?limit=10&skip=10 - отримати всі продукти з пагінацією
// https://dummyjson.com/products/1 - отримати один продукт по ID
// https://dummyjson.com/products/search?q=nail - пошук продукту по ключовому слову
// https://dummyjson.com/products/category-list - отримати список категорій продуктів
// https://dummyjson.com/products/category/smartphones - отримати продукти по категорії

const limit = 12;

export async function fetchCategories() {
  const { data } = await axios(`${END_POINTS.CATEGORIES}`);
  return data;
}

export async function fetchProducts(page) {
  const params = {
    limit: limit,
    skip: (page - 1) * limit,
  };

  const { data } = await axios.get(`${END_POINTS.PRODUCTS}`, { params });

  return data;
}

export async function fetchEndpoint(btnTextcontent, page) {
  const params = {
    limit: limit,
    skip: (page - 1) * limit,
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

export async function fetchItemInputValue(value, page) {
  const params = {
    limit: limit,
    q: value,

    skip: (page - 1) * limit,
  };

  const { data } = await axios.get(`/products/search`, {
    params,
  });

  return data;
}
