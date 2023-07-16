import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const router = Router()

// ? http://localhost:5000/api/auth/login

router.post('/register', register)
router.post('/login', login)

export {router};