'use client';

import { Plus, Edit, Trash2 } from 'lucide-react';

export default function ProprietairesPage() {
  // Données selon l'image fournie
  const proprietaires = [
    {
      profil: '',
      nom: 'SOSSOUKPE K. Antoine',
      nationalite: 'Béninoise',
      naissance: '25 Oct. 1984',
      sexe: 'M',
      ifu: '0202442586162',
      profession: 'Comptable',
      parcelles: 3
    },
    {
      profil: '',
      nom: 'AKAKPO Alexis',
      nationalite: 'Béninoise',
      naissance: '25 Dec. 1988',
      sexe: 'M',
      ifu: '0302442541287',
      profession: 'Ingénieur BTP',
      parcelles: 1
    },
    {
      profil: '',
      nom: 'SOSSOUKPE K. Antoine',
      nationalite: 'Béninoise',
      naissance: '25 Oct. 1984',
      sexe: 'M',
      ifu: '0202442586162',
      profession: 'Comptable',
      parcelles: 3
    },
    {
      profil: '',
      nom: 'SOSSOUKPE K. Antoine',
      nationalite: 'Béninoise',
      naissance: '25 Oct. 1984',
      sexe: 'M',
      ifu: '0202442586162',
      profession: 'Comptable',
      parcelles: 3
    },
    {
      profil: '',
      nom: 'SOSSOUKPE K. Antoine',
      nationalite: 'Béninoise',
      naissance: '25 Oct. 1984',
      sexe: 'M',
      ifu: '0202442586162',
      profession: 'Comptable',
      parcelles: 3
    },
    {
      profil: '',
      nom: 'SOSSOUKPE K. Antoine',
      nationalite: 'Béninoise',
      naissance: '25 Oct. 1984',
      sexe: 'M',
      ifu: '0202442586162',
      profession: 'Comptable',
      parcelles: 3
    },
    {
      profil: '',
      nom: 'SOSSOUKPE K. Antoine',
      nationalite: 'Béninoise',
      naissance: '25 Oct. 1984',
      sexe: 'M',
      ifu: '0202442586162',
      profession: 'Comptable',
      parcelles: 3
    },
    {
      profil: '',
      nom: 'SOSSOUKPE K. Antoine',
      nationalite: 'Béninoise',
      naissance: '25 Oct. 1984',
      sexe: 'M',
      ifu: '0202442586162',
      profession: 'Comptable',
      parcelles: 3
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Propriétaires</h1>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nouveau
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Profil</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Nom & Prénoms</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Nationalité</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Naissance</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Sexe</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">IFU</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Profession</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Parcelle (s)</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {proprietaires.map((proprietaire, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{proprietaire.nom}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{proprietaire.nationalite}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{proprietaire.naissance}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{proprietaire.sexe}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{proprietaire.ifu}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{proprietaire.profession}</td>
                  <td className="py-3 px-4">
                    <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded border border-orange-300 flex items-center justify-center text-xs font-medium">
                      {proprietaire.parcelles}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
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
  );
}
