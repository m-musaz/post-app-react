import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Auth from "./Components/Authentication/Auth";
import UserFeed from "./Components/Feed/UserFeed";
import InvalidURL from "./Components/Authentication/InvalidURL";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/feed" element={<UserFeed />}></Route>
        <Route path="*" element={<InvalidURL />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
