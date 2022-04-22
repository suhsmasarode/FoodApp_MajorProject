import { Link, useLocation } from "react-router-dom";
import "../CSS/AdminDashboard.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AdminHeader from "./AdminHeader";

import Complaints from "./Complaints";
import OrdersHistory from "./OrdersHistory";
import Orders from "./Orders";
import FoodCategory from "./FoodCategory";
import ShowOwnerRestaurants from "./ShowOwnerRestaurants";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  //data from login page
  const userData = useLocation();
  console.log( "User Data is " +JSON.stringify(userData.state));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function OwnerDashboard() {
  const [value, setValue] = React.useState(0);
  const userData = useLocation();
  console.log( "User Data 2 is " +JSON.stringify(userData.state));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
     <AdminHeader/>
      <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs 
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      > 
        <Tab label="My Restaurants" {...a11yProps(0)} />
        <Tab label="Orders" {...a11yProps(1)} />
        <Tab label="Complaints" {...a11yProps(2)} />
        <Tab label="History" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ShowOwnerRestaurants email = {userData.state.userEmail} />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Orders/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Complaints/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <OrdersHistory/>
      </TabPanel>
    </Box>
    </div>
  );
}
