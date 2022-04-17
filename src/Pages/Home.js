import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Interviewer from "./Interviewer";

const Home = () => {
  const [loginRedirect, setLoginRedirect] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem("token"));

    if (localStorage.getItem("token") === null) {
      setLoginRedirect(true);
    }
  }, []);

  return <>{loginRedirect ? <Navigate to="/login" /> : <Interviewer />}</>;
};

export default Home;
