import Image from "next/image"

const Stories = ()=> {
    return(
        <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xm scrollbar-hide ">
            <div className="flex gap-8 w-max">
                {/* STORY */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="/pic1.jpg" alt ="" width={80} height={80} className=" w-20 h-20 rounded-full ring-2"/>
                    <span className =" font-medium ">Miyuri</span>
                </div>

            </div>
        </div>
    )
}

export default Stories