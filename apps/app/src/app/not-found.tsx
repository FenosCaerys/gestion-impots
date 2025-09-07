"use client";

export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Page non trouvée</h1>
            <p className="mb-8 text-lg text-gray-600">La page que vous recherchez n'existe pas.</p>
            <a
              href="/"
              className="inline-block rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600"
            >
              Retour à l'accueil
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
