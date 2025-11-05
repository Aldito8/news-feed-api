import { prisma } from "../prisma/client"

export const getFeed = async () => {
    const data = await prisma.posts.findMany()
    return data
}

export const createPost = async (user_id: number, content: string) => {
    const data = await prisma.posts.create({
        data: { user_id, content }
    })

    return data
}