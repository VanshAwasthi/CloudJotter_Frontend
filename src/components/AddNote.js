import React, { useContext,useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context; //ye mene destructuring kardiya notes,setNotes naam ke variable mei context mei jo notes hai vo ajaegye
  
  const [note, setNote] = useState({title:"",description:"",tag:""})

  const handleClick = (e) => {
    e.preventDefault();//loading again
    addNote(note.title,note.description,note.tag);
    setNote({title:"",description:"",tag:""})
  };

  const onChange = (e) => {
        setNote({...note,[e.target.name]:e.target.value})// jo bhi change horha hai uska name uski value ke barabar hojae
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            minLength={5} required
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
