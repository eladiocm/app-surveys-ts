import { type ReactNode, createContext, useState, useContext } from 'react'
import { loginRequest } from '../services/auth'
import { type Auth } from '../interfaces/auth.interface'

interface UserData {
  user: Auth | null
  singIn: (user: Auth) => any
  isAuthenticated: boolean
  errors: string | null
}

export const AuthContext = createContext<UserData>({
  user: null,
  isAuthenticated: false,
  singIn: async () => {},
  errors: null
})

interface AuthProviderProps {
  children: ReactNode
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState(null)

  const singIn = async (user: Auth) => {
    const res = await loginRequest(user)
    console.log(res)
    if (res.data.token) {
      setUser(res.data.user)
      localStorage.setItem('token', res.data.token)
      setIsAuthenticated(true)
      setErrors(null)
    } else {
      setErrors(res.data)
    }
  }
  return (
    <AuthContext.Provider value={{ user, singIn, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  )
}
