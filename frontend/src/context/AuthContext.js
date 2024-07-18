import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  /*
  ==Notes==
    1. authToken :the token saved in local storage
    2. user : the user object decoded from the token
    3. initialLoading : the loading state of the app
               :to get new access token if we have a valid refresh token
               :i.e initially when the page is loaded we update the token
               .'. if refresh token is not expired we can get a new access token   
  */

  const token = localStorage.getItem("authToken");
  const [user, setUser] = useState(token ? jwtDecode(token) : null);
  const [authToken, setAuthToken] = useState(token);
  const [initialLoading, setInitialLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        localStorage.setItem("authToken", token);
        setUser(jwtDecode(token));

        setLoading(false); //loading completed
        navigate("/dashboard");
      } else {
        setLoading(false);

        const msg = {
          content: "Username or password incorrect",
          severity: "error",
        };
        setMessage(msg);
      }
    } catch (error) {
      setLoading(false);

      const msg = {
        content:
          "unable to login: Please check your internet connection or try again later.",
        severity: "warning",
      };
      setMessage(msg);
    }
  };
  let Signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response = await fetch(
        "http://127.0.0.1:8000/account/api/auth/users/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: e.target.fname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            re_password: e.target.re_password.value,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const msg = {
          content: "Account created. Please activate your account next.",
          severity: "success",
        };
        setMessage(msg);
        setLoading(false);
      } else {
        console.log(data);
        const value = Object.values(data);
        const msg = {
          content: value,
          severity: "error",
        };
        setMessage(msg);
        setLoading(false);
      }
    } catch (error) {
      const msg = {
        content:
          "Something went wrong! Please check your internet connection or try again later.",
        severity: "warning",
      };
      setMessage(msg);
      setLoading(false);
    }
  };

  let logoutUser = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    setAuthToken(null);
    navigate("/login");
  };
  let updateToken = async () => {
    console.log("Updating token");
    if (!authToken) {
      console.log("No auth token");
      setInitialLoading(false);
      logoutUser();
      return;
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
    const data = await response.json();
    if (response.status === 200) {
      const token = JSON.stringify(data);
      localStorage.setItem("authToken", token);
      setAuthToken(token);
      setUser(jwtDecode(token));
    } else {
      logoutUser();
    }
    if (initialLoading) {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    //update token at initial loading if authentication token is present
    if (authToken && initialLoading) {
      updateToken();
    } else {
      setInitialLoading(false);
    }
    //update token every 50min in Django setting access token expiration time is 60min ,
    //  update before it expires
    const updateTime = 1000 * 60 * 50;
    let id = setInterval(() => {
      if (authToken) {
        updateToken();
      }
    }, updateTime);
    return () => clearInterval(id);
  }, [authToken, initialLoading]);

  let contextData = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    Signup: Signup,
    message: message,
    user: user,
    authToken: authToken,
    loading: loading,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};
