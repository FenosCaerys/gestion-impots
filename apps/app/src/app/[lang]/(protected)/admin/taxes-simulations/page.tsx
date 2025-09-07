'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function TaxesSimulationsPage() {
  const [formData, setFormData] = useState({
    adresse: 'Littoral',
    superficie: '500 - 800 m2',
    usage: 'Bâti',
    statut: 'Titre foncier'
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Calcul de l'impôt basé sur les sélections
  const calculateTax = () => {
    let baseAmount = 50000; // Montant de base
    
    // Multiplicateurs par adresse
    const adresseMultipliers: { [key: string]: number } = {
      'Littoral': 1.5,
      'Plateau': 1.4,
      'Cocody': 1.3,
      'Marcory': 1.2,
      'Yopougon': 1.1
    };
    
    // Multiplicateurs par superficie
    const superficieMultipliers: { [key: string]: number } = {
      '500 - 800 m2': 1.2,
      '800 - 1200 m2': 1.4,
      '1200+ m2': 1.6
    };
    
    // Multiplicateurs par usage
    const usageMultipliers: { [key: string]: number } = {
      'Bâti': 1.3,
      'Commercial': 2.0,
      'Résidentiel': 1.0,
      'Industriel': 1.8
    };
    
    // Multiplicateurs par statut
    const statutMultipliers: { [key: string]: number } = {
      'Titre foncier': 1.2,
      'Arrêté de concession': 1.0,
      'Permis d\'habiter': 0.8
    };
    
    const total = baseAmount * 
      (adresseMultipliers[formData.adresse] || 1) *
      (superficieMultipliers[formData.superficie] || 1) *
      (usageMultipliers[formData.usage] || 1) *
      (statutMultipliers[formData.statut] || 1);
    
    return Math.round(total);
  };

  const taxCards = [
    {
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Section Taxes */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Taxes</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {taxCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Simulateur */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Simulateur</h1>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="space-y-6">
            {/* Adresse */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse
              </label>
              <div className="relative">
                <select
                  value={formData.adresse}
                  onChange={(e) => handleChange('adresse', e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Littoral">Littoral</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Cocody">Cocody</option>
                  <option value="Marcory">Marcory</option>
                  <option value="Yopougon">Yopougon</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Superficie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Superficie
              </label>
              <div className="relative">
                <select
                  value={formData.superficie}
                  onChange={(e) => handleChange('superficie', e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="500 - 800 m2">500 - 800 m2</option>
                  <option value="800 - 1200 m2">800 - 1200 m2</option>
                  <option value="1200+ m2">1200+ m2</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Usage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usage
              </label>
              <div className="relative">
                <select
                  value={formData.usage}
                  onChange={(e) => handleChange('usage', e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Bâti">Bâti</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Résidentiel">Résidentiel</option>
                  <option value="Industriel">Industriel</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Statut juridique */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Statut juridique
              </label>
              <div className="relative">
                <select
                  value={formData.statut}
                  onChange={(e) => handleChange('statut', e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Titre foncier">Titre foncier</option>
                  <option value="Arrêté de concession">Arrêté de concession</option>
                  <option value="Permis d'habiter">Permis d'habiter</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Résultat */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900">Impôt estimé :</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-orange-500">
                    {calculateTax().toLocaleString()} XOF
                  </span>
                  <p className="text-sm text-gray-500">/an</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
