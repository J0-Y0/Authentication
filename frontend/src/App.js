import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <PrivateRoute path="/home" ><HomePage /></PrivateRoute>
          <PrivateRoute path="/login" ><LoginPage /></PrivateRoute>
        </AuthProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
