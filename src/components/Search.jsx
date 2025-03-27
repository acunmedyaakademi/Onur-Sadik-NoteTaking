import { FaSearch } from "react-icons/fa";

export default function Search() {
    return (
        <div class="text-[#E8E8EA] flex items-center w-[350px] px-5 py-4 gap-5 border border-[#E8E8EA] rounded-lg hover:border-[#325CFE] shadow-lg ">
            <FaSearch className="hover:text-[black]" />
            <input className="w-full outline-none text-[black]" type="text" id="searchInput" placeholder="Search by title, content or tags..." />
        </div>
    )
}