import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "645e15c317a75e85386e7380",
          "user": "645cd1bf277034c3859f6a8e",
          "title": "My Tilte",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2023-05-12T10:32:35.972Z",
          "__v": 0
        },
        {
          "_id": "645e15c417a75e85386e7382",
          "user": "645cd1bf277034c3859f6a8e",
          "title": "My Tilte",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2023-05-12T10:32:36.482Z",
          "__v": 0
        },
        {
          "_id": "645e15c517a75e85386e7384",
          "user": "645cd1bf277034c3859f6a8e",
          "title": "My Tilte",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2023-05-12T10:32:37.074Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;