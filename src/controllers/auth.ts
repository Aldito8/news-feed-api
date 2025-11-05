import { Request, Response } from "express";
import { login, register } from "../services/auth";

export async function handleLogin(req: Request, res: Response) {
    try {
        const { username, password } = req.body
        const data = await login(username, password)
        res.status(200).json({ "token": data })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

export async function handleRegister(req: Request, res: Response) {
    try {
        const { username, password } = req.body
        const data = await register(username, password)
        res.status(201).json(data)
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}