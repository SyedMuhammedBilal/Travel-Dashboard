import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./stylesheet";

const Dashboard = () => {
    const classes = useStyles();
  return (
    <Box className={classes.dashbaordContainer}></Box>
  );
};

export default Dashboard;
