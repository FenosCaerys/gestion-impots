'use client';

import { AdminSidebar } from '@/components/ui/AdminSidebar';
import { AdminHeader } from '@/components/ui/AdminHeader';
import { SidebarProvider } from '@/components/ui/SidebarProvider';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Extraire l'onglet actif depuis l'URL
  const getActiveTab = () => {
    if (pathname.includes('/admin/tableau-de-bord')) return 'tableau-de-bord';
    if (pathname.includes('/admin/parcelles')) return 'parcelles';
    if (pathname.includes('/admin/cartographie')) return 'cartographie';
    if (pathname.includes('/admin/proprietaires')) return 'proprietaires';
    if (pathname.includes('/admin/taxes-simulations')) return 'taxes-simulations';
    if (pathname.includes('/admin/aide')) return 'aide';
    if (pathname.includes('/admin/parametres')) return 'parametres';
    return 'tableau-de-bord'; // Par défaut
  };

  return (
    <SidebarProvider>
      {({ isCollapsed }) => (
        <div className="min-h-screen bg-gray-50">
          <AdminSidebar activeTab={getActiveTab()} />
          <div className={`transition-all duration-300 ${isCollapsed ? 'lg:ml-24' : 'lg:ml-64'}`}>
            <AdminHeader />
            <main>
              <div className="p-6">
                {children}
              </div>
            </main>
          </div>
        </div>
      )}
    </SidebarProvider>
  );
}
