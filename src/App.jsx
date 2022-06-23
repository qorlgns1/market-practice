import HomePage from "./home/HomePage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact>
        <h1>test1</h1>
      </Route>
    </BrowserRouter>
  );
}

export default App;
