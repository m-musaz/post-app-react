import React, { useState } from "react";
import styles from "../Authentication/Auth.module.css";

function SignupForm({ statefun }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(
      `${email}`,
      JSON.stringify({
        id: 1,
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
      })
    );
    console.log(localStorage);
    statefun(false);
  };
  return (
    <>
      <div className={`col-8 ${styles.formside}`}>
        <h1 className={styles.headingtext}>Create a New Account</h1>
        <form>
          <div className="row pt-4 ">
            <input
              className="form-control"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row pt-3">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row pt-3 pb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <button className={`btn ${styles.formbtn}`} onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <div
        className={`col-4 ${styles.imgside} px-5`}
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <h1 className="pb-3 fs-1 fw-bold">Welcome!</h1>
        <h3 className="pb-4 fw-light">Already have an account?</h3>
        <button
          className="btn btn-outline-light mt-2 px-5"
          onClick={() => statefun(false)}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default SignupForm;
