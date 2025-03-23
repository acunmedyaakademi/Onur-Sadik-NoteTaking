import { FaArrowLeft, FaCalculator, FaDownload, FaTrash } from "react-icons/fa";

export default function Sidebar() {
    return(
        <div className="flex justify-center flex-col  text-[#8d8d91]">
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

    )
}