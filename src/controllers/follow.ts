import { Request, Response } from "express";
import { follow, getFollowee, getFollower, unfollow } from "../services/follow";

export async function handleFollow(req: Request, res: Response) {
    try {
        const follower_id = (req as any).user.id

        const { userid } = req.params

        const data = await follow(follower_id, Number(userid))

        res.status(200).json({ data })

    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

export async function handleUnfollow(req: Request, res: Response) {
    try {
        const follower_id = (req as any).user.id
        const { userid } = req.params

        const data = await unfollow(follower_id, Number(userid))

        res.status(200).json({ data })

    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

export async function handleGetFollower(req: Request, res: Response) {
    try {
        const user_id = (req as any).user.id
        const data = await getFollower(user_id)
        res.status(200).json({ data })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

export async function handleGetFollowee(req: Request, res: Response) {
    try {
        const user_id = (req as any).user.id
        const data = await getFollowee(user_id)
        res.status(200).json({ data })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}