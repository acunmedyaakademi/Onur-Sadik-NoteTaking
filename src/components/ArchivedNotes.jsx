import React from 'react'
import { FaDownload } from 'react-icons/fa'

export default function ArchivedNotes() {
  return (
    <div className="flex gap-3 items-center px-4 py-4 hover:bg-[#F4F5F8] rounded-lg text-[#737378] hover:text-[#325CFE] cursor-pointer hover:shadow-lg">
    <FaDownload />
    <button className="cursor-pointer">Archived Notes</button>
  </div>
  )
}
