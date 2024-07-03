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

const SignupPage = () => {
    const [loading, setLoading] = useState(false);

  const { Signup, message } = useContext(AuthContext);

  useEffect(() => {
    if (message) {
      setLoading(false)
    }
  },[message])

  
  const handleSubmit=()=>{
    
          setLoading(true);
          Signup();
        
  }
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
        <form
          onSubmit={handleSubmit} method="post"
        >
          <Typography
            variant="h6"
            fontWeight={700}
            component="div"
            color={"primary"}
          >
            Signup
          </Typography>
         { loading&&
          <LinearProgress color="info" sx={{ padding: 0.5 }} />}
          <TextField
            fullWidth
            id="standard-basic"
            label="First Name"
            variant="standard"
            required
            name="first_name"
            type="text"
            sx={{ marginY: "10px" }}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Email"
            variant="standard"
            required
            name="email"
            type="email"
            sx={{ marginY: "10px" }}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Password"
            variant="standard"
            required
            name="password"
            type="password"
            sx={{ marginY: "10px" }}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Confirm"
            variant="standard"
            required
            name="re_password"
            type="password"
          />
          <Button sx={{ marginY: "10px" }} type="submit" variant="contained">
            Signup
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default SignupPage;
