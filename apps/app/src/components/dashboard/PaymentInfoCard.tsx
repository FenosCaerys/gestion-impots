"use client"

import { MapPin, Clock, CreditCard, AlertCircle } from "lucide-react"

interface PaymentInfoCardProps {
  amount: number
  deadline: string
  isPaid: boolean
  referenceNumber?: string
}

export function PaymentInfoCard({ amount, deadline, isPaid, referenceNumber }: PaymentInfoCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      {/* Statut de paiement */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Impôt foncier 2024</h2>
        <div className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
          isPaid 
            ? "bg-green-100 text-green-800" 
            : "bg-orange-100 text-orange-800"
        }`}>
          <div className={`h-2 w-2 rounded-full ${
            isPaid ? "bg-green-500" : "bg-orange-500"
          }`}></div>
          {isPaid ? "Payé" : "Non payé"}
        </div>
      </div>

      {/* Montant */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">Montant à payer</p>
        <p className="text-3xl font-bold text-gray-900">
          {amount.toLocaleString()} <span className="text-lg font-normal text-gray-600">XOF</span>
        </p>
      </div>

      {/* Échéance */}
      <div className="mb-6 flex items-center gap-3 rounded-lg bg-gray-50 p-4">
        <Clock className="h-5 w-5 text-gray-600" />
        <div>
          <p className="text-sm font-medium text-gray-900">Échéance</p>
          <p className="text-sm text-gray-600">{deadline}</p>
        </div>
      </div>

      {/* Référence de paiement */}
      {referenceNumber && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-blue-50 p-4">
          <CreditCard className="h-5 w-5 text-blue-600" />
          <div>
            <p className="text-sm font-medium text-gray-900">Référence de paiement</p>
            <p className="text-sm font-mono text-blue-600">{referenceNumber}</p>
          </div>
        </div>
      )}

      {/* Informations de paiement */}
      {!isPaid && (
        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-lg bg-orange-50 p-4">
            <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-orange-900">Comment payer ?</p>
              <p className="text-sm text-orange-800">
                Rendez-vous dans l'un des points de paiement avec votre référence
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-900">Points de paiement disponibles :</h4>
            
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-gray-600 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">Mairie d'Abidjan - Plateau</p>
                <p className="text-xs text-gray-600">Lun-Ven: 8h-16h | Sat: 8h-12h</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-gray-600 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">Guichet Cocody</p>
                <p className="text-xs text-gray-600">Lun-Ven: 8h-16h</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-gray-600 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">Guichet Yopougon</p>
                <p className="text-xs text-gray-600">Lun-Ven: 8h-16h</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-gray-50 p-3">
              <p className="text-xs text-gray-600">
                <strong>Banques partenaires :</strong> Ecobank, SGBCI, BICICI, UBA
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
