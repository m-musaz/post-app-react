import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Auth from "./Components/Authentication/Auth";
import UserFeed from "./Components/Feed/UserFeed";
import InvalidURL from "./Components/Authentication/InvalidURL";
import { LoginId } from "./Context/LoginId";
import { useState } from "react";

function App() {
  const [loginId, setLoginId] = useState("");
  return (
    <LoginId.Provider value={{ loginId, setLoginId }}>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/feed" element={<UserFeed />}></Route>
          <Route path="*" element={<Auth />}></Route>
        </Routes>
      </Router>
    </LoginId.Provider>
  );
}

export default App;
