import CreateNote from "./CreateNote";
import Sidebar from "./sidebar";

export default function Homepage() {

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <Sidebar />
 
      <CreateNote />
      <button onClick={() => {
        
      }} className="mb-3 bg-[#335DFD] text-[#FAFAFA] cursor-pointer py-2 px-6 rounded-lg w-full max-w-[425px]">+ Create New Note</button>
      
    </div>
  )
}