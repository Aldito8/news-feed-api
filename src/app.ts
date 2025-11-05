import express from 'express'
import cookieParser from "cookie-parser"
import routeAuth from './routes/auth'
import routePost from './routes/post'
import routeFollow from './routes/follow'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cookieParser());

app.use('/api', routeAuth)
app.use('/api', routePost)
app.use('/api', routeFollow)

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})