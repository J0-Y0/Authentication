import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { Box } from "@mui/material";
import Signup from "./pages/SignUpPage"
import Notification from "./utils/Notification";
import SignupSuccessPage from "./pages/SignupSuccessPage";
import AccountActivationPage from "./pages/AccountActivationPage";
function App() {

  return (
    <Box>
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <PrivateRoute path="/home">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path="/login">
            <LoginPage />
          </PrivateRoute>
          <Routes>
            <Route path="/signup" element={<Signup></Signup>} />
          </Routes>{" "}
          <Routes>
            <Route path="/signup/success" element={<SignupSuccessPage />} />
          </Routes>
          <Routes>
            <Route
              path="/account/activate/:uid/:token/"
              element={<AccountActivationPage />}
            />
          </Routes>
          <Notification />
        </AuthProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
