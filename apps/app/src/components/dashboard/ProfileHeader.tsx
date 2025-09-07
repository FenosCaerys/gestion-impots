"use client"

import { ChevronRight } from "lucide-react"

interface ProfileHeaderProps {
  username: string
  npi: string
  completionText: string
  completionSubtext: string
  onCompleteProfile: () => void
}

export function ProfileHeader({
  username,
  npi,
  completionText,
  completionSubtext,
  onCompleteProfile,
}: ProfileHeaderProps) {
  // Extraire la première lettre du nom d'utilisateur
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase()
  }

  return (
    <div className="bg-[#1A1A1A] px-4 py-6">
      {/* En-tête utilisateur */}
      <div className="mb-6 flex items-center gap-4">
        {/* Avatar avec initiale */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
          <span className="text-lg font-bold text-white">{getInitial(username)}</span>
        </div>

        {/* Informations utilisateur */}
        <div>
          <h1 className="text-lg font-bold text-white">{username}</h1>
          <p className="text-sm text-gray-400">NPI: {npi}</p>
        </div>
      </div>

      {/* Bloc de complétion du profil */}
      <button
        onClick={onCompleteProfile}
        className="flex w-full items-center justify-between rounded-lg bg-gray-800 p-4 transition-colors hover:bg-gray-700"
      >
        <div className="text-left">
          <h3 className="mb-1 text-base font-medium text-white">{completionText}</h3>
          <p className="text-sm text-gray-400">{completionSubtext}</p>
        </div>

        <ChevronRight className="h-5 w-5 text-gray-400" />
      </button>
    </div>
  )
}
