import React from "react";
import { Box, Grid } from "@mui/material";

import MainCard from "../../Components/MainCard";
import JobsList from "./Jobs/list";

const User = (props) => {
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
            <JobsList user={props.user} />
            <Box my={3}></Box>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} p={2}>
          <MainCard title="Approval list">
            {/* <Approval companyList={companyList} /> */}
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default User;
