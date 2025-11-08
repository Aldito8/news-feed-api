import { Request, Response } from "express";
import { login, register } from "../services/auth";
import { authSchema } from "../utils/validation";

export async function handleLogin(req: Request, res: Response) {
    try {
        const { error } = authSchema.validate(req.body)
        if (error) throw { code: 422, message: error.message }
        const { username, password } = req.body
        const data = await login(username, password)
        res.cookie("token", data, {
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        })
        res.status(200).json({ "token": data })
    } catch (error: any) {
        res.status(error.code).json({
            code: error.code,
            error: error.message
        })
    }
}

export async function handleRegister(req: Request, res: Response) {
    try {
        const { error } = authSchema.validate(req.body)
        if (error) throw { code: 422, message: error.message }
        const { username, password } = req.body
        const data = await register(username, password)
        res.status(201).json(data)
    } catch (error: any) {
        res.status(error.code).json({
            code: error.code,
            error: error.message
        })
    }
}

export async function verif(req: Request, res: Response) {
    try {
        const user = (req as any).user
        res.status(200).json({ user })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}