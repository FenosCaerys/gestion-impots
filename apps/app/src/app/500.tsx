"use client";

export default function ServerErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-red-600">500 - Erreur interne</h1>
        <p className="text-gray-600 mb-8">Une erreur est survenue sur le serveur.</p>
        <a
          href="/"
          className="inline-block rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600"
        >
          Retour à l'accueil
        </a>
      </div>
    </main>
  );
}
