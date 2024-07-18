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
    text-decoration: none;
  `;

  const [openMenu, setOpenMenu] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <StyledLink to="/">JWT Authentication</StyledLink>
        </Box>

        {user ? (
          <Box>
            <StyledLink to="dashboard/"> Dashboard </StyledLink>
            <IconButton color="inherit">
              <Avatar
                onClick={() => setOpenMenu(true)}
                alt="profile"
                src={pp}
              />
            </IconButton>

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
              <MenuItem
                onClick={() => {
                  setOpenMenu(false);
                  logoutUser();
                }}
              >
                LOGOUT
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <StyledLink color="inherit" to="account/login/">
            LOGIN
          </StyledLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
