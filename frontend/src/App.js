import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <PrivateRoute path="/home" ><HomePage /></PrivateRoute>
        <PrivateRoute path="/login" ><LoginPage /></PrivateRoute>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
