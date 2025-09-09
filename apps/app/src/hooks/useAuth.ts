"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function useAuth() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<{ id: string; email: string; name: string; role: string } | null>(null)

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem("isAuthenticated") === "true"
    setIsAuthenticated(authStatus)
    
    if (authStatus) {
      // Get user info from localStorage
      const email = localStorage.getItem("userEmail")
      const name = localStorage.getItem("userName")
      const role = localStorage.getItem("userRole") || "user"
      
      if (email) {
        // Create a simple user ID based on email for demo purposes
        // In a real app, this would come from the server
        const userId = email === "admin@test.com" ? "admin-001" : "user-001"
        setUser({
          id: userId,
          email,
          name: name || "Utilisateur",
          role
        })
      }
    } else {
      setUser(null)
    }
    
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Simulation d'authentification - remplacer par vraie API
    if (
      (email === "user@test.com" && password === "user123") ||
      (email === "admin@test.com" && password === "admin123")
    ) {
      const isAdmin = email === "admin@test.com"

      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userEmail", email)
      localStorage.setItem("userRole", isAdmin ? "admin" : "user")

      const userName = isAdmin ? "Administrateur Système" : "Utilisateur"
      localStorage.setItem("userName", userName)

      // Set cookie for middleware
      document.cookie = "isAuthenticated=true; path=/; max-age=86400" // 24h

      // Update user state
      const userId = email === "admin@test.com" ? "admin-001" : "user-001"
      setUser({
        id: userId,
        email,
        name: userName,
        role: isAdmin ? "admin" : "user"
      })

      setIsAuthenticated(true)
      return { success: true, isAdmin }
    } else {
      return { success: false, error: "Email ou mot de passe incorrect" }
    }
  }

  const register = async (userData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
  }) => {
    try {
      // Simulation d'inscription - remplacer par vraie API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userEmail", userData.email)
      localStorage.setItem("userName", `${userData.firstName} ${userData.lastName}`)
      localStorage.setItem("userRole", "user")

      // Set cookie for middleware
      document.cookie = "isAuthenticated=true; path=/; max-age=86400" // 24h

      // Update user state
      setUser({
        id: "user-001", // Default user ID for new registrations
        email: userData.email,
        name: `${userData.firstName} ${userData.lastName}`,
        role: "user"
      })

      setIsAuthenticated(true)
      return { success: true }
    } catch (error) {
      return { success: false, error: "Une erreur est survenue lors de l'inscription" }
    }
  }

  const logout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    localStorage.removeItem("userRole")

    // Remove cookie
    document.cookie = "isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"

    setUser(null)
    setIsAuthenticated(false)
    router.push("/fr")
  }

  return {
    isAuthenticated,
    isLoading,
    user,
    login,
    register,
    logout,
  }
}
