// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup";
import PostContainer from "./Components/PostContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<LoginSignup />}></Route>
        <Route path="*" element={<PostContainer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
