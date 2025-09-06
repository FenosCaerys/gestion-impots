"use client"

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Une erreur s'est produite
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Quelque chose s'est mal passé. Veuillez réessayer.
        </p>
        <button 
          onClick={reset}
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </main>
  )
}
