import { useState } from "react";
import tags from "../configs/tagNames";
import DefineTags from "./DefineTags";


export default function CreateNote() {
  const [usedTags, setUsedTags] = useState(tags);
  const [selectedTags, setSelectedTags] = useState([]);
  const [count ,setCount] = useState(0);


  const handleChange = (e) => {
    setCount(count + 1) 
    
    if (count < 3) {
      setSelectedTags([
        ...selectedTags,
        e.target.value
      ])
      const remainderTag = usedTags.filter(t => t.value != e.target.value)
      setUsedTags(remainderTag);
    }else{
      if (count < 4) {    
        setSelectedTags([
          ...selectedTags,
          " Max 3 Tags"
        ])
      }
    }
  }


  return (
    <div className=" xl:w-screen  ">
      <div className="hidden h-screen  ">
      <div className="border-r h-screen">

      </div>
      </div>
      <div className="flex flex-col items-center justify-center pr-[20px] pl-[20px]">
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

    </div>
   
  )
}