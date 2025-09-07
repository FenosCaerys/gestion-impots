"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/dashboard/PageHeader"
import { SimulatorForm } from "@/components/dashboard/SimulatorForm"
import { ResultCard } from "@/components/dashboard/ResultCard"
import { BottomNav } from "@/components/ui/BottomNav"
import { PageLayout } from "@/components/ui/PageLayout"

interface SimulatorFormData {
  adresse: string
  superficie: string
  usage: string
  statutJuridique: string
}

export default function SimulateurPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"accueil" | "historique" | "simulateur" | "moi">("simulateur")

  const handleTabChange = (tab: "accueil" | "historique" | "simulateur" | "moi") => {
    const routes = {
      accueil: "/fr/accueil",
      historique: "/fr/historique",
      simulateur: "/fr/simulateur",
      moi: "/fr/moi",
    }
    router.push(routes[tab])
  }
  const [calculatedAmount, setCalculatedAmount] = useState<number>(65480)
  const [showResult, setShowResult] = useState<boolean>(true)

  // Fonction de calcul d'impôt basée sur les critères
  const calculateTax = (data: SimulatorFormData): number => {
    let baseAmount = 50000 // Montant de base

    // Facteur adresse
    const adresseMultiplier: { [key: string]: number } = {
      Littoral: 1.5,
      Plateau: 1.4,
      Cocody: 1.3,
      Yopougon: 1.0,
      Adjamé: 0.9,
      Treichville: 1.1,
      Marcory: 1.2,
      "Port-Bouët": 0.8,
    }

    // Facteur superficie
    const superficieMultiplier: { [key: string]: number } = {
      "0 - 200 m2": 0.5,
      "200 - 500 m2": 0.8,
      "500 - 800 m2": 1.2,
      "800 - 1200 m2": 1.5,
      "1200 - 2000 m2": 2.0,
      "2000+ m2": 3.0,
    }

    // Facteur usage
    const usageMultiplier: { [key: string]: number } = {
      Bâti: 1.3,
      "Non bâti": 0.7,
      Commercial: 2.0,
      Industriel: 1.8,
      Agricole: 0.5,
    }

    // Facteur statut juridique
    const statutMultiplier: { [key: string]: number } = {
      "Titre foncier": 1.2,
      "Arrêté de concession": 1.0,
      "Certificat foncier": 0.9,
      "Acte de vente": 1.1,
    }

    const finalAmount =
      baseAmount *
      (adresseMultiplier[data.adresse] || 1) *
      (superficieMultiplier[data.superficie] || 1) *
      (usageMultiplier[data.usage] || 1) *
      (statutMultiplier[data.statutJuridique] || 1)

    return Math.round(finalAmount)
  }

  const handleCalculate = (data: SimulatorFormData) => {
    const result = calculateTax(data)
    setCalculatedAmount(result)
    setShowResult(true)
  }

  // Calcul automatique au chargement et lors des changements
  useEffect(() => {
    const initialData: SimulatorFormData = {
      adresse: "Littoral",
      superficie: "500 - 800 m2",
      usage: "Bâti",
      statutJuridique: "Titre foncier",
    }
    const result = calculateTax(initialData)
    setCalculatedAmount(result)
  }, [])

  return (
    <PageLayout activeTab={activeTab}>
      {/* Layout responsive: mobile first, puis desktop */}
      <div className="mx-auto w-full max-w-md lg:mx-auto lg:max-w-6xl">
        {/* En-tête de page */}
        <PageHeader title="Simulateur" hasNotification={true} />

        {/* Contenu principal */}
        <div className="flex-1 lg:flex lg:gap-8 lg:p-8">
          {/* Colonne principale (mobile: full width, desktop: 1/2) */}
          <div className="flex-1 lg:w-1/2">
            {/* Formulaire de simulation */}
            <div className="pb-4 pt-6 lg:pt-0">
              <SimulatorForm onCalculate={handleCalculate} />
            </div>

            {/* Résultat - Mobile */}
            <div className="lg:hidden">
              <ResultCard amount={calculatedAmount} isVisible={showResult} />
            </div>
          </div>

          {/* Colonne droite - Desktop uniquement */}
          <div className="hidden lg:block lg:w-1/2">
            {/* Résultat - Desktop */}
            <div className="sticky top-8">
              <ResultCard amount={calculatedAmount} isVisible={showResult} />

              {/* Informations complémentaires */}
              <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-medium text-black">Comment est calculé votre impôt ?</h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <div>
                      <p className="font-medium text-gray-900">Localisation</p>
                      <p className="text-gray-600">Le quartier influence le taux d'imposition</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <div>
                      <p className="font-medium text-gray-900">Superficie</p>
                      <p className="text-gray-600">Plus la surface est grande, plus l'impôt augmente</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <div>
                      <p className="font-medium text-gray-900">Usage du terrain</p>
                      <p className="text-gray-600">Commercial et industriel sont plus taxés</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <div>
                      <p className="font-medium text-gray-900">Statut juridique</p>
                      <p className="text-gray-600">Le type de titre affecte le calcul</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-yellow-50 p-4">
                  <p className="text-sm text-yellow-800">
                    ⚠️ <strong>Important :</strong> Cette simulation est indicative. Pour un calcul officiel, consultez
                    les services fiscaux.
                  </p>
                </div>
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
