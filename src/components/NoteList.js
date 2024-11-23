import React from "react";

const NoteList = ({ notes, deleteNote, setEditNote }) => {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <span>Category: {note.category}</span>
            <div>
              <button onClick={() => setEditNote(note)}>Edit</button>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
