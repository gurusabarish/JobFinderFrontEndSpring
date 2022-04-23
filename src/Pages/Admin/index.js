import React, { useState } from "react";
import CompanyToAdd from "./company";

const Admin = (props) => {
  React.useEffect(() => {
    console.log(props.user);
    if (props.user.company == null || !props.user.enabled) {
      setCompanyToAdded(true);
    }
  }, [props.user]);

  const [companyToAdded, setCompanyToAdded] = useState(false);

  const handleCompanyToAdded = (val) => {
    setCompanyToAdded(val);
  };
  return (
    <>
      {companyToAdded && (
        <CompanyToAdd
          user={props.user}
          handleCompanyToAdded={handleCompanyToAdded}
        />
      )}
    </>
  );
};

export default Admin;
