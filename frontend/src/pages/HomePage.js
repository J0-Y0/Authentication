import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
  const { user, authToken ,logoutUser} = useContext(AuthContext)
  const [notes, setNotes] = useState()
  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/account/api/notes/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + String(JSON.parse(authToken).access)
      },
    })
    let data = await response.json()

    if (response.status === 200) { 
      setNotes(data)
    } else {
      logoutUser()
    }



  }

 

  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      {user && <p>welcome {user.user_id}</p>}
      <ul>
        
          {notes && notes.map((note) =>
            <li key={note.id}>{note.content}</li>
          )}
      </ul>
      
      

    </div>
  )
}

export default HomePage
