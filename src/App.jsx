import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchProducts, getUser } from './helpers/fetches'

function App() {
  const [products, setProducts] = useState([])
  const [selectedProd, setSelectedProd] = useState({})
  // Order { id, userId, items, status }
  // OrderItems: objects[] { id, productId, price, qty }

  const initialUserState = { user: {}, token: 
    localStorage.getItem('token') || ''}

  //   user {
  //     id:1,
  //     email:'John@gmail.com',
  //     username:'johnd',
  //     password:'m38rmF$',
  //     name:{
  //         firstname:'John',
  //         lastname:'Doe'
  //     },
  //     address:{
  //         city:'kilcoole',
  //         street:'7835 new road',
  //         number:3,
  //         zipcode:'12926-3874',
  //         geolocation:{
  //             lat:'-37.3159',
  //             long:'81.1496'
  //         }
  //     },
  //     phone:'1-570-236-7033'
  // }
  const [currentUser, setCurrentUser] = 
    useState(initialUserState)

  const initialCartState = {
    id: null,
    userId: null,
    products: null,
    status: 'active'
  }
  const [cart, setCart] = useState(initialCartState)
  // cart items => { productId, qty, price }

  const contextObject = {
    userState: [currentUser, setCurrentUser],
    productsState: [products, setProducts],
    selectedProdState: [selectedProd, setSelectedProd],
    cartState: [cart, setCart],
    initialState: {
      initialCartState,
      initialUserState
    }
  }
  console.log(contextObject)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const fetchUser = async () => {
        const userId = localStorage.getItem('userId')
        const user = await getUser(userId, token)
        setCurrentUser({ ...currentUser, user })
      }
      fetchUser()
    }
    const getAllProducts = async () => {
      const products = await fetchProducts()
      setProducts(products)
    }
    getAllProducts()
  }, [])

  return (
    <>
      <nav>
        <Link to="/" onClick={(e) => handleClearSelectedProd(e, setSelectedProd)}>
          Products
        </Link>
        <Link to="/me">Profile</Link>
        <Link to="/login">Log In</Link>
        <Link
          to="/"
          onClick={(e) =>
            handleSignout(e, setCart, setCurrentUser, initialCartState, initialUserState)
          }>
          Sign Out
        </Link>
        <Link to="/cart">Cart: {cart.products.length}</Link>
      </nav>
      <Outlet context={contextObject} />
      <footer>
        <p>Copyright 2023</p>
      </footer>
    </>
  )
}

export default App