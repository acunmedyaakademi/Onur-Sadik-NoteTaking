import React from 'react'
import { FaTrash } from 'react-icons/fa'

export default function DeleteNote() {
    return (
        <div className="border-[#E8E8EA] border w-full rounded-lg flex items-center justify-start gap-5 pl-5 py-4 bg-[#FFFFFF] shadow-lg text-[#36363E] hover:bg-[#F4F5F8] cursor-pointer">
            <FaTrash />
            <button className="text-base/8 cursor-pointer"> Delete Note</button>
        </div>
    )
}
