import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const  LoginPage = () => {
  const { loginUser } = useContext(AuthContext)
  
  return (
    <div>
      <form onSubmit={loginUser}>
              <input required name='email' type="email" placeholder="email" />
              <input required name ='password' type="password" placeholder="Password" />
              <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginPage
