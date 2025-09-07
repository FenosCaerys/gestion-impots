"use client"

import { ComponentType } from "react"

interface NavItemProps {
  label: string
  icon: ComponentType<{ className?: string }>
  isActive: boolean
  onClick: () => void
}

export function NavItem({ label, icon: Icon, isActive, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg px-3 py-2 transition-colors ${
        isActive ? "text-[#F59E0B]" : "text-gray-400 hover:text-gray-600"
      }`}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}
