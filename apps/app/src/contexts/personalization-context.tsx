import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type PersonalizationContextType = {
  isPersonalized: boolean
  setIsPersonalized: (value: boolean) => void
  openPersonalizationModal: () => void
  showBanner: boolean
}

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined)

export function PersonalizationProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [isPersonalized, setIsPersonalized] = useState<boolean>(false)

  // Calculer si la bannière doit être affichée
  const showBanner = !isPersonalized

  // Vérifier si l'utilisateur a déjà personnalisé son expérience
  useEffect(() => {
    // Ici, vous pourriez vérifier dans le localStorage ou faire une requête API
    // pour déterminer si l'utilisateur a déjà personnalisé son expérience
    const checkPersonalization = async () => {
      try {
        // Pour l'instant, on utilise le localStorage comme exemple
        const personalized = localStorage.getItem("userPersonalized") === "true"
        setIsPersonalized(personalized)
      } catch (error) {
        console.error("Erreur lors de la vérification de la personnalisation:", error)
      }
    }

    if (typeof window !== "undefined") {
      checkPersonalization()
    }
  }, [])

  // Fonction pour ouvrir la modale de personnalisation
  const openPersonalizationModal = () => {
    router.push("/fr/dashboard/profil?openPersonalization=true")
  }

  return (
    <PersonalizationContext.Provider
      value={{ isPersonalized, setIsPersonalized, openPersonalizationModal, showBanner }}
    >
      {children}
    </PersonalizationContext.Provider>
  )
}

export function usePersonalization() {
  const context = useContext(PersonalizationContext)
  if (context === undefined) {
    throw new Error("usePersonalization must be used within a PersonalizationProvider")
  }
  return context
}
