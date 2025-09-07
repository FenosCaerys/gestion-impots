'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Filter, RotateCcw, X } from 'lucide-react';

export default function ParcellesPage() {
  const router = useRouter();
  const [selectedParcelle, setSelectedParcelle] = useState<any>(null);
  
  const handleNewParcelle = () => {
    router.push('/fr/admin/parcelles/nouveau');
  };

  const handleParcelleClick = (parcelle: any) => {
    setSelectedParcelle(parcelle);
  };

  const closeModal = () => {
    setSelectedParcelle(null);
  };

  // Données selon l'image fournie avec détails complets
  const parcelles = [
    {
      id: '00001',
      parcelle: 'C',
      lot: '1748',
      adresse: 'Zogbo, Cotonou',
      proprio: 'DOSSA Abel',
      superficie: '500 m²',
      usage: 'Bâti',
      statutJuri: 'Titres fonciers',
      impotExtime: '65 480F',
      // Détails supplémentaires pour la popup
      forme: 'rectangulaire',
      usageDetaille: 'Terrain bâti',
      latitude: '6.370123',
      longitude: '2.427891',
      image: '/api/placeholder/80/80'
    },
    {
      id: '00001',
      parcelle: 'D',
      lot: '1748',
      adresse: 'Zogbo, Cotonou',
      proprio: 'DOSSA Abel',
      superficie: '500 m²',
      usage: 'Bâti',
      statutJuri: 'Titres fonciers',
      impotExtime: '65 480F'
    },
    {
      id: '00001',
      parcelle: 'E',
      lot: '1748',
      adresse: 'Zogbo, Cotonou',
      proprio: 'DOSSA Abel',
      superficie: '500 m²',
      usage: 'Bâti',
      statutJuri: 'Titres fonciers',
      impotExtime: '65 480F'
    },
    {
      id: '00001',
      parcelle: 'C',
      lot: '1748',
      adresse: 'Zogbo, Cotonou',
      proprio: 'DOSSA Abel',
      superficie: '500 m²',
      usage: 'Bâti',
      statutJuri: 'Titres fonciers',
      impotExtime: '65 480F'
    },
    {
      id: '00001',
      parcelle: 'D',
      lot: '1748',
      adresse: 'Zogbo, Cotonou',
      proprio: 'DOSSA Abel',
      superficie: '500 m²',
      usage: 'Bâti',
      statutJuri: 'Titres fonciers',
      impotExtime: '65 480F'
    },
    {
      id: '00001',
      parcelle: 'F',
      lot: '1748',
      adresse: 'Zogbo, Cotonou',
      proprio: 'DOSSA Abel',
      superficie: '500 m²',
      usage: 'Bâti',
      statutJuri: 'Titres fonciers',
      impotExtime: '65 480F'
    },
    {
      id: '00001',
      parcelle: 'F',
      lot: '1748',
      adresse: 'Zogbo, Cotonou',
      proprio: 'DOSSA Abel',
      superficie: '500 m²',
      usage: 'Bâti',
      statutJuri: 'Titres fonciers',
      impotExtime: '65 480F'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Parcelles</h1>
        <button 
          onClick={handleNewParcelle}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Nouveau
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">Filtrer par</span>
        </div>
        
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
          <option>Cotonou</option>
        </select>
        
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
          <option>Zogbo</option>
        </select>
        
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
          <option>Parcelle Bâtie</option>
        </select>
        
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
          <option>Impôt</option>
        </select>

        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800">
          <RotateCcw className="w-4 h-4" />
          Restaurer
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">PARCELLE</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">LOT</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">ADRESSE</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">PROPRIO</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">SUPERF.</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">USAGE</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">STATUT JURI.</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">IMPOT EXTIME</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {parcelles.map((parcelle, index) => (
                <tr key={index} className="hover:bg-gray-50 cursor-pointer" onClick={() => handleParcelleClick(parcelle)}>
                  <td className="py-3 px-4 text-sm text-gray-900">{parcelle.id}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-600 text-white rounded text-xs flex items-center justify-center font-medium">
                        {parcelle.parcelle}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{parcelle.lot}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{parcelle.adresse}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{parcelle.proprio}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{parcelle.superficie}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{parcelle.usage}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{parcelle.statutJuri}</td>
                  <td className="py-3 px-4">
                    <span className="text-orange-600 font-medium text-sm">
                      {parcelle.impotExtime}
                      <span className="text-xs text-gray-500 ml-1">/an</span>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header avec image */}
            <div className="relative">
              <div className="h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-2xl flex items-center px-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
                  <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">{selectedParcelle.parcelle}</span>
                  </div>
                </div>
                <div className="text-white">
                  <h2 className="text-xl font-bold">Parcelle "{selectedParcelle.parcelle}" Lot {selectedParcelle.lot}</h2>
                  <p className="text-sm opacity-90">{selectedParcelle.adresse}</p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenu */}
            <div className="p-6 space-y-6">
              {/* Informations principales */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Superficie</p>
                  <p className="font-semibold text-gray-900">{selectedParcelle.superficie}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Forme</p>
                  <p className="font-semibold text-gray-900">rectangulaire</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Propriétaire</p>
                  <p className="font-semibold text-gray-900">{selectedParcelle.proprio}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Usage</p>
                  <p className="font-semibold text-gray-900">Terrain bâti</p>
                </div>
              </div>

              {/* Statut juridique */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Statut juridique</p>
                <p className="font-semibold text-gray-900">{selectedParcelle.statutJuri}</p>
              </div>

              {/* Séparateur */}
              <hr className="border-gray-200" />

              {/* Coordonnées */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Latitude</p>
                  <p className="font-semibold text-gray-900">6.370123</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Longitude</p>
                  <p className="font-semibold text-gray-900">2.427891</p>
                </div>
              </div>

              {/* Impôt estimé */}
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Impôt estimé :</p>
                <p className="text-2xl font-bold text-orange-600">
                  65 480F
                  <span className="text-sm font-normal text-gray-500 ml-1">/an</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
