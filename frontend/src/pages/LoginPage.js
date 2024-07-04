import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { LoadingButton } from '../utils/LoadingBar';

const  LoginPage = () => {
  const { loginUser } = useContext(AuthContext)
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: 5,
      }}
    >
      <Paper elevation={4} sx={{ height: "auto", padding: 5, borderRadius: 2 }}>
        <form onSubmit={loginUser}>
          <Typography
            variant="h6"
            fontWeight={700}
            component="div"
            color={"primary"}
          >
            Login | Welcome back
          </Typography>
          <TextField
            fullWidth
            id="standard-basic"
            label="Username/Email"
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
          />
          <LoadingButton type="submit"  value='Login'/>
        
        </form>
      </Paper>
    </Box>
  );
}

export default LoginPage
