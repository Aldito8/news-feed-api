import { Request, Response } from "express";
import { createPost, getFeed } from "../services/post";

export async function handleGetFeed(req: Request, res: Response) {
    try {
        const user_id = (req as any).user.id

        const { page, limit } = req.query
        const data = await getFeed(user_id, Number(page), Number(limit))
        res.status(200).json({ data: data })
    } catch (error: any) {
        res.status(400).json({ "error": error.message })
    }
}

export async function handleCreateFeed(req: Request, res: Response) {
    try {
        const user_id = (req as any).user.id

        const { content } = req.body
        const data = await createPost(Number(user_id), content)
        res.status(200).json({ data: data })
    } catch (error: any) {
        res.status(400).json({ "error": error.message })
    }
}