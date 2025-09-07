"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  BarChart3,
  Map,
  Building2,
  Users,
  Calculator,
  HelpCircle,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react"
import { useAuth } from "@/hooks/useAuth"
import { useSidebar } from "./SidebarProvider"

type AdminTabType =
  | "tableau-de-bord"
  | "parcelles"
  | "cartographie"
  | "proprietaires"
  | "taxes-simulations"
  | "aide"
  | "parametres"

interface AdminSidebarProps {
  activeTab: AdminTabType
}

export function AdminSidebar({ activeTab }: AdminSidebarProps) {
  const router = useRouter()
  const { logout } = useAuth()
  const { isCollapsed, toggleSidebar } = useSidebar()

  const handleTabChange = (tab: AdminTabType) => {
    const routes = {
      "tableau-de-bord": "/fr/admin/tableau-de-bord",
      parcelles: "/fr/admin/parcelles",
      cartographie: "/fr/admin/cartographie",
      proprietaires: "/fr/admin/proprietaires",
      "taxes-simulations": "/fr/admin/taxes-simulations",
      aide: "/fr/admin/aide",
      parametres: "/fr/admin/parametres",
    }
    router.push(routes[tab])
  }

  const handleLogout = () => {
    logout()
  }

  const navItems = [
    {
      id: "tableau-de-bord" as AdminTabType,
      label: "Tableau de bord",
      icon: BarChart3,
    },
    {
      id: "parcelles" as AdminTabType,
      label: "Parcelles",
      icon: MapPin,
    },
    {
      id: "cartographie" as AdminTabType,
      label: "Cartographie",
      icon: Map,
    },
    {
      id: "proprietaires" as AdminTabType,
      label: "Propriétaires",
      icon: Users,
    },
    {
      id: "taxes-simulations" as AdminTabType,
      label: "Taxes & Simulations",
      icon: Calculator,
    },
    {
      id: "aide" as AdminTabType,
      label: "Aide",
      icon: HelpCircle,
    },
  ]

  const bottomNavItems = [
    {
      id: "parametres" as AdminTabType,
      label: "Paramètres",
      icon: Settings,
    },
  ]

  return (
    <div
      className={`fixed left-0 top-0 z-40 hidden h-full border-r border-gray-200 bg-white transition-all duration-300 lg:block ${
        isCollapsed ? "w-24" : "w-64"
      }`}
    >
      <div className="flex h-full flex-col">
        {/* Header avec bouton toggle */}
        <div className="border-b border-gray-100 p-6">
          <div className="mb-2 flex items-center justify-between">
            {!isCollapsed && <h1 className="text-xl font-bold text-black">Admin Panel</h1>}
            <button onClick={toggleSidebar} className="rounded-lg p-2 transition-colors hover:bg-gray-100">
              {isCollapsed ? (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
          {!isCollapsed && <p className="text-sm text-gray-500">Gestion des impôts</p>}
        </div>

        {/* Navigation principale */}
        <div className="flex-1 p-6">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                    isActive ? "bg-orange-50 font-medium text-orange-600" : "text-gray-600 hover:bg-gray-50"
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Navigation du bas */}
        <div className="border-t border-gray-100 p-6">
          <nav className="space-y-2">
            {bottomNavItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                    isActive ? "bg-orange-50 font-medium text-orange-600" : "text-gray-600 hover:bg-gray-50"
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </button>
              )
            })}

            {/* Bouton de déconnexion */}
            <button
              onClick={handleLogout}
              className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left text-red-600 transition-colors hover:bg-red-50"
              title={isCollapsed ? "Déconnexion" : undefined}
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span className="truncate">Déconnexion</span>}
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
