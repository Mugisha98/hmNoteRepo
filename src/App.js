import React from 'react';
import './App.css';
import { CreateNoteModal } from './components/NoteModel';
import { NotesTable } from './components/NotesTable';

const App  = () => {
  return (
    <div className="App">
      <h3>My Notes</h3>
      <div style={{maxWidth: '70%', margin:'auto'}}>
        <div style={{textAlign:'right'}}>
          <CreateNoteModal />
        </div>
        <NotesTable />
      </div>
    </div>
  );
}

export default App;
