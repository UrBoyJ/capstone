import { useOutletContext, useParams } from 'react-router-dom'
import { handleSetQuanity, handleAddToCart, handleRemoveFromCart } from '../helpers/handlers'
import { productInCart, itemQtyCheck } from '../helpers/utility'
import { useState } from 'react'

const SingleProduct = () => {
  const {
    cartState: [cart, setCart],
    selectedProdState: [selectedProd, setSelectedProd]
  } = useOutletContext()
  const { productId } = useParams()
  const { title, price, category, image, id, description } = selectedProd
  const [quantity, setQuantity] = useState(itemQtyCheck(cart.products, id ?? productId))
  const productToAdd = {
    productId: id,
    price,
    qty: quantity
  }

  const isInCart = productInCart(cart.products, id)
  const buttonText = isInCart ? 'Remove' : 'Add To Cart'
  const functionToClick = (e) => {
    isInCart
      ? handleRemoveFromCart(e, id, cart, setCart)
      : handleAddToCart(e, productToAdd, cart, setCart)
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>Price: {price}</p>
      <p>{category}</p>
      <img src={image} alt={`image for ${title}`} />
      <p>Details:</p>
      <p>{description}</p>
      {isInCart ? (
        <p>{quantity}</p>
      ) : (
        <input type="text" onChange={(e) => handleSetQuanity(e, setQuantity)} value={quantity} />
      )}
      <button type="button" onClick={functionToClick}>
        {buttonText}
      </button>
    </div>
  )
}
export default SingleProduct