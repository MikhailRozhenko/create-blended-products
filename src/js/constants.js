export const BASE_URL = 'https://dummyjson.com';

export const currentPage = 1;
export const url = `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`;

export const END_POINTS = {
  CATEGORIES: '/products/category-list',
  PRODUCTS: '/products',
};
