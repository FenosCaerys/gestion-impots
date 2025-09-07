"use client"

import { X, Check } from "lucide-react"

interface PaymentSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  amount: number
  paymentId: string
  currency?: string
}

export function PaymentSuccessModal({
  isOpen,
  onClose,
  amount,
  paymentId,
  currency = "XOF",
}: PaymentSuccessModalProps) {
  const formatAmount = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getCurrentDate = () => {
    const now = new Date()
    return {
      date: now.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      time: now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    }
  }

  const { date, time } = getCurrentDate()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-black px-6 py-4">
          <h2 className="text-lg font-bold text-white">Payement</h2>
          <button onClick={onClose} className="text-white transition-colors hover:text-gray-300" aria-label="Fermer">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Contenu */}
        <div className="p-6 text-center">
          {/* Icône de confirmation */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
            <Check className="h-8 w-8 text-white" />
          </div>

          {/* Message de confirmation */}
          <div className="mb-8">
            <h3 className="mb-2 text-lg font-bold text-black">Payement effectué</h3>
            <p className="text-sm text-gray-600">Vous avez payé avec succès votre impôt de l'année 2024.</p>
          </div>

          {/* Méthode de paiement */}
          <div className="mb-6 rounded-lg bg-gray-100 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-10 items-center justify-center rounded bg-orange-500">
                <span className="text-xs font-bold text-white">MTN</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-black">MTN Momo</p>
                <p className="text-xs text-gray-500">ID: {paymentId}</p>
              </div>
            </div>
          </div>

          {/* Détails du paiement */}
          <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
            <div className="text-left">
              <p className="text-gray-600">Mode</p>
              <p className="font-medium text-black">Mobile</p>
            </div>
            <div className="text-left">
              <p className="text-gray-600">Source des fonds</p>
              <p className="font-medium text-black">MTN Momo</p>
            </div>
            <div className="text-left">
              <p className="text-gray-600">Date</p>
              <p className="font-medium text-black">{date}</p>
            </div>
            <div className="text-left">
              <p className="text-gray-600">Heure</p>
              <p className="font-medium text-black">{time}</p>
            </div>
          </div>

          {/* Montant total */}
          <div className="mb-6 rounded-lg bg-orange-500 p-4">
            <div className="text-center">
              <p className="mb-1 text-sm text-white">Total</p>
              <p className="text-xl font-bold text-white">
                {formatAmount(amount)} {currency}
              </p>
            </div>
          </div>

          {/* Bouton retour */}
          <button
            onClick={onClose}
            className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition-colors hover:bg-gray-800"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  )
}
