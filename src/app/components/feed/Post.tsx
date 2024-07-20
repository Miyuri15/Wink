import Image from "next/image"
import Comments from "./Comments"
const Post = ()=>{
    return(
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="/pic1.jpg" width={40} height={40} alt="" className="w-10 h-10 rounded-full"/>
                <span className="font-medium">Miyuri</span>
                </div>
                <Image src="/more.png" width={16} height={16} alt=""/>

            </div>
            {/* DESCRIPTION */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                <Image src="/pic1.jpg"alt="" fill className="object-cover rounded-md"/>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus error porro aut nihil ducimus illo nisi amet vitae nemo deleniti, sunt delectus, praesentium distinctio architecto doloremque sapiente inventore mollitia.</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text- my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/like.png" width={16} height={16} alt="" className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                    <Image src="/comment.png" width={16} height={16} alt="" className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span></span>
                    </div>

                </div>
                <div className="">
                <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                    <Image src="/share.png" width={16} height={16} alt="" className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline "> Shares</span></span>
                    </div>

                </div>
            </div>
        <Comments/>
        </div>
    )
}

export default Post