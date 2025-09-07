"use client"

import { Bell } from "lucide-react"

interface PageHeaderProps {
  title: string
  hasNotification?: boolean
}

export function PageHeader({ title, hasNotification = false }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between bg-[#1A1A1A] p-4 lg:bg-transparent lg:py-6">
      {/* Titre de la page */}
      <h1 className="text-xl font-bold text-white lg:text-gray-900">{title}</h1>

      {/* Icône de notification */}
      <div className="relative">
        <button
          className="rounded-lg p-2 transition-colors hover:bg-gray-800 lg:hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell className="h-6 w-6 text-white lg:text-gray-600" />

          {/* Badge de notification */}
          {hasNotification && (
            <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#1A1A1A] bg-red-500 lg:border-white"></div>
          )}
        </button>
      </div>
    </div>
  )
}
