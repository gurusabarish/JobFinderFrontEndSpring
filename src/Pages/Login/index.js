import * as React from "react";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const Login = () => {
  return (
    <Card sx={{ minWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" align="center" sx={{ my: 2 }}>
          Login
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Login;
