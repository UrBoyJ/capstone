import {
    productsPath,
    productPath,
    loginPath,
    userPath
  } from './apiPaths'
  
  export const fetchProducts = async (query) => {
    try {
      const result = await fetch(productsPath(query))
      const products = result.json() // object[]
      return products
    } catch (error) {
      console.log(error)
    }
  }
  
  export const fetchProduct = async (productId) => {
    try {
      const result = await fetch(productPath(productId))
      const product = result.json() // object
      return product
    } catch (error) {
      console.log(error)
    }
  }
  
  // const fetchProductOrProducts = async (productId, query) => {
  //   try {
  //     const fetchUrl = productId ? productPath(productId) : productsPath(query)
  //     const result = await fetch(fetchUrl)
  //     const products = result.json()
  //     return products
  //   } catch (error) {}
  // }
  
  export const getUser = async (userId, token) => {
    // normally needs token and id to fetch user
    // change for custom API
    // send token
    // send userId
    const header = token ? { Authorization: `Bearer ${token}` } : null
    const result = await fetch(header ? userPath(userId, header) : userPath(userId))
    const user = await result.json()
    return user
  }
  
  export const userLogin = async (userLoginObject) => {
    try {
      const method = 'POST'
      const headers = {
        'Content-Type': 'application/json'
      }
      const body = JSON.stringify(userLoginObject)
      const options = { method, body, headers }
      const result = await fetch(loginPath, options)
  
      const token = await result.json()
      const user = await getUser(1)
      // const { token, user } = await result.json() // object: token
      // get user along with token
      return { token, user }
    } catch (error) {
      console.error(error)
    }
  }