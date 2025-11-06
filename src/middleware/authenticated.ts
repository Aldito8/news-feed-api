import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.cookies.token

        if (!token) throw Error("Unauthorized: Authentication failed(invalid token).")

        const decode = verifyToken(token);
        (req as any).user = decode

        next()

    } catch (error: any) {
        res.status(400).json({ error: error.message })
    };
};
