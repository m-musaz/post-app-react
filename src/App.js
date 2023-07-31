// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Auth from "./Components/Authentication/Auth";
import UserFeed from "./Components/Feed/UserFeed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Auth />}></Route>
        <Route path="*" element={<UserFeed />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
