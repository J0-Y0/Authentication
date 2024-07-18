import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import { LoadingBar, LoadingButton } from "../utils/LoadingBar";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import StyledLink from "../utils/StyledLink";
import CenteredContainer from "../utils/CenteredContainer";
const SignupPage = () => {
  const { Signup } = useContext(AuthContext);

  return (
    <CenteredContainer>
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

        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="space-between"
          flexGrow={true}
          alignItems="center"
        >
          <LoadingButton value="Signup" type="submit" />
          <StyledLink to="/account/login">Have account?</StyledLink>
        </Stack>
      </form>
    </CenteredContainer>
  );
};

export default SignupPage;
