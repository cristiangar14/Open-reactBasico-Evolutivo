import React from "react";
import { useHistory } from "react-router-dom";
import LoginFormik from "../../components/pure/forms/loginFormik";
import { Button } from "@mui/material";

const LoginPage = () => {
  const history = useHistory();
  const checkIn = () => {
    history.push("/register");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <LoginFormik />
      <Button variant="contained" color="primary" onClick={checkIn}>
        Check in
      </Button>
    </div>
  );
};

export default LoginPage;
