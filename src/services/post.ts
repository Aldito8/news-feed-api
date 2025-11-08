import { prisma } from "../prisma/client"

export const getFeed = async (user_id: number, page: number, limit: number) => {

    const currentPage = (page - 1) * limit
    const following = await prisma.follows.findMany({
        where: { follower_id: user_id },
        select: { followee_id: true },
    })

    const followee_ids = following.map(f => f.followee_id)
    const data = await prisma.posts.findMany({
        where: {
            user_id: { in: followee_ids }
        },
        take: limit,
        skip: currentPage,
        orderBy: { created_at: "desc" }
    })
    return data
}

export const createPost = async (user_id: number, content: string) => {
    const data = await prisma.posts.create({
        data: { user_id, content }
    })

    return data
}   