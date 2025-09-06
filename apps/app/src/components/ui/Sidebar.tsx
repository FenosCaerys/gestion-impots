'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Home, Clock, Calculator, User } from 'lucide-react';
import { useSidebar } from './SidebarProvider';

type TabType = 'accueil' | 'historique' | 'simulateur' | 'moi';

interface SidebarProps {
  activeTab: TabType;
}

export function Sidebar({ activeTab }: SidebarProps) {
  const router = useRouter();
  const { isCollapsed, toggleSidebar } = useSidebar();

  const handleTabChange = (tab: TabType) => {
    const routes = {
      accueil: '/fr/accueil',
      historique: '/fr/historique', 
      simulateur: '/fr/simulateur',
      moi: '/fr/moi'
    };
    router.push(routes[tab]);
  };

  const navItems = [
    {
      id: 'accueil' as TabType,
      label: 'Accueil',
      icon: Home,
    },
    {
      id: 'historique' as TabType,
      label: 'Historique',
      icon: Clock,
    },
    {
      id: 'simulateur' as TabType,
      label: 'Simulateur',
      icon: Calculator,
    },
    {
      id: 'moi' as TabType,
      label: 'Profil',
      icon: User,
    },
  ];

  return (
    <div 
      className={`hidden lg:block fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
        isCollapsed ? 'w-24' : 'w-64'
      }`}
    >
      <div className="p-6">
        {/* Header avec bouton toggle */}
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-black">Gestion Impôts</h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors cursor-pointer ${
                  isActive 
                    ? 'bg-orange-50 text-orange-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <span className="truncate">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

