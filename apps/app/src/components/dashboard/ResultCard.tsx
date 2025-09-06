'use client';

interface ResultCardProps {
  amount: number;
  currency?: string;
  isVisible?: boolean;
}

export function ResultCard({ amount, currency = 'F', isVisible = true }: ResultCardProps) {
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mx-4 lg:mx-0 mt-6">
      <div className="flex items-center justify-between">
        <span className="text-gray-700 font-medium text-base">
          Impôt estimé :
        </span>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
          <span className="text-orange-600 font-bold text-xl">
            {formatAmount(amount)} {currency}
          </span>
          <span className="text-orange-500 text-sm ml-1">
            /an
          </span>
        </div>
      </div>

      {/* Informations supplémentaires - Desktop */}
      <div className="hidden lg:block mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Montant mensuel :</span>
            <span className="font-medium ml-2">
              {formatAmount(Math.round(amount / 12))} {currency}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Prochaine échéance :</span>
            <span className="font-medium ml-2">
              31 Mars 2025
            </span>
          </div>
        </div>
        
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-blue-800 text-sm">
            💡 <strong>Conseil :</strong> Ce montant est une estimation basée sur les informations fournies. 
            Le montant réel peut varier selon l'évaluation officielle.
          </p>
        </div>
      </div>
    </div>
  );
}
