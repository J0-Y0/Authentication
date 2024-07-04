import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { MarkEmailRead, Replay } from "@mui/icons-material";
import mailSentGif from "../asset/mail_sent.gif"; // Ensure this path is correct

const SignupSuccessPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
      }}
    >
      <Box
        component="img"
        src={mailSentGif}
        alt="Mail Sent"
        sx={{
          width: { xs: "50%", sm: "40%", md: "30%", lg: "20%", xl: "15%" },
          height: "auto",
          borderRadius: "50%",
          border: "3px solid #B1D952",
          mb: 2,
        }}
      />
      <Typography
        textAlign="center"
        variant="h5"
        sx={{
          mb: 4,
          color: "#062B76",
          fontWeight: "bold",
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
          px: { md: 20, lg: 40 },
        }}
      >
        Your account has been successfully created. Please check your email and
        activate your account using the activation link we have sent.
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
        Go to Gmail
      </Button>
      <Button
        component={Link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mb: 2 }}
      >
        Request a new activation link ?
      </Button>
    </Box>
  );
};

export default SignupSuccessPage;
