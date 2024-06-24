import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

const PrivateRoute = ({ children, ...rest }) => {
    console.log("Private Route is working ")
    const IsAuthenticated = false

    return (
    
      <Routes>
          <Route {...rest} element={children } />

            {/* <Route {...rest} element={IsAuthenticated?children:<LoginPage />} /> */}

      </Routes>
  )
}

export default PrivateRoute
