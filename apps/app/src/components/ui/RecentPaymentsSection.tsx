"use client"

import { RecentPaymentItem } from "@/components/ui/RecentPaymentItem"

interface PaymentItem {
  id: string
  title: string
  date: string
  amount: number
}

interface RecentPaymentsSectionProps {
  items: PaymentItem[]
  onViewAllClick?: () => void
  showViewAll?: boolean
}

export function RecentPaymentsSection({ items, onViewAllClick, showViewAll = true }: RecentPaymentsSectionProps) {
  return (
    <div className="mx-4 rounded-xl bg-white shadow-sm lg:mx-0">
      {/* En-tête de section */}
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <h3 className="text-lg font-medium text-black">Récents</h3>
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
          items.map((item) => (
            <RecentPaymentItem key={item.id} title={item.title} date={item.date} amount={item.amount} />
          ))
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-gray-500">Aucun paiement récent</p>
          </div>
        )}
      </div>
    </div>
  )
}
