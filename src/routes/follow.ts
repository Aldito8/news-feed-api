import express from "express"
import { handleFollow, handleGetFollowee, handleGetFollower, handleUnfollow } from "../controllers/follow"
import { authenticate } from '../middleware/authenticated';

const route = express.Router()

route.post('/follow/:userid', authenticate, handleFollow)
route.delete('/follow/:userid', authenticate, handleUnfollow)
route.get('/follower', authenticate, handleGetFollower)
route.get('/followee', authenticate, handleGetFollowee)

export default route