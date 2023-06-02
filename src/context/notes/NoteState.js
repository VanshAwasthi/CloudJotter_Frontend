import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
     //API call
     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2QxYmYyNzcwMzRjMzg1OWY2YThlIn0sImlhdCI6MTY4MzgyODA0M30.uvFGSjMYVwOWiSXootxvzKHLwzJqc2nz_CJwJ33vDGI",
      }
    });//kyo ki ye parsed karegyi json ko
    const json = await response.json()//aur ye ek asynchronous function hai
    console.log(json)
    setNotes(json)//mere saare notes set hojaegye aur visible hojaegye
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
     //API call
     const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2QxYmYyNzcwMzRjMzg1OWY2YThlIn0sImlhdCI6MTY4MzgyODA0M30.uvFGSjMYVwOWiSXootxvzKHLwzJqc2nz_CJwJ33vDGI",
      },
      body: JSON.stringify({title,description,tag}),
    });

    const json = await response.json();
    console.log(json);
   
    console.log("Adding a new Note");
    const note = {
      _id: "645e15c517a75e85386e73848",
      user: "645cd1bf277034c3859f6a8e4",
      title: title,
      description: description,
      tag: tag,
      date: "2023-05-12T10:32:37.074Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote =async (id) => {
    //ToDo API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2QxYmYyNzcwMzRjMzg1OWY2YThlIn0sImlhdCI6MTY4MzgyODA0M30.uvFGSjMYVwOWiSXootxvzKHLwzJqc2nz_CJwJ33vDGI",
      }
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting Note with " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2QxYmYyNzcwMzRjMzg1OWY2YThlIn0sImlhdCI6MTY4MzgyODA0M30.uvFGSjMYVwOWiSXootxvzKHLwzJqc2nz_CJwJ33vDGI",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))//to create a deep copy
    //Logic to edit in Client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
