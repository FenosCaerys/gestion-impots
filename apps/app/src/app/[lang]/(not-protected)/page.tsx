"use client"

import { useState } from "react"
import { LoginForm } from "@/components/auth/LoginForm"
import { RegisterForm } from "@/components/auth/RegisterForm"

// Désactiver la génération statique pour cette page
export const dynamic = "force-dynamic"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side - Form */}
      <div className="flex w-1/2 items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          {/* Logo/Header */}
          <div className="mb-12">
            <h1 className="mb-2 text-4xl font-bold">
              <span className="text-orange-500">Gestion</span>
              <span className="text-gray-900">-Impôts</span>
            </h1>
          </div>

          {/* Auth Forms */}
          {isLogin ? (
            <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="w-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/bg-login.webp')`,
        }}
      ></div>
    </div>
  )
}
