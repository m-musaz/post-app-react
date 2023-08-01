import React, { useState } from "react";
import styles from "./Auth.module.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginSignup() {
  const [formstate, setformstate] = useState(false);
  return (
    <div className={`container-fluid ${styles.outercontainer}`}>
      <div className="row">
        <div className={`col-12 ${styles.innercontainer}`}>
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
