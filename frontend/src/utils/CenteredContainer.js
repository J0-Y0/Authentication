import { Paper, Box } from "@mui/material";
import React from "react";

const CenteredContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: 5,
      }}
    >
      <Paper
        elevation={4}
        sx={{ height: "auto", padding: 5, borderRadius: 2, maxWidth: 400 }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default CenteredContainer;
