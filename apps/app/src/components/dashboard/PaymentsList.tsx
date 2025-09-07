"use client"

import { PaymentItem } from "./PaymentItem"

interface Payment {
  id: string
  title: string
  date: string
  amount: number
}

interface PaymentsListProps {
  items: Payment[]
  showViewAll?: boolean
  onViewAllClick?: () => void
}

export function PaymentsList({ items, showViewAll = true, onViewAllClick }: PaymentsListProps) {
  return (
    <div className="mx-4 rounded-xl bg-white shadow-sm lg:mx-0">
      {/* En-tête de section */}
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <h2 className="text-lg font-medium text-black">Récents</h2>
        {showViewAll && onViewAllClick && (
          <button
            onClick={onViewAllClick}
            className="text-sm font-medium text-orange-500 transition-colors hover:text-orange-600"
          >
            Voir tout
          </button>
        )}
      </div>

      {/* Liste des paiements */}
      <div className="divide-y divide-gray-200">
        {items.length > 0 ? (
          items.map((item) => <PaymentItem key={item.id} title={item.title} date={item.date} amount={item.amount} />)
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-gray-500">Aucun paiement dans l'historique</p>
          </div>
        )}
      </div>
    </div>
  )
}
