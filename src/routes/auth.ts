import express from "express"
import { handleLogin, handleRegister, verif } from "../controllers/auth"
import { authenticate } from "../middleware/authenticated"

const route = express.Router()

route.post('/login', handleLogin)
route.post('/register', handleRegister)
route.get('/me', authenticate, verif)

export default route