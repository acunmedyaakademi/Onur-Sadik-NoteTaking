import { FaDownload, FaTrash } from "react-icons/fa";
import DeleteNote from "./DeleteNote";
import ArchiveNote from "./ArchiveNote";

export default function SideButton() {
    return (
        <div>
            <div className="flex flex-col gap-5">
                <div>
                    <ArchiveNote />
                </div>
                <div>
                    <DeleteNote />
                </div>
            </div>
        </div>
    )
}