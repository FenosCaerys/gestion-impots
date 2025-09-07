"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

interface RegisterFormProps {
  onSwitchToLogin: () => void
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const router = useRouter()
  const { register } = useAuth()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères")
      setIsLoading(false)
      return
    }

    try {
      const result = await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      })

      if (result.success) {
        // Rediriger vers l'accueil
        router.push("/fr/accueil")
      } else {
        setError(result.error || "Une erreur est survenue")
      }
    } catch (err) {
      setError("Une erreur est survenue lors de l'inscription")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">Inscription</h2>
        <p className="text-gray-600">Créez votre compte</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
        )}

        {/* Names */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
              placeholder="Prénom"
              required
            />
          </div>

          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
              placeholder="Nom"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            placeholder="Email"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            placeholder="Téléphone"
            required
          />
        </div>

        {/* Password */}
        <div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 pr-12 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
              placeholder="Mot de passe"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 pr-12 outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
              placeholder="Confirmer le mot de passe"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Inscription..." : "S'inscrire"}
        </button>
      </form>

      {/* Switch to Login */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Déjà un compte ?{" "}
          <button onClick={onSwitchToLogin} className="font-medium text-orange-600 hover:text-orange-700">
            Se connecter
          </button>
        </p>
      </div>
    </div>
  )
}
