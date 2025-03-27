export default function NewNotes() {
    return (
        <div>
            <div className="xl:border-r border-[#E8E8EA] xl:h-screen  hidden xl:block xl:py-5 xl:px-5">
                <div className="rounded-lg bg-[#325CFE] text-[#FFFFFF] py-[15px] w-full flex items-center justify-center mb-5 cursor-pointer shadow-lg font-medium text-l hover:shadow-2xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
                    <button className="cursor-pointer ">+ Create New Note</button>
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
        </div>
    )
}