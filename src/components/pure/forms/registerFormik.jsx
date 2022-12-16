import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

//Models
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username too short ")
      .max(12, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid Email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password too short")
      .required("Password is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.USER], "You mast select a Role: User / Admin")
      .required("Role is required"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "!Passwords must match!"
        ),
      })
      .required("You must confirm the password"),
  });

  const submit = (values) => {
    alert("register");
  };

  return (
    <div>
      <h4>register formik</h4>
      <Formik
        initialValues={initialValues}
        // **** Yup Validation Schema
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">Email</label>
            <Field
              id="username"
              name="username"
              placeholder="Your Username"
              type="text"
            />
            {errors.username && touched.username && (
              <ErrorMessage component="div" name="username" />
            )}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
            />
            {errors.email && touched.email && (
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
              <ErrorMessage component="div" name="password" />
            )}
            <label htmlFor="confirm">Confirm</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="Confirm password"
              type="password"
            />
            {errors.confirm && touched.confirm && (
              <ErrorMessage component="div" name="confirm" />
            )}
            <button type="submit">Register Account</button>
            {isSubmitting ? <p>Seding your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
