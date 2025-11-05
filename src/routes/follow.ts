import express from "express"
import { handleFollow, handleUnfollow } from "../controllers/follow"
import { authenticate } from '../middleware/authenticated';

const route = express.Router()

route.post('/follow/:userid', authenticate, handleFollow)
route.delete('/follow/:userid', authenticate, handleUnfollow)
// route.get('/', handleGetFollower)
// route.get('/', handleGetFollowing)

export default route