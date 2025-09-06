'use client';

import { ReactNode } from 'react';

interface ActionButtonProps {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export function ActionButton({ 
  label, 
  icon, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false 
}: ActionButtonProps) {
  const baseClasses = "flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-colors cursor-pointer";
  
  const variantClasses = {
    primary: "bg-[#F59E0B] text-white hover:bg-[#FBBF24] active:bg-[#D97706] disabled:bg-gray-400",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
