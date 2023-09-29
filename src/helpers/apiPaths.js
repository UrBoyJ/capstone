const baseUrl = 'https://fakestoreapi.com/'

// 'https://fakestoreapi.com/products?limit=5'
export const productsPath = (query) =>
  query ? `${baseUrl}products?${query}` : `${baseUrl}products`
export const productPath = (productId) => `${productsPath()}/${productId}`

export const categoriesPath = `${productsPath()}/categories`
// https://fakestoreapi.com/products/category/jewelery'
export const categoryPath = (catName) => `${productsPath()}/category/${catName}`

export const cartsPath = (query) => (query ? `${baseUrl}carts?${query}` : `${baseUrl}carts`)
export const cartPath = (cartId) => `${cartsPath()}/${cartId}`

export const usersPath = (query) => (query ? `${baseUrl}users?${query}` : `${baseUrl}users`)
export const userPath = (userId) => `${usersPath()}/${userId}`

export const loginPath = `${baseUrl}auth/login`