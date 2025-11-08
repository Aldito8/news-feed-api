import express from "express"
import { handleCreateFeed, handleGetFeed } from "../controllers/post"
import { authenticate } from "../middleware/authenticated"

const route = express.Router()

route.get('/feed', authenticate, handleGetFeed)
route.post('/posts', authenticate, handleCreateFeed)

export default route