import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "645e15c317a75e85386e7380",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:35.972Z",
      __v: 0,
    },
    {
      _id: "645e15c417a75e85386e7382",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:36.482Z",
      __v: 0,
    },
    {
      _id: "645e15c517a75e85386e7384",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:37.074Z",
      __v: 0,
    },
    {
      _id: "645e15c417a75e85386e73821",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:36.482Z",
      __v: 0,
    },
    {
      _id: "645e15c517a75e85386e73842",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:37.074Z",
      __v: 0,
    },
    {
      _id: "645e15c417a75e85386e73823",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:36.482Z",
      __v: 0,
    },
    {
      _id: "645e15c517a75e85386e73844",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:37.074Z",
      __v: 0,
    },
    {
      _id: "645e15c417a75e85386e73825",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:36.482Z",
      __v: 0,
    },
    {
      _id: "645e15c517a75e85386e73846",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:37.074Z",
      __v: 0,
    },
    {
      _id: "645e15c417a75e85386e73827",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:36.482Z",
      __v: 0,
    },
    {
      _id: "645e15c517a75e85386e73848",
      user: "645cd1bf277034c3859f6a8e",
      title: "My Tilte",
      description: "Please wake up early",
      tag: "Personal",
      date: "2023-05-12T10:32:37.074Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title,description,tag)=>{
      //ToDo API call
      console.log("Adding a new Note");
      const note={
        _id: "645e15c517a75e85386e73848",
        user: "645cd1bf277034c3859f6a8e4",
        title: title,
        description: description,
        tag: tag,
        date: "2023-05-12T10:32:37.074Z",
        __v: 0,
      };
      setNotes(notes.concat(note))
  }

  //Delete a note
  const deleteNote = (id)=>{
    //ToDo API call
    console.log("Deleting Note with " + id);
    const newNotes = notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes)
  }

  //Edit a note
  const editNote = ()=>{
    
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes,addNote,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
