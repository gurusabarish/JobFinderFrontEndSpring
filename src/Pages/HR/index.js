import React from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";

import MainCard from "../../Components/MainCard";
import CreateJob from "./Job";

const HR = (props) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        // alignItems="center"
        justifyContent="center"
        py={2}
        justifyItems={"center"}
      >
        <Grid item xs={12} sm={6} p={2}>
          <MainCard title="Jobs">
            <CreateJob user={props.user} />
            <Box my={3}></Box>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} p={2}>
          <MainCard title="Application list"></MainCard>
        </Grid>
      </Grid>
    </>
  );
}; 

export default HR;
