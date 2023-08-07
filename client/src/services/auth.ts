import axios from 'axios'
import { type User } from '../interfaces/user.interface'
import { type Auth } from '../interfaces/auth.interface'

const API = 'http://localhost:5000/api/auth'

const registerRequest = async (user: User) => await axios.post(`${API}/register`, user)

const loginRequest = async (user: Auth) => await axios.post(`${API}/login`, user)

export { registerRequest, loginRequest }
