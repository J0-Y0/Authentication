import React from "react";
import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import { MarkEmailRead, Replay } from "@mui/icons-material";
import mailSentGif from "../asset/mail_sent.gif"; // Ensure this path is correct
import CenteredContainer from "../utils/CenteredContainer";
import { LoadingButton } from "../utils/LoadingBar";
import StyledLink from "../utils/StyledLink";

const SignupSuccessPage = () => {
  return (
    <CenteredContainer>
      <Stack
        direction="column"
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        flexGrow={true}
        alignItems="center"
      >
        {" "}
        <Box
          component="img"
          src={mailSentGif}
          alt="Mail Sent"
          sx={{
            width: { xs: "30%", md: "30%" },
            height: "auto",
            borderRadius: "50%",
            border: "3px solid #B1D952",
            mb: 2,
          }}
        />
        <Typography
          variant="h6"
          fontWeight={700}
          component="div"
          color={"primary"}
        >
          Well done
        </Typography>
        <hr></hr>
        <Typography
          textAlign="center"
          // variant="h5"
          sx={{
            mb: 4,
            // color: "#062B76",
            // fontWeight: "bold",
            // fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.1rem" },
          }}
        >
          Your account has been successfully created. Please check your email
          and activate your account using the activation link we have sent.
        </Typography>
        <Button
          variant="outlined"
          startIcon={<MarkEmailRead />}
          component={Link}
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mb: 2 }}
        >
          Open Gmail
        </Button>
        <StyledLink component={Link} sx={{ mb: 2 }}>
          Resend activation link ?
        </StyledLink>
      </Stack>
    </CenteredContainer>
  );
};

export default SignupSuccessPage;
