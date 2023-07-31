import React, { useState } from "react";
import "./LoginSignup.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginSignup() {
  const [formstate, setformstate] = useState(false);
  return (
    <div className="containter-fluid outercontainer">
      <div className="row">
        <div className="col-12 innercontainer">
          <div className="row">
            {formstate === true ? (
              <SignupForm statefun={setformstate} />
            ) : (
              <LoginForm statefun={setformstate} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
