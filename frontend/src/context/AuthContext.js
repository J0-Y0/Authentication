import React from 'react'
import { createContext, useState } from 'react'
export const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [authToken, setAuthToken] = useState(null)
  let loginUser = async (e) => {
      e.preventDefault()
      console.log('form is submitted')
      let response = await fetch('http://127.0.0.1:8000/account/api/token/', {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': e.target.email.value,
            'password': e.target.password.value
  
        }) 
      })
    let data = await response.json()
    console.log("data:",data)
  }


  let contextData = {
    loginUser: loginUser,

  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>


  )
}
