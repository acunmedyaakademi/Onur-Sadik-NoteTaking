import { FaSearch } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import Search from "./Search"

export default function Navbar({ setPage }) {

  return (
    <div>
      <div className="flex xl:hidden text-bold justify-between p-4 fixed inset-x-0 bottom-0 z-50 border-t border-[#6c757d]">
        <button onClick={() => {
          setPage("/")
        }} className="cursor-pointer p-1">
          <i className="fa-solid fa-house text-[#6c757d] text-xl"></i>
        </button>
        <button className="cursor-pointer p-1">
          <i className="fa-solid fa-magnifying-glass text-[#6c757d] text-xl"></i>
        </button>
        <button className="cursor-pointer p-1">
          <i className="fa-solid fa-download text-[#6c757d] text-xl"></i>
        </button>
        <button className="cursor-pointer p-1">
          <i className="fa-solid fa-tag text-[#6c757d] text-xl"></i>
        </button>
        <button className="cursor-pointer p-1">
          <i className="fa-solid fa-gear text-[#6c757d] text-xl"></i>
        </button>
      </div>
      <div className="xl:py-[10px] px-[20px] border-b xl:border-l border-[#E8E8EA] xl:flex justify-between items-center hidden">
      <div className="font-bold text-2xl">
            <h1>All Notes</h1>
          </div>
          <div className="flex gap-5 py-2">
          <div>
            <Search />
          </div>
            <div className="flex items-center  px-5">
              <FaGear className="cursor-pointer" />
            </div>
          </div>
      </div>
    </div>
  )

}