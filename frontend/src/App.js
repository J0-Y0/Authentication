import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { Box } from "@mui/material";
import Signup from "./pages/SignUpPage";
import Notification from "./utils/Notification";
import SignupSuccessPage from "./pages/SignupSuccessPage";
import AccountActivationPage from "./pages/AccountActivationPage";
import Landing from "./pages/Landing";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";
function App() {
  return (
    <Box>
      <AuthProvider>
        <Header></Header>
        <Box py={5}></Box>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="account/login/" element={<LoginPage />} />

          <Route
            path="account/activate/:uid/:token/"
            element={<AccountActivationPage />}
          />
          <Route path="account/reset" element={<PasswordReset />} />
          <Route
            path="account/reset/confirm"
            element={<PasswordResetConfirm />}
          />

          <Route path="account/signup/" element={<Signup />} />

          <Route
            path="account/signup/success"
            element={<SignupSuccessPage />}
          />
          <Route
            path="dashboard/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
        <Notification />
      </AuthProvider>
    </Box>
  );
}

export default App;
