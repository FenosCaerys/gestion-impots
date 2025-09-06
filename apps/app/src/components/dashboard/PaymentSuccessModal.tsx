'use client';

import { X, Check } from 'lucide-react';

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  paymentId: string;
  currency?: string;
}

export function PaymentSuccessModal({ 
  isOpen, 
  onClose, 
  amount, 
  paymentId,
  currency = 'XOF' 
}: PaymentSuccessModalProps) {
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getCurrentDate = () => {
    const now = new Date();
    return {
      date: now.toLocaleDateString('fr-FR', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      }),
      time: now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
  };

  const { date, time } = getCurrentDate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
        
        {/* Header */}
        <div className="bg-black px-6 py-4 flex items-center justify-between">
          <h2 className="text-white font-bold text-lg">Payement</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenu */}
        <div className="p-6 text-center">
          
          {/* Icône de confirmation */}
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>

          {/* Message de confirmation */}
          <div className="mb-8">
            <h3 className="text-black font-bold text-lg mb-2">
              Payement effectué
            </h3>
            <p className="text-gray-600 text-sm">
              Vous avez payé avec succès votre impôt de l'année 2024.
            </p>
          </div>

          {/* Méthode de paiement */}
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">MTN</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-black">MTN Momo</p>
                <p className="text-gray-500 text-xs">ID: {paymentId}</p>
              </div>
            </div>
          </div>

          {/* Détails du paiement */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="text-left">
              <p className="text-gray-600">Mode</p>
              <p className="text-black font-medium">Mobile</p>
            </div>
            <div className="text-left">
              <p className="text-gray-600">Source des fonds</p>
              <p className="text-black font-medium">MTN Momo</p>
            </div>
            <div className="text-left">
              <p className="text-gray-600">Date</p>
              <p className="text-black font-medium">{date}</p>
            </div>
            <div className="text-left">
              <p className="text-gray-600">Heure</p>
              <p className="text-black font-medium">{time}</p>
            </div>
          </div>

          {/* Montant total */}
          <div className="bg-orange-500 rounded-lg p-4 mb-6">
            <div className="text-center">
              <p className="text-white text-sm mb-1">Total</p>
              <p className="text-white font-bold text-xl">
                {formatAmount(amount)} {currency}
              </p>
            </div>
          </div>

          {/* Bouton retour */}
          <button
            onClick={onClose}
            className="w-full bg-black text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
