"use client"

import { ChevronRight, LogOut } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

interface ProfileSectionProps {
  title: string
  items: Array<{
    id: string
    label: string
    value?: string
    isLogout?: boolean
    onClick?: () => void
  }>
}

export function ProfileSection({ title, items }: ProfileSectionProps) {
  const { logout } = useAuth()

  const handleItemClick = (item: any) => {
    if (item.isLogout) {
      logout()
    } else if (item.onClick) {
      item.onClick()
    }
  }

  return (
    <div className="mb-8">
      {/* Titre de section */}
      <h2 className="mb-4 text-lg font-semibold text-gray-900">{title}</h2>

      {/* Liste des items */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 ${
              index !== items.length - 1 ? "border-b border-gray-100" : ""
            } ${item.isLogout ? "text-red-600 hover:bg-red-50" : "text-gray-900"} ${
              index === 0 ? "rounded-t-xl" : ""
            } ${index === items.length - 1 ? "rounded-b-xl" : ""}`}
          >
            <div className="flex items-center gap-3">
              {item.isLogout && <LogOut className="h-5 w-5" />}
              <span className="font-medium">{item.label}</span>
              {item.value && <span className="ml-2 text-sm text-gray-500">{item.value}</span>}
            </div>

            {!item.isLogout && <ChevronRight className="h-5 w-5 text-gray-400" />}
          </button>
        ))}
      </div>
    </div>
  )
}
