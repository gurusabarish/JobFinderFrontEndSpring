import React from "react";

import { Grid, Button } from "@mui/material";

// Config
import config from "../../config";

// MainCard
import MainCard from "../../Components/MainCard";

import UserDetails from "./userDetails";

const Profile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <MainCard
          title="Profile"
          secondary={
            <Button
              disableElevation
              // onClick={() => {
              //   setCreateJob(true);
              // }}
              size="medium"
              variant="contained"
              style={{ borderRadius: config.borderRadius }}
            >
              Edit
            </Button>
          }
        >
          <UserDetails />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Profile;
