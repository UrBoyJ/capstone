import { useState } from 'react'
import { handleInputChange, handleSubmitLogin, handleSubmitInputReset } from '../helpers/handlers'
import { useOutletContext } from 'react-router'

const Login = () => {
  const { userState } = useOutletContext()
  const [currentUser, setCurrentUser] = userState
  const initialInput = { username: '', password: '' }
  const [input, setInput] = useState(initialInput)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmitInputReset(e, setInput, initialInput)
          handleSubmitLogin(e, input, setCurrentUser, setErrorMessage)
        }}>
        <label htmlFor="username">username:</label>
        <input
          name="username"
          type="text"
          autoComplete="username"
          onChange={(e) => handleInputChange(e, input, setInput)}
          value={input.username}
        />
        <label htmlFor="password">password:</label>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => handleInputChange(e, input, setInput)}
          value={input.password}
        />
        <button type="submit">Log In</button>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  )
}

export default Login