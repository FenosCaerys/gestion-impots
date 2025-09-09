import { useState, useEffect } from "react"
import { District, PropertyType, PropertyUsage, LegalStatus, PaymentStatus, PaymentMethod } from "@prisma/client"

interface Payment {
  id: string
  amount: number
  status: PaymentStatus
  paymentReference: string
  paymentMethod: PaymentMethod
  paidAt?: Date | null
  taxYear: number
  createdAt: Date
}

interface TaxCalculation {
  id: string
  taxYear: number
  baseAmount: number
  districtMultiplier: number
  areaMultiplier: number
  usageMultiplier: number
  statusMultiplier: number
  calculatedAmount: number
  finalAmount: number
  isEstimate: boolean
  payments?: Payment[]
  createdAt: Date
}

interface Property {
  id: string
  title: string
  address: string
  district: District
  area: number
  propertyType: PropertyType
  usage: PropertyUsage
  legalStatus: LegalStatus
  description?: string | null
  estimatedValue?: number | null
  purchasePrice?: number | null
  purchaseDate?: Date | null
  isActive: boolean
  taxCalculations?: TaxCalculation[]
  payments?: Payment[]
  createdAt: Date
  updatedAt: Date
}

interface User {
  id: string
  email?: string | null
  firstName?: string | null
  lastName?: string | null
  phoneNumber?: string | null
  npi?: string | null
  profileCompletionStep?: number | null
  properties: Property[]
}

export function useUserData(userId: string | null) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }

    const fetchUserData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/users/${userId}`)
        
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données utilisateur")
        }

        const userData = await response.json() as User
        setUser(userData)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue")
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [userId])

  const refreshUserData = async () => {
    if (!userId) return

    try {
      setLoading(true)
      const response = await fetch(`/api/users/${userId}`)
      
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données utilisateur")
      }

      const userData = await response.json() as User
      setUser(userData)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue")
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    loading,
    error,
    refreshUserData,
  }
}
