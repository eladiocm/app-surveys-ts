/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type ReactNode, createContext, useState } from 'react'
import { registerRequest } from '../services/auth'

export const AuthContext = createContext({})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null)

  /*   const singup = async (user) => {
    const res = await registerRequest(user)
    setUser(res.data)
  } */
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
