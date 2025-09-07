'use client';

import { useState } from 'react';
import { Search, Menu, Bell, ChevronDown, User } from 'lucide-react';
import { useSidebar } from './SidebarProvider';

export function AdminHeader() {
  const { toggleSidebar } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVille, setSelectedVille] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const villes = [
    'Toutes les villes',
    'Cocody',
    'Plateau',
    'Marcory',
    'Yopougon',
    'Adjamé',
    'Treichville'
  ];

  const types = [
    'Tous les types',
    'Résidentiel',
    'Commercial',
    'Industriel',
    'Mixte'
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Menu + Search */}
        <div className="flex items-center space-x-4 flex-1">
          {/* Menu hamburger */}
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Recherche"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Center - Filters */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Ville filter */}
          <div className="relative">
            <select
              value={selectedVille}
              onChange={(e) => setSelectedVille(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
            >
              {villes.map((ville, index) => (
                <option key={index} value={ville}>
                  {ville}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          {/* Type filter */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
            >
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Right side - Notifications + Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
            {/* Avatar */}
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">L</span>
            </div>
            
            {/* User info */}
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Losterne</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>

            {/* Dropdown arrow */}
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile filters - shown on small screens */}
      <div className="md:hidden mt-4 flex space-x-3">
        <div className="relative flex-1">
          <select
            value={selectedVille}
            onChange={(e) => setSelectedVille(e.target.value)}
            className="appearance-none w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
          >
            {villes.map((ville, index) => (
              <option key={index} value={ville}>
                {ville}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="appearance-none w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
          >
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </header>
  );
}
