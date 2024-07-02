import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
  const { user, authToken, logoutUser } = useContext(AuthContext);
  const [notes, setNotes] = useState();
  // useEffect(() => {
  //   getNotes()
  // }, [notes])
  useEffect(() => {
    getNotes()
  }, [])
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
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      {user && <p>welcome {user.user_id}</p>}
      <ul>
        {notes && notes.map((note) => <li key={note.id}>{note.content}</li>)}
      </ul>
    </div>
  );
}

export default HomePage
