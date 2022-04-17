import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { Grid } from "@mui/material";

// MainCard
import MainCard from "./../Components/MainCard";

const Home = () => {
  const [loginRedirect, setLoginRedirect] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem("token"));

    if (localStorage.getItem("token") === null) {
      setLoginRedirect(true);
    }
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {loginRedirect && <Navigate to="/login" />}
        <Grid item xs={12} sm={8}>
          <MainCard title="Jobs">
            <h1>Home</h1>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <MainCard title="Recently Applied">
            <h1>Home</h1>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
