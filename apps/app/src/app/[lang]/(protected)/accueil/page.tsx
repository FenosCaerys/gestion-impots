"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { UserHeader } from "@/components/dashboard/UserHeader"
import { PaymentInfoCard } from "@/components/dashboard/PaymentInfoCard"
import { BottomNav } from "@/components/ui/BottomNav"
import { PageLayout } from "@/components/ui/PageLayout"
import { useAuth } from "@/hooks/useAuth"
import { useUserData } from "@/hooks/useUserData"

export default function AccueilPage() {
  const router = useRouter()
  const { user: authUser } = useAuth()
  const { user, loading, error } = useUserData(authUser?.id || null)
  const [activeTab, setActiveTab] = useState<"accueil" | "historique" | "simulateur" | "moi">("accueil")
  
  // Données par défaut si pas de données utilisateur
  const defaultTaxData = {
    amount: 68574,
    deadline: "15 Sep. 2025",
    isPaid: false,
    referenceNumber: "REF-2024-001234"
  }

  // Récupérer les vraies données de la première propriété de l'utilisateur
  const getCurrentTaxData = () => {
    if (!user || !user.properties || user.properties.length === 0) {
      return defaultTaxData
    }

    const property = user.properties[0]
    const latestTaxCalculation = property.taxCalculations?.[0]
    const latestPayment = latestTaxCalculation?.payments?.[0]

    return {
      amount: latestTaxCalculation?.finalAmount || defaultTaxData.amount,
      deadline: latestTaxCalculation ? `15 Sep. ${latestTaxCalculation.taxYear}` : defaultTaxData.deadline,
      isPaid: latestPayment?.status === 'COMPLETED' || false,
      referenceNumber: latestPayment?.paymentReference || defaultTaxData.referenceNumber
    }
  }

  const taxData = getCurrentTaxData()
  const currentProperty = user?.properties?.[0]

  const handleTabChange = (tab: "accueil" | "historique" | "simulateur" | "moi") => {
    const routes = {
      accueil: "/fr/accueil",
      historique: "/fr/historique",
      simulateur: "/fr/simulateur",
      moi: "/fr/moi",
    }
    router.push(routes[tab])
  }

  return (
    <PageLayout activeTab={activeTab}>
      {/* Layout responsive: mobile first, puis desktop */}
      <div className="mx-auto w-full max-w-md lg:mx-auto lg:max-w-6xl">
        {/* En-tête utilisateur */}
        <UserHeader 
          username={user ? `${user.firstName} ${user.lastName}` : "Utilisateur"} 
          hasNotification={true} 
        />

        {/* Contenu principal */}
        <div className="flex-1 lg:flex lg:gap-8 lg:p-8">
          {/* Colonne principale (mobile: full width, desktop: 2/3) */}
          <div className="flex-1 lg:w-2/3">
            {/* Carte d'informations de paiement */}
            <div className="pb-4 pt-6">
              <PaymentInfoCard
                amount={taxData.amount}
                deadline={taxData.deadline}
                isPaid={taxData.isPaid}
                referenceNumber={taxData.referenceNumber}
              />
            </div>
          </div>

          {/* Sidebar droite (desktop uniquement) */}
          <div className="hidden lg:block lg:w-1/3">
            {/* Informations de la parcelle */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium text-black">Ma parcelle</h3>
              {loading ? (
                <div className="space-y-4">
                  <div className="animate-pulse h-4 bg-gray-200 rounded"></div>
                  <div className="animate-pulse h-4 bg-gray-200 rounded"></div>
                  <div className="animate-pulse h-4 bg-gray-200 rounded"></div>
                </div>
              ) : currentProperty ? (
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Adresse</span>
                    <span className="font-medium">{currentProperty.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Superficie</span>
                    <span className="font-medium">{currentProperty.area} m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Usage</span>
                    <span className="font-medium">{currentProperty.usage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Statut</span>
                    <span className="font-medium">{currentProperty.legalStatus}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-500">Aucune parcelle enregistrée</p>
                  <button 
                    onClick={() => router.push("/fr/moi")}
                    className="mt-2 text-orange-500 hover:text-orange-600 text-sm"
                  >
                    Ajouter une parcelle
                  </button>
                </div>
              )}
            </div>

            {/* Aide rapide */}
            <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium text-black">Aide rapide</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => router.push("/fr/simulateur")}
                  className="w-full rounded-lg bg-gray-50 p-3 text-left transition-colors hover:bg-gray-100"
                >
                  <span className="text-sm font-medium">Simuler un autre impôt</span>
                </button>
                <button className="w-full rounded-lg bg-gray-50 p-3 text-left transition-colors hover:bg-gray-100">
                  <span className="text-sm font-medium">Contacter le service fiscal</span>
                </button>
                <button className="w-full rounded-lg bg-gray-50 p-3 text-left transition-colors hover:bg-gray-100">
                  <span className="text-sm font-medium">Centre d'aide</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Mobile uniquement */}
        <div className="lg:hidden">
          <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      </div>

    </PageLayout>
  )
}
