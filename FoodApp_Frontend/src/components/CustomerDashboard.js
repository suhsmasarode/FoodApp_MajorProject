import "../CSS/AdminDashboard.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import CustomerHeader from "./CustomerHeader";
import ShowHotelsToCustomer from './ShowHotelsToCustomer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
export default function CustomerDashboard() {
  const navigate = useNavigate();

 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <div>
      
      
        <CustomerHeader/>
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
            <Tab label="Restaurants" {...a11yProps(0)} />
            <Tab label="My Orders" {...a11yProps(1)} />
            <Tab label="Favourites" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
          <ShowHotelsToCustomer/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* <HotelOwner /> */}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {/* <BlockedUsers /> */}
          </TabPanel>
        </Box>
      </div>
      );
  

}