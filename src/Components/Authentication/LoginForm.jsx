import React, { useEffect, useState } from "react";
import styles from "../Authentication/Auth.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginForm({ statefun }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetchedUser, setfetchedUser] = useState(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log("Form submitted:", values.email);
    setfetchedUser(JSON?.parse(localStorage.getItem(`${values.email}`)));
    console.log(fetchedUser?.password);
    // localStorage.clear();
    console.log(localStorage);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    setfetchedUser(JSON?.parse(localStorage.getItem(`${formik.values.email}`)));
  }, [formik.isSubmitting]);

  return (
    <>
      <div className={`col-8 ${styles.formside}`}>
        <h1 className={styles.headingtext}>Login to your Account</h1>
        {/* <form>
          <div className="row pt-4">
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
        </form> */}
        <form onSubmit={formik.handleSubmit}>
          <div className="row pt-4">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="row pt-3 pb-3">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button className={`btn ${styles.formbtn}`} type="submit">
            Login
          </button>
        </form>
      </div>
      <div
        className={`col-4 ${styles.imgside} px-5`}
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <h1 className="pb-3 fs-1 fw-bold">Hey There!</h1>
        <h3 className="pb-4 fw-light">Create a new Account to Sign In</h3>
        <button
          className="btn btn-outline-light mt-2 px-5"
          onClick={() => statefun(true)}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default LoginForm;
