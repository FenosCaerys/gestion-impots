'use client';

interface TaxCardProps {
  amount: number;
  deadline: string;
  currency?: string;
}

export function TaxCard({ amount, deadline, currency = 'XOF' }: TaxCardProps) {
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="mx-4 p-6 bg-gray-800 rounded-xl lg:bg-gray-900">
      {/* Titre */}
      <h2 className="text-gray-300 text-sm font-normal mb-2 lg:text-base">
        Impôt à payer
      </h2>
      
      {/* Montant principal */}
      <div className="mb-4">
        <span className="text-white text-3xl font-bold lg:text-4xl">
          {formatAmount(amount)}
        </span>
        <span className="text-white text-lg font-medium ml-2 lg:text-xl">
          {currency}
        </span>
      </div>
      
      {/* Date limite */}
      <p className="text-gray-400 text-sm lg:text-base">
        À payer au plus tard le : <span className="font-medium">{deadline}</span>
      </p>
    </div>
  );
}
