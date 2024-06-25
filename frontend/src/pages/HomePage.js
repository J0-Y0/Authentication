import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      {user && <p>welcome {user.user_id}</p>}
    </div>
  )
}

export default HomePage
