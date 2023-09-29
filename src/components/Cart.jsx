import { useOutletContext } from 'react-router'

const Cart = () => {
  const { cartState, productsState } = useOutletContext()
  const [allProducts, setAllProducts] = productsState
  const [cart setCart] = cartState
  const {id, products: orderItems, userId, status } = cart

  // { title, price, category, image, id, description } = product
  // cart items => { productId, qty, price }

  const { total, products } = orderItems.reduce(
    (acc, product) => {
      const currentProduct = {
        ...allProducts.find((p, i) => p.id === product.productId),
        qty: product.qty,
        price: product.price,
        productId: product.productId
      }
      acc.total += product.price * product.qty
      acc.products = [...acc.products, currentProduct]
      return acc
    },
    { total: 0, products: [] }
  )

  const handleQtyChange = (productId, number) => {
    console.log(cart)
    const oldOrderItem = cart.products.find((orderItem) => {
      return orderItem.productId === productId
    })
    const newOrderItem = {
      ...oldOrderItem,
      qty: Number(oldOrderItem.qty) + number
    }
    const newCart = {
      ...cart,
      products: [
        ...cart.products.filter((orderItem) => {
          orderItem.productId !== productId
        }),
        newOrderItem
      ]
    }
    setCart(newCart)
    localStorage.setItem('cart', newCart)
  }

  return (
    <div>
      <p>Your Cart:</p>
      {!!orderItems.length ? (
        products.map((product, i) => {
          return (
            <div key={i}>
              <p>Product: {product.title}</p>
              <p>Price: {product.price}</p>
              <p>
                Quantity: {product.qty}
                <button
                  type="button"
                  onClick={() => {
                    handleQtyChange(product.id, 1)
                  }}>
                  +
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleQtyChange(product.id, -1)
                  }}>
                  -
                </button>
              </p>
            </div>
          )
        })
      ) : (
        <p>No Products in Cart</p>
      )}
      <h2>Total: {total}</h2>
    </div>
  )
}

export default Cart