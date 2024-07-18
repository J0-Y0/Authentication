import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  styled,
  Tooltip,
  Menu,
  Avatar,
  MenuItem,
} from "@mui/material";
import pp from "../asset/signup.png";

const Header = () => {
  const StyledLink = styled(Link)`
    color: white;
    text-decoration:none;
  `;

  const [openMenu,setOpenMenu] = useState(null)
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <StyledLink to="/" sx={{ flexGrow: 1 }}>
            JWT Authentication
          </StyledLink>
          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Avatar
                onClick={() => setOpenMenu(true)}
                alt="profile"
                src={pp}
              />

              <Menu
                sx={{ mt: "45px" }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openMenu}
                onClose={() => setOpenMenu(false)}
              >
                <MenuItem onClick={() => setOpenMenu(false)}>Profile</MenuItem>
                <MenuItem onClick={() => { 
                   setOpenMenu(false)
                  logoutUser();
                }}>Logout</MenuItem>
              </Menu>
            </Box>
          )}

          {!user && (
            <StyledLink color="inherit" to="login">
              Login
            </StyledLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
