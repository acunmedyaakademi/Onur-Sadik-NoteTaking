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
    <div className="flex flex-col items-center justify-center">
      <div className="mb-2 border-b w-full py-1 border-[#6c757d] flex items-center gap-5">
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
      <div className="w-full max-w-md mb-3 border rounded p-1">
        <input type="text" placeholder="Note Header" />
      </div>
      <div className="w-full max-w-md">
        <textarea className="w-[425px] p-1 h-50 border rounded" placeholder="Take Note" ></textarea>
      </div>
    </div>
  )
}