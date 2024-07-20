"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"
import { z } from "zod"

export const switchFollow = async (userId:string) =>{
    const {userId:currentUserId} = auth()

    if(!currentUserId){
        throw new Error("User is not authenticated!")
    }

    try{
        const exsitingFollow = await prisma.follower.findFirst({
            where:{
                followerId:currentUserId,
                followingId:userId,
            }
        })
        if(exsitingFollow){
            await prisma.follower.delete({
                where:{
                    id:exsitingFollow.id,
                }
            })
           }else{
            const exsitingFollowRequest = await prisma.followRequest.findFirst({
                where:{
                    senderId:currentUserId,
                    receiverId:userId,
                }
            })
            if(exsitingFollowRequest){
                await prisma.followRequest.delete({
                    where:{
                        id:exsitingFollowRequest.id,
                    }
                })
            }else{
                await prisma.followRequest.create({
                    data:{
                        senderId:currentUserId,
                        receiverId:userId,
                    }
                })

            }
        }
    }catch(err){
        console.log(err)
        throw new Error("Something went wrong!")
    }
}

export const switchBlock = async (userId:string) =>{
    const {userId:currentUserId} = auth()

    if(!currentUserId){
        throw new Error("User is not authenticated!")
    }

    try{
        const exsitingBlock = await prisma.block.findFirst({
            where:{
                blockerId:currentUserId,
                blockedId:userId,
            }
        })
        if(exsitingBlock){
            await prisma.block.delete({
                where:{
                    id:exsitingBlock.id,
                }
            })
        }else{
            await prisma.block.create({
                data:{
                    blockerId:currentUserId,
                    blockedId:userId
                }
            })
        }
    }catch(err){
       console.log(err)
       throw new Error("Something Went Wrong!")
    }
}

export const acceptFollowRequest = async (userId:string)=>{
    const {userId:currentUserId} = auth()

    if(!currentUserId){
        throw new Error("User is not Authenicated!")
    }
try{


    const exsitingFollowRequest = await prisma.followRequest.findFirst({
        where:{
            senderId:userId,
            receiverId:currentUserId,
        }
    })
    if(exsitingFollowRequest){
        await prisma.followRequest.delete({
            where:{
                id:exsitingFollowRequest.id,
            }
        })
        await prisma.follower.create({
            data:{
                followerId:userId,
                followingId:currentUserId,
            }
        })
    }
}catch(err){
    console.log(err)
    throw new Error("Something went wrong!")
}
}

export const declineFollowRequest = async (userId:string)=>{
    const {userId:currentUserId} = auth()

    if(!currentUserId){
        throw new Error("User is not Authenicated!")
    }
try{


    const exsitingFollowRequest = await prisma.followRequest.findFirst({
        where:{
            senderId:userId,
            receiverId:currentUserId,
        }
    })
    if(exsitingFollowRequest){
        await prisma.followRequest.delete({
            where:{
                id:exsitingFollowRequest.id,
            }
        })
        
    }
}catch(err){
    console.log(err)
    throw new Error("Something went wrong!")
}
}

export const updateProfile = async (prevState:{success:boolean, error:boolean},payload:{formData:FormData, cover:string})=> {
const {formData, cover}= payload
const fields = Object.fromEntries(formData)

const filteredFields = Object.fromEntries(
    Object.entries(fields).filter(([_,value])=> value !== "")
)

const profile = z.object({
 cover:z.string().optional(),
 name:z.string().max(60).optional(),
 surname:z.string().max(60).optional(),
 description:z.string().max(255).optional(),
 city:z.string().max(60).optional(),
 school:z.string().max(60).optional(),
 work:z.string().max(60).optional(),
 website:z.string().max(60).optional(),
})

const validatedFields = profile.safeParse({cover,...filteredFields})

if(!validatedFields.success){
    console.log(validatedFields.error.flatten().fieldErrors)
    return {success:false, error:true}
}
const {userId}= auth()
if(!userId) return  {success:false, error:true}
try{
    await prisma.user.update({
      where:{
        id:userId
      },
      data:validatedFields.data  
    })
    return  {success:true, error:false}
}catch(err){
    console.log(err)
    return {success:false, error:true}
}

}

export const switchLike = async (postId:number)=> {
    const {userId} = auth()

    if(!userId) throw new Error("User is not authenticated!")

    try{
        const exsitingLike = await prisma.like.findFirst({
           where:{
            postId,
            userId
           } 
        })

        if(exsitingLike){
            await prisma.like.delete({
                where:{
                    id:exsitingLike.id
                }
            })
        }
        else{
            await prisma.like.create({
                data:{
                    postId,
                    userId,
                }
            })
        }
    }catch(err){
        console.log(err)
        throw new Error ("Something went wrong!")
    }
}