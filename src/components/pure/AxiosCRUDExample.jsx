import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  getAllUsers,
  login,
  getAllPagedUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
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
      .then((response) => {
        if (response.data.data && response.status === 200) {
          console.table(response.data.data)
        } else {
          throw new Error('Users not found')
        }
      })
      .catch((error) => alert(`Somethind went wrong: ${error}`))
      .finally(() => console.log(""));
  };

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error(`not Users found in page ${page}`)
        }
      })
      .catch((error) => alert(`Somethind went wrong: ${error}`))
      .finally(() => console.log(""));
  };

  const obtainUserById = (id) => {
    getUserById(id)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error('User not found')
        }
      })
      .catch((error) => alert(`Somethind went wrong: ${error}`))
      .finally(() => console.log(""));
  };

  const createNewUser = (values) => {
    createUser(values.name, values.job)
      .then((response) => {
        if (response.data && response.status === 201) {
          alert(JSON.stringify(response.data))
        } else {
          throw new Error('User not created')
        }
      })
      .catch((error) => alert(`Somethind went wrong: ${error}`))
      .finally(() => console.log(""));
  }

  const updateUserById = (values) => {
    updateUser(values.id, values.name, values.job)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data))
        } else {
          throw new Error('User not found & no update done')
        }
      })
      .catch((error) => alert(`Somethind went wrong: ${error}`))
      .finally(() => console.log(""));
  };

  const deleteUserById = (id) => {
    deleteUser(id)
      .then((response) => {
        if (response.status === 204) {
          alert(`User whit id: ${id} successfully deleted`)
        } else {
          throw new Error('User not found & delete done')
        }
      })
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
        <Button onClick={() => obtainAllPagedUsers(1)}>Page Users</Button>
        <Button onClick={() => obtainUserById(1)}>Get user 1</Button>
        <Button onClick={() => createNewUser({name:'morpheus', job:'leader'})}>Create user</Button>
        <Button onClick={() => updateUserById({id: 1,name:'morpheus', job:'leader'})}>Update user</Button>
        <Button onClick={() => deleteUserById(1)}>Delete user</Button>
      </div>
    </div>
  );
};

export default AxiosCRUDExample;
