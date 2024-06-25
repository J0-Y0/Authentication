import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {

  const { user, logoutUser }  = useContext(AuthContext)
  return (
    <div>
          <Link to="/home">Home</Link>
          <span> | </span>
          
      {user ? <div>
                <button onClick={logoutUser} >logout</button>
                <h3>hello {user.name}</h3>
              </div>
             : <Link to="/login">Login</Link> }

    </div>
  )
}

export default Header
