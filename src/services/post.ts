import { prisma } from "../prisma/client"

export const getFeed = async (page: number, limit: number) => {
    const data = await prisma.posts.findMany({
        take: limit,
        skip: page
    })
    return data
}

export const createPost = async (user_id: number, content: string) => {
    const data = await prisma.posts.create({
        data: { user_id, content }
    })

    return data
}