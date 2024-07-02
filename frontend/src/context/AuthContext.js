import React, { useEffect } from 'react'
import { createContext, useState } from 'react'
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext()
export default AuthContext


export const AuthProvider = ({ children }) => {
  /*
  ==Notes==
    1. authToken :the token saved in local storage
    2. user : the user object decoded from the token
    3. loading : the loading state of the app
               :to get new access token if we have a valid refresh token
               :i.e initially when the page is loaded we update the token
               .'. if refresh token is not expired we can get a new access token   
  */




  const token = localStorage.getItem('authToken')
  const [user, setUser] = useState(token ? jwtDecode(token):null)
  const [authToken, setAuthToken] = useState(token)
  const [loading, setLoading] = useState(true)

  let loginUser = async (e) => {
    e.preventDefault();

    try {
      
      let response = await fetch(
        "http://127.0.0.1:8000/account/api/auth/jwt/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value,
          }),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        const token = JSON.stringify(data);
        setAuthToken(token);
        localStorage.setItem('authToken', token);
        setUser(jwtDecode(token));
        console.log(jwtDecode(token));
      } else {
        alert("Unable to login: invalid credentials")
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Unable to login: Please check your internet connection or try again later.');
    }
  }

  let logoutUser = () => { 
    localStorage.removeItem('authToken')
    setUser(null)
    setAuthToken(null)

  }
  let updateToken = async () => {
    console.log("Updating token")
    if (!authToken) {
      console.log("No auth token")
      setLoading(false)
      logoutUser()
      return
    }
    let response = await fetch(
      "http://127.0.0.1:8000//account/api/auth/jwt/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: JSON.parse(authToken)?.refresh,
        }),
      }
    );
    const data = await response.json()
    if (response.status === 200) {
      const token = JSON.stringify(data)
      localStorage.setItem('authToken', token)
      setAuthToken(token)
      setUser(jwtDecode(token))
    } else {
      logoutUser()
    }
    if (loading) {
      setLoading(false)
    }
  }

  useEffect(() => { 
    //update token at initial loading if authentication token is present 
    if (authToken && loading) { 
      updateToken()
    }else {
      setLoading(false) 
    }
    //update token every 50min in Django setting access token expiration time is 60min ,
    //  update before it expires
    const updateTime = 1000*60*50
    let id = setInterval(() => {
        if (authToken) {
          updateToken()
        }
    }, updateTime );
    return ()=> clearInterval(id)
  },[authToken,loading])




  let contextData = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    user: user,
    authToken: authToken,

  }

  return (
    <AuthContext.Provider value={contextData}>
      {!loading && children}
    </AuthContext.Provider>


  )
}
