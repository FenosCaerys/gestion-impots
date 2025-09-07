"use client";

export default function ErrorPage() {
  return (
    <html lang="fr">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Une erreur s'est produite</h1>
            <p className="mb-8 text-lg text-gray-600">Quelque chose s'est mal passé. Veuillez réessayer.</p>
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
