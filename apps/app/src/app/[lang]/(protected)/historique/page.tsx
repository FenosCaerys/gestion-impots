"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/dashboard/PageHeader"
// PaymentsList supprimé - remplacé par une simple liste
import { BottomNav } from "@/components/ui/BottomNav"
import { PageLayout } from "@/components/ui/PageLayout"

export default function HistoriquePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"accueil" | "historique" | "simulateur" | "moi">("historique")

  const handleTabChange = (tab: "accueil" | "historique" | "simulateur" | "moi") => {
    const routes = {
      accueil: "/fr/accueil",
      historique: "/fr/historique",
      simulateur: "/fr/simulateur",
      moi: "/fr/moi",
    }
    router.push(routes[tab])
  }

  // Données d'exemple pour l'historique complet
  const allPayments = [
    {
      id: "1",
      title: "Impôt 2024",
      date: "15 Dec. 2024, 11.05",
      amount: 67523,
    },
    {
      id: "2",
      title: "Impôt 2024",
      date: "15 Dec. 2024, 11.05",
      amount: 67523,
    },
    {
      id: "3",
      title: "Impôt 2024",
      date: "15 Dec. 2024, 11.05",
      amount: 67523,
    },
    {
      id: "4",
      title: "Impôt 2024",
      date: "15 Dec. 2024, 11.05",
      amount: 67523,
    },
    {
      id: "5",
      title: "Impôt 2024",
      date: "15 Dec. 2024, 11.05",
      amount: 67523,
    },
    {
      id: "6",
      title: "Impôt 2024",
      date: "15 Dec. 2024, 11.05",
      amount: 67523,
    },
    {
      id: "7",
      title: "Impôt 2024",
      date: "15 Dec. 2024, 11.05",
      amount: 67523,
    },
    {
      id: "8",
      title: "Impôt 2024",
      date: "15 Dec. 2024, 11.05",
      amount: 67523,
    },
  ]

  const handleViewAllClick = () => {
    // Déjà sur la page historique, pas d'action nécessaire
    console.log("Déjà sur la page historique complète")
  }

  return (
    <PageLayout activeTab={activeTab}>
      {/* Layout responsive: mobile first, puis desktop */}
      <div className="mx-auto w-full max-w-md lg:mx-auto lg:max-w-6xl">
        {/* En-tête de page */}
        <PageHeader title="Historique" hasNotification={true} />

        {/* Contenu principal */}
        <div className="flex-1 lg:flex lg:gap-8 lg:p-8">
          {/* Colonne principale (mobile: full width, desktop: 2/3) */}
          <div className="flex-1 lg:w-2/3">
            {/* Liste complète des paiements - Mobile */}
            <div className="pb-4 pt-6 lg:pt-0">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-medium text-black">Historique des paiements</h3>
                <div className="space-y-4">
                  {allPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <div>
                        <p className="font-medium text-gray-900">{payment.title}</p>
                        <p className="text-sm text-gray-600">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{payment.amount.toLocaleString()} XOF</p>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Payé
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar droite (desktop uniquement) */}
          <div className="hidden lg:block lg:w-1/3">
            {/* Filtres et recherche */}
            <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium text-black">Filtres</h3>

              {/* Recherche */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">Rechercher</label>
                <input
                  type="text"
                  placeholder="Rechercher un paiement..."
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Filtre par année */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">Année</label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500">
                  <option value="">Toutes les années</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>

              {/* Filtre par montant */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Montant</label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500">
                  <option value="">Tous les montants</option>
                  <option value="0-50000">0 - 50 000 XOF</option>
                  <option value="50000-100000">50 000 - 100 000 XOF</option>
                  <option value="100000+">100 000+ XOF</option>
                </select>
              </div>
            </div>

            {/* Statistiques */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium text-black">Statistiques</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total des paiements</span>
                  <span className="font-semibold">{allPayments.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Montant total</span>
                  <span className="font-semibold">
                    {new Intl.NumberFormat("fr-FR").format(
                      allPayments.reduce((sum, payment) => sum + payment.amount, 0)
                    )}{" "}
                    XOF
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paiement moyen</span>
                  <span className="font-semibold">
                    {new Intl.NumberFormat("fr-FR").format(
                      allPayments.reduce((sum, payment) => sum + payment.amount, 0) / allPayments.length
                    )}{" "}
                    XOF
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dernier paiement</span>
                  <span className="font-semibold">15 Dec. 2024</span>
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
