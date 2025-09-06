import React from "react"
import Link from "next/link"

export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Page non trouvée
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              La page que vous recherchez n'existe pas.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
