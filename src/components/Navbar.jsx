export default function Navbar({setPage}) {

  return (
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
  )

}