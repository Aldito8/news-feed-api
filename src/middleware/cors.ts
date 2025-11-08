import cors from "cors"

export const corsOrigin = cors({
    origin: process.env.ORIGIN,
    credentials: true
})