import React from "react";
import {useHistory} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredencials = {
    email: "",
    password: "",
  };

  const history = useHistory();

  return (
    <div className="">
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredencials}
        // **** Yup Validation Schema
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          // We save the data un the localStorage
          await localStorage.setItem("credentials", values);
          history.push('/profile')
        }}
      >
        {/*  We obtain props from formik */}

        {({ errors, touched, isSubmitting }) => {
          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
              />
              {errors.email && touched.email && (
                // <div className="error">
                //   <p>{errors.email}</p>
                // </div>

                <ErrorMessage component="div" name="email" />
              )}

              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
              {errors.password && touched.password && (
                // <div className="error">
                //   <p>{errors.password}</p>
                // </div>
                <div className="">
                  <ErrorMessage name="password" />
                </div>
              )}
              <button type="submit">Submit</button>
              {isSubmitting ? <p>Logins your credentials..</p> : null}
            </Form>
          );
        }}

        {/* {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;
          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
              />
              {errors.email && touched.email && (
                <div className="error">
                  <p>{errors.email}</p>
                </div>
              )}

              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
              {errors.password && touched.password && (
                <div className="error">
                  <p>{errors.password}</p>
                </div>
              )}
              <button type="submit">Submit</button>
              {isSubmitting ? <p>Logins your credentials..</p> : null}
            </Form>
          );
        }} */}
      </Formik>
    </div>
  );
};

export default LoginFormik;
