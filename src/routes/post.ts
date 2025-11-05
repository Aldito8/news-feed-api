import express from "express"
import { handleCreateFeed, handleGetFeed } from "../controllers/post"

const route = express.Router()

route.get('/feed', handleGetFeed)
route.post('/posts', handleCreateFeed)

export default route