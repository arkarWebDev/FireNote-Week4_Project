import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import Note from "./components/Note";

function App() {
  // define state
  const [notes, setNotes] = useState([]);

  // get notes when start
  useEffect(() => {
    getNotes();
  }, []);

  // get notes
  const getNotes = async () => {
    const response = await fetch(
      "https://firenote-7d033-default-rtdb.firebaseio.com/notes.json"
    );
    const notes = await response.json();

    const modifiedNotes = [];

    for (const key in notes) {
      modifiedNotes.push(notes[key]);
    }

    setNotes(modifiedNotes);
  };

  return (
    <>
      <Navbar getNotes={getNotes} />
      <AddNote />
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </>
  );
}

export default App;
