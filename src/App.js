import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editNote, setEditNote] = useState(null);

  const addNote = (note) => {
    if (editNote) {
      setNotes(notes.map((n) => (n.id === note.id ? note : n)));
      setEditNote(null);
    } else {
      setNotes([...notes, { ...note, id: Date.now() }]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Notes Management</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteForm addNote={addNote} editNote={editNote} />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        setEditNote={setEditNote}
      />
    </div>
  );
};

export default App;
