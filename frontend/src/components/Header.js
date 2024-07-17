import React, { useContext } from "react";
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
} from "@mui/material";

const Header = () => {
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JWT Authentication
          </Typography>
          {user && (
            <Typography variant="h6" component="div">
              {user.name} |
            </Typography>
          )}

          <Link color="inherit" to="Home">
            Home
          </Link>
          <Typography component={"span"}>|</Typography>
          {user ? (
            <Button color="inherit" onClick={logoutUser}>
              Logout
            </Button>
          ) : (
            <Link color="inherit" to="login">
              Login
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
