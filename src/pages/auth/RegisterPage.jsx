import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const RegisterPage = () => {
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
        <h1>Register Page</h1>
      <Button variant="contained" color="primary" onClick={goToLogin}>
        Login
      </Button>
    </div>
  );
};

export default RegisterPage;
