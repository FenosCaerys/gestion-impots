'use client';

import { ChevronRight, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

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
  const { logout } = useAuth();

  const handleItemClick = (item: any) => {
    if (item.isLogout) {
      logout();
    } else if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <div className="mb-8">
      {/* Titre de section */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      
      {/* Liste des items */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 ${
              index !== items.length - 1 ? 'border-b border-gray-100' : ''
            } ${
              item.isLogout ? 'text-red-600 hover:bg-red-50' : 'text-gray-900'
            } ${
              index === 0 ? 'rounded-t-xl' : ''
            } ${
              index === items.length - 1 ? 'rounded-b-xl' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              {item.isLogout && <LogOut className="w-5 h-5" />}
              <span className="font-medium">{item.label}</span>
              {item.value && (
                <span className="text-sm text-gray-500 ml-2">{item.value}</span>
              )}
            </div>
            
            {!item.isLogout && <ChevronRight className="w-5 h-5 text-gray-400" />}
          </button>
        ))}
      </div>
    </div>
  );
}
