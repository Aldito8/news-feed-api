import express from 'express'
import route from './routes/auth'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api', route)

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`)
})