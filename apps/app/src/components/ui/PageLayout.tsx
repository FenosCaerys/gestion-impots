'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { SidebarProvider, useSidebar } from './SidebarProvider';

type TabType = 'accueil' | 'historique' | 'simulateur' | 'moi';

interface PageLayoutProps {
  children: ReactNode;
  activeTab: TabType;
}

function PageLayoutContent({ children, activeTab }: PageLayoutProps) {
  const { sidebarWidth } = useSidebar();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Sidebar Desktop */}
      <Sidebar activeTab={activeTab} />
      
      {/* Main Content */}
      <div 
        className="flex-1 transition-all duration-300"
        style={{ 
          marginLeft: isDesktop ? `${sidebarWidth}px` : '0px' 
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function PageLayout({ children, activeTab }: PageLayoutProps) {
  return (
    <SidebarProvider>
      <PageLayoutContent activeTab={activeTab}>
        {children}
      </PageLayoutContent>
    </SidebarProvider>
  );
}
