// Désactiver la génération statique pour cette page
export const dynamic = "force-dynamic"

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Gestion d'Impôts
        </h1>
        <p className="text-lg text-gray-600">
          Application de gestion d'impôts
        </p>
      </div>
    </div>
  )
}
