import { useState } from "react";
import tags from "../configs/tagNames";
import DefineTags from "./DefineTags";
import { FaDownload, FaSearch, FaTrash } from "react-icons/fa";
import { FaDeleteLeft, FaGear, FaUpDown } from "react-icons/fa6";


export default function CreateNote() {
  const [usedTags, setUsedTags] = useState(tags);
  const [selectedTags, setSelectedTags] = useState([]);
  const [count, setCount] = useState(0);


  const handleChange = (e) => {
    setCount(count + 1)

    if (count < 3) {
      setSelectedTags([
        ...selectedTags,
        e.target.value
      ])
      const remainderTag = usedTags.filter(t => t.value != e.target.value)
      setUsedTags(remainderTag);
    } else {
      if (count < 4) {
        setSelectedTags([
          ...selectedTags,
          " Max 3 Tags"
        ])
      }
    }
  }


  return (
    <div className="xl:w-screen xl:grid xl:grid-cols-11 ">
      <div className="hidden xl:block xl:col-span-2 ">
        <div className="xl:p-5 border-b flex flex-col">
        <h1>Notes</h1>

        <button className="pr-[40px] pl-[20px] pt-[20px] pb-[10px]">All Notes</button>
        <button className="pr-[40px] pl-[20px] pt-[20px] pb-[10px]">Archived Notes</button>

        </div>
        <div className="xl:p-5">
          <h1>Tags</h1>
        </div>
      </div>
      <div className="xl:col-span-9">
        <div className="xl:p-[40px] xl:pb-[20px] border-b xl:border-l flex justify-between">
          <div>
          <h1>All Notes</h1>
          </div>
          <div className="flex">
          <div class="">
                <FaSearch />
                <input type="text" id="searchInput" placeholder="Search by title, content or tags..."/>
            </div>
            <div>
              <FaGear />
            </div>
          </div>

        </div>
        <div className="xl:grid xl:grid-cols-12 xl:h-screen xl:border-l">
        <div className="xl:border-r xl:h-screen xl:col-span-3 hidden xl:block xl:py-5 xl:px-5">
        <div className="rounded-lg bg-[#325CFE] text-[#FFFFFF] py-[15px] w-full flex items-center justify-center mb-5">
          <button>+ Create New Note</button>
        </div>
        <div className=" hover:bg-[#F4F5F8] rounded-lg p-2">
        <div>
          <h1>React Performance Optimization</h1>
        </div>
        <button>Dev</button>
        <button>React</button>

        <div>
          <p> 29 Oct 2024</p>
        </div>
        </div>
        </div>
        <div className="xl:col-span-6 xl:border-r flex flex-col items-center justify-center xl:p-5">
        <div className="w-full pr-[20px] pl-[20px] h-[50px] mb-3 rounded p-1">
          <input className="w-full h-full" type="text" placeholder="Note Header" />
        </div>
        <div className="mb-5 pr-[20px] pl-[20px] border-b w-full py-1 border-[#6c757d] flex items-center gap-5">
          <div className="flex items-center gap-2 pr-1 border-r border-r-[#6c757d]">
            <i className="fa-solid fa-tag "></i>
            {
              <DefineTags tags={usedTags} onChange={handleChange} />
            }
          </div>
          <div>
            {selectedTags.map(t => t).join(", ")}
          </div>
        </div>
        <div className="w-screen h-screen xl:w-full xl:h-full pr-[20px] pl-[20px]">
          <textarea className="w-full p-1 h-[80%] xl:w-full rounded" placeholder="Take Note" ></textarea>
        </div>
        <div className="hidden xl:flex border border-r xl:w-full w-screen mb-[20px] text-[#727892]">

        </div>
        <div className="hidden xl:flex w-full  pl-[40px] justify-start gap-5">
          <button className="p-[20px] bg-[#305cfd] rounded-lg text-[white]">Save Note</button>
          <button className="p-[20px] bg-[#dbe4e5] rounded-lg text-[#727892]">Cancel</button>
        </div>
      </div>
        <div className="xl:col-span-3 hidden xl:block xl:p-5">
            <div className="flex flex-col gap-5">
              <div className="border-[#F4F5F8] border w-full rounded-lg flex items-center justify-start gap-5 pl-5 py-4 bg-[#FFFFFF] shadow-lg text-[#36363E] hover:bg-[#F4F5F8] cursor-pointer">
              <FaDownload />
              <button className="text-base/8"> Archive Note</button>
              </div>
              <div className="border-[#F4F5F8] border w-full rounded-lg flex items-center justify-start gap-5 pl-5 py-4 bg-[#FFFFFF] shadow-lg text-[#36363E] hover:bg-[#F4F5F8] cursor-pointer">
              <FaTrash />
              <button className="text-base/8"> Delete Note</button>
              </div>
            </div>
        </div>
        </div>

      </div>


    </div>

  )
}