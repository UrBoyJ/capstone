import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'

const Me = () => {
  const {
    userState: [currentUser, setCurrentUser],
    cartState: [cart, setCart],
    initialState: { initialCartState, initialUserState }
  } = useOutletContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token') || !currentUser.token) navigate('/')
  }, [])

  //   currentUser.user {
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
  const { user } = currentUser
  const fullname = user.firstname + ' ' + user.lastname
  const { address } = user

  return user.id ? (
    <div>
      <h2>
        Welcome {fullname}!&nbsp;
        <Link
          to="/"
          onClick={(e) =>
            handleSignout(e, setCart, setCurrentUser, initialCartState, initialUserState)
          }>
          Sign Out
        </Link>
      </h2>
      <p>current email: {user.email}</p>
      <p>current phone number: {user.phone}</p>
      <p>current address:</p>
      <p>&emsp;Street: {address.street}</p>
      <p>&emsp;Number: {address.number}</p>
      <p>&emsp;City: {address.city}</p>
    </div>
  ) : (
    <div></div>
  )
}

export default Me