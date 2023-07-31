import React from "react";

function SignupForm({ statefun }) {
  const onclickfun = () => {
    statefun(false);
  };
  return (
    <>
      <div className="col-8 formside">
        <h1 className="headingtext">Create a New Account</h1>
        <form>
          <div className="row pt-4 ">
            <input
              className="form-control"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="row pt-3">
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
        <button className="btn formbtn">Sign Up</button>
      </div>
      <div
        className="col-4 imgside px-5"
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <h1 className="pb-3 fs-1 fw-bold">Welcome!</h1>
        <h3 className="pb-4 fw-light">Already have an account?</h3>
        <button
          className="btn btn-outline-light mt-2 px-5"
          onClick={onclickfun}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default SignupForm;
