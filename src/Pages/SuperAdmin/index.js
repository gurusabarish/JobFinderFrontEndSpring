import React from "react";

import Company from "./Company";
import CompaniesList from "./Company/list";

import Approval from "./Approval";

import { Box, Grid } from "@mui/material";

import MainCard from "../../Components/MainCard";

const SuperAdmin = (props) => {
  const [companyAdded, setCompanyAdded] = React.useState("");

  let companyAdd = "";
  React.useEffect(() => {
    setCompanyAdded(companyAdd);
  }, [companyAdded]);

  const handleCompanyList = async (company) => {
    // childRef.current.addCompany(company);
    companyAdd = company;
    setCompanyAdded(company);
    console.log("companyAdded", companyAdded);
  };

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
          <MainCard
            title="Companies"
            // secondary={
            //   <Button
            //     disableElevation
            //     onClick={() => {
            //       setCreateJob(true);
            //     }}
            //     size="medium"
            //     variant="contained"
            //     style={{ borderRadius: config.borderRadius }}
            //   >
            //     Create
            //   </Button>
            // }
          >
            <Company handleCompanyList={handleCompanyList} />
            <Box my={3}>
              <CompaniesList companyAdded={companyAdded} />
            </Box>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} p={2}>
          <MainCard title="Approval list">
            <Approval companyAdded={companyAdded} />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default SuperAdmin;
