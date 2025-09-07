"use client"

import { FileText } from "lucide-react"

interface PaymentItemProps {
  title: string
  date: string
  amount: number
  currency?: string
}

export function PaymentItem({ title, date, amount, currency = "XOF" }: PaymentItemProps) {
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="flex items-center justify-between p-4 transition-colors hover:bg-gray-50">
      {/* Partie gauche : icône + infos */}
      <div className="flex items-center gap-3">
        {/* Icône document dans un cercle */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <FileText className="h-5 w-5 text-gray-400" />
        </div>

        {/* Titre et date */}
        <div>
          <p className="text-sm font-medium text-black">{title}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>

      {/* Partie droite : montant */}
      <div className="text-right">
        <p className="text-sm font-semibold text-black">
          {formatAmount(amount)} {currency}
        </p>
      </div>
    </div>
  )
}
