import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import {
  Box,
  Button,
  ButtonGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "../utils/LoadingBar";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

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
            label="Username/Email"
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
          />
          <Box
            display={"flex"}
            sx={{
              justifyContent: "center",
              flexDirection: "column",
              marginY: 2,
            }}
          >
            <LoadingButton
              startIcon={<LoginIcon />}
              type="submit"
              value="Login"
              width="100%"
            />
            {/* <Typography> Don't have an account</Typography> */}
            <Button
              endIcon={<KeyboardDoubleArrowRightIcon />}
              variant="text"
              href="/signup"
              component="a"
            >
              Don't have account ?
            </Button>
            <Button variant="text" href="/signup" component="a">
              Forget Password ?
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
