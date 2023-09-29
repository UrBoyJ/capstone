export const productInCart = (cartProducts, productId) => {
    const isInCart = cartProducts.filter((product) => product.id === productId)
    return isInCart.length ? true : false
  }
  
  export const itemQtyCheck = (cart, productId) => {
    const isInCart = productInCart(cart, productId)
    if (!isInCart) return 0
    const [{ qty }] = cart.products.filter((product) => product.id === productId)
    return qty
  }