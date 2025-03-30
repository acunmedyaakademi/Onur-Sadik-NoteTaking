import { useState } from 'react'
import Homepage from './components/HomePage'

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  }

  return (
    <>
      <Homepage />
    </>
  )
}

export default App
