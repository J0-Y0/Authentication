import React, { useContext } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  // let location = useLocation();
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
