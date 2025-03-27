import CreateNote from "./CreateNote";
import Navbar from "./Navbar";
import NewNotes from "./NewNotes";
import Sidebar from "./Sidebar";
import SideButton from "./SideButton";

export default function Homepage() {

  return (
      <div className="font-mono xl:w-screen xl:grid xl:grid-cols-11 xl:items-start md:flex md:flex-col md:items-center md:justify-center md:w-full">
        <div className="xl:col-span-2 xl:px-5">
          <Sidebar />
        </div>

        <div className="xl:col-span-9">
          <div className="xl:block">
            <Navbar />
          </div>
          <div className="xl:grid xl:grid-cols-12 xl:h-screen xl:border-l border-[#E8E8EA]">
            <div className="xl:col-span-3">
              <NewNotes />
            </div>
            <div className="xl:col-span-6">
              <CreateNote />
            </div>
            <div className="xl:col-span-3 hidden xl:block xl:p-5">
              <SideButton />
            </div>
          </div>

        </div>


      </div>
  )
}