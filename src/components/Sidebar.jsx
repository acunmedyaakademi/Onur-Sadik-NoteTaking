import { FaArrowLeft, FaCalculator, FaDownload, FaTrash } from "react-icons/fa";

export default function Sidebar() {
    return(
        <div className="flex justify-center flex-col text-[#8d8d91]">
            <div className="flex justify-between w-screen pr-[20px] pl-[20px] mb-[10px]">
            <div className="flex  items-center gap-[20px]">
            <FaArrowLeft />
            <p>Go Back</p>
            </div>
            <div className="flex  items-center gap-[20px]">
                <FaTrash />
                <FaDownload />
                <p>Cancel</p>
                <button className="text-cyan-700">Save Note</button>
            </div>
            </div>
            <div className="border border-b-1 border-[#8d8d91] mb-[20px] mr-[20px] ml-[20px]">
            
            </div>
        </div>

    )
}