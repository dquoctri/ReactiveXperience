import { useState, useEffect } from "react"

interface User {
  id: number
  email: string
}

interface AuthData {
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
}

export const useAuthentication = (): AuthData => {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, password: string) => {
    // Perform login logic here (e.g., API request)
    // If successful, set the authenticated user
    const authenticatedUser: User = {
      id: 1,
      email: email,
    }
    setUser(authenticatedUser)
  }

  const logout = () => {
    // Perform logout logic here (e.g., clearing session)
    // Set the user to null to indicate no authenticated user
    setUser(null)
  }

  return {
    user,
    login,
    logout,
  }
}
