import React, { useState, useEffect } from "react";

const NoteForm = ({ addNote, editNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Work");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setDescription(editNote.description);
      setCategory(editNote.category);
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Both Title and Description are required!");
      return;
    }
    addNote({
      id: editNote ? editNote.id : Date.now(),
      title,
      description,
      category,
    });
    setTitle("");
    setDescription("");
    setCategory("Work");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>{editNote ? "Edit Note" : "Add Note"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit">{editNote ? "Update Note" : "Add Note"}</button>
    </form>
  );
};

export default NoteForm;
