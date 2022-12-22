import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  getAllUsers,
  login,
  getAllPagedUsers,
} from "../../services/axiosCRUDService";
import { Button } from "@mui/material";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialCredencials = {
  email: "",
  password: "",
};

const AxiosCRUDExample = () => {
  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          sessionStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Login failure");
        }
      })
      .catch((error) => {
        alert(`Somethind went wrong: ${error}`);
        sessionStorage.removeItem("token");
      })
      .finally(() => console.log("Login done"));
  };

  // CRUD examples

  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => console.table(response.data.data))
      .catch((error) => alert(`Somethind went wrong: ${error}`))
      .finally(() => console.log(""));
  };

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => alert(JSON.stringify(response.data.total_pages)))
      .catch((error) => alert(`Somethind went wrong: ${error}`))
      .finally(() => console.log(""));
  };

  return (
    <div className="">
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredencials}
        // **** Yup Validation Schema
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          authUser(values);
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
      </Formik>
      {/* Example buttons to test API reponses */}
      <div className="">
        <Button onClick={obtainAllUsers}>All Users</Button>
        <Button onClick={() => obtainAllPagedUsers(2)}>Page Users</Button>
      </div>
    </div>
  );
};

export default AxiosCRUDExample;
