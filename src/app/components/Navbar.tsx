
import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Navbar =()=> {
    return(
        <div className =' h-24 flex items-center justify-between'>
            {/* LEFT */}
            <div className="md:hidden lg:block w-[20%] text-sm">
                <Link href={"/"} className ='font-bold text-xl text-blue-600'>WINK</Link>
            </div>
            {/* CENTER */}
            <div className="hidden md:flex w-[50%]">
                {/* LINKS */}
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className ="flex gap-2 items-center">
                    <Image src="/home.png" alt ="Homepage" width={16} height={16} className=" w-4 h-4" />
                    <span>Homepage</span>
                    </Link>

                    <Link href="/" className ="flex gap-2 items-center">
                    <Image src="/friends.png" alt ="Friends" width={16} height={16} className=" w-4 h-4"/>
                    <span>Friends</span>
                    </Link>

                    <Link href="/" className ="flex gap-2 items-center">
                    <Image src="/stories.png" alt ="Stories" width={16} height={16} className=" w-4 h-4"/>
                    <span>Stories</span>
                    </Link>

                </div>
            </div>
            {/* RIGHT */}
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <ClerkLoading>
                <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />  
                </ClerkLoading>
                <ClerkLoaded>
                 <SignedIn>
                    <div className="cursor-pointer">
                        <Image src="/people.png" alt="people" width={20} height={20}/>
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/messages.png" alt="messages" width={20} height={20}/>
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/notifications.png" alt="notifications" width={20} height={20}/>
                    </div>
                <UserButton/>
                </SignedIn>  
                <SignedOut>
                    <div className="flex items-center gap-2">
                    <Image src="/login.png" alt="messages" width={20} height={20}/>
                    <Link href="/sign-in">Login/Register</Link>
                    </div>
                </SignedOut> 
                </ClerkLoaded>
                <MobileMenu/>
            </div>
        </div>
    )
}

export default Navbar