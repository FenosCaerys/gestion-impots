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
      const userId = localStorage.getItem("userId")
      const email = localStorage.getItem("userEmail")
      const name = localStorage.getItem("userName")
      const role = localStorage.getItem("userRole") || "user"
      
      if (userId && email) {
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
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json() as {
        success: boolean
        user?: {
          id: string
          email: string
          firstName: string
          lastName: string
          role: string
        }
        isAdmin: boolean
        error?: string
      }

      if (!response.ok) {
        return { success: false, error: data.error || "Erreur de connexion" }
      }

      if (data.success && data.user) {
        const isAdmin = data.isAdmin

        // Stocker les informations d'authentification
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("userId", data.user.id)
        localStorage.setItem("userEmail", data.user.email)
        localStorage.setItem("userRole", data.user.role)
        localStorage.setItem("userName", `${data.user.firstName} ${data.user.lastName}`)

        // Set cookie for middleware
        document.cookie = "isAuthenticated=true; path=/; max-age=86400" // 24h

        // Update user state
        setUser({
          id: data.user.id,
          email: data.user.email,
          name: `${data.user.firstName} ${data.user.lastName}`,
          role: data.user.role.toLowerCase()
        })

        setIsAuthenticated(true)
        return { success: true, isAdmin }
      } else {
        return { success: false, error: "Réponse invalide du serveur" }
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error)
      return { success: false, error: "Erreur de connexion au serveur" }
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
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          phoneNumber: userData.phone,
          password: userData.password,
        }),
      })

      const data = await response.json() as {
        success: boolean
        user?: {
          id: string
          email: string
          firstName: string
          lastName: string
          role: string
        }
        error?: string
      }

      if (!response.ok) {
        return { success: false, error: data.error || "Erreur lors de l'inscription" }
      }

      if (data.success && data.user) {
        // Stocker les informations d'authentification
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("userId", data.user.id)
        localStorage.setItem("userEmail", data.user.email)
        localStorage.setItem("userRole", data.user.role)
        localStorage.setItem("userName", `${data.user.firstName} ${data.user.lastName}`)

        // Set cookie for middleware
        document.cookie = "isAuthenticated=true; path=/; max-age=86400" // 24h

        // Update user state
        setUser({
          id: data.user.id,
          email: data.user.email,
          name: `${data.user.firstName} ${data.user.lastName}`,
          role: data.user.role.toLowerCase()
        })

        setIsAuthenticated(true)
        return { success: true }
      } else {
        return { success: false, error: "Réponse invalide du serveur" }
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error)
      return { success: false, error: "Erreur de connexion au serveur" }
    }
  }

  const logout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userId")
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
