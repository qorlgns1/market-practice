import HomePage from "./home/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./home/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </BrowserRouter>
  );
}

export default App;
