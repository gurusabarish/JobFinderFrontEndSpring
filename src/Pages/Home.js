import React from "react";

import { Grid } from "@mui/material";

// MainCard
import MainCard from "./../Components/MainCard";

const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
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
