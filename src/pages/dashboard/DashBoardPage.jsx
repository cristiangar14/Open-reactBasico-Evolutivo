import { useHistory } from "react-router-dom";

import { Button } from "@mui/material";
import Copyright from "../../components/pure/Copyright";

const DashBoardPage = () => {

  const history = useHistory();
  const logout = () => {
    history.push('/login')
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={logout}>
        Logout
      </Button>
      <Copyright/>
    </div>
  );
};

export default DashBoardPage;
