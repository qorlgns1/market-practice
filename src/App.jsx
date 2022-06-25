import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </BrowserRouter>
  );
}

export default App;
