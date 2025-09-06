"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    // Rediriger directement vers la page d'idées
    router.push("/dashboard/idees")
  }, [router])

  // Page vide pendant le chargement
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <div className="mb-4 size-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-gray-500">Chargement...</p>
      </div>
    </div>
  )
}
