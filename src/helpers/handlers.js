import { fetchProduct, userLogin } from './fetches'
import { productInCart } from './utility'

export const handleSingleProduct = async (e, productId, setter, navigate) => {
  const selectedProduct = await fetchProduct(productId)
  setter(selectedProduct)
  navigate(`/products/${productId}`)
}

export const handleSetQuanity = (e, setter) => setter(Number(e.target.value))

export const handleClearSelectedProd = (e, setter) => setter({})

export const handleSignout = (e, cartSetter, userSetter, initCartState, initUserState) => {
  localStorage.removeItem('token')
  localStorage.setItem('cart', JSON.stringify(initCartState))
  cartSetter(initCartState)
  userSetter(initUserState)
}

export const handleAddToCart = (e, productToAdd, cart, cartSetter) => {
  // normally, this would fetch, needs async if we fetch
  const { productId } = productToAdd // pulling ID of the product out for convencience
  const isInCart = productInCart(cart.products, productId) // check to see if it's already in the cart
  const newCart = { ...cart, products: [...cart.products, productToAdd] }
  if (!isInCart) {
    localStorage.setItem('cart', JSON.stringify(newCart))
    cartSetter(newCart)
  } // if not in cart, set new Cart
  // create a new object
  // this object is made from the old object
  // I'm changing the products attribute
  // with a new array, made from the old product array, with a new product added to it.
}

export const handleRemoveFromCart = (e, productId, cart, cartSetter) => {
  const isInCart = productInCart(cart.products, productId)
  const newProducts = cart.products.filter((product) => productId !== product.id)
  const newCart = { ...cart, products: newProducts }
  if (isInCart) {
    localStorage.setItem('cart', JSON.stringify(newCart))
    cartSetter(newCart)
  }
}

export const handleSubmitInputReset = (e, formSetter, initialInput) => {
  e.preventDefault()
  formSetter(initialInput)
}

export const handleInputChange = (e, input, setter) => {
  const value = e.target.value
  const key = e.target.name
  setter({ ...input, [key]: value })
}

export const handleSubmitLogin = async (e, userDetails, userSetter, errorSetter) => {
  try {
    const auth = await userLogin(userDetails)
    console.log(auth)
    userSetter(auth)
    if (auth) localStorage.setItem('userId', JSON.stringify(1))
    if (auth) localStorage.setItem('token', JSON.stringify(auth.token.token))
  } catch (error) {
    console.log(error)
    errorSetter(error.message)
  }
}