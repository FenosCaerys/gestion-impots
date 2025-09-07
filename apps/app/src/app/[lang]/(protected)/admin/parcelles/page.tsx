"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Filter, RotateCcw, X } from "lucide-react"

export default function ParcellesPage() {
  const router = useRouter()
  const [selectedParcelle, setSelectedParcelle] = useState<any>(null)

  const handleNewParcelle = () => {
    router.push("/fr/admin/parcelles/nouveau")
  }

  const handleParcelleClick = (parcelle: any) => {
    setSelectedParcelle(parcelle)
  }

  const closeModal = () => {
    setSelectedParcelle(null)
  }

  // Données selon l'image fournie avec détails complets
  const parcelles = [
    {
      id: "00001",
      parcelle: "C",
      lot: "1748",
      adresse: "Zogbo, Cotonou",
      proprio: "DOSSA Abel",
      superficie: "500 m²",
      usage: "Bâti",
      statutJuri: "Titres fonciers",
      impotExtime: "65 480F",
      // Détails supplémentaires pour la popup
      forme: "rectangulaire",
      usageDetaille: "Terrain bâti",
      latitude: "6.370123",
      longitude: "2.427891",
      image: "/api/placeholder/80/80",
    },
    {
      id: "00001",
      parcelle: "D",
      lot: "1748",
      adresse: "Zogbo, Cotonou",
      proprio: "DOSSA Abel",
      superficie: "500 m²",
      usage: "Bâti",
      statutJuri: "Titres fonciers",
      impotExtime: "65 480F",
    },
    {
      id: "00001",
      parcelle: "E",
      lot: "1748",
      adresse: "Zogbo, Cotonou",
      proprio: "DOSSA Abel",
      superficie: "500 m²",
      usage: "Bâti",
      statutJuri: "Titres fonciers",
      impotExtime: "65 480F",
    },
    {
      id: "00001",
      parcelle: "C",
      lot: "1748",
      adresse: "Zogbo, Cotonou",
      proprio: "DOSSA Abel",
      superficie: "500 m²",
      usage: "Bâti",
      statutJuri: "Titres fonciers",
      impotExtime: "65 480F",
    },
    {
      id: "00001",
      parcelle: "D",
      lot: "1748",
      adresse: "Zogbo, Cotonou",
      proprio: "DOSSA Abel",
      superficie: "500 m²",
      usage: "Bâti",
      statutJuri: "Titres fonciers",
      impotExtime: "65 480F",
    },
    {
      id: "00001",
      parcelle: "F",
      lot: "1748",
      adresse: "Zogbo, Cotonou",
      proprio: "DOSSA Abel",
      superficie: "500 m²",
      usage: "Bâti",
      statutJuri: "Titres fonciers",
      impotExtime: "65 480F",
    },
    {
      id: "00001",
      parcelle: "F",
      lot: "1748",
      adresse: "Zogbo, Cotonou",
      proprio: "DOSSA Abel",
      superficie: "500 m²",
      usage: "Bâti",
      statutJuri: "Titres fonciers",
      impotExtime: "65 480F",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Parcelles</h1>
        <button
          onClick={handleNewParcelle}
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
        >
          <Plus className="h-4 w-4" />
          Nouveau
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-gray-700">Filtrer par</span>
        </div>

        <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm">
          <option>Cotonou</option>
        </select>

        <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm">
          <option>Zogbo</option>
        </select>

        <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm">
          <option>Parcelle Bâtie</option>
        </select>

        <select className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm">
          <option>Impôt</option>
        </select>

        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800">
          <RotateCcw className="h-4 w-4" />
          Restaurer
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">PARCELLE</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">LOT</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ADRESSE</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">PROPRIO</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">SUPERF.</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">USAGE</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">STATUT JURI.</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">IMPOT EXTIME</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {parcelles.map((parcelle, index) => (
                <tr
                  key={index}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleParcelleClick(parcelle)}
                >
                  <td className="px-4 py-3 text-sm text-gray-900">{parcelle.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-xs font-medium text-white">
                        {parcelle.parcelle}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{parcelle.lot}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{parcelle.adresse}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{parcelle.proprio}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{parcelle.superficie}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{parcelle.usage}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{parcelle.statutJuri}</td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-orange-600">
                      {parcelle.impotExtime}
                      <span className="ml-1 text-xs text-gray-500">/an</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de détails de parcelle */}
      {selectedParcelle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white">
            {/* Header avec image */}
            <div className="relative">
              <div className="flex h-20 items-center rounded-t-2xl bg-gradient-to-r from-green-400 to-blue-500 px-6">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-lg bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-green-100">
                    <span className="text-lg font-bold text-green-600">{selectedParcelle.parcelle}</span>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="text-xl font-bold">
                    Parcelle "{selectedParcelle.parcelle}" Lot {selectedParcelle.lot}
                  </h2>
                  <p className="text-sm opacity-90">{selectedParcelle.adresse}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Contenu */}
            <div className="space-y-6 p-6">
              {/* Informations principales */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Superficie</p>
                  <p className="font-semibold text-gray-900">{selectedParcelle.superficie}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Forme</p>
                  <p className="font-semibold text-gray-900">rectangulaire</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Propriétaire</p>
                  <p className="font-semibold text-gray-900">{selectedParcelle.proprio}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Usage</p>
                  <p className="font-semibold text-gray-900">Terrain bâti</p>
                </div>
              </div>

              {/* Statut juridique */}
              <div>
                <p className="mb-1 text-sm text-gray-600">Statut juridique</p>
                <p className="font-semibold text-gray-900">{selectedParcelle.statutJuri}</p>
              </div>

              {/* Séparateur */}
              <hr className="border-gray-200" />

              {/* Coordonnées */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Latitude</p>
                  <p className="font-semibold text-gray-900">6.370123</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Longitude</p>
                  <p className="font-semibold text-gray-900">2.427891</p>
                </div>
              </div>

              {/* Impôt estimé */}
              <div className="rounded-lg bg-orange-50 p-4 text-center">
                <p className="mb-2 text-sm text-gray-600">Impôt estimé :</p>
                <p className="text-2xl font-bold text-orange-600">
                  65 480F
                  <span className="ml-1 text-sm font-normal text-gray-500">/an</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
