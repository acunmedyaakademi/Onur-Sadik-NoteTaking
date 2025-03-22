import { FaArrowLeft, FaCalculator, FaDownload, FaTrash } from "react-icons/fa";

export default function Sidebar() {
    return(
        <div className="flex justify-center flex-col">
            <div className="flex justify-between w-screen pr-[20px] pl-[20px] mb-[10px]">
            <div className="flex  items-center gap-[10px]">
            <FaArrowLeft />
            <p>Go Back</p>
            </div>
            <div className="flex  items-center gap-[10px]">
                <FaTrash />
                <FaDownload />
                <p>Cancel</p>
                <button className="text-cyan-700">Save Note</button>
            </div>
            </div>
            <div className="border border-b-1 mb-[20px]">
            
            </div>
        </div>

    )
}