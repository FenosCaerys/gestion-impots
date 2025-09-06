'use client';

import { ChevronRight } from 'lucide-react';

interface ProfileHeaderProps {
  username: string;
  npi: string;
  completionText: string;
  completionSubtext: string;
  onCompleteProfile: () => void;
}

export function ProfileHeader({ 
  username, 
  npi, 
  completionText, 
  completionSubtext,
  onCompleteProfile 
}: ProfileHeaderProps) {
  // Extraire la première lettre du nom d'utilisateur
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="bg-[#1A1A1A] px-4 py-6">
      {/* En-tête utilisateur */}
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar avec initiale */}
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {getInitial(username)}
          </span>
        </div>
        
        {/* Informations utilisateur */}
        <div>
          <h1 className="text-white font-bold text-lg">{username}</h1>
          <p className="text-gray-400 text-sm">NPI: {npi}</p>
        </div>
      </div>

      {/* Bloc de complétion du profil */}
      <button
        onClick={onCompleteProfile}
        className="w-full bg-gray-800 hover:bg-gray-700 rounded-lg p-4 flex items-center justify-between transition-colors"
      >
        <div className="text-left">
          <h3 className="text-white font-medium text-base mb-1">
            {completionText}
          </h3>
          <p className="text-gray-400 text-sm">
            {completionSubtext}
          </p>
        </div>
        
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  );
}
