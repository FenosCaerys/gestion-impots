'use client';

import { FileText } from 'lucide-react';

interface RecentPaymentItemProps {
  title: string;
  date: string;
  amount: number;
  currency?: string;
}

export function RecentPaymentItem({ 
  title, 
  date, 
  amount, 
  currency = 'XOF' 
}: RecentPaymentItemProps) {
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
      {/* Partie gauche : icône + infos */}
      <div className="flex items-center gap-3">
        {/* Icône document dans un cercle */}
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <FileText className="w-5 h-5 text-gray-400" />
        </div>
        
        {/* Titre et date */}
        <div>
          <p className="text-black font-medium text-sm">
            {title}
          </p>
          <p className="text-gray-500 text-xs">
            {date}
          </p>
        </div>
      </div>

      {/* Partie droite : montant */}
      <div className="text-right">
        <p className="text-black font-medium text-sm">
          {formatAmount(amount)} {currency}
        </p>
      </div>
    </div>
  );
}
