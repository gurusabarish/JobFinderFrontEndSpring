import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import config from "./../config";

export default function MainCard(props, { children }) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Card variant="outlined" sx={{ borderRadius: config.borderRadius }}>
        <Typography variant="h6" component="div" sx={{ p: 2, px: 3 }}>
          {props.title}
        </Typography>
        <Divider />
        <CardContent sx={{ p: 3 }}>
          {children}

          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
