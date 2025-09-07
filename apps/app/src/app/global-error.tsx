'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Une erreur globale s'est produite</h1>
            <p className="mb-8 text-lg text-gray-600">
              Une erreur inattendue s'est produite. Veuillez réessayer.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => reset()}
                className="inline-block rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600"
              >
                Réessayer
              </button>
              <a
                href="/"
                className="inline-block rounded-lg bg-gray-500 px-6 py-3 text-white transition-colors hover:bg-gray-600"
              >
                Retour à l'accueil
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
