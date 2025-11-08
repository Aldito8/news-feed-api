import express from 'express'
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import routeAuth from './routes/auth'
import routePost from './routes/post'
import routeFollow from './routes/follow'
import { corsOrigin } from './middleware/cors'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(corsOrigin)
app.use(express.json())
app.use(cookieParser());

app.use('/api', routeAuth)
app.use('/api', routePost)
app.use('/api', routeFollow)

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})