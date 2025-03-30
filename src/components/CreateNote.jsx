import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateNote({ addNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newNote = {
            id: Date.now(),
            title,
            content,
            tags: tags.split(",").map(tag => tag.trim()),
            date: new Date().toLocaleDateString(),
        };

        addNote(newNote);
        setTitle("");
        setContent("");
        setTags("");

        navigate("/");
    };

    const handleCancel = () => {
      navigate("/");
    };


  return (
    <div className="xl:border-r border-[#E8E8EA] flex flex-col h-screen  xl:p-5">
      <form onSubmit={handleSubmit} className="w-full pr-[20px] pl-[20px] h-[50px] mb-3 rounded p-1">
        <input
         type="text"
           placeholder="Note Header"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required className="w-full h-full outline-none" 
        />
      <div className="mb-5 pr-[20px] pl-[20px] border-b border-[#E8E8EA] w-full py-1 flex items-center gap-5">
      <input
        type="text"
        placeholder="Etiketler (virgülle ayır)"
        value={tags}
        onChange={(e) => setTags(e.target.value)} className="flex items-center gap-2 pr-1 border-r border-[#E8E8EA]"
        />
      </div>
      <div className="w-screen xl:w-full xl:h-[60%] pr-[20px] pl-[20px]">
        <textarea
        placeholder="Take Note"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
         className="outline-none w-full p-1 h-[50%] xl:w-full rounded"  ></textarea>
      </div>
      <div className="hidden xl:flex border-[#E8E8EA] border-b xl:w-full mb-[20px] text-[#727892]">

      </div>
      <div className="hidden xl:flex w-full  pl-[40px] gap-5">
        <button className="p-[20px] bg-[#305cfd] rounded-lg text-[white] cursor-pointer hover:shadow-2xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        type="submit">Save Note</button>
        <button className="p-[20px] bg-[#dbe4e5] rounded-lg text-[#727892] cursor-pointer transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray"
        type="button"
        onClick={handleCancel}>Cancel</button>
      </div>
      </form>
    </div>
  )
}