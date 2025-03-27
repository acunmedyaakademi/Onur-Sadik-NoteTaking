import React from 'react'
import { FaTag } from 'react-icons/fa'

export default function Tags() {
  return (
    <div className="py-4 px-4">
    <div className="text-[#737378] mb-5">
    <h1>Tags</h1>
    </div>
    <div className="flex items-center gap-3 mb-3">
    <div className="text-[#737378] cursor-pointer">
      <FaTag />
    </div>
    <div className="cursor-pointer">
      <p>Cooking</p>
    </div>
    </div>
    <div className="flex items-center gap-3 mb-3">
    <div className="text-[#737378] cursor-pointer">
      <FaTag />
    </div>
    <div className="cursor-pointer">
      <p>Cooking</p>
    </div>
    </div>

  </div>
  )
}
