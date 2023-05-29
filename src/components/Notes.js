import React, { useContext, useEffect } from "react";
import AddNote from "./AddNote";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes,getNotes} = context; //ye mene destructuring kardiya notes,setNotes naam ke variable mei context mei jo notes hai vo ajaegye
  useEffect(() => {
    getNotes()
  }, [])
  
  return (
    <>
    <AddNote/>
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((notes) => {
        return <Noteitem key={notes._id} note={notes} />;
      })}
    </div>
    </>
  );
};

export default Notes;
