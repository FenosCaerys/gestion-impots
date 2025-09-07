"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface SimulatorFormData {
  adresse: string
  superficie: string
  usage: string
  statutJuridique: string
}

interface SimulatorFormProps {
  onCalculate: (data: SimulatorFormData) => void
}

export function SimulatorForm({ onCalculate }: SimulatorFormProps) {
  const [formData, setFormData] = useState<SimulatorFormData>({
    adresse: "Littoral",
    superficie: "500 - 800 m2",
    usage: "Bâti",
    statutJuridique: "Titre foncier",
  })

  const adresseOptions = ["Littoral", "Plateau", "Cocody", "Yopougon", "Adjamé", "Treichville", "Marcory", "Port-Bouët"]

  const superficieOptions = [
    "0 - 200 m2",
    "200 - 500 m2",
    "500 - 800 m2",
    "800 - 1200 m2",
    "1200 - 2000 m2",
    "2000+ m2",
  ]

  const usageOptions = ["Bâti", "Non bâti", "Commercial", "Industriel", "Agricole"]

  const statutOptions = ["Titre foncier", "Arrêté de concession", "Certificat foncier", "Acte de vente"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCalculate(formData)
  }

  const handleChange = (field: keyof SimulatorFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="mx-4 rounded-xl bg-white p-6 shadow-sm lg:mx-0">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ Adresse */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Adresse</label>
          <div className="relative">
            <select
              value={formData.adresse}
              onChange={(e) => handleChange("adresse", e.target.value)}
              className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 pr-10 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            >
              {adresseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Champ Superficie */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Superficie</label>
          <div className="relative">
            <select
              value={formData.superficie}
              onChange={(e) => handleChange("superficie", e.target.value)}
              className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 pr-10 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            >
              {superficieOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Champ Usage */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Usage</label>
          <div className="relative">
            <select
              value={formData.usage}
              onChange={(e) => handleChange("usage", e.target.value)}
              className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 pr-10 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            >
              {usageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Champ Statut juridique */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Statut juridique</label>
          <div className="relative">
            <select
              value={formData.statutJuridique}
              onChange={(e) => handleChange("statutJuridique", e.target.value)}
              className="h-11 w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 pr-10 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            >
              {statutOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Bouton de calcul - Desktop uniquement */}
        <div className="hidden pt-4 lg:block">
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-4 py-3 font-medium text-white transition-colors hover:bg-orange-600"
          >
            Calculer l'impôt
          </button>
        </div>
      </form>
    </div>
  )
}
