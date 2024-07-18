import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  const { user, authToken, logoutUser } = useContext(AuthContext);
  const [notes, setNotes] = useState();

  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/notes/api/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + String(JSON.parse(authToken).access),
        },
      });
      if (response.status === 200) {
        let data = await response.json();
        setNotes(data);
      } else {
        logoutUser();
      }
    } catch (error) {
      alert(
        "something went wrong, please try again,there may be a connection error"
      );
      console.error(error);
    }
  };

  return (
    <Box p={5}>
      <Typography
        variant="h4"
        fontWeight={700}
        component="div"
        color={"primary"}
        alignItems="center"
      >
        Welcome you have successfully leggin to the system
      </Typography>
      <Typography
        variant="h6"
        fontWeight={700}
        component="div"
        color={"primary"}
      >
        This is your dashboard
      </Typography>

      <p>This is your private data</p>
      {user && <p>welcome {user.user_id}</p>}
      <ul>
        {notes && notes.map((note) => <li key={note.id}>{note.content}</li>)}
      </ul>
    </Box>
  );
};

export default HomePage;
