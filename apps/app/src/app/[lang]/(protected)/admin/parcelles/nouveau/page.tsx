'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function NouvelleParcellePage() {
  const [formData, setFormData] = useState({
    // Adresse
    localisation: 'Littoral',
    ville: 'Cotonou',
    arrondissement: 'Arr. 13 Fidjrosse',
    description: '',
    
    // Detail parcelle
    lot: '1786',
    parcelle: 'A',
    superficie: '520',
    superficieType: 'Rectangulaire',
    usage: 'Terrain Bâti',
    statutJuridique: 'Titre foncier',
    
    // Propriétaire
    nom: '',
    prenoms: '',
    npi: '',
    ifu: '',
    
    // Impôt estimé
    impotEstime: '65 480F'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTax = () => {
    // Calcul simple basé sur la superficie et l'usage
    const baseAmount = 50000;
    const superficie = parseInt(formData.superficie) || 520;
    const superficieFactor = superficie > 500 ? 1.2 : 1.0;
    const usageFactor = formData.usage === 'Terrain Bâti' ? 1.3 : 
                        formData.usage === 'Commerce' ? 2.0 :
                        formData.usage === 'Projet en cours' ? 1.1 :
                        formData.usage === 'Exploitation agricole' ? 0.8 : 1.0;
    
    const total = Math.round(baseAmount * superficieFactor * usageFactor);
    return `${total.toLocaleString('fr-FR')}F`;
  };

  const handleSubmit = () => {
    // Logique de soumission du formulaire
    console.log('Données du formulaire:', formData);
  };

  const handleCancel = () => {
    // Retour à la page précédente
    window.history.back();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Nouveau</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Colonne gauche */}
        <div className="space-y-6">
          {/* Adresse */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Adresse</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Localisation
                </label>
                <select 
                  value={formData.localisation}
                  onChange={(e) => handleInputChange('localisation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Littoral">Littoral</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Cocody">Cocody</option>
                </select>
              </div>

              <div>
                <select 
                  value={formData.ville}
                  onChange={(e) => handleInputChange('ville', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Cotonou">Cotonou</option>
                  <option value="Porto-Novo">Porto-Novo</option>
                </select>
              </div>

              <div>
                <select 
                  value={formData.arrondissement}
                  onChange={(e) => handleInputChange('arrondissement', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Arr. 13 Fidjrosse">Arr. 13 Fidjrosse</option>
                  <option value="Arr. 1 Centre">Arr. 1 Centre</option>
                  <option value="Arr. 2 Ganhi">Arr. 2 Ganhi</option>
                </select>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <MapPin className="w-4 h-4" />
                Maps
              </button>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Description..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>

          {/* Propriétaire */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Propriétaire</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => handleInputChange('nom', e.target.value)}
                    placeholder="Nom"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénoms
                  </label>
                  <input
                    type="text"
                    value={formData.prenoms}
                    onChange={(e) => handleInputChange('prenoms', e.target.value)}
                    placeholder="Prénoms"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    NPI
                  </label>
                  <input
                    type="text"
                    value={formData.npi}
                    onChange={(e) => handleInputChange('npi', e.target.value)}
                    placeholder="Ex. 8554985415"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    IFU
                  </label>
                  <input
                    type="text"
                    value={formData.ifu}
                    onChange={(e) => handleInputChange('ifu', e.target.value)}
                    placeholder="Ex. 45K186523L600041"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="space-y-6">
          {/* Detail parcelle */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Detail parcelle</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lot et parcelle
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={formData.lot}
                    onChange={(e) => handleInputChange('lot', e.target.value)}
                    placeholder="1786"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <select 
                    value={formData.parcelle}
                    onChange={(e) => handleInputChange('parcelle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Superficie (m²)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    value={formData.superficie}
                    onChange={(e) => handleInputChange('superficie', e.target.value)}
                    placeholder="520"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <select 
                    value={formData.superficieType}
                    onChange={(e) => handleInputChange('superficieType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="Rectangulaire">Rectangulaire</option>
                    <option value="Carré">Carré</option>
                    <option value="Irrégulier">Irrégulier</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Usage
                  </label>
                  <select 
                    value={formData.usage}
                    onChange={(e) => handleInputChange('usage', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="Terrain nu">Terrain nu</option>
                    <option value="Terrain Bâti">Terrain Bâti</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Projet en cours">Projet en cours</option>
                    <option value="Exploitation agricole">Exploitation agricole</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Statut juridique
                  </label>
                  <select 
                    value={formData.statutJuridique}
                    onChange={(e) => handleInputChange('statutJuridique', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="Titre foncier">Titre foncier</option>
                    <option value="Arrêté de concession">Arrêté de concession</option>
                    <option value="Permis d'habiter">Permis d'habiter</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Impôt estimé */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Impôt estimé :</h2>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
              <span className="text-2xl font-bold text-orange-600">
                {calculateTax()}
                <span className="text-sm font-normal text-gray-500 ml-1">/an</span>
              </span>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-4">
            <button 
              onClick={handleCancel}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button 
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
