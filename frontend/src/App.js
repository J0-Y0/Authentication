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
function App() {
  return (
    <Box>
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signup/" element={<Signup />} />
          <Route path="login/" element={<LoginPage />} />
          <Route
            path="dashboard/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/account/activate/:uid/:token/"
            element={<AccountActivationPage />}
          />
          <Route path="/signup/success" element={<SignupSuccessPage />} />
        </Routes>
        <Notification />
      </AuthProvider>
    </Box>
  );
}

export default App;
