import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  console.log("W are in route", location.pathname);
  const history = useHistory();
  const navigate = (path) => {
    history.push(path);
  };

  const navigateProps = (path) => {
    history.push({
      pathname: path,  
      state: {
        online: "online",
      },
      search: "?online=true",
    });
  }
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Dashborad</h2>
      <button onClick={() => navigate("/profile")}>Go to Profile</button>
      <button onClick={() => navigateProps("/online-state")}>
        Go to statePage
      </button>
    </div>
  );
};

export default HomePage;
