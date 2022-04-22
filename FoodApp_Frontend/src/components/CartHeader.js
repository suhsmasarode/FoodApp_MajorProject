import React from 'react'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import CartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
//import { useAppSelector } from "../Shared/reduxHooks";

export default function CartHeader() {
   // const cartSize = useAppSelector((state) => state.cart.items.length);
   const data = useLocation();
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
             
    
              <Box sx={{ flexGrow: 1 }}>
                <Button component={Link} to="/" color="inherit">
                  Mykaa
                </Button>
              </Box>
    
              <Button component={Link} to="/cart" color="inherit">
                <Badge badgeContent={1} color="secondary" sx={{ mr: 1 }}>
                  <CartIcon />
                </Badge>
                Cart
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}
