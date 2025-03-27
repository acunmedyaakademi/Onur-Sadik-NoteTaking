import { useState } from "react";
import tags from "../configs/tagNames";
import DefineTags from "./DefineTags";
import { FaDownload, FaHome, FaSearch, FaTag, FaTrash } from "react-icons/fa";
import { FaDeleteLeft, FaGear, FaRightLong, FaUpDown } from "react-icons/fa6";


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
      <div className="hidden xl:block xl:col-span-2 xl:px-5">
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
      <div className="xl:col-span-9">
        <div className="xl:py-[10px] px-[20px] border-b xl:border-l border-[#E8E8EA] flex justify-between items-center">
          <div className="font-bold text-2xl">
            <h1>All Notes</h1>
          </div>
          <div className="flex gap-5 py-2">
            <div class="text-[#E8E8EA] flex items-center w-[350px] px-5 py-4 gap-5 border border-[#E8E8EA] rounded-lg hover:border-[#325CFE] shadow-lg ">
              <FaSearch className="hover:text-[black]" />
              <input className="w-full outline-none text-[black]" type="text" id="searchInput" placeholder="Search by title, content or tags..." />
            </div>
            <div className="flex items-center  px-5">
              <FaGear className="cursor-pointer" />
            </div>
          </div>

        </div>
        <div className="xl:grid xl:grid-cols-12 xl:h-screen xl:border-l border-[#E8E8EA]">
          <div className="xl:border-r border-[#E8E8EA] xl:h-screen xl:col-span-3 hidden xl:block xl:py-5 xl:px-5">
            <div className="rounded-lg bg-[#325CFE] text-[#FFFFFF] py-[15px] w-full flex items-center justify-center mb-5 cursor-pointer shadow-lg font-medium text-l">
              <button className="cursor-pointer">+ Create New Note</button>
            </div>
            <div className=" hover:bg-[#F4F5F8] rounded-lg p-3">
              <div className="font-bold text-xl mb-2 cursor-pointer">
                <h1>React Performance Optimization</h1>
              </div>
              <div className="flex gap-3 mb-2">
                <div className="bg-[#E1E6EA] px-2 rounded-md cursor-pointer">
                  <button className="cursor-pointer">Dev</button>
                </div>
                <div className="bg-[#E1E6EA] px-2 rounded-md cursor-pointer">
                  <button className="cursor-pointer">React</button>
                </div>
              </div>
              <div className="mb-3">
                <p> 29 Oct 2024</p>
              </div>
              <div className="border-b border-[#E8E8EA]">

              </div>
            </div>
            <div className=" hover:bg-[#F4F5F8] rounded-lg p-3">
              <div className="font-bold text-xl mb-2 cursor-pointer">
                <h1>React Performance Optimization</h1>
              </div>
              <div className="flex gap-3 mb-2">
                <div className="bg-[#E1E6EA] px-2 rounded-md">
                  <button className="cursor-pointer">Dev</button>
                </div>
                <div className="bg-[#E1E6EA] px-2 rounded-md">
                  <button className="cursor-pointer">React</button>
                </div>
              </div>
              <div className="mb-3">
                <p> 29 Oct 2024</p>
              </div>
              <div className="border-b border-[#E8E8EA]">

              </div>
            </div>
          </div>
          <div className="xl:col-span-6 xl:border-r border-[#E8E8EA] flex flex-col  xl:p-5">
            <div className="w-full pr-[20px] pl-[20px] h-[50px] mb-3 rounded p-1">
              <input className="w-full h-full outline-none" type="text" placeholder="Note Header" />
            </div>
            <div className="mb-5 pr-[20px] pl-[20px] border-b border-[#E8E8EA] w-full py-1 flex items-center gap-5">
              <div className="flex items-center gap-2 pr-1 border-r border-[#E8E8EA]">
                <i className="fa-solid fa-tag "></i>
                {
                  <DefineTags tags={usedTags} onChange={handleChange} />
                }
              </div>
              <div>
                {selectedTags.map(t => t).join(", ")}
              </div>
            </div>
            <div className="w-screen xl:w-full xl:h-[60%] pr-[20px] pl-[20px]">
              <textarea className="outline-none w-full p-1 h-[50%] xl:w-full rounded" placeholder="Take Note" ></textarea>
            </div>
            <div className="hidden xl:flex border-[#E8E8EA] border-b xl:w-full mb-[20px] text-[#727892]">

            </div>
            <div className="hidden xl:flex w-full  pl-[40px] gap-5">
              <button className="p-[20px] bg-[#305cfd] rounded-lg text-[white]">Save Note</button>
              <button className="p-[20px] bg-[#dbe4e5] rounded-lg text-[#727892]">Cancel</button>
            </div>
          </div>
          <div className="xl:col-span-3 hidden xl:block xl:p-5">
            <div className="flex flex-col gap-5">
              <div className="border-[#E8E8EA] border w-full rounded-lg flex items-center justify-start gap-5 pl-5 py-4 bg-[#FFFFFF] shadow-lg text-[#36363E] hover:bg-[#F4F5F8] cursor-pointer">
                <FaDownload />
                <button className="text-base/8 cursor-pointer"> Archive Note</button>
              </div>
              <div className="border-[#E8E8EA] border w-full rounded-lg flex items-center justify-start gap-5 pl-5 py-4 bg-[#FFFFFF] shadow-lg text-[#36363E] hover:bg-[#F4F5F8] cursor-pointer">
                <FaTrash />
                <button className="text-base/8 cursor-pointer"> Delete Note</button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>

  )
}