'use client';

import { ChevronRight, LogOut } from 'lucide-react';

interface ProfileSectionProps {
  title: string;
  items: Array<{
    id: string;
    label: string;
    value?: string;
    isLogout?: boolean;
    onClick?: () => void;
  }>;
}

export function ProfileSection({ title, items }: ProfileSectionProps) {
  return (
    <div className="mb-6">
      {/* Titre de section */}
      <h2 className="text-gray-400 text-sm font-medium mb-3 px-4">
        {title}
      </h2>
      
      {/* Liste des items */}
      <div className="bg-white">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={item.onClick}
            className={`w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
              index !== items.length - 1 ? 'border-b border-gray-100' : ''
            } ${item.isLogout ? 'text-red-500' : 'text-black'}`}
          >
            <div className="flex items-center gap-3">
              {item.isLogout && <LogOut className="w-5 h-5" />}
              <span className="font-medium">{item.label}</span>
            </div>
            
            <div className="flex items-center gap-2">
              {item.value && (
                <span className="text-gray-500 text-sm">{item.value}</span>
              )}
              {!item.isLogout && (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
