import React from "react";
import { useNavigate } from "react-router-dom";

import config from "../../config";

import CompanyToAdd from "./CompanyToAdd";

import { Card } from "@mui/material";

const SuperAdmin = (props) => {
  React.useEffect(() => {
    console.log(props.user);
    if (props.user.company == null) {
      setCompanyToAdded(true);
    }
  }, [props.user]);

  const [companyToAdded, setCompanyToAdded] = React.useState(false);

  const handleCompanyToAdded = (val) => {
    setCompanyToAdded(val);
  };
  return (
    <>
      {companyToAdded ? (
        <Card
          sx={{
            borderRadius: config.borderRadius,
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: config.secondaryColor,
            p: 2,
          }}
        >
          <CompanyToAdd handleCompanyToAdded={handleCompanyToAdded} />
        </Card>
      ) : (
        <h1>Super Admin</h1>
      )}
    </>
  );
};

export default SuperAdmin;
