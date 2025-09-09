import { useState, useEffect } from "react"

interface TaxCalculationData {
  propertyId: string
  address: string
  district: string
  area: number
  usage: string
  legalStatus: string
}

interface TaxCalculationResult {
  amount: number
  deadline: string
  isPaid: boolean
  referenceNumber: string
  year: number
}

export function useTaxCalculation() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateTax = (data: TaxCalculationData): number => {
    let baseAmount = 50000 // Montant de base

    // Facteur adresse/district
    const districtMultiplier: { [key: string]: number } = {
      PLATEAU: 1.4,
      COCODY: 1.3,
      YOPOUGON: 1.0,
      ADJAME: 0.9,
      TREICHVILLE: 1.1,
      MARCORY: 1.2,
      PORT_BOUET: 0.8,
      ABOBO: 0.8,
      KOUMASSI: 0.9,
      ATTÉCOUBÉ: 0.9,
    }

    // Facteur superficie
    const getAreaMultiplier = (area: number): number => {
      if (area <= 200) return 0.5
      if (area <= 500) return 0.8
      if (area <= 800) return 1.2
      if (area <= 1200) return 1.5
      if (area <= 2000) return 2.0
      return 3.0
    }

    // Facteur usage
    const usageMultiplier: { [key: string]: number } = {
      BATI: 1.3,
      COMMERCIAL: 2.0,
      INDUSTRIEL: 1.8,
      AGRICOLE: 0.5,
      TERRAIN_NU: 0.7,
    }

    // Facteur statut juridique
    const legalStatusMultiplier: { [key: string]: number } = {
      TITRE_FONCIER: 1.2,
      ARRETE_CONCESSION: 1.0,
      CERTIFICAT_PROPRIETE: 0.9,
      ACTE_VENTE: 1.1,
      CERTIFICAT_FONCIER: 0.9,
    }

    const finalAmount =
      baseAmount *
      (districtMultiplier[data.district] || 1) *
      getAreaMultiplier(data.area) *
      (usageMultiplier[data.usage] || 1) *
      (legalStatusMultiplier[data.legalStatus] || 1)

    return Math.round(finalAmount)
  }

  const createTaxCalculation = async (
    propertyId: string,
    calculatedAmount: number,
    year: number = new Date().getFullYear()
  ) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/tax-calculations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyId,
          year,
          totalAmount: calculatedAmount,
          dueDate: new Date(year, 8, 15), // 15 septembre
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la création du calcul d'impôt")
      }

      const taxCalculation = await response.json()
      return taxCalculation
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const getTaxCalculations = async (propertyId?: string, userId?: string) => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams()
      if (propertyId) params.append("propertyId", propertyId)
      if (userId) params.append("userId", userId)

      const response = await fetch(`/api/tax-calculations?${params}`)

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des calculs d'impôts")
      }

      const taxCalculations = await response.json()
      return taxCalculations
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue")
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    calculateTax,
    createTaxCalculation,
    getTaxCalculations,
    loading,
    error,
  }
}
