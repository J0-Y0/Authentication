import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import React, { useContext, useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import AuthContext from "../context/AuthContext";

export default function Notification() {
  const [open, setOpen] = useState(false);
  const { message } = useContext(AuthContext);

  useEffect(() => {
    if (message !== null) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {message && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={message.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message.content}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
