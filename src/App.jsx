import { useState } from 'react'
import Homepage from './components/HomePage'

function App() {
  const [page, setPage] = useState("");


  return (
    <>
      <Homepage />
    </>
  )
}

export default App
