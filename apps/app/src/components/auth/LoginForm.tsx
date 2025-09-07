'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        // Rediriger selon le rôle
        if (result.isAdmin) {
          router.push('/fr/admin/tableau-de-bord');
        } else {
          router.push('/fr/accueil');
        }
      } else {
        setError(result.error || 'Une erreur est survenue');
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la connexion');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Connexion</h2>
        <p className="text-gray-600">Connectez-vous à votre compte</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-gray-50"
              placeholder="Identifiant"
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-gray-50"
                placeholder="Mot de passe"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        {/* Switch to Register */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Pas encore de compte ?{' '}
            <button
              onClick={onSwitchToRegister}
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              S'inscrire
            </button>
          </p>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 space-y-3">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-800 text-center font-medium mb-1">
              Compte Utilisateur
            </p>
            <p className="text-xs text-blue-600 text-center">
              <strong>Email:</strong> user@test.com<br />
              <strong>Mot de passe:</strong> user123
            </p>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-xs text-orange-800 text-center font-medium mb-1">
              Compte Administrateur
            </p>
            <p className="text-xs text-orange-600 text-center">
              <strong>Email:</strong> admin@test.com<br />
              <strong>Mot de passe:</strong> admin123
            </p>
          </div>
        </div>
    </div>
  );
}
