import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './components/HomePage'
import Navbar from './components/Navbar';

function App() {
  const [page, setPage] = useState("");


  return (
    <>
      <Homepage />
      <Navbar setPage={setPage}/>
    </>
  )
}

export default App
