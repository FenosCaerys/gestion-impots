'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SimulatorFormData {
  adresse: string;
  superficie: string;
  usage: string;
  statutJuridique: string;
}

interface SimulatorFormProps {
  onCalculate: (data: SimulatorFormData) => void;
}

export function SimulatorForm({ onCalculate }: SimulatorFormProps) {
  const [formData, setFormData] = useState<SimulatorFormData>({
    adresse: 'Littoral',
    superficie: '500 - 800 m2',
    usage: 'Bâti',
    statutJuridique: 'Titre foncier'
  });

  const adresseOptions = [
    'Littoral',
    'Plateau',
    'Cocody',
    'Yopougon',
    'Adjamé',
    'Treichville',
    'Marcory',
    'Port-Bouët'
  ];

  const superficieOptions = [
    '0 - 200 m2',
    '200 - 500 m2',
    '500 - 800 m2',
    '800 - 1200 m2',
    '1200 - 2000 m2',
    '2000+ m2'
  ];

  const usageOptions = [
    'Bâti',
    'Non bâti',
    'Commercial',
    'Industriel',
    'Agricole'
  ];

  const statutOptions = [
    'Titre foncier',
    'Arrêté de concession',
    'Certificat foncier',
    'Acte de vente'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  const handleChange = (field: keyof SimulatorFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mx-4 lg:mx-0">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Champ Adresse */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adresse
          </label>
          <div className="relative">
            <select
              value={formData.adresse}
              onChange={(e) => handleChange('adresse', e.target.value)}
              className="w-full h-11 px-3 pr-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none text-sm"
            >
              {adresseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Champ Superficie */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Superficie
          </label>
          <div className="relative">
            <select
              value={formData.superficie}
              onChange={(e) => handleChange('superficie', e.target.value)}
              className="w-full h-11 px-3 pr-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none text-sm"
            >
              {superficieOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Champ Usage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Usage
          </label>
          <div className="relative">
            <select
              value={formData.usage}
              onChange={(e) => handleChange('usage', e.target.value)}
              className="w-full h-11 px-3 pr-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none text-sm"
            >
              {usageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Champ Statut juridique */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Statut juridique
          </label>
          <div className="relative">
            <select
              value={formData.statutJuridique}
              onChange={(e) => handleChange('statutJuridique', e.target.value)}
              className="w-full h-11 px-3 pr-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none text-sm"
            >
              {statutOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Bouton de calcul - Desktop uniquement */}
        <div className="hidden lg:block pt-4">
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Calculer l'impôt
          </button>
        </div>
      </form>
    </div>
  );
}
