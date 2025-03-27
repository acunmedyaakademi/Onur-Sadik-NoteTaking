import { FaArrowLeft, FaCalculator, FaDownload, FaHome, FaTag, FaTrash } from "react-icons/fa";

export default function Sidebar() {
    return(
        <div>
            <div className="md:flex xl:hidden md:justify-center md:flex-col  text-[#8d8d91]">
            <div className="flex justify-between w-screen p-[20px]">
            <div className="flex  items-center gap-[20px]">
            <FaArrowLeft />
            <p>Go Back</p>
            </div>
            <div className="flex  items-center gap-[20px]">
                <FaTrash />
                <FaDownload />
                <p>Cancel</p>
                <button className="text-cyan-600">Save Note</button>
            </div>
            </div>
            <div className="border-r outline-none border-b-1 border-[#8d8d91] mb-[20px] mr-[20px] ml-[20px]">
            </div>
            </div>
      <div className="hidden xl:block">
        <div className=" border-b border-[#E8E8EA] flex flex-col">
          <div className="italic text-2xl font-bold pl-4 py-2 mt-4">
            <h1 className="cursor-pointer">Notes</h1>
          </div>
          <div className="py-3 ">
            <div className="flex gap-3 items-center py-4 px-4 hover:bg-[#F4F5F8] rounded-lg text-[#737378] hover:text-[#325CFE] cursor-pointer hover:shadow-lg">
              <FaHome />
              <button className="cursor-pointer">All Notes</button>
            </div>
            <div className="flex gap-3 items-center px-4 py-4 hover:bg-[#F4F5F8] rounded-lg text-[#737378] hover:text-[#325CFE] cursor-pointer hover:shadow-lg">
              <FaDownload />
              <button className="cursor-pointer">Archived Notes</button>
            </div>
          </div>


        </div>
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
      </div>
        </div>

    )
}