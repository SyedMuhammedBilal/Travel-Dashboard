import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./stylesheet";
import SearchIcon from '@material-ui/icons/Search';
import BellIcon from '../../assests/icon/bell.png'

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.dashbaordContainer}>
      <Box className={classes.dashboardInnerContainer}>
        <Box className={classes.dashboardUserStuffs}>
          <Box className={classes.dashboardUserGreet}>
            <Box>
              <Typography className={classes.dahsboardUserGreeting}>Hello, Bilal! 👋🏻</Typography>
            </Box>
            <Box>
                <Typography className={classes.dashboardWelcomeGreeting}> Welcome back, and explore the world. </Typography>
            </Box>
          </Box>
          <Box className={classes.dashboardSearchItems}>
            <Box>
                <Box className={classes.dashboardDestinationSearchBox}>
                    <SearchIcon className={classes.searchIcon} />
                    <input className={classes.dashboardSearchBox}  placeholder="Search Destination..." />
                </Box>
            </Box>
            <Box className={classes.dahsboardNotification}>
                <img src={BellIcon} alt='icon' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
