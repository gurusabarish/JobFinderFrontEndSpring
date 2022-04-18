import React, { useEffect, useState } from "react";
import axios from "axios";

import { Typography } from "@mui/material";

// Config
import config from "../../config";

const UserDetails = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  useEffect(() => {
    getProfileDeatails();
  }, []);

  const getProfileDeatails = async () => {
    try {
      const response = await axios.get(
        `${config.apiURL}/api/profile/${localStorage.getItem("token")}`
      );
      console.log(response);

      if (response.data.status === 200) {
        setUser(response.data.data);
      } else if (response.data.status === 500) {
        setUser(null);
      }
    } catch (err) {
      console.log("error fetching data", err);
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
          {user === null ? (
            <Typography align="center" variant="body2" sx={{ mt: 5, mb: 1 }}>
              Create your profile
            </Typography>
          ) : (
            <>
              <div>User Details</div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserDetails;
