import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "../utils/LoadingBar";
import LoginIcon from "@mui/icons-material/Login";
import StyledLink from "../utils/StyledLink";
import CenteredContainer from "../utils/CenteredContainer";
const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  return (
    <CenteredContainer>
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
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            flexGrow={true}
            alignItems="center"
          >
            <LoadingButton
              startIcon={<LoginIcon />}
              type="submit"
              value="Login"
              width="100%"
            />
            {/* <Typography> Don't have an account</Typography> */}

            <StyledLink to="/account/signup/">Don't have account ?</StyledLink>
            <StyledLink to="/account/reset">Forget Password ?</StyledLink>
          </Stack>
        </Box>
      </form>
    </CenteredContainer>
  );
};

export default LoginPage;
