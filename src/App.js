import React, { useState } from 'react';
import './App.css';
import Header from './header.component';
import Take from './Take';
import Note from './Note.jsx';
function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    console.log(notes);
  };

  const removeNote = (ind) => {
    setNotes((prevNote) => 
      prevNote.filter((currData, idx) => {
        return idx !== ind;
      })
    )
  }

  return (
    <div className="App">
      <Header />
      <Take handleSubmit={addNote} />
      <div className="row container">
        {
        notes.map((note,index) => {
          return(
          <div className="col-sm-3">
            <Note
              key={index}
              id={index}
              title={note.title}
              body={note.body}
              time_e={note.time_e}
              removeNote={removeNote}
            /> 
          </div> )
        })
      }
      </div>
      
    </div>
  );
}

export default App;