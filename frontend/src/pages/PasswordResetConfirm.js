import React, { useContext } from "react";
import CenteredContainer from "../utils/CenteredContainer";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LoadingBar, LoadingButton } from "../utils/LoadingBar";
import { LockReset, RecordVoiceOver, ResetTv } from "@mui/icons-material";
import StyledLink from "../utils/StyledLink";
import AuthContext from "../context/AuthContext";
const PasswordResetConfirm = () => {
  return (
    <CenteredContainer>
      <Typography
        variant="h6"
        fontWeight={700}
        component="div"
        color={"primary"}
      >
        Password Change
      </Typography>

      <LoadingBar />

      <form>
        <Typography></Typography>
        <TextField
          fullWidth
          label="New password"
          variant="standard"
          required
          name="email"
          type="password"
        />{" "}
        <TextField
          fullWidth
          label="confirm"
          variant="standard"
          required
          name="email"
          type="password"
        />
        <Stack direction="row" alignItems="center">
          <LoadingButton
            startIcon={<LockReset />}
            type="submit"
            value="Save"
            sx={{ marginY: 2 }}
            width="100%"
          />
          <StyledLink to="/account/login">
            <Button variant="outlined">Cancel</Button>
          </StyledLink>
        </Stack>
      </form>
    </CenteredContainer>
  );
};

export default PasswordResetConfirm;
