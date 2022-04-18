import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import { Grid, Button } from "@mui/material";

// Config
import config from "../../config";

// MainCard
import MainCard from "../../Components/MainCard";

// Companies
// import CompaniesList from "./company/list";
// import CreateCompany from "./company/create";

// Jobs
// import JobsList from "./job/list";
// import CreateJob from "./job/create";

const Applicant = (props) => {
  const [createProfile, setCreateProfile] = useState(false);

  useEffect(() => {
    checkUserProfile();
  }, []);

  const checkUserProfile = async () => {
    const profile = await axios.get(
      `${config.apiURL}/api/profile/${localStorage.getItem("token")}`
    );
    if (profile.data.data.status === 500) {
      setCreateProfile(true);
    }
  };

  return (
    <Grid container spacing={2}>
      {createProfile && <Navigate to="/profile" />}

      <Grid item xs={12} sm={6}>
        <MainCard
          title="Jobs recommended by your profile"
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
              Create
            </Button>
          }
        >
          <h1>Aplicant</h1>
        </MainCard>
      </Grid>

      <Grid item xs={12} sm={6}>
        <MainCard
          title="Applied Jobs"
          secondary={
            <Button
              disableElevation
              // onClick={() => {
              //   setCreateCompany(true);
              // }}
              size="medium"
              variant="contained"
              style={{ borderRadius: config.borderRadius }}
            >
              Create
            </Button>
          }
        >
          <h1>Recently applied jobs</h1>
          {/* {createCompany ? (
            <CreateCompany handleCreateCompany={handleCreateCompany} />
          ) : (
            <CompaniesList isCreateCompany={createCompany} />
          )} */}
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Applicant;
