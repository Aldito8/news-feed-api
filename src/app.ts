import express from 'express'
import routeAuth from './routes/auth'
import routePost from './routes/post'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api', routeAuth)
app.use('/api', routePost)

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})