'use client';

import { Bell } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  hasNotification?: boolean;
}

export function PageHeader({ title, hasNotification = false }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#1A1A1A] lg:bg-transparent lg:py-6">
      {/* Titre de la page */}
      <h1 className="text-white lg:text-gray-900 text-xl font-bold">
        {title}
      </h1>

      {/* Icône de notification */}
      <div className="relative">
        <button 
          className="p-2 rounded-lg hover:bg-gray-800 lg:hover:bg-gray-100 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6 text-white lg:text-gray-600" />
          
          {/* Badge de notification */}
          {hasNotification && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#1A1A1A] lg:border-white"></div>
          )}
        </button>
      </div>
    </div>
  );
}
