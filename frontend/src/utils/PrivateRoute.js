import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useContext(AuthContext)
    return (
    
      <Routes>
          {/* <Route {...rest} element={children } /> */}

        <Route {...rest} element={user ?children:<LoginPage />} />

      </Routes>
  )
}

export default PrivateRoute
