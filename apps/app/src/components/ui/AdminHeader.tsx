"use client"

import { useState } from "react"
import { Search, Menu, Bell, ChevronDown, User } from "lucide-react"
import { useSidebar } from "./SidebarProvider"

export function AdminHeader() {
  const { toggleSidebar } = useSidebar()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedVille, setSelectedVille] = useState("")
  const [selectedType, setSelectedType] = useState("")

  const villes = ["Toutes les villes", "Cocody", "Plateau", "Marcory", "Yopougon", "Adjamé", "Treichville"]

  const types = ["Tous les types", "Résidentiel", "Commercial", "Industriel", "Mixte"]

  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Menu + Search */}
        <div className="flex flex-1 items-center space-x-4">
          {/* Menu hamburger */}
          <button onClick={toggleSidebar} className="rounded-lg p-2 transition-colors hover:bg-gray-100 lg:hidden">
            <Menu className="h-5 w-5 text-gray-600" />
          </button>

          {/* Search bar */}
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Recherche"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 transition-colors focus:border-transparent focus:bg-white focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Center - Filters */}
        <div className="hidden items-center space-x-4 md:flex">
          {/* Ville filter */}
          <div className="relative">
            <select
              value={selectedVille}
              onChange={(e) => setSelectedVille(e.target.value)}
              className="cursor-pointer appearance-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 pr-8 text-gray-700 focus:border-transparent focus:ring-2 focus:ring-orange-500"
            >
              {villes.map((ville, index) => (
                <option key={index} value={ville}>
                  {ville}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          </div>

          {/* Type filter */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="cursor-pointer appearance-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 pr-8 text-gray-700 focus:border-transparent focus:ring-2 focus:ring-orange-500"
            >
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Right side - Notifications + Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative rounded-lg p-2 transition-colors hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
            {/* Notification badge */}
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-medium text-white">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-50">
            {/* Avatar */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
              <span className="text-sm font-medium text-white">L</span>
            </div>

            {/* User info */}
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Losterne</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>

            {/* Dropdown arrow */}
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile filters - shown on small screens */}
      <div className="mt-4 flex space-x-3 md:hidden">
        <div className="relative flex-1">
          <select
            value={selectedVille}
            onChange={(e) => setSelectedVille(e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 pr-8 text-sm text-gray-700 focus:border-transparent focus:ring-2 focus:ring-orange-500"
          >
            {villes.map((ville, index) => (
              <option key={index} value={ville}>
                {ville}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
        </div>

        <div className="relative flex-1">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 pr-8 text-sm text-gray-700 focus:border-transparent focus:ring-2 focus:ring-orange-500"
          >
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
        </div>
      </div>
    </header>
  )
}
