import { prisma } from "../prisma/client"

export const follow = async (follower_id: number, followee_id: number) => {
    if (follower_id === followee_id) {
        throw { code: 400, message: "cannot follow yourself" }
    }

    const exist = await prisma.follows.findUnique({
        where: {
            follower_id_followee_id: { follower_id, followee_id }
        }
    })

    if (exist) {
        throw { code: 409, message: "already follow this user" }
    }

    const data = await prisma.follows.create({
        data: {
            follower_id,
            followee_id
        }
    })

    return data
}

export const unfollow = async (follower_id: number, followee_id: number) => {

    const exist = await prisma.follows.findUnique({
        where: {
            follower_id_followee_id: { follower_id, followee_id }
        }
    })

    if (exist) {
        throw { code: 400, message: "not following this user" }
    }

    const data = await prisma.follows.delete({
        where: {
            follower_id_followee_id: { follower_id, followee_id }
        }
    })

    return data
}

// export const getFollower = async (user_id: number) => {
//     const data = await prisma.follows.findMany({
//         where: { followee_id: user_id },
//         include: { follower: true }
//     })

//     return data
// }

// export const getFollowing = async (user_id: number) => {
//     const data = await prisma.follows.findMany({
//         where: { follower_id: user_id },
//         include: { followee: true }
//     })

//     return data
// }