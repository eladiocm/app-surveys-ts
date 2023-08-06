import axios from 'axios'
import { type User } from '../interfaces/user.interface'

const API = 'http://localhost:5000/api/auth'

const registerRequest = async (user: User): Promise<User> => await axios.post(`${API}/register`, user)

export { registerRequest }
