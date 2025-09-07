"use client"

import { Plus, Edit, Trash2 } from "lucide-react"

export default function ProprietairesPage() {
  // Données selon l'image fournie
  const proprietaires = [
    {
      profil: "",
      nom: "SOSSOUKPE K. Antoine",
      nationalite: "Béninoise",
      naissance: "25 Oct. 1984",
      sexe: "M",
      ifu: "0202442586162",
      profession: "Comptable",
      parcelles: 3,
    },
    {
      profil: "",
      nom: "AKAKPO Alexis",
      nationalite: "Béninoise",
      naissance: "25 Dec. 1988",
      sexe: "M",
      ifu: "0302442541287",
      profession: "Ingénieur BTP",
      parcelles: 1,
    },
    {
      profil: "",
      nom: "SOSSOUKPE K. Antoine",
      nationalite: "Béninoise",
      naissance: "25 Oct. 1984",
      sexe: "M",
      ifu: "0202442586162",
      profession: "Comptable",
      parcelles: 3,
    },
    {
      profil: "",
      nom: "SOSSOUKPE K. Antoine",
      nationalite: "Béninoise",
      naissance: "25 Oct. 1984",
      sexe: "M",
      ifu: "0202442586162",
      profession: "Comptable",
      parcelles: 3,
    },
    {
      profil: "",
      nom: "SOSSOUKPE K. Antoine",
      nationalite: "Béninoise",
      naissance: "25 Oct. 1984",
      sexe: "M",
      ifu: "0202442586162",
      profession: "Comptable",
      parcelles: 3,
    },
    {
      profil: "",
      nom: "SOSSOUKPE K. Antoine",
      nationalite: "Béninoise",
      naissance: "25 Oct. 1984",
      sexe: "M",
      ifu: "0202442586162",
      profession: "Comptable",
      parcelles: 3,
    },
    {
      profil: "",
      nom: "SOSSOUKPE K. Antoine",
      nationalite: "Béninoise",
      naissance: "25 Oct. 1984",
      sexe: "M",
      ifu: "0202442586162",
      profession: "Comptable",
      parcelles: 3,
    },
    {
      profil: "",
      nom: "SOSSOUKPE K. Antoine",
      nationalite: "Béninoise",
      naissance: "25 Oct. 1984",
      sexe: "M",
      ifu: "0202442586162",
      profession: "Comptable",
      parcelles: 3,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Propriétaires</h1>
        <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800">
          <Plus className="h-4 w-4" />
          Nouveau
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Profil</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Nom & Prénoms</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Nationalité</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Naissance</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Sexe</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">IFU</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Profession</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Parcelle (s)</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {proprietaires.map((proprietaire, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                      <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{proprietaire.nom}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{proprietaire.nationalite}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{proprietaire.naissance}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{proprietaire.sexe}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{proprietaire.ifu}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{proprietaire.profession}</td>
                  <td className="px-4 py-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded border border-orange-300 bg-orange-100 text-xs font-medium text-orange-600">
                      {proprietaire.parcelles}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button className="rounded p-1 transition-colors hover:bg-gray-100">
                        <Edit className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="rounded p-1 transition-colors hover:bg-gray-100">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
