"use client"

interface TaxCardProps {
  amount: number
  deadline: string
  currency?: string
}

export function TaxCard({ amount, deadline, currency = "XOF" }: TaxCardProps) {
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="mx-4 rounded-xl bg-gray-800 p-6 lg:bg-gray-900">
      {/* Titre */}
      <h2 className="mb-2 text-sm font-normal text-gray-300 lg:text-base">Impôt à payer</h2>

      {/* Montant principal */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-white lg:text-4xl">{formatAmount(amount)}</span>
        <span className="ml-2 text-lg font-medium text-white lg:text-xl">{currency}</span>
      </div>

      {/* Date limite */}
      <p className="text-sm text-gray-400 lg:text-base">
        À payer au plus tard le : <span className="font-medium">{deadline}</span>
      </p>
    </div>
  )
}
