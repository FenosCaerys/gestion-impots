"use client"

import { Home, Clock, Calculator, User } from "lucide-react"
import { NavItem } from "./NavItem"

type TabType = "accueil" | "historique" | "simulateur" | "moi"

interface BottomNavProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const navItems = [
    {
      id: "accueil" as TabType,
      label: "Accueil",
      icon: Home,
    },
    {
      id: "historique" as TabType,
      label: "Historique",
      icon: Clock,
    },
    {
      id: "simulateur" as TabType,
      label: "Simulateur",
      icon: Calculator,
    },
    {
      id: "moi" as TabType,
      label: "Moi",
      icon: User,
    },
  ]

  return (
    <div className="border-t border-gray-200 bg-white px-4 py-2">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            isActive={activeTab === item.id}
            onClick={() => onTabChange(item.id)}
          />
        ))}
      </div>
    </div>
  )
}
