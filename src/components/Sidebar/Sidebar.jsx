import React from "react";
import { Box, Typography } from "@material-ui/core";
import { sidebarMenus } from "../../static/sidebar";
import { useStyles } from "./stylesheet";
import Logo from "../../assests/images/logo.png";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className="fixed inset-y-0 left-0 w-64 bg-white p-5 px-10">
        <Box className="px-4">
          <img src={Logo} alt="logo" />
        </Box>
        <Box className="flex flex-col py-10 divide-y divide-white">
          {sidebarMenus.map((items, index) => (
            <Box
              style={items.styles}
              key={index}
              className="py-4 px-2 flex flex-col gap-4"
            >
              <Box className="flex items-center gap-6 px-3 text-sm tracking-wider transition duration-300 ease-in-out">
                <img src={items.icon} alt="icon" />
                <Typography
                  style={{ color: items.color }}
                  className={classes.sidebarTitle}
                >
                  {items.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
