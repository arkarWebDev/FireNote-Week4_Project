import React, { useState } from "react";

const AddNote = () => {
  // define state
  const [note, setNote] = useState("");

  //   add new note
  const addNote = async (e) => {
    e.preventDefault();

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
