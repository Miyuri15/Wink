"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"
import { log } from "console"
import { loadGetInitialProps } from "next/dist/shared/lib/utils"

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
