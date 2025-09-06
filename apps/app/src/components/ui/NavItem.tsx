'use client';

import { ComponentType } from 'react';

interface NavItemProps {
  label: string;
  icon: ComponentType<{ className?: string }>;
  isActive: boolean;
  onClick: () => void;
}

export function NavItem({ label, icon: Icon, isActive, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-colors cursor-pointer ${
        isActive 
          ? 'text-[#F59E0B]' 
          : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium">
        {label}
      </span>
    </button>
  );
}
