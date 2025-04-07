import { useState } from 'react'
import Homepage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllNotes from './components/AllNotes';
import ArchivedNotes from './components/ArchivedNotes';

function App() {
  const [page, setPage] = useState("");


  return (
    <Router>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allnotes" element={<AllNotes />} />
        <Route path="/archivednotes" element={<ArchivedNotes />} />
    </Routes>
</Router>
  )
}

export default App
