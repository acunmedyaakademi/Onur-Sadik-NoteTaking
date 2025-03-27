import React from 'react'
import { FaDownload } from 'react-icons/fa'

export default function ArchiveNote() {
  return (
    <div className="border-[#E8E8EA] border w-full rounded-lg flex items-center justify-start gap-5 pl-5 py-4 bg-[#FFFFFF] shadow-lg text-[#36363E] hover:bg-[#F4F5F8] cursor-pointer">
    <FaDownload />
    <button className="text-base/8 cursor-pointer"> Archive Note</button>
</div>
  )
}
