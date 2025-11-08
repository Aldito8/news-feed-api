import { prisma } from "../prisma/client"
import bcrypt from "bcrypt"
import { signToken } from "../utils/jwt"

export const login = async (username: string, password: string) => {
    const user = await prisma.users.findUnique({
        where: { username }
    })

    if (!user) throw { code: 400, message: "username or password is wrong" }
    const isMatch = await bcrypt.compare(password, user.password_hash)
    if (!isMatch) throw { code: 400, message: "username or password is wrong" }
    const token = signToken({ id: user.id, username: user.username })

    return token
}

export const register = async (username: string, password: string) => {

    const isMatch = await prisma.users.findUnique({
        where: { username }
    })

    if (isMatch) throw { code: 409, message: "username already exist" }
    const password_hash = await bcrypt.hash(password, 10)
    const user = await prisma.users.create({
        data: {
            username,
            password_hash
        }
    })

    return { id: user.id, username: user.username }
}