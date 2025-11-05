import express from "express"
import { handleLogin, handleRegister } from "../controllers/auth"

const route = express.Router()

route.post('/login', handleLogin)
route.post('/register', handleRegister)

export default route