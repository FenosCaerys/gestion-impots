'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useAuth() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulation d'authentification - remplacer par vraie API
    if ((email === 'user@test.com' && password === 'user123') || 
        (email === 'admin@test.com' && password === 'admin123')) {
      
      const isAdmin = email === 'admin@test.com';
      
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userRole', isAdmin ? 'admin' : 'user');
      
      if (isAdmin) {
        localStorage.setItem('userName', 'Administrateur Système');
      }
      
      // Set cookie for middleware
      document.cookie = 'isAuthenticated=true; path=/; max-age=86400'; // 24h
      
      setIsAuthenticated(true);
      return { success: true, isAdmin };
    } else {
      return { success: false, error: 'Email ou mot de passe incorrect' };
    }
  };

  const register = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }) => {
    try {
      // Simulation d'inscription - remplacer par vraie API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', userData.email);
      localStorage.setItem('userName', `${userData.firstName} ${userData.lastName}`);
      
      // Set cookie for middleware
      document.cookie = 'isAuthenticated=true; path=/; max-age=86400'; // 24h
      
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Une erreur est survenue lors de l\'inscription' };
    }
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    
    // Remove cookie
    document.cookie = 'isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
    setIsAuthenticated(false);
    router.push('/fr');
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    register,
    logout
  };
}
