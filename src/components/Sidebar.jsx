import { FaArrowLeft, FaCalculator, FaDownload, FaHome, FaTag, FaTrash } from "react-icons/fa";
import AllNotes from "./AllNotes";
import ArchivedNotes from "./ArchivedNotes";
import Tags from "./Tags";

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
            <div>
                <AllNotes />
            </div>
            <div>
                <ArchivedNotes />
            </div>
          </div>


        </div>
            <div>
                <Tags />
            </div>
      </div>
        </div>

    )
}