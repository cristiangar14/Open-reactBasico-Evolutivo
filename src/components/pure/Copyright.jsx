import React from "react";

// Material UI Components
import { Link, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Typography variant='body2' color="GrayText" align="center">
      {"Copyright (c)"}
      <Link color="inherit" href="https://imaginaformacion.com">
        Imagina información
      </Link>
      { ' ' }
      { new Date().getFullYear() }
    </Typography>
  );
};

export default Copyright;
