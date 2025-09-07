"use client"

interface ResultCardProps {
  amount: number
  currency?: string
  isVisible?: boolean
}

export function ResultCard({ amount, currency = "F", isVisible = true }: ResultCardProps) {
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="mx-4 mt-6 rounded-xl bg-white p-6 shadow-sm lg:mx-0">
      <div className="flex items-center justify-between">
        <span className="text-base font-medium text-gray-700">Impôt estimé :</span>

        <div className="rounded-lg border border-orange-200 bg-orange-50 px-4 py-2">
          <span className="text-xl font-bold text-orange-600">
            {formatAmount(amount)} {currency}
          </span>
          <span className="ml-1 text-sm text-orange-500">/an</span>
        </div>
      </div>

      {/* Informations supplémentaires - Desktop */}
      <div className="mt-4 hidden border-t border-gray-200 pt-4 lg:block">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Montant mensuel :</span>
            <span className="ml-2 font-medium">
              {formatAmount(Math.round(amount / 12))} {currency}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Prochaine échéance :</span>
            <span className="ml-2 font-medium">31 Mars 2025</span>
          </div>
        </div>

        <div className="mt-3 rounded-lg bg-blue-50 p-3">
          <p className="text-sm text-blue-800">
            💡 <strong>Conseil :</strong> Ce montant est une estimation basée sur les informations fournies. Le montant
            réel peut varier selon l'évaluation officielle.
          </p>
        </div>
      </div>
    </div>
  )
}
