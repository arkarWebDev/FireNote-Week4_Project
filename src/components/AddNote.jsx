import React, { useState } from "react";

const AddNote = ({ getNotes }) => {
  // define state
  const [note, setNote] = useState("");

  //   add new note
  const addNote = async (e) => {
    e.preventDefault();

    if (note.trim().length === 0) {
      alert("Please enter an vaild note.");
      return;
    }

    try {
      await fetch(
        "https://firenote-7d033-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setNote("");
      getNotes();
    } catch (err) {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <section>
      <form className="card" onSubmit={addNote}>
        <input
          type="text"
          placeholder="add note here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="submit-btn">Add Note</button>
      </form>
    </section>
  );
};

export default AddNote;
