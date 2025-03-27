import React from 'react'
import { FaHome } from 'react-icons/fa'

export default function AllNotes() {
  return (
    <div className="flex gap-3 items-center py-4 px-4 hover:bg-[#F4F5F8] rounded-lg text-[#737378] hover:text-[#325CFE] cursor-pointer hover:shadow-lg">
    <FaHome />
    <button className="cursor-pointer">All Notes</button>
  </div>
  )
}
