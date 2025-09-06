'use client';

import { Bell } from 'lucide-react';

interface UserHeaderProps {
  username: string;
  hasNotification?: boolean;
  avatar?: string;
}

export function UserHeader({ username, hasNotification = false, avatar }: UserHeaderProps) {
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="flex items-center justify-between p-4 bg-[#1A1A1A] lg:bg-transparent lg:py-6">
      <div className="flex items-center gap-3">
        {/* Avatar avec initiale */}
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
          {avatar ? (
            <img 
              src={avatar} 
              alt={username} 
              className="w-full h-full rounded-lg object-cover"
            />
          ) : (
            <span className="text-white font-medium text-lg">
              {getInitial(username)}
            </span>
          )}
        </div>
        
        {/* Message de bienvenue */}
        <div>
          <p className="text-white lg:text-gray-900 text-sm font-normal">
            Hello,
          </p>
          <p className="text-white lg:text-gray-900 text-lg font-medium">
            {username}
          </p>
        </div>
      </div>

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
