import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingBar, LoadingButton } from "../utils/LoadingBar";

const SignupPage = () => {

  const { Signup } = useContext(AuthContext);


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: 5,
      }}
    >
      <Paper
        elevation={4}
        sx={{ height: "auto", padding: 5, borderRadius: 2, maxWidth: 400 }}
      >
        <form onSubmit={Signup}>
          <Typography
            variant="h6"
            fontWeight={700}
            component="div"
            color={"primary"}
          >
            Signup
          </Typography>
          <LoadingBar />
          <TextField
            fullWidth
            
            label="First Name"
            variant="standard"
            required
            name="fname"
            sx={{ marginY: "10px" }}
          />
          <TextField
            fullWidth
            
            label="Email"
            variant="standard"
            required
            name="email"
            type="email"
            sx={{ marginY: "10px" }}
          />
          <TextField
            fullWidth
            
            label="Password"
            variant="standard"
            required
            name="password"
            type="password"
            sx={{ marginY: "10px" }}
          />
          <TextField
            fullWidth
            
            label="Confirm"
            variant="standard"
            required
            name="re_password"
            type="password"
          />
        
          <LoadingButton value="Signup" type="submit" />
        </form>
      </Paper>
    </Box>
  );
};

export default SignupPage;
