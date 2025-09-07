"use client"

import { useState } from "react"
import { HelpCircle, Search, Book, MessageCircle, Phone, Mail, FileText, Video, ExternalLink } from "lucide-react"

export default function AidePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Toutes les catégories" },
    { id: "parcelles", name: "Gestion des parcelles" },
    { id: "proprietaires", name: "Propriétaires" },
    { id: "taxes", name: "Taxes et calculs" },
    { id: "paiements", name: "Paiements" },
    { id: "technique", name: "Support technique" },
  ]

  const helpArticles = [
    {
      id: 1,
      title: "Comment ajouter une nouvelle parcelle",
      category: "parcelles",
      description: "Guide étape par étape pour enregistrer une nouvelle parcelle dans le système",
      views: 245,
      lastUpdated: "15 Jan 2024",
    },
    {
      id: 2,
      title: "Calcul des taxes foncières",
      category: "taxes",
      description: "Comprendre les méthodes de calcul des différentes taxes",
      views: 189,
      lastUpdated: "12 Jan 2024",
    },
    {
      id: 3,
      title: "Gestion des propriétaires",
      category: "proprietaires",
      description: "Ajouter, modifier et gérer les informations des propriétaires",
      views: 167,
      lastUpdated: "10 Jan 2024",
    },
    {
      id: 4,
      title: "Suivi des paiements",
      category: "paiements",
      description: "Comment suivre et valider les paiements des contribuables",
      views: 134,
      lastUpdated: "08 Jan 2024",
    },
  ]

  const quickActions = [
    {
      icon: MessageCircle,
      title: "Chat en direct",
      description: "Discutez avec notre équipe support",
      action: "Démarrer le chat",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Support téléphonique",
      description: "+225 07 12 34 56 78",
      action: "Appeler",
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email support",
      description: "support@gestion-impots.ci",
      action: "Envoyer un email",
      color: "bg-orange-500",
    },
    {
      icon: Video,
      title: "Formation vidéo",
      description: "Regarder les tutoriels",
      action: "Voir les vidéos",
      color: "bg-purple-500",
    },
  ]

  const filteredArticles = helpArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Centre d'aide</h1>
          <p className="text-gray-600">Documentation et support pour l'administration</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon
          return (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className={`rounded-lg p-3 ${action.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
              <button className="mt-4 w-full rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
                {action.action}
              </button>
            </div>
          )
        })}
      </div>

      {/* Search and Filters */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher dans la documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-orange-500"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Articles */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900">Articles d'aide</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredArticles.map((article) => (
                <div key={article.id} className="p-6 transition-colors hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-2 font-medium text-gray-900">{article.title}</h3>
                      <p className="mb-3 text-sm text-gray-600">{article.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{article.views} vues</span>
                        <span>Mis à jour le {article.lastUpdated}</span>
                      </div>
                    </div>
                    <button className="ml-4 rounded-lg p-2 transition-colors hover:bg-gray-100">
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900">Questions fréquentes</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="mb-2 font-medium text-gray-900">Comment modifier le taux d'une taxe ?</h3>
                <p className="text-sm text-gray-600">
                  Rendez-vous dans la section "Taxes & Simulations", sélectionnez la taxe à modifier et cliquez sur
                  "Modifier les taux".
                </p>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-medium text-gray-900">Que faire si un paiement n'apparaît pas ?</h3>
                <p className="text-sm text-gray-600">
                  Vérifiez d'abord la synchronisation avec le système de paiement. Si le problème persiste, contactez le
                  support technique.
                </p>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-medium text-gray-900">Comment exporter les données ?</h3>
                <p className="text-sm text-gray-600">
                  Utilisez le bouton "Exporter" disponible dans chaque section pour télécharger les données au format
                  Excel ou PDF.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Informations de contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Téléphone</p>
                  <p className="text-sm text-gray-600">+225 07 12 34 56 78</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">support@gestion-impots.ci</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Heures d'ouverture</p>
                  <p className="text-sm text-gray-600">Lun-Ven: 8h-17h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Liens utiles</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-3 text-gray-600 transition-colors hover:text-orange-600">
                <Book className="h-4 w-4" />
                <span className="text-sm">Guide d'utilisation</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 transition-colors hover:text-orange-600">
                <Video className="h-4 w-4" />
                <span className="text-sm">Tutoriels vidéo</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 transition-colors hover:text-orange-600">
                <FileText className="h-4 w-4" />
                <span className="text-sm">Documentation API</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 transition-colors hover:text-orange-600">
                <HelpCircle className="h-4 w-4" />
                <span className="text-sm">FAQ complète</span>
              </a>
            </div>
          </div>

          {/* System Status */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">État du système</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Serveur principal</span>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Opérationnel
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Base de données</span>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Opérationnel
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Paiements</span>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Opérationnel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
