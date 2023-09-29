import App from './App'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import Me from './components/Me'
import Login from './components/Login'
import Cart from './components/Cart'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />
      },
      {
        path: 'products/:productId',
        element: <SingleProduct />
      },
      {
        path: 'me',
        element: <Me />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
]

export default routes