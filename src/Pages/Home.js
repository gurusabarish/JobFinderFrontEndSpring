import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";

import Interviewer from "./Interviewer";
import Applicant from "./Applicant";

import SuperAdmin from "./SuperAdmin";

// Config
import config from "../config";

const Home = () => {
  const [loginRedirect, setLoginRedirect] = useState(false);
  const [superAdmin, setSuperAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserDetails();
  }, []);

  const checkUserDetails = async () => {
    console.log(localStorage.getItem("token"));

    if (localStorage.getItem("token") === null) {
      setLoginRedirect(true);
    } else {
      const user = await axios.get(
        `${config.apiURL}/api/v1/auth/user/${localStorage.getItem("token")}`
      );
      setUser(user);

      if (user.data.role === "ROLE_SUPER_ADMIN") {
        setSuperAdmin(true);
        console.log(user.data);
      }
    }
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Typography align="center" variant="body2" sx={{ mt: 5, mb: 1 }}>
          Loading....
        </Typography>
      ) : (
        <>
          {loginRedirect ? (
            <Navigate to="/login" />
          ) : (
            <>
              {superAdmin ? (
                <SuperAdmin user={user} />
              ) : (
                <></>
                // <Applicant user={user} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
