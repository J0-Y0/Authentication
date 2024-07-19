import React, { useContext } from "react";
import CenteredContainer from "../utils/CenteredContainer";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LoadingBar, LoadingButton } from "../utils/LoadingBar";
import { LockReset, RecordVoiceOver, ResetTv } from "@mui/icons-material";
import StyledLink from "../utils/StyledLink";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";
const PasswordResetConfirm = () => {
  const {uid,token}= useParams()
  const {resetPasswordConfirm} = useContext(AuthContext)
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

      <form onSubmit={ resetPasswordConfirm( uid, token)}>
   
        <Typography></Typography>
        <TextField
          fullWidth
          label="New password"
          variant="standard"
          required
          name="new_password"
          type="password"
        />{" "}
        <TextField
          fullWidth
          label="confirm"
          variant="standard"
          required
          name="re_new_password"
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
