import React, { useContext } from "react";
import CenteredContainer from "../utils/CenteredContainer";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LoadingBar, LoadingButton } from "../utils/LoadingBar";
import { LockReset, RecordVoiceOver, ResetTv } from "@mui/icons-material";
import StyledLink from "../utils/StyledLink";
import AuthContext from "../context/AuthContext";
const PasswordReset = () => {
  const { resetPassword } = useContext(AuthContext);
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

      <form onSubmit={resetPassword}>
        <Typography>
          Lost your password? No worries! You can recover it by simply providing
          us with the email linked to your account.
        </Typography>
        <TextField
          fullWidth
          label="Your Email"
          variant="standard"
          required
          name="email"
          type="email"
        />
        <Stack direction="row" alignItems="center">
          <LoadingButton
            startIcon={<LockReset />}
            type="submit"
            value="Reset"
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
export default PasswordReset;
