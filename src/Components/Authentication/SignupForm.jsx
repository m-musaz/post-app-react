import React, { useState } from "react";
import styles from "../Authentication/Auth.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignupForm({ statefun }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (values) => {
    localStorage.setItem(
      `${values.email}`,
      JSON.stringify({
        id: 1,
        name: `${values.name}`,
        email: `${values.email}`,
        password: `${values.password}`,
      })
    );
    console.log(localStorage);
    statefun(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Full Name must be at least 2 characters")
      .max(50, "Full Name must be at most 50 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <>
      <div className={`col-8 ${styles.formside}`}>
        <h1 className={styles.headingtext}>Create a New Account</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="row pt-4">
                <Field
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="row pt-3">
                <Field
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="row pt-3 pb-3">
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <button className={`btn ${styles.formbtn}`} type="submit">
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
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
