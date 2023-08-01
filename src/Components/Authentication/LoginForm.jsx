import React from "react";
import styles from "../Authentication/Auth.module.css";

function LoginForm({ statefun }) {
  const onclickfun = () => {
    statefun(true);
  };
  return (
    <>
      <div className={`col-8 ${styles.formside}`}>
        <h1 className={styles.headingtext}>Login to your Account</h1>
        <form>
          <div className="row pt-4">
            <input className="form-control" type="text" placeholder="Email" />
          </div>
          <div className="row pt-3 pb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
            />
          </div>
        </form>
        <button className={`btn ${styles.formbtn}`}>Login</button>
      </div>
      <div
        className={`col-4 ${styles.imgside} px-5`}
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <h1 className="pb-3 fs-1 fw-bold">Hey There!</h1>
        <h3 className="pb-4 fw-light">Create a new Account to Sign In</h3>
        <button
          className="btn btn-outline-light mt-2 px-5"
          onClick={onclickfun}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default LoginForm;
