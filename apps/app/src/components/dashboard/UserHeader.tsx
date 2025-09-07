"use client"

import { Bell } from "lucide-react"

interface UserHeaderProps {
  username: string
  hasNotification?: boolean
  avatar?: string
}

export function UserHeader({ username, hasNotification = false, avatar }: UserHeaderProps) {
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase()
  }

  return (
    <div className="flex items-center justify-between bg-[#1A1A1A] p-4 lg:bg-transparent lg:py-6">
      <div className="flex items-center gap-3">
        {/* Avatar avec initiale */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
          {avatar ? (
            <img src={avatar} alt={username} className="h-full w-full rounded-lg object-cover" />
          ) : (
            <span className="text-lg font-medium text-white">{getInitial(username)}</span>
          )}
        </div>

        {/* Message de bienvenue */}
        <div>
          <p className="text-sm font-normal text-white lg:text-gray-900">Hello,</p>
          <p className="text-lg font-medium text-white lg:text-gray-900">{username}</p>
        </div>
      </div>

      {/* Icône de notification */}
      <div className="relative">
        <button
          className="rounded-lg p-2 transition-colors hover:bg-gray-800 lg:hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell className="h-6 w-6 text-white lg:text-gray-600" />

          {/* Badge de notification */}
          {hasNotification && (
            <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#1A1A1A] bg-red-500 lg:border-white"></div>
          )}
        </button>
      </div>
    </div>
  )
}
