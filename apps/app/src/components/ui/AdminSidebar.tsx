'use client';

import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  ChevronRight, 
  BarChart3, 
  MapPin, 
  Map, 
  Users, 
  Calculator, 
  HelpCircle, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { useSidebar } from './SidebarProvider';

type AdminTabType = 'tableau-de-bord' | 'parcelles' | 'cartographie' | 'proprietaires' | 'taxes-simulations' | 'aide' | 'parametres';

interface AdminSidebarProps {
  activeTab: AdminTabType;
}

export function AdminSidebar({ activeTab }: AdminSidebarProps) {
  const router = useRouter();
  const { isCollapsed, toggleSidebar } = useSidebar();

  const handleTabChange = (tab: AdminTabType) => {
    const routes = {
      'tableau-de-bord': '/fr/admin/tableau-de-bord',
      'parcelles': '/fr/admin/parcelles',
      'cartographie': '/fr/admin/cartographie',
      'proprietaires': '/fr/admin/proprietaires',
      'taxes-simulations': '/fr/admin/taxes-simulations',
      'aide': '/fr/admin/aide',
      'parametres': '/fr/admin/parametres'
    };
    router.push(routes[tab]);
  };

  const handleLogout = () => {
    // TODO: Implémenter la logique de déconnexion
    router.push('/fr/auth');
  };

  const navItems = [
    {
      id: 'tableau-de-bord' as AdminTabType,
      label: 'Tableau de bord',
      icon: BarChart3,
    },
    {
      id: 'parcelles' as AdminTabType,
      label: 'Parcelles',
      icon: MapPin,
    },
    {
      id: 'cartographie' as AdminTabType,
      label: 'Cartographie',
      icon: Map,
    },
    {
      id: 'proprietaires' as AdminTabType,
      label: 'Propriétaires',
      icon: Users,
    },
    {
      id: 'taxes-simulations' as AdminTabType,
      label: 'Taxes & Simulations',
      icon: Calculator,
    },
    {
      id: 'aide' as AdminTabType,
      label: 'Aide',
      icon: HelpCircle,
    },
  ];

  const bottomNavItems = [
    {
      id: 'parametres' as AdminTabType,
      label: 'Paramètres',
      icon: Settings,
    },
  ];

  return (
    <div 
      className={`hidden lg:block fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
        isCollapsed ? 'w-24' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header avec bouton toggle */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            {!isCollapsed && (
              <h1 className="text-xl font-bold text-black">Admin Panel</h1>
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
          {!isCollapsed && (
            <p className="text-sm text-gray-500">Gestion des impôts</p>
          )}
        </div>
        
        {/* Navigation principale */}
        <div className="flex-1 p-6">
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

        {/* Navigation du bas */}
        <div className="p-6 border-t border-gray-100">
          <nav className="space-y-2">
            {bottomNavItems.map((item) => {
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
            
            {/* Bouton de déconnexion */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors cursor-pointer text-red-600 hover:bg-red-50"
              title={isCollapsed ? 'Déconnexion' : undefined}
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="truncate">Déconnexion</span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
