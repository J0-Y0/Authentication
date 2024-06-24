import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {

  const {name}  = useContext(AuthContext)
  return (
    <div>
      <h3>hello {name}</h3>
          <Link to="/home">Home</Link>
          <span> | </span>
          <Link to="/login">Login</Link>

    </div>
  )
}

export default Header
