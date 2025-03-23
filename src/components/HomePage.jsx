import CreateNote from "./CreateNote";
import Sidebar from "./sidebar";

export default function Homepage() {

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <Sidebar />
 
      <CreateNote />
      
    </div>
  )
}