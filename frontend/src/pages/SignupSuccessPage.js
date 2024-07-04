import { Box, Button, ButtonGroup, Link, Typography } from "@mui/material";
import React from "react";
import mailSentGif from "../asset/mail_sent.gif"; // Ensure this path is correct
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const SignupSuccessPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingX: 2,
        paddingY: 4,
      }}
    >
      <Box
        component="img"
        src={mailSentGif}
        alt="Mail Sent"
        sx={{
          width: { xs: "50%", sm: "75%", md: "50%", lg: "40%", xl: "15%" },
          height: "auto",
          borderRadius: "50%",
          border: "3px solid #B1D952",
          marginBottom: 2,
        }}
      />
      <Typography
        textAlign="center"
        variant="h5"
        sx={{
          marginBottom: 4,
          color: "#062B76",
          fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
          paddingX:{md:36}
        }}
      >
        Your account has been successfully created. Please check your email and
        activate your account using the activation link we have sent.
      </Typography>
      <ButtonGroup variant="contained" >
        <Button
          color="primary"
          startIcon={<MarkEmailReadIcon />}
          component={Link}
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textTransform: "none", marginTop: 2 }}
        >
          Go to Gmail
        </Button>
        <Button
          color="primary"
          startIcon={<MarkEmailReadIcon />}
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textTransform: "none", marginTop: 2 }}
        >
          Re-sent
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default SignupSuccessPage;
